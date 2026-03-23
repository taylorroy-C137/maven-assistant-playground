import type { Scenario } from "@/lib/scenario-types";
import { groupByMonth } from "@/lib/scenario-registry";
import { PrototypeRow } from "./PrototypeRow";

interface PrototypesTabProps {
  scenarios: Scenario[];
  searchQuery: string;
}

export function PrototypesTab({ scenarios, searchQuery }: PrototypesTabProps) {
  const filtered = searchQuery
    ? scenarios.filter(
        (s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : scenarios;

  const groups = groupByMonth(filtered);

  if (filtered.length === 0) {
    return (
      <div className="px-6 py-12 text-center text-maven-text-muted text-sm">
        {searchQuery
          ? "No prototypes match your search."
          : "No prototypes yet. Duplicate a template to get started."}
      </div>
    );
  }

  return (
    <div className="divide-y divide-maven-border">
      {groups.map((group) => (
        <div key={group.label}>
          <div className="px-6 py-3">
            <span className="text-xs font-medium text-maven-text-muted uppercase tracking-wide">
              {group.label}
            </span>
          </div>
          {group.items.map((scenario) => (
            <PrototypeRow key={scenario.id} scenario={scenario} />
          ))}
        </div>
      ))}
    </div>
  );
}
