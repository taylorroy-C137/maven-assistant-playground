"use client";

import { Phone, MessageSquare } from "lucide-react";
import { FreyaButton } from "./FreyaButton";

interface FreyaSupportCardProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  icon?: "phone" | "message";
}

const iconMap = {
  phone: Phone,
  message: MessageSquare,
};

export function FreyaSupportCard({
  title,
  subtitle,
  ctaLabel,
  icon = "phone",
}: FreyaSupportCardProps) {
  const Icon = iconMap[icon];
  return (
    <div
      className="rounded-xl p-4 flex flex-col gap-3"
      style={{
        backgroundColor: "var(--color-b2c-surface-primary)",
        border: "1px solid var(--color-b2c-border-primary)",
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4
            className="text-base font-semibold"
            style={{ color: "var(--color-b2c-text-primary)" }}
          >
            {title}
          </h4>
          <p
            className="text-sm mt-1 leading-relaxed"
            style={{ color: "var(--color-b2c-text-secondary)" }}
          >
            {subtitle}
          </p>
        </div>
        <Icon
          className="w-5 h-5 flex-shrink-0 mt-1"
          style={{ color: "var(--color-b2c-icon-secondary)" }}
        />
      </div>
      <FreyaButton variant="primary" size="sm">
        {ctaLabel}
      </FreyaButton>
    </div>
  );
}
