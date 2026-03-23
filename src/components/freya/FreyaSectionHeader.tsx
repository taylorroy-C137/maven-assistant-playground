"use client";

import { Search } from "lucide-react";

interface FreyaSectionHeaderProps {
  title: string;
  action?: string;
  showSearch?: boolean;
}

export function FreyaSectionHeader({
  title,
  action,
  showSearch = false,
}: FreyaSectionHeaderProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <h3
        className="text-lg font-semibold"
        style={{ color: "var(--color-b2c-text-primary)" }}
      >
        {title}
      </h3>
      <div className="flex items-center gap-2">
        {action && (
          <span
            className="text-sm font-medium"
            style={{ color: "var(--color-b2c-text-link)" }}
          >
            {action}
          </span>
        )}
        {showSearch && (
          <Search
            className="w-5 h-5"
            style={{ color: "var(--color-b2c-text-secondary)" }}
          />
        )}
      </div>
    </div>
  );
}
