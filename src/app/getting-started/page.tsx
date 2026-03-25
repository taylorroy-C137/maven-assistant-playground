"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Copy, ExternalLink } from "lucide-react";
import { MavenOrb } from "@/components/chat/MavenOrb";

function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 bg-gray-900 text-gray-100 rounded-lg px-4 py-3 font-mono text-sm">
      <code className="flex-1 select-all">{command}</code>
      <button
        onClick={handleCopy}
        className="flex-shrink-0 p-1.5 rounded hover:bg-gray-700 transition-colors"
        aria-label="Copy command"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4 text-gray-400" />
        )}
      </button>
    </div>
  );
}

function AgentPrompt({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="flex items-start gap-3 rounded-lg px-4 py-3 text-sm cursor-pointer hover:opacity-90 transition-opacity"
      style={{ backgroundColor: "var(--color-maven-highlight)" }}
      onClick={handleCopy}
    >
      <span className="text-maven-text-secondary mt-0.5 select-none">&ldquo;</span>
      <p className="flex-1 text-maven-text italic select-all">{prompt}</p>
      <button
        className="flex-shrink-0 p-1 rounded"
        aria-label="Copy prompt"
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-maven-teal" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-maven-text-muted" />
        )}
      </button>
    </div>
  );
}

function PhaseCard({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-maven-border rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-8 h-8 rounded-full bg-maven-teal text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
          {number}
        </span>
        <h2 className="text-lg font-semibold text-maven-text">{title}</h2>
      </div>
      <div className="space-y-4 pl-11">{children}</div>
    </div>
  );
}

export default function GettingStartedPage() {
  return (
    <div className="min-h-dvh bg-white">
      <header className="border-b border-maven-border bg-white">
        <div className="max-w-2xl mx-auto px-6 py-5 flex items-center gap-3">
          <Link
            href="/"
            className="p-1.5 rounded-lg hover:bg-maven-bg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-maven-text-secondary" />
          </Link>
          <MavenOrb size={24} />
          <h1 className="text-lg font-semibold text-maven-text">
            Getting Started
          </h1>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-maven-text mb-3">
            Build your first prototype in 5 minutes
          </h1>
          <p className="text-base text-maven-text-secondary leading-relaxed">
            The Maven Prototype Playground lets you create and share interactive
            prototypes using AI. No coding experience needed — you describe what
            you want in plain English, and Cursor&apos;s AI agent builds it for you.
          </p>
        </div>

        {/* ── ONE-TIME SETUP ── */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-maven-teal">
              One-time setup
            </span>
            <span className="text-xs text-maven-text-muted">
              — you only do this once
            </span>
          </div>

          <div className="space-y-6">
            <PhaseCard number={1} title="Get the tools">
              <p className="text-sm text-maven-text-secondary">
                You need two free apps on your Mac. If you already have them,
                skip to Step 2.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-maven-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-maven-text-secondary">
                      a
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-maven-text">
                      Download Cursor
                    </p>
                    <p className="text-sm text-maven-text-secondary mt-0.5">
                      A code editor with a built-in AI agent. Download it, then
                      drag it into your Applications folder.
                    </p>
                    <a
                      href="https://www.cursor.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium mt-2"
                      style={{ color: "var(--color-maven-teal)" }}
                    >
                      cursor.com
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-maven-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-maven-text-secondary">
                      b
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-maven-text">
                      Download Node.js
                    </p>
                    <p className="text-sm text-maven-text-secondary mt-0.5">
                      Runs the playground on your computer. Click the LTS button
                      and run the installer.
                    </p>
                    <a
                      href="https://nodejs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium mt-2"
                      style={{ color: "var(--color-maven-teal)" }}
                    >
                      nodejs.org
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </PhaseCard>

            <PhaseCard number={2} title="Get the project">
              <p className="text-sm text-maven-text-secondary">
                Open Cursor, then open the <strong>Agent</strong> panel by
                pressing{" "}
                <kbd className="px-1.5 py-0.5 text-xs bg-maven-bg rounded border border-maven-border font-mono">
                  Cmd + L
                </kbd>
                . Copy and paste this prompt:
              </p>

              <AgentPrompt prompt="Clone https://github.com/taylorroy-C137/maven-assistant-playground.git and install the dependencies" />

              <p className="text-sm text-maven-text-secondary">
                The agent will run the commands for you. If anything goes wrong
                (permissions, missing tools), it will diagnose the issue and walk
                you through fixing it.
              </p>
            </PhaseCard>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="flex items-center gap-4 my-10">
          <div className="flex-1 border-t border-maven-border" />
          <span className="text-xs text-maven-text-muted whitespace-nowrap">
            Setup complete — everything below is your regular workflow
          </span>
          <div className="flex-1 border-t border-maven-border" />
        </div>

        {/* ── EVERY TIME ── */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-maven-teal">
              Every time you prototype
            </span>
            <span className="text-xs text-maven-text-muted">
              — your regular workflow
            </span>
          </div>

          <div className="space-y-6">
            <PhaseCard number={3} title="Start the playground">
              <p className="text-sm text-maven-text-secondary">
                Open the Agent panel (
                <kbd className="px-1.5 py-0.5 text-xs bg-maven-bg rounded border border-maven-border font-mono">
                  Cmd + L
                </kbd>
                ) and ask:
              </p>
              <AgentPrompt prompt="Start the dev server" />
              <p className="text-sm text-maven-text-secondary">
                The agent will run{" "}
                <code className="font-mono text-xs">npm run dev</code> and tell
                you when{" "}
                <a
                  href="http://localhost:3000"
                  className="font-medium"
                  style={{ color: "var(--color-maven-teal)" }}
                >
                  localhost:3000
                </a>{" "}
                is ready. Open that link in your browser (Chrome or Cursor&apos;s
                built-in browser both work) to see the prototype gallery.
              </p>
            </PhaseCard>

            <PhaseCard number={4} title="Create a prototype">
              <p className="text-sm text-maven-text-secondary">
                In your browser, click the{" "}
                <strong>+ New</strong> button in the top-right corner of the
                gallery:
              </p>

              <ol className="text-sm text-maven-text-secondary space-y-1.5 list-decimal pl-4">
                <li>Pick your name from the Designer dropdown</li>
                <li>Choose a template (e.g. Consumer Home, Consumer Care)</li>
                <li>Click <strong>Create</strong></li>
              </ol>

              <p className="text-sm text-maven-text-secondary">
                You&apos;ll see a success screen. Click{" "}
                <strong>Open in Cursor</strong> to jump straight to your
                prototype files.
              </p>
            </PhaseCard>

            <PhaseCard number={5} title="Edit with AI">
              <p className="text-sm text-maven-text-secondary">
                This is the best part. You don&apos;t need to know how to code.
                Use the Agent panel for everything.
              </p>

              <div className="space-y-3">
                <div>
                  <p className="text-xs font-medium text-maven-text-tertiary uppercase tracking-wider mb-1.5">
                    Quick edits
                  </p>
                  <p className="text-sm text-maven-text-secondary mb-2">
                    Press{" "}
                    <kbd className="px-1.5 py-0.5 text-xs bg-maven-bg rounded border border-maven-border font-mono">
                      Cmd + I
                    </kbd>{" "}
                    on any file to make inline changes. Describe what you want:
                  </p>
                  <div className="space-y-2">
                    <AgentPrompt prompt="Change the welcome name from Kate to Sarah" />
                    <AgentPrompt prompt="Remove the support cards at the bottom" />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-maven-text-tertiary uppercase tracking-wider mb-1.5">
                    Bigger changes
                  </p>
                  <p className="text-sm text-maven-text-secondary mb-2">
                    Open the Agent panel (
                    <kbd className="px-1.5 py-0.5 text-xs bg-maven-bg rounded border border-maven-border font-mono">
                      Cmd + L
                    </kbd>
                    ) for multi-step or multi-file changes:
                  </p>
                  <div className="space-y-2">
                    <AgentPrompt prompt="Add a progress bar at 60% below the heading and a congratulations message when it reaches 100%" />
                    <AgentPrompt prompt="Create a new chat scenario where a member asks about postpartum anxiety" />
                  </div>
                </div>
              </div>

              <div className="bg-maven-highlight rounded-lg p-4">
                <p className="text-sm text-maven-text">
                  <strong>Tip:</strong> The AI already knows the Maven design
                  system. It will use the correct colors, fonts, and components
                  automatically. Save (
                  <kbd className="px-1.5 py-0.5 text-xs bg-maven-bg rounded border border-maven-border font-mono">
                    Cmd + S
                  </kbd>
                  ) and the browser refreshes automatically.
                </p>
              </div>
            </PhaseCard>
          </div>
        </div>

        {/* ── QUICK REFERENCE ── */}
        <div className="mt-10 border-t border-maven-border pt-8">
          <h2 className="text-base font-semibold text-maven-text mb-4">
            Quick reference
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-maven-bg rounded-lg p-4">
              <p className="font-medium text-maven-text mb-2">Shortcuts</p>
              <div className="space-y-1.5 text-maven-text-secondary">
                <p>
                  <kbd className="font-mono text-xs">Cmd + L</kbd> — open Agent
                  panel
                </p>
                <p>
                  <kbd className="font-mono text-xs">Cmd + I</kbd> — inline AI
                  edit
                </p>
                <p>
                  <kbd className="font-mono text-xs">Cmd + S</kbd> — save file
                </p>
              </div>
            </div>
            <div className="bg-maven-bg rounded-lg p-4">
              <p className="font-medium text-maven-text mb-2">Links</p>
              <div className="space-y-1.5 text-maven-text-secondary">
                <p>
                  <a
                    href="http://localhost:3000"
                    className="font-mono text-xs"
                    style={{ color: "var(--color-maven-teal)" }}
                  >
                    localhost:3000
                  </a>{" "}
                  — local playground
                </p>
                <p>
                  <a
                    href="https://maven-assistant-playground.vercel.app"
                    className="font-mono text-xs"
                    style={{ color: "var(--color-maven-teal)" }}
                  >
                    vercel.app
                  </a>{" "}
                  — live site
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── TROUBLESHOOTING ── */}
        <div className="mt-10 border-t border-maven-border pt-8 pb-4">
          <h2 className="text-base font-semibold text-maven-text mb-3">
            Troubleshooting
          </h2>
          <p className="text-sm text-maven-text-secondary mb-4">
            If something goes wrong, describe the problem to the Agent (
            <kbd className="px-1.5 py-0.5 text-xs bg-maven-bg rounded border border-maven-border font-mono">
              Cmd + L
            </kbd>
            ). It can diagnose and fix most issues automatically. Common ones:
          </p>
          <div className="space-y-3 text-sm text-maven-text-secondary">
            <p>
              <strong className="text-maven-text">
                &ldquo;command not found&rdquo; errors
              </strong>{" "}
              — Tell the agent. It will identify what&apos;s missing (Node.js, Git, Xcode tools) and walk you through installing it.
            </p>
            <p>
              <strong className="text-maven-text">Blank page</strong> — Ask the
              agent to restart the dev server.
            </p>
            <p>
              <strong className="text-maven-text">Changes not showing</strong>{" "}
              — Save the file (Cmd + S) and refresh the browser.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
