"use client";

import { useState } from "react";
import { ArrowLeft, ChevronRight, Info } from "lucide-react";
import { ScreenShell } from "@/components/screen/ScreenShell";
import {
  FreyaNavBar,
  FreyaTabBar,
  FreyaBadge,
  FreyaButton,
  FreyaSectionHeader,
  FreyaCarousel,
  FreyaContentCard,
  FreyaFooter,
} from "@/components/freya";

function RxListView({ onSelectPrescription }: { onSelectPrescription: () => void }) {
  return (
    <>
      <FreyaNavBar />
      <FreyaTabBar tabs={["Home", "Rx", "Care"]} activeTab="Rx" />

      <div className="px-4 flex flex-col gap-4 pb-6">
        <h2
          className="text-[24px] leading-[1.2] mt-2"
          style={{
            fontFamily: "var(--font-family-b2c-emphasis)",
            color: "var(--color-b2c-text-primary)",
          }}
        >
          Active Prescriptions
        </h2>

        {/* Prescription card */}
        <button
          onClick={onSelectPrescription}
          className="w-full rounded-xl p-4 flex items-center justify-between text-left"
          style={{
            backgroundColor: "var(--color-b2c-surface-primary)",
            border: "1px solid var(--color-b2c-border-primary)",
          }}
        >
          <div>
            <h3
              className="text-base font-semibold"
              style={{ color: "var(--color-b2c-text-primary)" }}
            >
              Zepbound Pen
            </h3>
            <p
              className="text-sm mt-0.5"
              style={{ color: "var(--color-b2c-text-secondary)" }}
            >
              0.5mg Weekly
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FreyaBadge label="Order dose" variant="maven" />
            <ChevronRight
              className="w-4 h-4"
              style={{ color: "var(--color-b2c-text-tertiary)" }}
            />
          </div>
        </button>
      </div>
    </>
  );
}

function RxDetailView({ onBack }: { onBack: () => void }) {
  return (
    <>
      {/* Back header */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{
          backgroundColor: "var(--color-b2c-surface-primary)",
          borderBottom: "1px solid var(--color-b2c-border-disabled)",
        }}
      >
        <button
          onClick={onBack}
          className="w-8 h-8 flex items-center justify-center rounded-full"
        >
          <ArrowLeft
            className="w-5 h-5"
            style={{ color: "var(--color-b2c-icon-primary)" }}
          />
        </button>
        <span
          className="text-base font-medium"
          style={{ color: "var(--color-b2c-text-primary)" }}
        >
          Your Prescription
        </span>
      </div>

      <div className="px-4 flex flex-col gap-5 pb-6 pt-4">
        <h1
          className="text-[28px] leading-[1.2]"
          style={{
            fontFamily: "var(--font-family-b2c-emphasis)",
            color: "var(--color-b2c-text-primary)",
          }}
        >
          Zepbound Pen
        </h1>

        {/* Request card */}
        <div
          className="rounded-xl p-4 flex flex-col gap-3"
          style={{
            backgroundColor: "var(--color-b2c-surface-primary)",
            border: "1px solid var(--color-b2c-border-primary)",
          }}
        >
          <h3
            className="text-base font-semibold"
            style={{ color: "var(--color-b2c-text-primary)" }}
          >
            Request your next dose of Zepbound Pen
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--color-b2c-text-secondary)" }}
          >
            You&apos;re almost up on your monthly supply of Zepbound Pen. Let your Care Team know how it&apos;s going and get the right dose to support your progress next month.
          </p>
          <FreyaButton variant="primary">Request next dose</FreyaButton>
        </div>

        {/* Current Prescription */}
        <div>
          <h3
            className="text-base font-semibold mb-3"
            style={{ color: "var(--color-b2c-text-primary)" }}
          >
            Current Prescription
          </h3>
          <p
            className="text-xs font-medium uppercase tracking-wider mb-2"
            style={{ color: "var(--color-b2c-text-tertiary)" }}
          >
            JANUARY 24
          </p>
          <p
            className="text-sm font-medium"
            style={{ color: "var(--color-b2c-text-primary)" }}
          >
            Zepbound Pen 0.25 mg
          </p>
          <p
            className="text-sm mt-1"
            style={{ color: "var(--color-b2c-text-secondary)" }}
          >
            Inject 0.25 mg once weekly.
          </p>
          <div className="mt-4">
            <FreyaButton variant="secondary">Manage my prescription</FreyaButton>
          </div>
          <button
            className="flex items-center gap-1.5 mt-3 text-sm"
            style={{ color: "var(--color-b2c-text-link)" }}
          >
            Important safety information
            <Info className="w-4 h-4" />
          </button>
        </div>

        {/* Pharmacy */}
        <div
          style={{ borderTop: "1px solid var(--color-b2c-border-disabled)" }}
          className="pt-5"
        >
          <h3
            className="text-base font-semibold mb-3"
            style={{ color: "var(--color-b2c-text-primary)" }}
          >
            Pharmacy
          </h3>
          <p
            className="text-sm font-medium"
            style={{ color: "var(--color-b2c-text-primary)" }}
          >
            CVS Mission
          </p>
          <p
            className="text-sm mt-0.5"
            style={{ color: "var(--color-b2c-text-secondary)" }}
          >
            2288 Mission St, San Francisco, CA 94110
          </p>
          <div className="mt-3">
            <FreyaButton variant="secondary">Change pharmacy</FreyaButton>
          </div>
        </div>

        {/* Further reading */}
        <div>
          <FreyaSectionHeader title="Further reading" />
          <FreyaCarousel>
            <FreyaContentCard
              subjectTag="ZEPBOUND PEN"
              title="Zepbound Pen 101: Understanding Your Medication"
              timeLabel="Time and format"
            />
            <FreyaContentCard
              subjectTag="GLP-1 SIDE EFFECTS"
              title="Appetite Changes, Nausea, and Side Effects"
              timeLabel="Time and format"
            />
          </FreyaCarousel>
        </div>
      </div>

      <FreyaFooter />
    </>
  );
}

export default function RxScreen() {
  const [view, setView] = useState<"list" | "detail">("list");

  return (
    <ScreenShell>
      {view === "list" ? (
        <RxListView onSelectPrescription={() => setView("detail")} />
      ) : (
        <RxDetailView onBack={() => setView("list")} />
      )}
    </ScreenShell>
  );
}
