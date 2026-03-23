"use client";

interface FreyaButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  fullWidth?: boolean;
  onClick?: () => void;
}

export function FreyaButton({
  children,
  variant = "primary",
  size = "md",
  fullWidth = true,
  onClick,
}: FreyaButtonProps) {
  const isPrimary = variant === "primary";
  return (
    <button
      onClick={onClick}
      className="font-medium transition-colors"
      style={{
        width: fullWidth ? "100%" : "auto",
        padding: size === "md" ? "12px 24px" : "8px 16px",
        fontSize: size === "md" ? "16px" : "14px",
        borderRadius: "var(--radius-full, 9999px)",
        backgroundColor: isPrimary
          ? "var(--color-b2c-fill-button-primary)"
          : "var(--color-b2c-fill-button-secondary)",
        color: isPrimary
          ? "var(--color-b2c-text-button-primary)"
          : "var(--color-b2c-text-button-secondary)",
        border: isPrimary
          ? "1px solid transparent"
          : "1px solid var(--color-b2c-border-brand)",
      }}
    >
      {children}
    </button>
  );
}
