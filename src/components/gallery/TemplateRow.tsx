import Link from "next/link";
import type { Scenario } from "@/lib/scenario-types";

export function TemplateRow({ scenario }: { scenario: Scenario }) {
  return (
    <div className="flex items-center justify-between px-6 py-3 hover:bg-maven-bg/50 transition-colors">
      <div className="flex items-baseline gap-3">
        <span className="text-sm font-medium text-maven-text">
          {scenario.title}
        </span>
        <span className="text-sm text-maven-text-muted">
          {scenario.description}
        </span>
      </div>
      <Link
        href={`/prototype/${scenario.id}`}
        className="flex-shrink-0 px-3 py-1.5 text-sm text-maven-text-secondary border border-maven-border rounded-lg hover:bg-maven-bg transition-colors"
      >
        Duplicate
      </Link>
    </div>
  );
}
