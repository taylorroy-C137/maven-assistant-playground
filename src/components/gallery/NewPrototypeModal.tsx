"use client";

import { useState } from "react";
import { X, Copy, Check, ArrowRight } from "lucide-react";

interface NewPrototypeModalProps {
  onClose: () => void;
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function buildPrompt(name: string, question: string): string {
  const slug = toSlug(name);
  return `Using the existing Maven Assistant shell, create a new Consumer scenario called "${name}". The member's opening question is:

"${question}"

Reuse all existing chat components and styling. Do not invent a new layout.

Create a scenario file at src/scenarios/${slug}.ts and register it in src/lib/scenario-registry.ts with isTemplate: false.

The scenario should include:
- Turn 1: the member's opening question above (role: "user")
- Turn 2: a realistic, empathetic Maven Assistant first-pass response (role: "agent")
- A "Clarifying question" variant where the assistant asks for more context before answering
- A "Source cards" variant that includes a SmartCard (appointment or booking kind)
- An "Escalation" variant if the question has clinical urgency, using EscalationCard
- Follow-up chips on the last agent turn (3–5 relevant next questions or actions)

Match the tone, format, and clinical depth of existing health scenarios in src/scenarios/health-scenarios.ts.`;
}

export function NewPrototypeModal({ onClose }: NewPrototypeModalProps) {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [step, setStep] = useState<"form" | "prompt">("form");
  const [copied, setCopied] = useState(false);

  const canGenerate = name.trim().length > 0 && question.trim().length > 0;
  const prompt = buildPrompt(name.trim(), question.trim());

  const handleGenerate = () => setStep("prompt");

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-maven-border">
          <h2 className="text-base font-semibold text-maven-text">
            {step === "form" ? "New Prototype" : "Your Cursor Prompt"}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-maven-bg transition-colors"
          >
            <X className="w-4 h-4 text-maven-text-secondary" />
          </button>
        </div>

        {step === "form" ? (
          <div className="px-6 py-5 space-y-4">
            <p className="text-sm text-maven-text-secondary">
              Describe your scenario. We&apos;ll generate a Cursor prompt you can
              paste directly into Cursor Agent to build it.
            </p>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-maven-text">
                Scenario name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. GLP-1 + fertility treatment"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-maven-border outline-none focus:border-maven-teal/50 focus:ring-1 focus:ring-maven-teal/20 transition-colors placeholder:text-maven-text-muted"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-maven-text">
                Member&apos;s opening question
              </label>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="e.g. i want to do IVF but i'm also on a glp-1. do i need to stop taking it? will it affect my fertility treatment?"
                rows={4}
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-maven-border outline-none focus:border-maven-teal/50 focus:ring-1 focus:ring-maven-teal/20 transition-colors placeholder:text-maven-text-muted resize-none"
              />
              <p className="text-xs text-maven-text-muted">
                Write it casually, the way a real member would actually type it.
              </p>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="text-xs text-maven-text-muted">
                File will be created at{" "}
                <span className="font-mono">
                  src/scenarios/
                  {name.trim() ? toSlug(name.trim()) : "your-scenario"}.ts
                </span>
              </div>
              <button
                onClick={handleGenerate}
                disabled={!canGenerate}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-maven-teal rounded-lg disabled:opacity-30 hover:bg-maven-teal-dark transition-colors"
              >
                Generate prompt <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="px-6 py-5 space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-maven-highlight border border-maven-teal/20">
              <div className="w-5 h-5 rounded-full bg-maven-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-[10px] font-bold">1</span>
              </div>
              <p className="text-sm text-maven-teal-dark">
                Copy this prompt, open <strong>Cursor Agent</strong> (⌘+I or the chat panel), paste it, and hit send. Cursor will create the scenario file and register it automatically.
              </p>
            </div>

            <div className="relative">
              <pre className="text-xs text-maven-text-secondary bg-maven-bg border border-maven-border rounded-lg p-4 whitespace-pre-wrap font-mono leading-relaxed max-h-72 overflow-y-auto">
                {prompt}
              </pre>
              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md bg-white border border-maven-border text-maven-text-secondary hover:bg-maven-bg transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-maven-teal" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Copy
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={() => setStep("form")}
                className="px-4 py-2 text-sm text-maven-text-secondary border border-maven-border rounded-lg hover:bg-maven-bg transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleCopy}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-maven-teal rounded-lg hover:bg-maven-teal-dark transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" /> Copied to clipboard
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> Copy prompt
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
