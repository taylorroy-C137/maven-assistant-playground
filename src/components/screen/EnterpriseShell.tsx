"use client";

interface EnterpriseShellProps {
  children: React.ReactNode;
}

export function EnterpriseShell({ children }: EnterpriseShellProps) {
  return (
    <div
      className="w-full h-full flex flex-col overflow-y-auto"
      style={{
        WebkitOverflowScrolling: "touch",
        backgroundColor: "var(--color-enterprise-surface-primary)",
        fontFamily: "var(--font-family-sans)",
        color: "var(--color-enterprise-text-primary)",
      }}
    >
      {children}
    </div>
  );
}
