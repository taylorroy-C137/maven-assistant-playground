"use client";

interface ChipActionProps {
  label: string;
  onClick?: () => void;
}

export function ChipAction({ label, onClick }: ChipActionProps) {
  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 px-4 py-2 rounded-full border border-maven-teal/30 bg-white/60 backdrop-blur-sm text-maven-teal text-sm font-medium hover:bg-maven-teal/5 active:bg-maven-teal/10 transition-colors"
    >
      {label}
    </button>
  );
}
