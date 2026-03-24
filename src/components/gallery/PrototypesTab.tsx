import type { Prototype } from "@/lib/prototype-types";
import { groupByMonth } from "@/lib/prototype-registry";
import { PrototypeRow } from "./PrototypeRow";

interface PrototypesTabProps {
  prototypes: Prototype[];
  searchQuery: string;
}

export function PrototypesTab({ prototypes, searchQuery }: PrototypesTabProps) {
  const filtered = searchQuery
    ? prototypes.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.designer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : prototypes;

  const groups = groupByMonth(filtered);

  if (filtered.length === 0) {
    return (
      <div className="px-6 py-12 text-center text-maven-text-muted text-sm">
        {searchQuery
          ? "No prototypes match your search."
          : "No prototypes yet. Create one to get started."}
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
          {group.items.map((proto) => (
            <PrototypeRow key={`${proto.designer}-${proto.slug}`} prototype={proto} />
          ))}
        </div>
      ))}
    </div>
  );
}
