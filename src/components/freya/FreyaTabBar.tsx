"use client";

interface FreyaTabBarProps {
  tabs: string[];
  activeTab: string;
  onTabChange?: (tab: string) => void;
}

export function FreyaTabBar({ tabs, activeTab, onTabChange }: FreyaTabBarProps) {
  return (
    <div className="flex gap-2 px-4 py-3">
      {tabs.map((tab) => {
        const isActive = tab === activeTab;
        return (
          <button
            key={tab}
            onClick={() => onTabChange?.(tab)}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
            style={{
              backgroundColor: isActive
                ? "var(--color-b2c-fill-button-primary)"
                : "transparent",
              color: isActive
                ? "var(--color-b2c-text-button-primary)"
                : "var(--color-b2c-text-secondary)",
              border: isActive
                ? "1px solid transparent"
                : "1px solid var(--color-b2c-border-primary)",
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
