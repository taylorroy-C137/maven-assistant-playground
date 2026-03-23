"use client";

import { useState } from "react";
import { Send, Plus, X } from "lucide-react";
import { GlassLayer } from "./GlassLayer";

interface ComposerProps {
  onSend?: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function Composer({
  onSend,
  placeholder = "Ask Maven anything…",
  disabled,
}: ComposerProps) {
  const [text, setText] = useState("");
  const [showAttach, setShowAttach] = useState(false);

  const handleSend = () => {
    if (!text.trim() || disabled) return;
    onSend?.(text.trim());
    setText("");
  };

  return (
    <GlassLayer className="rounded-t-2xl px-3 py-3 border-t border-white/20">
      {showAttach && (
        <div className="flex items-center justify-between px-2 py-2 mb-2 rounded-lg bg-maven-bg">
          <span className="text-sm text-maven-text-secondary">
            Add photo, file, or lab results
          </span>
          <button onClick={() => setShowAttach(false)}>
            <X className="w-5 h-5 text-maven-text-tertiary" />
          </button>
        </div>
      )}

      <div className="flex items-end gap-2">
        <button
          onClick={() => setShowAttach(!showAttach)}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-maven-bg flex items-center justify-center text-maven-text-secondary hover:bg-maven-border transition-colors"
        >
          <Plus className="w-5 h-5" />
        </button>

        <div className="flex-1 bg-white/60 rounded-2xl border border-maven-border px-4 py-2 min-h-[40px] flex items-center">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder={placeholder}
            rows={1}
            disabled={disabled}
            className="w-full bg-transparent text-[16px] leading-6 text-maven-text placeholder:text-maven-text-muted resize-none outline-none"
          />
        </div>

        <button
          onClick={handleSend}
          disabled={!text.trim() || disabled}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-maven-teal flex items-center justify-center text-white disabled:opacity-30 transition-opacity"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </GlassLayer>
  );
}
