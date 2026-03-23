import type { Scenario } from "@/lib/scenario-types";
import type { Screen } from "@/lib/screen-types";
import { PrototypeRow } from "./PrototypeRow";

interface PrototypeEntry {
  id: string;
  title: string;
  description: string;
  label: string;
  createdAt: string;
  author?: string;
  kind: "scenario" | "screen";
}

interface PrototypesTabProps {
  scenarios: Scenario[];
  screens: Screen[];
  searchQuery: string;
}

function groupByLabel(entries: PrototypeEntry[]): { label: string; items: PrototypeEntry[] }[] {
  const groups = new Map<string, PrototypeEntry[]>();

  for (const entry of entries) {
    const label = entry.label || "Other";
    if (!groups.has(label)) groups.set(label, []);
    groups.get(label)!.push(entry);
  }

  for (const items of groups.values()) {
    items.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  }

  const ORDER = ["Consumer", "Maven Assistant", "Enterprise"];
  const sorted = Array.from(groups.entries()).sort(([a], [b]) => {
    const ai = ORDER.indexOf(a);
    const bi = ORDER.indexOf(b);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });

  return sorted.map(([label, items]) => ({ label, items }));
}

export function PrototypesTab({ scenarios, screens, searchQuery }: PrototypesTabProps) {
  const scenarioEntries: PrototypeEntry[] = scenarios.map((s) => ({
    id: s.id,
    title: s.title,
    description: s.description,
    label: s.label || "Maven Assistant",
    createdAt: s.createdAt,
    author: s.author,
    kind: "scenario",
  }));

  const screenEntries: PrototypeEntry[] = screens.map((s) => ({
    id: s.id,
    title: s.title,
    description: s.description,
    label: s.label,
    createdAt: s.createdAt,
    kind: "screen",
  }));

  const all = [...scenarioEntries, ...screenEntries];

  const filtered = searchQuery
    ? all.filter(
        (e) =>
          e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          e.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : all;

  const groups = groupByLabel(filtered);

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
          {group.items.map((entry) => (
            <PrototypeRow key={`${entry.kind}-${entry.id}`} entry={entry} />
          ))}
        </div>
      ))}
    </div>
  );
}
