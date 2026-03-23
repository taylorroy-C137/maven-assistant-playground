import Link from "next/link";

interface PrototypeEntry {
  id: string;
  title: string;
  description: string;
  label: string;
  createdAt: string;
  author?: string;
  kind: "scenario" | "screen";
}

const labelColors: Record<string, { bg: string; color: string }> = {
  Consumer: { bg: "#9BF4C7", color: "#035748" },
  "Maven Assistant": { bg: "#E5F0FF", color: "#003D99" },
  Enterprise: { bg: "#F2F0EC", color: "#5C5954" },
};

export function PrototypeRow({ entry }: { entry: PrototypeEntry }) {
  const href =
    entry.kind === "screen"
      ? `/screen/${entry.id}`
      : `/prototype/${entry.id}`;

  const lc = labelColors[entry.label] ?? labelColors["Enterprise"];

  return (
    <Link
      href={href}
      className="flex items-center justify-between px-6 py-3 hover:bg-maven-bg/50 transition-colors group"
    >
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-maven-text group-hover:text-maven-teal transition-colors">
          {entry.title}
        </span>
        {entry.author && (
          <span className="text-sm text-maven-text-muted">{entry.author}</span>
        )}
      </div>
      <span
        className="text-[10px] font-medium px-2 py-0.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: lc.bg, color: lc.color }}
      >
        {entry.label}
      </span>
    </Link>
  );
}
