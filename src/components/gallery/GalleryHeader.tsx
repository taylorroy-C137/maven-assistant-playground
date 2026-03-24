"use client";

import Link from "next/link";
import { Search, Link2, Plus, BookOpen } from "lucide-react";
import { MavenOrb } from "@/components/chat/MavenOrb";

interface GalleryHeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onNew: () => void;
}

const tabs = ["Prototypes", "Templates", "Design System"];

export function GalleryHeader({
  searchQuery,
  onSearchChange,
  activeTab,
  onTabChange,
  onNew,
}: GalleryHeaderProps) {
  return (
    <header className="border-b border-maven-border bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <MavenOrb size={28} />
            <h1 className="text-xl font-semibold text-maven-text">
              Maven Consumer Playground
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-maven-text-muted" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-9 pr-4 py-2 w-48 text-sm rounded-lg border border-maven-border bg-white placeholder:text-maven-text-muted outline-none focus:border-maven-teal/50 focus:ring-1 focus:ring-maven-teal/20 transition-colors"
              />
            </div>
            <Link
              href="/getting-started"
              className="flex items-center gap-2 px-3 py-2 text-sm text-maven-text-secondary border border-maven-border rounded-lg hover:bg-maven-bg transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Get Started
            </Link>
            <button
              onClick={onNew}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-maven-teal rounded-lg hover:bg-maven-teal-dark transition-colors"
            >
              <Plus className="w-4 h-4" />
              New
            </button>
          </div>
        </div>

        <nav className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-maven-text text-maven-text"
                  : "border-transparent text-maven-text-tertiary hover:text-maven-text-secondary"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
