"use client";

interface FreyaCarouselProps {
  children: React.ReactNode;
  gap?: number;
}

export function FreyaCarousel({ children, gap = 12 }: FreyaCarouselProps) {
  return (
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
  );
}
