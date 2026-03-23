"use client";

import { useState } from "react";
import { GalleryHeader } from "@/components/gallery/GalleryHeader";
import { PrototypesTab } from "@/components/gallery/PrototypesTab";
import { TemplatesTab } from "@/components/gallery/TemplatesTab";
import { DesignSystemTab } from "@/components/gallery/DesignSystemTab";
import { NewPrototypeModal } from "@/components/gallery/NewPrototypeModal";
import { allScenarios, templates } from "@/lib/scenario-registry";
import { allScreens } from "@/lib/screen-registry";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Prototypes");
  const [searchQuery, setSearchQuery] = useState("");
  const [showNewModal, setShowNewModal] = useState(false);

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
          <PrototypesTab
            scenarios={allScenarios}
            screens={allScreens}
            searchQuery={searchQuery}
          />
        )}
        {activeTab === "Templates" && (
          <TemplatesTab templates={templates} searchQuery={searchQuery} />
        )}
        {activeTab === "Design System" && <DesignSystemTab />}
      </main>

      {showNewModal && (
        <NewPrototypeModal onClose={() => setShowNewModal(false)} />
      )}
    </div>
  );
}
