"use client";

import { Clock } from "lucide-react";
import { FreyaBadge } from "./FreyaBadge";

interface FreyaContentCardProps {
  image?: string;
  badge?: string;
  badgeVariant?: "maven" | "success" | "warning" | "error" | "neutral" | "accent";
  subjectTag?: string;
  title: string;
  timeLabel?: string;
}

export function FreyaContentCard({
  image,
  badge,
  badgeVariant = "maven",
  subjectTag,
  title,
  timeLabel,
}: FreyaContentCardProps) {
  return (
    <div
      className="rounded-xl overflow-hidden flex-shrink-0"
      style={{
        width: 200,
        backgroundColor: "var(--color-b2c-surface-primary)",
        border: "1px solid var(--color-b2c-border-disabled)",
      }}
    >
      <div className="relative h-28 overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(135deg, var(--color-b2c-surface-secondary) 0%, var(--color-b2c-surface-tertiary) 100%)",
            }}
          />
        )}
        {badge && (
          <div className="absolute top-2 right-2">
            <FreyaBadge label={badge} variant={badgeVariant} />
          </div>
        )}
      </div>
      <div className="p-3 flex flex-col gap-1.5">
        {subjectTag && (
          <span
            className="text-[10px] font-medium uppercase tracking-wider"
            style={{ color: "var(--color-b2c-text-tertiary)" }}
          >
            {subjectTag}
          </span>
        )}
        <h4
          className="text-sm font-semibold leading-snug line-clamp-2"
          style={{ color: "var(--color-b2c-text-primary)" }}
        >
          {title}
        </h4>
        {timeLabel && (
          <div className="flex items-center gap-1 mt-1">
            <Clock
              className="w-3 h-3"
              style={{ color: "var(--color-b2c-text-tertiary)" }}
            />
            <span
              className="text-xs"
              style={{ color: "var(--color-b2c-text-tertiary)" }}
            >
              {timeLabel}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
