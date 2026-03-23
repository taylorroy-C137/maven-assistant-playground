"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { getScreenBySlug } from "@/lib/screen-registry";
import { PhoneFrame } from "@/components/chat/PhoneFrame";

export default function ScreenPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const screen = getScreenBySlug(slug);

  if (!screen) notFound();

  const ScreenComponent = screen.component;

  return (
    <div
      className="min-h-dvh flex items-center justify-center py-10 px-6"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, #d6cfc4 0%, #c4bdb2 60%, #b8b0a4 100%)",
      }}
    >
      <PhoneFrame>
        <ScreenComponent />
      </PhoneFrame>
    </div>
  );
}
