import { MavenOrb } from "./MavenOrb";

interface ThreadRowProps {
  title: string;
  preview: string;
  time: string;
  unread?: boolean;
  avatarType?: "maven" | "provider";
  onClick?: () => void;
}

export function ThreadRow({
  title,
  preview,
  time,
  unread,
  avatarType = "maven",
  onClick,
}: ThreadRowProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-start gap-3 px-4 py-3 hover:bg-white/40 active:bg-white/60 transition-colors text-left"
    >
      {avatarType === "maven" ? (
        <MavenOrb size={40} />
      ) : (
        <div className="w-10 h-10 rounded-full bg-maven-teal flex items-center justify-center flex-shrink-0">
          <span className="text-white text-sm font-medium">P</span>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h4
            className={`text-sm truncate ${unread ? "font-semibold text-maven-text" : "font-medium text-maven-text"}`}
          >
            {title}
          </h4>
          <span className="text-xs text-maven-text-muted flex-shrink-0">{time}</span>
        </div>
        <p className="text-sm text-maven-text-tertiary truncate mt-0.5">
          {preview}
        </p>
      </div>

      {unread && (
        <div className="w-2 h-2 rounded-full bg-maven-teal flex-shrink-0 mt-2" />
      )}
    </button>
  );
}
