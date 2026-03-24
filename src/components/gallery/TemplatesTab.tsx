import type { Prototype } from "@/lib/prototype-types";
import { TemplateRow } from "./TemplateRow";

interface TemplatesTabProps {
  templates: Prototype[];
  searchQuery: string;
}

export function TemplatesTab({ templates, searchQuery }: TemplatesTabProps) {
  const filtered = searchQuery
    ? templates.filter(
        (t) =>
          t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.description.toLowerCase().includes(searchQuery.toLowerCase()),
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
        <TemplateRow key={t.slug} prototype={t} />
      ))}
    </div>
  );
}
