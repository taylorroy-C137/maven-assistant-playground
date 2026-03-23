"use client";

import { ChipAction } from "./ChipAction";

interface PromptHScrollProps {
  chips: string[];
  onChipClick?: (chip: string) => void;
}

export function PromptHScroll({ chips, onChipClick }: PromptHScrollProps) {
  if (!chips.length) return null;

  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 py-2">
      {chips.map((chip) => (
        <ChipAction
          key={chip}
          label={chip}
          onClick={() => onChipClick?.(chip)}
        />
      ))}
    </div>
  );
}
