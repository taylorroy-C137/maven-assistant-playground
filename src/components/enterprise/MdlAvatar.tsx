"use client";

type Size = "sm" | "md" | "lg";

interface MdlAvatarProps {
  name: string;
  src?: string;
  size?: Size;
}

const sizeMap: Record<Size, number> = { sm: 32, md: 40, lg: 56 };
const fontMap: Record<Size, number> = { sm: 12, md: 14, lg: 18 };

function initials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function MdlAvatar({ name, src, size = "md" }: MdlAvatarProps) {
  const px = sizeMap[size];

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        style={{
          width: px,
          height: px,
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    );
  }

  return (
    <div
      style={{
        width: px,
        height: px,
        borderRadius: "50%",
        backgroundColor: "var(--color-enterprise-fill-accent-coconut)",
        color: "var(--color-enterprise-text-secondary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: fontMap[size],
        fontWeight: 600,
        fontFamily: "var(--font-family-sans)",
        flexShrink: 0,
      }}
      title={name}
    >
      {initials(name)}
    </div>
  );
}
