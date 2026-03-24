"use client";

import type { ReactNode } from "react";

interface MdlCardProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export function MdlCard({ title, description, children, onClick }: MdlCardProps) {
  const Tag = onClick ? "button" : "div";

  return (
    <Tag
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: 16,
        borderRadius: 12,
        border: "1px solid var(--color-enterprise-border-natural)",
        backgroundColor: "var(--color-enterprise-surface-primary)",
        textAlign: "left",
        cursor: onClick ? "pointer" : "default",
        width: "100%",
        transition: "border-color 0.15s",
      }}
    >
      {title && (
        <h3
          style={{
            fontSize: 16,
            fontWeight: 600,
            lineHeight: 1.5,
            color: "var(--color-enterprise-text-primary)",
            fontFamily: "var(--font-family-sans)",
            margin: 0,
          }}
        >
          {title}
        </h3>
      )}
      {description && (
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.5,
            color: "var(--color-enterprise-text-secondary)",
            fontFamily: "var(--font-family-sans)",
            margin: 0,
          }}
        >
          {description}
        </p>
      )}
      {children}
    </Tag>
  );
}
