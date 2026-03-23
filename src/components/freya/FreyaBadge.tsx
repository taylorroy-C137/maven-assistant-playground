"use client";

type BadgeVariant = "maven" | "success" | "warning" | "error" | "neutral" | "accent";

interface FreyaBadgeProps {
  label: string;
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, { bg: string; color: string }> = {
  maven: { bg: "var(--color-b2c-fill-accent-mint)", color: "var(--color-b2c-text-accent-maven)" },
  success: { bg: "var(--color-b2c-surface-success)", color: "var(--color-b2c-text-success)" },
  warning: { bg: "var(--color-b2c-surface-warning)", color: "var(--color-b2c-text-warning)" },
  error: { bg: "var(--color-b2c-surface-error)", color: "var(--color-b2c-text-error)" },
  neutral: { bg: "var(--color-b2c-fill-button-subtle)", color: "var(--color-b2c-text-secondary)" },
  accent: { bg: "var(--color-b2c-fill-accent-coconut)", color: "var(--color-b2c-text-secondary)" },
};

export function FreyaBadge({ label, variant = "maven" }: FreyaBadgeProps) {
  const style = variantStyles[variant];
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
      style={{ backgroundColor: style.bg, color: style.color }}
    >
      {label}
    </span>
  );
}
