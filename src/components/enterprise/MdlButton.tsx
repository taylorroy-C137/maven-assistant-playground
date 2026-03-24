"use client";

import type { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "destructive";
type Size = "sm" | "md" | "lg";

interface MdlButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const variantStyles: Record<Variant, React.CSSProperties> = {
  primary: {
    backgroundColor: "var(--color-enterprise-fill-button-primary)",
    color: "var(--color-enterprise-text-button-primary)",
    border: "1px solid var(--color-enterprise-fill-button-primary)",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "var(--color-enterprise-text-button-secondary)",
    border: "1px solid var(--color-enterprise-border-primary)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--color-enterprise-text-link)",
    border: "1px solid transparent",
  },
  destructive: {
    backgroundColor: "var(--color-enterprise-fill-button-destructive)",
    color: "var(--color-enterprise-text-button-primary)",
    border: "1px solid var(--color-enterprise-fill-button-destructive)",
  },
};

const sizeStyles: Record<Size, React.CSSProperties> = {
  sm: { padding: "6px 12px", fontSize: 14 },
  md: { padding: "10px 20px", fontSize: 16 },
  lg: { padding: "14px 24px", fontSize: 16 },
};

export function MdlButton({
  variant = "primary",
  size = "md",
  disabled,
  children,
  style,
  ...rest
}: MdlButtonProps) {
  const base: React.CSSProperties = {
    ...variantStyles[variant],
    ...sizeStyles[size],
    borderRadius: 8,
    fontWeight: 500,
    lineHeight: 1.5,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "opacity 0.15s",
    fontFamily: "var(--font-family-sans)",
    ...style,
  };

  return (
    <button style={base} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
