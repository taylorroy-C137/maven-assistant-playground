"use client";

import { use, useState } from "react";
import Link from "next/link";
import { getPrototype } from "@/lib/prototype-registry";
import type { ChatPrototype, ScreenPrototype } from "@/lib/prototype-types";
import { ChatShell } from "@/components/chat/ChatShell";
import { PrototypePageLayout } from "@/components/screen/PrototypePageLayout";

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function PrototypePage({
  params,
}: {
  params: Promise<{ designer: string; prototype: string }>;
}) {
  const { designer, prototype: slug } = use(params);
  const proto = getPrototype(designer, slug);
  const [activeVariant, setActiveVariant] = useState("");

  if (!proto) {
    const pagePath = `src/app/${designer}/${slug}/page.tsx`;
    return (
      <div className="min-h-dvh flex items-center justify-center bg-gray-50">
        <div className="bg-white rounded-2xl shadow-lg px-12 py-10 flex flex-col items-center gap-5 max-w-md">
          <h1 className="text-2xl font-bold text-gray-900">
            {slugToTitle(slug)}
          </h1>
          <p className="text-sm text-gray-500 text-center">
            This prototype needs a <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">page.tsx</code> file.
            Open it in Cursor:
          </p>
          <code className="text-xs bg-gray-100 px-3 py-2 rounded-lg text-gray-600 text-center break-all select-all">
            {pagePath}
          </code>
          <Link
            href="/"
            className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Go Back
          </Link>
        </div>
      </div>
    );
  }

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
