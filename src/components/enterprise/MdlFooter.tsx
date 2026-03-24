"use client";

export function MdlFooter() {
  return (
    <footer
      style={{
        marginTop: "auto",
        padding: "16px",
        textAlign: "center",
        borderTop: "1px solid var(--color-enterprise-border-natural)",
        backgroundColor: "var(--color-enterprise-surface-primary)",
        fontFamily: "var(--font-family-sans)",
      }}
    >
      <span
        style={{
          fontSize: 12,
          color: "var(--color-enterprise-text-tertiary)",
        }}
      >
        Powered by Maven
      </span>
    </footer>
  );
}
