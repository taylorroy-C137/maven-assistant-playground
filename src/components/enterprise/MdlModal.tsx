"use client";

import type { ReactNode } from "react";
import { X } from "lucide-react";

interface MdlModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  actions?: ReactNode;
}

export function MdlModal({ title, children, onClose, actions }: MdlModalProps) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
      }}
    >
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "var(--color-enterprise-surface-overlay)",
        }}
      />
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 420,
          margin: "0 16px",
          borderRadius: 16,
          backgroundColor: "var(--color-enterprise-surface-primary)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          fontFamily: "var(--font-family-sans)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 20px",
            borderBottom: "1px solid var(--color-enterprise-border-natural)",
          }}
        >
          <h2
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "var(--color-enterprise-text-primary)",
              margin: 0,
            }}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
            }}
          >
            <X style={{ width: 18, height: 18, color: "var(--color-enterprise-icon-tertiary)" }} />
          </button>
        </div>
        <div style={{ padding: "20px" }}>{children}</div>
        {actions && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 8,
              padding: "12px 20px",
              borderTop: "1px solid var(--color-enterprise-border-natural)",
            }}
          >
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}
