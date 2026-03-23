"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, ChevronRight } from "lucide-react";
import { FreyaBadge } from "./FreyaBadge";

interface AccordionItem {
  icon?: React.ReactNode;
  label: string;
  subLabel?: string;
  badge?: string;
  badgeVariant?: "maven" | "success" | "warning" | "error" | "neutral" | "accent";
}

interface FreyaAccordionProps {
  title: string;
  description?: string;
  items: AccordionItem[];
  defaultOpen?: boolean;
}

export function FreyaAccordion({
  title,
  description,
  items,
  defaultOpen = true,
}: FreyaAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        backgroundColor: "var(--color-b2c-surface-primary)",
        border: "1px solid var(--color-b2c-border-primary)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3.5 text-left"
      >
        <div className="flex-1">
          <h4
            className="text-base font-semibold"
            style={{ color: "var(--color-b2c-text-primary)" }}
          >
            {title}
          </h4>
          {description && (
            <p
              className="text-sm mt-0.5 leading-relaxed"
              style={{ color: "var(--color-b2c-text-secondary)" }}
            >
              {description}
            </p>
          )}
        </div>
        {open ? (
          <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: "var(--color-b2c-icon-secondary)" }} />
        ) : (
          <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: "var(--color-b2c-icon-secondary)" }} />
        )}
      </button>

      {open && (
        <div
          className="border-t"
          style={{ borderColor: "var(--color-b2c-border-disabled)" }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-3"
              style={{
                borderBottom:
                  i < items.length - 1
                    ? "1px solid var(--color-b2c-border-disabled)"
                    : "none",
              }}
            >
              {item.icon && (
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--color-b2c-surface-secondary)" }}
                >
                  {item.icon}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--color-b2c-text-primary)" }}
                >
                  {item.label}
                </p>
                {item.subLabel && (
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-b2c-text-secondary)" }}
                  >
                    {item.subLabel}
                  </p>
                )}
              </div>
              {item.badge && (
                <FreyaBadge label={item.badge} variant={item.badgeVariant ?? "maven"} />
              )}
              <ChevronRight
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "var(--color-b2c-text-tertiary)" }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
