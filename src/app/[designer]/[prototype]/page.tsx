"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { getPrototype } from "@/lib/prototype-registry";
import type { ChatPrototype, ScreenPrototype } from "@/lib/prototype-types";
import { ChatShell } from "@/components/chat/ChatShell";
import { PrototypePageLayout } from "@/components/screen/PrototypePageLayout";

export default function PrototypePage({
  params,
}: {
  params: Promise<{ designer: string; prototype: string }>;
}) {
  const { designer, prototype: slug } = use(params);
  const proto = getPrototype(designer, slug);
  const [activeVariant, setActiveVariant] = useState("");

  if (!proto) notFound();

  if (proto.type === "chat") {
    const chat = proto as ChatPrototype;
    return (
      <PrototypePageLayout
        title={chat.title}
        description={chat.description}
        label={chat.label}
      >
        <ChatShell
          title={chat.title}
          turns={chat.turns}
          variants={chat.variants}
          variant={activeVariant}
          onVariantChange={setActiveVariant}
        />
      </PrototypePageLayout>
    );
  }

  const screen = proto as ScreenPrototype;
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
