"use client";

import { useState, useEffect, useCallback } from "react";
import { GalleryHeader } from "@/components/gallery/GalleryHeader";
import { PrototypesTab } from "@/components/gallery/PrototypesTab";
import { TemplatesTab } from "@/components/gallery/TemplatesTab";
import { DesignSystemTab } from "@/components/gallery/DesignSystemTab";
import { NewPrototypeModal } from "@/components/gallery/NewPrototypeModal";
import { prototypes as registryPrototypes, templates } from "@/lib/prototype-registry";
import type { Prototype } from "@/lib/prototype-types";

function mergePrototypes(
  filesystemList: Prototype[],
  registryList: Prototype[],
): Prototype[] {
  const merged = new Map<string, Prototype>();

  for (const p of filesystemList) {
    merged.set(`${p.designer}/${p.slug}`, p);
  }

  // Registry entries override filesystem entries (they have richer data)
  for (const p of registryList) {
    merged.set(`${p.designer}/${p.slug}`, p);
  }

  return Array.from(merged.values());
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("Prototypes");
  const [searchQuery, setSearchQuery] = useState("");
  const [showNewModal, setShowNewModal] = useState(false);
  const [allPrototypes, setAllPrototypes] = useState<Prototype[]>(registryPrototypes);

  const fetchPrototypes = useCallback(async () => {
    try {
      const res = await fetch("/api/prototypes");
      if (res.ok) {
        const fsPrototypes: Prototype[] = await res.json();
        const nonTemplates = fsPrototypes.filter((p) => !p.isTemplate);
        setAllPrototypes(mergePrototypes(nonTemplates, registryPrototypes));
      }
    } catch {
      // Fall back to static registry
    }
  }, []);

  useEffect(() => {
    fetchPrototypes();
  }, [fetchPrototypes]);

  const handleModalClose = () => {
    setShowNewModal(false);
    fetchPrototypes();
  };

  return (
    <div className="min-h-dvh bg-white">
      <GalleryHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onNew={() => setShowNewModal(true)}
      />

      <main className="max-w-4xl mx-auto">
        {activeTab === "Prototypes" && (
          <PrototypesTab prototypes={allPrototypes} searchQuery={searchQuery} />
        )}
        {activeTab === "Templates" && (
          <TemplatesTab templates={templates} searchQuery={searchQuery} />
        )}
        {activeTab === "Design System" && <DesignSystemTab />}
      </main>

      {showNewModal && (
        <NewPrototypeModal onClose={handleModalClose} />
      )}
    </div>
  );
}
