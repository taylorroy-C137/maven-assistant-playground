"use client";

type Variant = "maven" | "success" | "warning" | "error" | "attention" | "neutral";

interface MdlBadgeProps {
  label: string;
  variant?: Variant;
}

const variantStyles: Record<Variant, { bg: string; color: string }> = {
  maven: {
    bg: "var(--color-enterprise-fill-accent-mint)",
    color: "var(--color-enterprise-text-accent-maven)",
  },
  success: {
    bg: "var(--color-enterprise-surface-success)",
    color: "var(--color-enterprise-text-success)",
  },
  warning: {
    bg: "var(--color-enterprise-surface-warning)",
    color: "var(--color-enterprise-text-warning)",
  },
  error: {
    bg: "var(--color-enterprise-surface-error)",
    color: "var(--color-enterprise-text-error)",
  },
  attention: {
    bg: "var(--color-enterprise-surface-attention)",
    color: "var(--color-enterprise-text-attention)",
  },
  neutral: {
    bg: "var(--color-enterprise-surface-tertiary)",
    color: "var(--color-enterprise-text-secondary)",
  },
};

export function MdlBadge({ label, variant = "neutral" }: MdlBadgeProps) {
  const { bg, color } = variantStyles[variant];

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "2px 8px",
        borderRadius: 4,
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 1.5,
        backgroundColor: bg,
        color,
        fontFamily: "var(--font-family-sans)",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}
