"use client";

import { useState, useEffect, useRef } from "react";
import type { Turn } from "@/lib/scenario-types";
import { GradientBackground } from "./GradientBackground";
import { MessageBubble } from "./MessageBubble";
import { PromptHScroll } from "./PromptHScroll";
import { SmartCard } from "./SmartCard";
import { EscalationCard } from "./EscalationCard";
import { Composer } from "./Composer";
import { ArrowLeft, SquarePen } from "lucide-react";
import Link from "next/link";

interface ChatShellProps {
  title: string;
  turns: Turn[];
  variant?: string;
  variants?: Record<string, Turn[]>;
  onVariantChange?: (variant: string) => void;
}

export function ChatShell({
  title,
  turns: initialTurns,
  variant,
  variants,
  onVariantChange,
}: ChatShellProps) {
  const [visibleTurns, setVisibleTurns] = useState<Turn[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeTurns = variant && variants?.[variant] ? variants[variant] : initialTurns;

  useEffect(() => {
    setVisibleTurns([]);
    setCurrentIndex(0);
  }, [variant]);

  useEffect(() => {
    if (currentIndex >= activeTurns.length) return;

    const turn = activeTurns[currentIndex];
    const delay = turn.generatingDelayMs ?? (turn.role === "agent" ? 1200 : 400);

    if (turn.role === "agent" && turn.generatingDelayMs !== 0) {
      setVisibleTurns((prev) => [
        ...prev,
        { ...turn, generating: true, text: "" },
      ]);

      const timer = setTimeout(() => {
        setVisibleTurns((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = turn;
          return updated;
        });
        setCurrentIndex((i) => i + 1);
      }, delay);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setVisibleTurns((prev) => [...prev, turn]);
      setCurrentIndex((i) => i + 1);
    }, turn.role === "user" ? 300 : delay);

    return () => clearTimeout(timer);
  }, [currentIndex, activeTurns]);

  const lastTurn = visibleTurns[visibleTurns.length - 1];
  const showChips = lastTurn?.chips && lastTurn.chips.length > 0 && !lastTurn.generating;

  const variantKeys = variants ? Object.keys(variants) : [];

  return (
    <div className="relative w-full h-full flex flex-col bg-maven-bg overflow-hidden">
      <GradientBackground />

      <div className="relative z-10 flex items-center px-4 py-3">
        <Link
          href="/"
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-maven-text" />
        </Link>
        <h1 className="flex-1 text-center text-sm font-semibold text-maven-text truncate">
          {title}
        </h1>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors">
          <SquarePen className="w-5 h-5 text-maven-text" />
        </button>
      </div>

      {variantKeys.length > 0 && (
        <div className="relative z-10 flex gap-1 px-4 py-2 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => onVariantChange?.("")}
            className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              !variant
                ? "bg-maven-teal text-white"
                : "bg-white/50 text-maven-text-secondary hover:bg-white/70"
            }`}
          >
            Default
          </button>
          {variantKeys.map((v) => (
            <button
              key={v}
              onClick={() => onVariantChange?.(v)}
              className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                variant === v
                  ? "bg-maven-teal text-white"
                  : "bg-white/50 text-maven-text-secondary hover:bg-white/70"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      )}

      <div
        ref={scrollRef}
        className="relative z-10 flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth"
      >
        {visibleTurns.map((turn, i) => (
          <div key={`${variant}-${i}`}>
            <MessageBubble
              role={turn.role}
              text={turn.text}
              author={turn.author}
              eyebrow={turn.eyebrow}
              timestamp={turn.timestamp}
              generating={turn.generating}
              sendFailure={turn.sendFailure}
              attachments={turn.attachments}
              showFeedback={turn.role === "agent" && !turn.generating}
            />

            {turn.cards?.map((card, ci) =>
              card.kind === "escalation" ? (
                <div key={ci} className="mt-3">
                  <EscalationCard title={card.title} message={card.subtitle} />
                </div>
              ) : (
                <div key={ci} className="mt-3">
                  <SmartCard card={card} />
                </div>
              ),
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {showChips && <PromptHScroll chips={lastTurn.chips!} />}
        <Composer disabled={currentIndex < activeTurns.length} />
      </div>
    </div>
  );
}
