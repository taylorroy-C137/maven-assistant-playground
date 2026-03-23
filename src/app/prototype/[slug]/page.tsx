"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { getScenarioBySlug } from "@/lib/scenario-registry";
import { ChatShell } from "@/components/chat/ChatShell";
import { PhoneFrame } from "@/components/chat/PhoneFrame";

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
    <div
      className="min-h-dvh flex items-center justify-center py-10 px-6"
      style={{
        background:
          "radial-gradient(ellipse at 60% 30%, #2c3e50 0%, #1a1a2e 50%, #0f0f1a 100%)",
      }}
    >
      <PhoneFrame>
        <ChatShell
          title={scenario.title}
          turns={scenario.turns}
          variants={scenario.variants}
          variant={activeVariant}
          onVariantChange={setActiveVariant}
        />
      </PhoneFrame>
    </div>
  );
}
