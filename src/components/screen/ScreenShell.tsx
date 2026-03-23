"use client";

interface ScreenShellProps {
  children: React.ReactNode;
}

export function ScreenShell({ children }: ScreenShellProps) {
  return (
    <div
      className="w-full h-full flex flex-col overflow-y-auto"
      style={{
        WebkitOverflowScrolling: "touch",
        backgroundColor: "var(--color-b2c-surface-primary)",
        fontFamily: 'var(--font-family-sans)',
        color: "var(--color-b2c-text-primary)",
      }}
    >
      {children}
    </div>
  );
}
