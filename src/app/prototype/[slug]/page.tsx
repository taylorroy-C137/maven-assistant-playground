"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { getScenarioBySlug } from "@/lib/scenario-registry";
import { ChatShell } from "@/components/chat/ChatShell";

export default function PrototypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const scenario = getScenarioBySlug(slug);
  const [activeVariant, setActiveVariant] = useState("");

  if (!scenario) notFound();

  return (
    <div className="min-h-dvh bg-maven-bg flex items-center justify-center">
      <ChatShell
        title={scenario.title}
        turns={scenario.turns}
        variants={scenario.variants}
        variant={activeVariant}
        onVariantChange={setActiveVariant}
      />
    </div>
  );
}
