"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { getScenarioBySlug } from "@/lib/scenario-registry";
import { ChatShell } from "@/components/chat/ChatShell";
import { PrototypePageLayout } from "@/components/screen/PrototypePageLayout";

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
    <PrototypePageLayout
      title={scenario.title}
      description={scenario.description}
      label={scenario.label ?? "Maven Assistant"}
    >
      <ChatShell
        title={scenario.title}
        turns={scenario.turns}
        variants={scenario.variants}
        variant={activeVariant}
        onVariantChange={setActiveVariant}
      />
    </PrototypePageLayout>
  );
}
