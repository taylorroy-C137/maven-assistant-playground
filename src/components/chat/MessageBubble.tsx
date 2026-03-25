"use client";

import { useState } from "react";
import type { MessageRole, Attachment } from "@/lib/scenario-types";
import { ThumbsUp, ThumbsDown, RotateCcw, Paperclip } from "lucide-react";

interface MessageBubbleProps {
  role: MessageRole;
  text: string;
  author?: string;
  eyebrow?: string;
  timestamp?: string;
  generating?: boolean;
  sendFailure?: boolean;
  attachments?: Attachment[];
  showFeedback?: boolean;
  onRetry?: () => void;
}

function ThinkingText() {
  return (
    <span
      className="text-[16px] font-medium select-none"
      style={{
        background:
          "linear-gradient(90deg, #191817 0%, #191817 40%, transparent 80%)",
        backgroundSize: "200% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: "shimmer 2.4s ease-in-out infinite",
      }}
    >
      Thinking...
    </span>
  );
}

function MedicalTeamAvatar({ author }: { author?: string }) {
  const initials =
    author === "medical-team"
      ? "MT"
      : (author?.[0] ?? "MT").toUpperCase();

  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-maven-teal flex items-center justify-center flex-shrink-0">
        <span className="text-white text-[10px] font-medium">{initials}</span>
      </div>
      {author && (
        <span className="text-xs font-medium text-maven-text-secondary">
          {author}
        </span>
      )}
    </div>
  );
}

export function MessageBubble({
  role,
  text,
  author,
  eyebrow,
  timestamp,
  generating,
  sendFailure,
  attachments,
  showFeedback = true,
  onRetry,
}: MessageBubbleProps) {
  const [feedback, setFeedback] = useState<"up" | "down" | null>(null);
  const isUser = role === "user";
  const isMedicalTeam = role === "medical-team";

  return (
    <div className={`flex flex-col gap-1 ${isUser ? "items-end" : "items-start"}`}>
      {/* Timestamp above user messages, right-aligned */}
      {isUser && timestamp && (
        <span className="text-[12px] leading-5 text-maven-text-tertiary">
          {timestamp}
        </span>
      )}

      {/* Medical-team avatar + author (preserved) */}
      {isMedicalTeam && <MedicalTeamAvatar author={author} />}

      {eyebrow && !isUser && (
        <span
          className={`text-[11px] font-medium text-maven-teal uppercase tracking-wide ${isMedicalTeam ? "ml-8" : ""}`}
        >
          {eyebrow}
        </span>
      )}

      <div
        className={`rounded-2xl px-4 py-3 max-w-[85%] ${
          isUser
            ? "bg-white text-maven-text"
            : isMedicalTeam
              ? "ml-8"
              : ""
        } ${sendFailure ? "opacity-60" : ""}`}
      >
        {generating ? (
          <ThinkingText />
        ) : (
          <p className="text-[16px] leading-6 whitespace-pre-wrap">{text}</p>
        )}
      </div>

      {attachments && attachments.length > 0 && (
        <div className={`flex flex-wrap gap-2 ${isUser ? "justify-end" : isMedicalTeam ? "ml-8" : ""}`}>
          {attachments.map((att, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-maven-bg border border-maven-border rounded-lg px-3 py-2"
            >
              <Paperclip className="w-4 h-4 text-maven-text-tertiary" />
              <div>
                <span className="text-sm font-medium">{att.filename}</span>
                <span className="text-xs text-maven-text-tertiary ml-2 uppercase">
                  {att.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer: feedback for non-user, retry for failures */}
      <div
        className={`flex items-center gap-3 ${isUser ? "justify-end" : isMedicalTeam ? "ml-8" : ""}`}
      >
        {sendFailure && (
          <button
            onClick={onRetry}
            className="flex items-center gap-1 text-maven-error text-xs font-medium"
          >
            <RotateCcw className="w-3 h-3" /> Retry
          </button>
        )}

        {!isUser && showFeedback && !generating && !sendFailure && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFeedback("up")}
              className={`p-1 rounded ${
                feedback === "up"
                  ? "text-maven-teal"
                  : "text-maven-text-muted hover:text-maven-text-tertiary"
              }`}
            >
              <ThumbsUp className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setFeedback("down")}
              className={`p-1 rounded ${
                feedback === "down"
                  ? "text-maven-error"
                  : "text-maven-text-muted hover:text-maven-text-tertiary"
              }`}
            >
              <ThumbsDown className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
