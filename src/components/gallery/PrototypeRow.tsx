import Link from "next/link";
import type { Scenario } from "@/lib/scenario-types";

export function PrototypeRow({ scenario }: { scenario: Scenario }) {
  return (
    <Link
      href={`/prototype/${scenario.id}`}
      className="flex items-center justify-between px-6 py-3 hover:bg-maven-bg/50 transition-colors group"
    >
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-maven-text group-hover:text-maven-teal transition-colors">
          {scenario.title}
        </span>
        <span className="text-sm text-maven-text-muted">{scenario.author}</span>
      </div>
    </Link>
  );
}
