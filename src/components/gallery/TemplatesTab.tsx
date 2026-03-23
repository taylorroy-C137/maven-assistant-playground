import type { Scenario } from "@/lib/scenario-types";
import { TemplateRow } from "./TemplateRow";

interface TemplatesTabProps {
  templates: Scenario[];
  searchQuery: string;
}

export function TemplatesTab({ templates, searchQuery }: TemplatesTabProps) {
  const filtered = searchQuery
    ? templates.filter(
        (s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : templates;

  if (filtered.length === 0) {
    return (
      <div className="px-6 py-12 text-center text-maven-text-muted text-sm">
        No templates match your search.
      </div>
    );
  }

  return (
    <div className="divide-y divide-maven-border">
      {filtered.map((t) => (
        <TemplateRow key={t.id} scenario={t} />
      ))}
    </div>
  );
}
