import { ReactNode } from "react";

export function GlassLayer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`backdrop-blur-xl bg-white/70 border border-white/30 ${className}`}
    >
      {children}
    </div>
  );
}
