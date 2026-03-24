"use client";

import type { ReactNode } from "react";

interface MdlHeaderProps {
  title?: string;
  actions?: ReactNode;
}

export function MdlHeader({ title = "Maven", actions }: MdlHeaderProps) {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px",
        borderBottom: "1px solid var(--color-enterprise-border-natural)",
        backgroundColor: "var(--color-enterprise-surface-primary)",
        fontFamily: "var(--font-family-sans)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="var(--color-enterprise-fill-accent-brand)" />
          <path
            d="M16 8C11.58 8 8 11.58 8 16s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14.4a6.4 6.4 0 110-12.8 6.4 6.4 0 010 12.8z"
            fill="var(--color-enterprise-fill-accent-mint)"
          />
        </svg>
        <span
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: "var(--color-enterprise-text-primary)",
          }}
        >
          {title}
        </span>
      </div>
      {actions && <div style={{ display: "flex", alignItems: "center", gap: 8 }}>{actions}</div>}
    </header>
  );
}
