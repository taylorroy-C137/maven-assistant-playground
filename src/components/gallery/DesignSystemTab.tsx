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

/* ── Enterprise (MDL) tokens — from Figma Enterprise mode ── */

const enterpriseColors = [
  { name: "Text Primary", token: "enterprise-text-primary", hex: "#191817" },
  { name: "Text Secondary", token: "enterprise-text-secondary", hex: "#5C5954" },
  { name: "Text Tertiary", token: "enterprise-text-tertiary", hex: "#A6A39E" },
  { name: "Text Disabled", token: "enterprise-text-disabled", hex: "#BAB7B3" },
  { name: "Text Link", token: "enterprise-text-link", hex: "#00826A" },
  { name: "Text Link Hover", token: "enterprise-text-link-hover", hex: "#035748" },
  { name: "Text Error", token: "enterprise-text-error", hex: "#A41604" },
  { name: "Text Warning", token: "enterprise-text-warning", hex: "#DD6A02" },
  { name: "Text Success", token: "enterprise-text-success", hex: "#00826A" },
  { name: "Text Attention", token: "enterprise-text-attention", hex: "#003D99" },
  { name: "Text Accent Maven", token: "enterprise-text-accent-maven", hex: "#035748" },
  { name: "Icon Maven", token: "enterprise-icon-maven", hex: "#035748" },
  { name: "Icon Natural", token: "enterprise-icon-natural", hex: "#AA8965" },
  { name: "Surface Primary", token: "enterprise-surface-primary", hex: "#FFFFFF" },
  { name: "Surface Secondary", token: "enterprise-surface-secondary", hex: "#FAF9F7" },
  { name: "Surface Tertiary", token: "enterprise-surface-tertiary", hex: "#F2F0EC" },
  { name: "Surface Brand", token: "enterprise-surface-brand", hex: "#013126" },
  { name: "Surface Success", token: "enterprise-surface-success", hex: "#E7FAF3" },
  { name: "Surface Warning", token: "enterprise-surface-warning", hex: "#FFF5D1" },
  { name: "Surface Error", token: "enterprise-surface-error", hex: "#FFF0EE" },
  { name: "Surface Attention", token: "enterprise-surface-attention", hex: "#E5F0FF" },
  { name: "Fill Button Primary", token: "enterprise-fill-button-primary", hex: "#035748" },
  { name: "Fill Button Destructive", token: "enterprise-fill-button-destructive", hex: "#A41604" },
  { name: "Fill Button Subtle", token: "enterprise-fill-button-subtle", hex: "#EDE9E3" },
  { name: "Fill Accent Mint", token: "enterprise-fill-accent-mint", hex: "#9BF4C7" },
  { name: "Fill Accent Mango", token: "enterprise-fill-accent-mango", hex: "#FEE9CD" },
  { name: "Fill Accent Lychee", token: "enterprise-fill-accent-lychee", hex: "#FFCCC2" },
  { name: "Fill Accent Blueberry", token: "enterprise-fill-accent-blueberry", hex: "#E5F0FF" },
  { name: "Fill Accent Lavender", token: "enterprise-fill-accent-lavender", hex: "#EDE6F8" },
  { name: "Fill Accent Coconut", token: "enterprise-fill-accent-coconut", hex: "#F2F0EC" },
  { name: "Fill Accent Brand", token: "enterprise-fill-accent-brand", hex: "#013126" },
  { name: "Border Primary", token: "enterprise-border-primary", hex: "#BAB7B3" },
  { name: "Border Disabled", token: "enterprise-border-disabled", hex: "#E3E2E0" },
  { name: "Border Brand", token: "enterprise-border-brand", hex: "#035748" },
  { name: "Border Natural", token: "enterprise-border-natural", hex: "#EDE9E3" },
  { name: "Border Subtle", token: "enterprise-border-subtle", hex: "#D2C4AD" },
  { name: "Border Attention", token: "enterprise-border-attention", hex: "#0066FF" },
  { name: "Border Input Focus", token: "enterprise-border-input-focus", hex: "#035748" },
];

const enterpriseTypeScale = [
  { name: "Headline XXL", family: "Ivar Display", size: "46px", lineHeight: "1.2", weight: "400", style: "italic" },
  { name: "Headline XL", family: "Ivar Display", size: "40px", lineHeight: "1.2", weight: "400", style: "italic" },
  { name: "Headline LG", family: "Ivar Display", size: "34px", lineHeight: "1.2", weight: "400", style: "italic" },
  { name: "Headline MD", family: "Ivar Display", size: "28px", lineHeight: "1.2", weight: "400", style: "normal" },
  { name: "Headline SM", family: "Ivar Display", size: "24px", lineHeight: "1.2", weight: "400", style: "normal" },
  { name: "Subheadline LG", family: "Helvetica Neue", size: "24px", lineHeight: "1.2", weight: "500", style: "normal" },
  { name: "Subheadline SM", family: "Helvetica Neue", size: "22px", lineHeight: "1.2", weight: "500", style: "normal" },
  { name: "Subheadline XS", family: "Helvetica Neue", size: "18px", lineHeight: "1.2", weight: "500", style: "normal" },
  { name: "Body", family: "Helvetica Neue", size: "16px", lineHeight: "1.5", weight: "400", style: "normal" },
  { name: "Body SM", family: "Helvetica Neue", size: "14px", lineHeight: "1.5", weight: "400", style: "normal" },
  { name: "Overline", family: "Helvetica Neue", size: "12px", lineHeight: "1.5", weight: "500", style: "normal" },
  { name: "Legal", family: "Helvetica Neue", size: "12px", lineHeight: "1.5", weight: "400", style: "normal" },
];

const enterpriseSpacing = [
  { name: "002", value: "2px" },
  { name: "004", value: "4px" },
  { name: "008", value: "8px" },
  { name: "012", value: "12px" },
  { name: "016", value: "16px" },
  { name: "020", value: "20px" },
  { name: "024", value: "24px" },
  { name: "032", value: "32px" },
  { name: "040", value: "40px" },
  { name: "048", value: "48px" },
  { name: "056", value: "56px" },
  { name: "064", value: "64px" },
  { name: "080", value: "80px" },
  { name: "096", value: "96px" },
  { name: "128", value: "128px" },
  { name: "144", value: "144px" },
];

const enterpriseRadius = [
  { name: "xs", value: "4px" },
  { name: "sm", value: "8px" },
  { name: "md", value: "12px" },
  { name: "lg", value: "16px" },
  { name: "xlg", value: "24px" },
  { name: "full", value: "100px" },
];

const enterpriseComponents = [
  "MdlButton",
  "MdlTextInput",
  "MdlBadge",
  "MdlCard",
  "MdlAlert",
  "MdlHeader",
  "MdlFooter",
  "MdlAvatar",
  "MdlListItem",
  "MdlModal",
];

/* ── Maven Assistant (Chat) tokens ── */

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

type ActiveDS = "consumer" | "enterprise" | "maven";

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

function SpacingScale({ spacing }: { spacing: typeof enterpriseSpacing }) {
  return (
    <div className="space-y-3">
      {spacing.map((s) => (
        <div key={s.name} className="flex items-center gap-4">
          <span className="w-12 text-sm text-maven-text-secondary font-mono">
            {s.name}
          </span>
          <div
            className="h-4 rounded"
            style={{ width: s.value, backgroundColor: "var(--color-enterprise-fill-accent-mint)" }}
          />
          <span className="text-xs text-maven-text-muted font-mono">
            {s.value}
          </span>
        </div>
      ))}
    </div>
  );
}

function RadiusGrid({ radius, accentColor }: { radius: typeof b2cRadius; accentColor: string }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
      {radius.map((r) => (
        <div key={r.name} className="flex flex-col items-center gap-2">
          <div
            className="w-16 h-16 border-2"
            style={{
              borderRadius: r.value,
              borderColor: accentColor,
              backgroundColor: `${accentColor}15`,
            }}
          />
          <span className="text-xs font-mono text-maven-text-muted">{r.name}</span>
          <span className="text-xs font-mono text-maven-text-muted">{r.value}</span>
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

interface DSButtonProps {
  label: string;
  active: boolean;
  activeColor: string;
  dotColor: string;
  onClick: () => void;
}

function DSButton({ label, active, activeColor, dotColor, onClick }: DSButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all"
      style={{
        backgroundColor: active ? activeColor : "#FFFFFF",
        color: active ? "#FFFFFF" : "#5C5954",
        border: active ? `2px solid ${activeColor}` : "2px solid #E3E2E0",
      }}
    >
      <span
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: active ? dotColor : "#BAB7B3" }}
      />
      {label}
    </button>
  );
}

export function DesignSystemTab() {
  const [activeDS, setActiveDS] = useState<ActiveDS>("consumer");

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
      <div className="flex flex-wrap gap-3">
        <DSButton
          label="Freya Consumer (B2C)"
          active={activeDS === "consumer"}
          activeColor="#035748"
          dotColor="#9BF4C7"
          onClick={() => setActiveDS("consumer")}
        />
        <DSButton
          label="Maven Design Language (Enterprise)"
          active={activeDS === "enterprise"}
          activeColor="#013126"
          dotColor="#9BF4C7"
          onClick={() => setActiveDS("enterprise")}
        />
        <DSButton
          label="Maven Assistant (Chat)"
          active={activeDS === "maven"}
          activeColor="#003D99"
          dotColor="#66a3ff"
          onClick={() => setActiveDS("maven")}
        />
      </div>

      {/* ── Consumer (Freya) ── */}
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
            <RadiusGrid radius={b2cRadius} accentColor="#035748" />
          </section>
          <section>
            <h2 className="text-lg font-semibold text-maven-text mb-4">Freya Components</h2>
            <p className="text-sm text-maven-text-secondary mb-4">
              Reusable components for Consumer screen prototypes.
            </p>
            <ComponentGrid components={freyaComponents} accentColor="#035748" />
          </section>
        </div>
      )}

      {/* ── Enterprise (MDL) ── */}
      {activeDS === "enterprise" && (
        <div className="space-y-12">
          <section>
            <h2 className="text-lg font-semibold text-maven-text mb-4">Colors</h2>
            <p className="text-sm text-maven-text-secondary mb-4">
              Semantic tokens from Maven Design Language — Enterprise mode.
            </p>
            <ColorGrid colors={enterpriseColors} />
          </section>
          <section>
            <h2 className="text-lg font-semibold text-maven-text mb-4">Typography</h2>
            <TypeScale scale={enterpriseTypeScale} />
          </section>
          <section>
            <h2 className="text-lg font-semibold text-maven-text mb-4">Spacing</h2>
            <SpacingScale spacing={enterpriseSpacing} />
          </section>
          <section>
            <h2 className="text-lg font-semibold text-maven-text mb-4">Border Radius</h2>
            <RadiusGrid radius={enterpriseRadius} accentColor="#013126" />
          </section>
          <section>
            <h2 className="text-lg font-semibold text-maven-text mb-4">Enterprise Components</h2>
            <p className="text-sm text-maven-text-secondary mb-4">
              Reusable components for Enterprise screen prototypes. Import from{" "}
              <code className="px-1 py-0.5 bg-maven-bg rounded text-xs font-mono">
                @/components/enterprise
              </code>
            </p>
            <ComponentGrid components={enterpriseComponents} accentColor="#013126" />
          </section>
        </div>
      )}

      {/* ── Maven Assistant (Chat) ── */}
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
            <h2 className="text-lg font-semibold text-maven-text mb-4">Chat Components</h2>
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
