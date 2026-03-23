"use client";

interface FreyaCarouselProps {
  children: React.ReactNode;
  gap?: number;
  dotCount?: number;
  activeDot?: number;
}

export function FreyaCarousel({
  children,
  gap = 12,
  dotCount = 4,
  activeDot = 0,
}: FreyaCarouselProps) {
  return (
    <div>
      <div
        className="flex overflow-x-auto snap-x snap-mandatory pb-3"
        style={{
          gap: `${gap}px`,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </div>
      {dotCount > 0 && (
        <div className="flex items-center justify-center gap-1.5 py-2">
          {Array.from({ length: dotCount }).map((_, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: 7,
                height: 7,
                backgroundColor:
                  i === activeDot
                    ? "var(--color-b2c-fill-button-primary)"
                    : "var(--color-b2c-border-disabled)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
