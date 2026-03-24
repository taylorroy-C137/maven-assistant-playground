"use client";

import { AlertCircle, CheckCircle, AlertTriangle, Info, X } from "lucide-react";

type Variant = "success" | "warning" | "error" | "info";

interface MdlAlertProps {
  variant?: Variant;
  title?: string;
  message: string;
  onDismiss?: () => void;
}

const config: Record<Variant, { bg: string; border: string; icon: string; Icon: typeof CheckCircle }> = {
  success: {
    bg: "var(--color-enterprise-surface-success)",
    border: "var(--color-enterprise-border-success)",
    icon: "var(--color-enterprise-icon-success)",
    Icon: CheckCircle,
  },
  warning: {
    bg: "var(--color-enterprise-surface-warning)",
    border: "var(--color-enterprise-border-warning)",
    icon: "var(--color-enterprise-icon-warning)",
    Icon: AlertTriangle,
  },
  error: {
    bg: "var(--color-enterprise-surface-error)",
    border: "var(--color-enterprise-border-error)",
    icon: "var(--color-enterprise-icon-error)",
    Icon: AlertCircle,
  },
  info: {
    bg: "var(--color-enterprise-surface-attention)",
    border: "var(--color-enterprise-border-attention)",
    icon: "var(--color-enterprise-icon-attention)",
    Icon: Info,
  },
};

export function MdlAlert({ variant = "info", title, message, onDismiss }: MdlAlertProps) {
  const { bg, border, icon, Icon } = config[variant];

  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        padding: 16,
        borderRadius: 8,
        backgroundColor: bg,
        borderLeft: `3px solid ${border}`,
        fontFamily: "var(--font-family-sans)",
      }}
    >
      <Icon style={{ width: 20, height: 20, color: icon, flexShrink: 0, marginTop: 2 }} />
      <div style={{ flex: 1 }}>
        {title && (
          <p
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "var(--color-enterprise-text-primary)",
              margin: 0,
              marginBottom: 2,
            }}
          >
            {title}
          </p>
        )}
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.5,
            color: "var(--color-enterprise-text-secondary)",
            margin: 0,
          }}
        >
          {message}
        </p>
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            flexShrink: 0,
          }}
        >
          <X style={{ width: 16, height: 16, color: "var(--color-enterprise-icon-tertiary)" }} />
        </button>
      )}
    </div>
  );
}
