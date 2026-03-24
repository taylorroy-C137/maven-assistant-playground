"use client";

import { useState, type InputHTMLAttributes } from "react";

interface MdlTextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
}

export function MdlTextInput({
  label,
  error,
  disabled,
  onFocus,
  onBlur,
  style,
  ...rest
}: MdlTextInputProps) {
  const [focused, setFocused] = useState(false);

  const borderColor = error
    ? "var(--color-enterprise-border-input-error)"
    : focused
      ? "var(--color-enterprise-border-input-focus)"
      : "var(--color-enterprise-border-input-empty)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {label && (
        <label
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "var(--color-enterprise-text-secondary)",
            fontFamily: "var(--font-family-sans)",
          }}
        >
          {label}
        </label>
      )}
      <input
        disabled={disabled}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          onBlur?.(e);
        }}
        style={{
          padding: "10px 12px",
          fontSize: 16,
          lineHeight: 1.5,
          borderRadius: 8,
          border: `1px solid ${borderColor}`,
          backgroundColor: disabled
            ? "var(--color-enterprise-fill-input-disabled)"
            : "var(--color-enterprise-fill-input-default)",
          color: "var(--color-enterprise-text-primary)",
          fontFamily: "var(--font-family-sans)",
          outline: "none",
          transition: "border-color 0.15s",
          opacity: disabled ? 0.6 : 1,
          width: "100%",
          ...style,
        }}
        {...rest}
      />
      {error && (
        <span
          style={{
            fontSize: 12,
            color: "var(--color-enterprise-text-error)",
            fontFamily: "var(--font-family-sans)",
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
}
