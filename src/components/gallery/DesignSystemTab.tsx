"use client";

import { useState } from "react";

/* ── Freya Consumer (B2C) tokens ── */

const b2cColors = [
  { name: "Text Primary", token: "b2c-text-primary", hex: "#191817" },
  { name: "Text Secondary", token: "b2c-text-secondary", hex: "#5C5954" },
  { name: "Text Tertiary", token: "b2c-text-tertiary", hex: "#A6A39E" },
  { name: "Text Link", token: "b2c-text-link", hex: "#035748" },
  { name: "Surface Primary", token: "b2c-surface-primary", hex: "#FFFFFF" },
  { name: "Surface Secondary", token: "b2c-surface-secondary", hex: "#F2F0EC" },
  { name: "Surface Tertiary", token: "b2c-surface-tertiary", hex: "#E9E1D5" },
  { name: "Surface Brand", token: "b2c-surface-brand", hex: "#013126" },
  { name: "Surface B2C", token: "b2c-surface-b2c", hex: "#00826A" },
  { name: "Fill Button Primary", token: "b2c-fill-button-primary", hex: "#035748" },
  { name: "Fill Button Secondary", token: "b2c-fill-button-secondary", hex: "#FFFFFF" },
  { name: "Fill Accent Mint", token: "b2c-fill-accent-mint", hex: "#9BF4C7" },
  { name: "Border Primary", token: "b2c-border-primary", hex: "#BAB7B3" },
  { name: "Border Subtle", token: "b2c-border-subtle", hex: "#D2C4AD" },
  { name: "Border Brand", token: "b2c-border-brand", hex: "#035748" },
  { name: "Success", token: "b2c-text-success", hex: "#00826A" },
  { name: "Warning", token: "b2c-text-warning", hex: "#DD6A02" },
  { name: "Error", token: "b2c-text-error", hex: "#EA2F0D" },
];

const b2cTypeScale = [
  { name: "Headline XXL", family: "Ivar Display", size: "46px", lineHeight: "1.2", weight: "400", style: "italic" },
  { name: "Headline XL", family: "Ivar Display", size: "40px", lineHeight: "1.2", weight: "400", style: "italic" },
  { name: "Headline LG", family: "Ivar Display", size: "34px", lineHeight: "1.2", weight: "400", style: "italic" },
  { name: "Headline MD", family: "Ivar Display", size: "28px", lineHeight: "1.2", weight: "400", style: "normal" },
  { name: "Headline SM", family: "Ivar Display", size: "24px", lineHeight: "1.2", weight: "400", style: "normal" },
  { name: "Subheadline SM", family: "Helvetica Neue", size: "22px", lineHeight: "1.2", weight: "500", style: "normal" },
  { name: "Subheadline XS", family: "Helvetica Neue", size: "18px", lineHeight: "1.2", weight: "500", style: "normal" },
  { name: "Body", family: "Helvetica Neue", size: "16px", lineHeight: "1.5", weight: "400", style: "normal" },
  { name: "Body SM", family: "Helvetica Neue", size: "14px", lineHeight: "1.5", weight: "400", style: "normal" },
  { name: "Overline", family: "Helvetica Neue", size: "12px", lineHeight: "1.5", weight: "500", style: "normal" },
  { name: "Legal", family: "Helvetica Neue", size: "12px", lineHeight: "1.5", weight: "400", style: "normal" },
];

const b2cRadius = [
  { name: "xs", value: "4px" },
  { name: "sm", value: "8px" },
  { name: "md", value: "12px" },
  { name: "lg", value: "16px" },
  { name: "xlg", value: "24px" },
  { name: "full", value: "9999px" },
];

const freyaComponents = [
  "FreyaNavBar",
  "FreyaTabBar",
  "FreyaButton",
  "FreyaBadge",
  "FreyaTaskCard",
  "FreyaAppointmentCard",
  "FreyaContentCard",
  "FreyaSupportCard",
  "FreyaAccordion",
  "FreyaSectionHeader",
  "FreyaCarousel",
  "FreyaFooter",
];

/* ── Maven Assistant (Enterprise) tokens ── */

const mavenColors = [
  { name: "Background", token: "maven-bg", hex: "#f2f0ec" },
  { name: "Surface", token: "maven-surface", hex: "#ffffff" },
  { name: "Text", token: "maven-text", hex: "#191817" },
  { name: "Text Secondary", token: "maven-text-secondary", hex: "#5c5954" },
  { name: "Text Tertiary", token: "maven-text-tertiary", hex: "#74716c" },
  { name: "Text Muted", token: "maven-text-muted", hex: "#bab7b3" },
  { name: "Border", token: "maven-border", hex: "#ebecef" },
  { name: "Teal", token: "maven-teal", hex: "#00856f" },
  { name: "Teal Dark", token: "maven-teal-dark", hex: "#005d4e" },
  { name: "Highlight", token: "maven-highlight", hex: "#eefdf6" },
  { name: "Error", token: "maven-error", hex: "#851204" },
  { name: "Blue", token: "maven-blue", hex: "#1054de" },
  { name: "Orb Cyan", token: "maven-orb-cyan", hex: "#51d4e5" },
  { name: "Orb Blue", token: "maven-orb-blue", hex: "#66a3ff" },
];

const mavenTypeScale = [
  { name: "Body", family: "Helvetica Neue", size: "16px", lineHeight: "24px", weight: "400", style: "normal" },
  { name: "Body Small", family: "Helvetica Neue", size: "14px", lineHeight: "20px", weight: "400", style: "normal" },
  { name: "Caption", family: "Helvetica Neue", size: "12px", lineHeight: "16px", weight: "400", style: "normal" },
  { name: "Label", family: "Helvetica Neue", size: "11px", lineHeight: "14px", weight: "500", style: "normal" },
  { name: "Heading SM", family: "Helvetica Neue", size: "14px", lineHeight: "20px", weight: "600", style: "normal" },
  { name: "Heading MD", family: "Helvetica Neue", size: "16px", lineHeight: "24px", weight: "600", style: "normal" },
  { name: "Heading LG", family: "Helvetica Neue", size: "20px", lineHeight: "28px", weight: "600", style: "normal" },
];

const chatComponents = [
  "ChatShell",
  "MessageBubble",
  "Composer",
  "PromptHScroll",
  "ChipAction",
  "SmartCard",
  "BookingCard",
  "EscalationCard",
  "ThreadRow",
  "MavenOrb",
  "GlassLayer",
  "GradientBackground",
];

type ActiveDS = "consumer" | "maven";

function ColorGrid({ colors }: { colors: typeof b2cColors }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {colors.map((c) => (
        <div key={c.token}>
          <div
            className="w-full h-16 rounded-lg border border-maven-border mb-2"
            style={{ backgroundColor: c.hex }}
          />
          <p className="text-sm font-medium text-maven-text">{c.name}</p>
          <p className="text-xs text-maven-text-muted font-mono">{c.hex}</p>
          <p className="text-xs text-maven-text-muted font-mono">{c.token}</p>
        </div>
      ))}
    </div>
  );
}

function TypeScale({ scale }: { scale: typeof b2cTypeScale }) {
  return (
    <div className="space-y-4">
      {scale.map((t) => (
        <div
          key={t.name}
          className="flex items-baseline justify-between border-b border-maven-border pb-3"
        >
          <span
            style={{
              fontFamily: t.family,
              fontSize: t.size,
              lineHeight: t.lineHeight,
              fontWeight: Number(t.weight),
              fontStyle: t.style as "normal" | "italic",
            }}
          >
            {t.name} — The quick brown fox
          </span>
          <div className="text-right text-xs text-maven-text-muted font-mono whitespace-nowrap ml-4 space-x-3">
            <span>{t.family}</span>
            <span>{t.size}</span>
            <span>w{t.weight}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ComponentGrid({ components, accentColor }: { components: string[]; accentColor: string }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {components.map((name) => (
        <div
          key={name}
          className="px-4 py-3 rounded-lg border bg-white text-sm font-mono"
          style={{
            borderColor: accentColor,
            color: accentColor,
          }}
        >
          {name}
        </div>
      ))}
    </div>
  );
}

export function DesignSystemTab() {
  const [activeDS, setActiveDS] = useState<ActiveDS>("consumer");

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
      {/* Design system switcher */}
      <div className="flex gap-3">
        <button
          onClick={() => setActiveDS("consumer")}
          className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all"
          style={{
            backgroundColor: activeDS === "consumer" ? "#035748" : "#FFFFFF",
            color: activeDS === "consumer" ? "#FFFFFF" : "#5C5954",
            border: activeDS === "consumer" ? "2px solid #035748" : "2px solid #E3E2E0",
          }}
        >
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: activeDS === "consumer" ? "#9BF4C7" : "#BAB7B3" }}
          />
          Freya Consumer (B2C)
        </button>
        <button
          onClick={() => setActiveDS("maven")}
          className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all"
          style={{
            backgroundColor: activeDS === "maven" ? "#003D99" : "#FFFFFF",
            color: activeDS === "maven" ? "#FFFFFF" : "#5C5954",
            border: activeDS === "maven" ? "2px solid #003D99" : "2px solid #E3E2E0",
          }}
        >
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: activeDS === "maven" ? "#66a3ff" : "#BAB7B3" }}
          />
          Maven Assistant (Enterprise)
        </button>
      </div>

      {/* Consumer design system */}
      {activeDS === "consumer" && (
        <div className="space-y-12">
          <section>
            <h2 className="text-lg font-semibold text-maven-text mb-4">Colors</h2>
            <ColorGrid colors={b2cColors} />
          </section>

          <section>
            <h2 className="text-lg font-semibold text-maven-text mb-4">Typography</h2>
            <TypeScale scale={b2cTypeScale} />
          </section>

          <section>
            <h2 className="text-lg font-semibold text-maven-text mb-4">Border Radius</h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {b2cRadius.map((r) => (
                <div key={r.name} className="flex flex-col items-center gap-2">
                  <div
                    className="w-16 h-16 border-2"
                    style={{
                      borderRadius: r.value,
                      borderColor: "#035748",
                      backgroundColor: "#E7FAF3",
                    }}
                  />
                  <span className="text-xs font-mono text-maven-text-muted">{r.name}</span>
                  <span className="text-xs font-mono text-maven-text-muted">{r.value}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-maven-text mb-4">
              Freya Components
            </h2>
            <p className="text-sm text-maven-text-secondary mb-4">
              Reusable components for Consumer screen prototypes.
            </p>
            <ComponentGrid components={freyaComponents} accentColor="#035748" />
          </section>
        </div>
      )}

      {/* Maven Assistant design system */}
      {activeDS === "maven" && (
        <div className="space-y-12">
          <section>
            <h2 className="text-lg font-semibold text-maven-text mb-4">Colors</h2>
            <ColorGrid colors={mavenColors} />
          </section>

          <section>
            <h2 className="text-lg font-semibold text-maven-text mb-4">Typography</h2>
            <TypeScale scale={mavenTypeScale} />
          </section>

          <section>
            <h2 className="text-lg font-semibold text-maven-text mb-4">Spacing</h2>
            <div className="space-y-3">
              {[
                { name: "xs", value: "4px" },
                { name: "sm", value: "8px" },
                { name: "md", value: "12px" },
                { name: "base", value: "16px" },
                { name: "lg", value: "20px" },
                { name: "xl", value: "24px" },
                { name: "2xl", value: "32px" },
                { name: "3xl", value: "40px" },
              ].map((s) => (
                <div key={s.name} className="flex items-center gap-4">
                  <span className="w-12 text-sm text-maven-text-secondary font-mono">
                    {s.name}
                  </span>
                  <div
                    className="h-4 bg-maven-teal/20 rounded"
                    style={{ width: s.value }}
                  />
                  <span className="text-xs text-maven-text-muted font-mono">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-maven-text mb-4">
              Chat Components
            </h2>
            <p className="text-sm text-maven-text-secondary mb-4">
              Components available in the Maven Assistant chat shell.
            </p>
            <ComponentGrid components={chatComponents} accentColor="#003D99" />
          </section>
        </div>
      )}
    </div>
  );
}
