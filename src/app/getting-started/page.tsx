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
            The Maven Consumer Playground lets you create and share interactive
            prototypes using AI. No coding experience needed — you describe what
            you want in plain English, and Cursor builds it for you.
          </p>
        </div>

        <div className="space-y-6">
          <PhaseCard number={1} title="Get the tools">
            <p className="text-sm text-maven-text-secondary">
              You need two free apps on your Mac. If you already have them, skip
              to Phase 2.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-maven-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-maven-text-secondary">a</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-maven-text">
                    Download Cursor
                  </p>
                  <p className="text-sm text-maven-text-secondary mt-0.5">
                    A code editor with built-in AI. Download it, then drag it
                    into your Applications folder.
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
                  <span className="text-xs font-medium text-maven-text-secondary">b</span>
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
              Open Cursor, then open the built-in terminal:{" "}
              <strong>View &rarr; Terminal</strong> (or press{" "}
              <kbd className="px-1.5 py-0.5 text-xs bg-maven-bg rounded border border-maven-border font-mono">
                Ctrl + `
              </kbd>
              ). Paste these two commands one at a time:
            </p>

            <div className="space-y-3">
              <div>
                <p className="text-xs font-medium text-maven-text-tertiary uppercase tracking-wider mb-1.5">
                  Download the project
                </p>
                <CopyCommand command="git clone https://github.com/taylorroy-C137/maven-assistant-playground.git && cd maven-assistant-playground" />
              </div>
              <div>
                <p className="text-xs font-medium text-maven-text-tertiary uppercase tracking-wider mb-1.5">
                  Install dependencies
                </p>
                <CopyCommand command="npm install" />
              </div>
            </div>
          </PhaseCard>

          <PhaseCard number={3} title="Start building">
            <div className="space-y-3">
              <div>
                <p className="text-xs font-medium text-maven-text-tertiary uppercase tracking-wider mb-1.5">
                  Start the playground
                </p>
                <CopyCommand command="npm run dev" />
              </div>

              <p className="text-sm text-maven-text-secondary">
                Open{" "}
                <a
                  href="http://localhost:3000"
                  className="font-medium"
                  style={{ color: "var(--color-maven-teal)" }}
                >
                  localhost:3000
                </a>{" "}
                in Chrome. You&apos;ll see the prototype gallery.
              </p>

              <div className="bg-maven-bg rounded-lg p-4 space-y-2">
                <p className="text-sm font-medium text-maven-text">
                  To create a prototype:
                </p>
                <ol className="text-sm text-maven-text-secondary space-y-1.5 list-decimal pl-4">
                  <li>
                    Click <strong>New</strong> in the top-right corner
                  </li>
                  <li>Pick your name, choose a template, and click Create</li>
                  <li>
                    Click <strong>Open in Cursor</strong> to jump to your files
                  </li>
                </ol>
              </div>

              <div className="bg-maven-bg rounded-lg p-4 space-y-2">
                <p className="text-sm font-medium text-maven-text">
                  To edit with AI:
                </p>
                <ol className="text-sm text-maven-text-secondary space-y-1.5 list-decimal pl-4">
                  <li>
                    Open your{" "}
                    <code className="px-1 py-0.5 bg-white rounded border border-maven-border text-xs font-mono">
                      page.tsx
                    </code>{" "}
                    file in Cursor
                  </li>
                  <li>
                    Press{" "}
                    <kbd className="px-1.5 py-0.5 text-xs bg-white rounded border border-maven-border font-mono">
                      Cmd + I
                    </kbd>{" "}
                    to open the AI prompt
                  </li>
                  <li>
                    Type what you want:{" "}
                    <em>&ldquo;Change the welcome name to Sarah&rdquo;</em>
                  </li>
                  <li>
                    Save (
                    <kbd className="px-1.5 py-0.5 text-xs bg-white rounded border border-maven-border font-mono">
                      Cmd + S
                    </kbd>
                    ) and the browser refreshes automatically
                  </li>
                </ol>
              </div>
            </div>
          </PhaseCard>
        </div>

        <div className="mt-10 border-t border-maven-border pt-8">
          <h2 className="text-base font-semibold text-maven-text mb-4">
            Quick reference
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-maven-bg rounded-lg p-4">
              <p className="font-medium text-maven-text mb-2">Commands</p>
              <div className="space-y-1.5 text-maven-text-secondary">
                <p>
                  <code className="font-mono text-xs">npm run dev</code> — start
                  the playground
                </p>
                <p>
                  <kbd className="font-mono text-xs">Ctrl + C</kbd> — stop the
                  server
                </p>
                <p>
                  <kbd className="font-mono text-xs">Cmd + I</kbd> — open AI
                  prompt
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

        <div className="mt-10 border-t border-maven-border pt-8 pb-4">
          <h2 className="text-base font-semibold text-maven-text mb-3">
            Troubleshooting
          </h2>
          <div className="space-y-3 text-sm text-maven-text-secondary">
            <p>
              <strong className="text-maven-text">
                &ldquo;command not found: npm&rdquo;
              </strong>{" "}
              — Node.js isn&apos;t installed. Download it from{" "}
              <a
                href="https://nodejs.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-maven-teal)" }}
              >
                nodejs.org
              </a>
              .
            </p>
            <p>
              <strong className="text-maven-text">
                &ldquo;command not found: git&rdquo;
              </strong>{" "}
              — Open Cursor and it will prompt you to install developer tools.
              Click Install, then try again.
            </p>
            <p>
              <strong className="text-maven-text">Blank page</strong> — Make
              sure{" "}
              <code className="font-mono text-xs">npm run dev</code> is
              running. If it stopped, run it again.
            </p>
            <p>
              <strong className="text-maven-text">
                Changes not showing
              </strong>{" "}
              — Save the file (Cmd + S) and refresh the browser.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
