"use client";

import { FreyaBadge } from "./FreyaBadge";
import { FreyaButton } from "./FreyaButton";

interface FreyaTaskCardProps {
  overline?: string;
  badge?: string;
  badgeVariant?: "maven" | "success" | "warning" | "error" | "neutral" | "accent";
  title: string;
  description?: string;
  cta: string;
  secondaryCta?: string;
  onCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

export function FreyaTaskCard({
  overline,
  badge,
  badgeVariant = "maven",
  title,
  description,
  cta,
  secondaryCta,
  onCtaClick,
  onSecondaryCtaClick,
}: FreyaTaskCardProps) {
  return (
    <div
      className="rounded-xl p-4 flex flex-col gap-3"
      style={{
        backgroundColor: "var(--color-b2c-surface-primary)",
        border: "1px solid var(--color-b2c-border-primary)",
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1.5 flex-1">
          {overline && (
            <span
              className="text-[10px] font-medium uppercase tracking-wider"
              style={{ color: "var(--color-b2c-text-tertiary)" }}
            >
              {overline}
            </span>
          )}
          <h3
            className="text-base font-semibold leading-snug"
            style={{ color: "var(--color-b2c-text-primary)" }}
          >
            {title}
          </h3>
        </div>
        {badge && (
          <div className="flex-shrink-0 ml-3">
            <FreyaBadge label={badge} variant={badgeVariant} />
          </div>
        )}
      </div>
      {description && (
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--color-b2c-text-secondary)" }}
        >
          {description}
        </p>
      )}
      <div className="flex flex-col gap-2 mt-1">
        <FreyaButton variant="primary" onClick={onCtaClick}>
          {cta}
        </FreyaButton>
        {secondaryCta && (
          <FreyaButton variant="secondary" onClick={onSecondaryCtaClick}>
            {secondaryCta}
          </FreyaButton>
        )}
      </div>
    </div>
  );
}
