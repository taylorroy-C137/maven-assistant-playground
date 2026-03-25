"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

interface ComposerProps {
  onSend?: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function Composer({
  onSend,
  placeholder = "Ask away",
  disabled,
}: ComposerProps) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim() || disabled) return;
    onSend?.(text.trim());
    setText("");
  };

  return (
    <div className="px-3 pt-2 pb-3">
      <div className="flex items-center gap-2">
        <button className="flex-shrink-0 w-8 h-8 rounded-full border border-maven-border-strong flex items-center justify-center text-maven-text-secondary hover:bg-maven-border transition-colors">
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
      </div>

      <p className="text-[11px] text-maven-text-muted text-center mt-2">
        For informational purposes only. Not medical advice.
      </p>
    </div>
  );
}
