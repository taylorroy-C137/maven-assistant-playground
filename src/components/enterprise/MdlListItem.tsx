"use client";

import { ChevronRight } from "lucide-react";

interface MdlListItemProps {
  label: string;
  value?: string;
  onClick?: () => void;
}

export function MdlListItem({ label, value, onClick }: MdlListItemProps) {
  const Tag = onClick ? "button" : "div";

  return (
    <Tag
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px",
        borderBottom: "1px solid var(--color-enterprise-border-natural)",
        backgroundColor: "var(--color-enterprise-surface-primary)",
        cursor: onClick ? "pointer" : "default",
        textAlign: "left",
        width: "100%",
        fontFamily: "var(--font-family-sans)",
        border: "none",
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
        borderBottomColor: "var(--color-enterprise-border-natural)",
      }}
    >
      <span
        style={{
          fontSize: 16,
          color: "var(--color-enterprise-text-primary)",
        }}
      >
        {label}
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {value && (
          <span
            style={{
              fontSize: 14,
              color: "var(--color-enterprise-text-tertiary)",
            }}
          >
            {value}
          </span>
        )}
        {onClick && (
          <ChevronRight
            style={{
              width: 16,
              height: 16,
              color: "var(--color-enterprise-icon-tertiary)",
            }}
          />
        )}
      </div>
    </Tag>
  );
}
