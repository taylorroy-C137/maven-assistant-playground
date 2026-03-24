import Link from "next/link";
import type { Prototype } from "@/lib/prototype-types";

export function TemplateRow({ prototype }: { prototype: Prototype }) {
  return (
    <div className="flex items-center justify-between px-6 py-3 hover:bg-maven-bg/50 transition-colors">
      <div className="flex items-baseline gap-3">
        <span className="text-sm font-medium text-maven-text">
          {prototype.title}
        </span>
        <span className="text-sm text-maven-text-muted">
          {prototype.description}
        </span>
      </div>
      <Link
        href={`/${prototype.designer}/${prototype.slug}`}
        className="flex-shrink-0 px-3 py-1.5 text-sm text-maven-text-secondary border border-maven-border rounded-lg hover:bg-maven-bg transition-colors"
      >
        Preview
      </Link>
    </div>
  );
}
