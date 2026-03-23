"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { getScreenBySlug } from "@/lib/screen-registry";
import { PrototypePageLayout } from "@/components/screen/PrototypePageLayout";

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
    <PrototypePageLayout
      title={screen.title}
      description={screen.description}
      label={screen.label}
    >
      <ScreenComponent />
    </PrototypePageLayout>
  );
}
