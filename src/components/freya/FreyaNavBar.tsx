"use client";

import { Menu } from "lucide-react";

export function FreyaNavBar() {
  return (
    <div
      className="flex items-center justify-between px-4 py-3"
      style={{
        backgroundColor: "var(--color-b2c-surface-primary)",
        borderBottom: "1px solid var(--color-b2c-border-disabled)",
      }}
    >
      {/* Maven XX logomark */}
      <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
        <path
          d="M4 2L10 18M10 18L16 2M16 2L22 18M22 18L28 2"
          stroke="var(--color-b2c-fill-button-primary)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <button
        className="w-8 h-8 flex items-center justify-center rounded-full"
        style={{ color: "var(--color-b2c-icon-primary)" }}
      >
        <Menu className="w-5 h-5" />
      </button>
    </div>
  );
}
