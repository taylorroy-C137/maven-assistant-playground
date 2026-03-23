const colors = [
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

const typeScale = [
  { name: "Body", family: "Helvetica Neue", size: "16px", lineHeight: "24px", weight: "400" },
  { name: "Body Small", family: "Helvetica Neue", size: "14px", lineHeight: "20px", weight: "400" },
  { name: "Caption", family: "Helvetica Neue", size: "12px", lineHeight: "16px", weight: "400" },
  { name: "Label", family: "Helvetica Neue", size: "11px", lineHeight: "14px", weight: "500" },
  { name: "Heading SM", family: "Helvetica Neue", size: "14px", lineHeight: "20px", weight: "600" },
  { name: "Heading MD", family: "Helvetica Neue", size: "16px", lineHeight: "24px", weight: "600" },
  { name: "Heading LG", family: "Helvetica Neue", size: "20px", lineHeight: "28px", weight: "600" },
];

const spacing = [
  { name: "xs", value: "4px" },
  { name: "sm", value: "8px" },
  { name: "md", value: "12px" },
  { name: "base", value: "16px" },
  { name: "lg", value: "20px" },
  { name: "xl", value: "24px" },
  { name: "2xl", value: "32px" },
  { name: "3xl", value: "40px" },
];

export function DesignSystemTab() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-12">
      <section>
        <h2 className="text-lg font-semibold text-maven-text mb-4">Colors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {colors.map((c) => (
            <div key={c.token} className="group">
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
      </section>

      <section>
        <h2 className="text-lg font-semibold text-maven-text mb-4">Typography</h2>
        <div className="space-y-4">
          {typeScale.map((t) => (
            <div
              key={t.name}
              className="flex items-baseline justify-between border-b border-maven-border pb-3"
            >
              <div>
                <span
                  style={{
                    fontFamily: t.family,
                    fontSize: t.size,
                    lineHeight: t.lineHeight,
                    fontWeight: Number(t.weight),
                  }}
                >
                  {t.name} — The quick brown fox
                </span>
              </div>
              <div className="text-right text-xs text-maven-text-muted font-mono space-x-3">
                <span>{t.size}/{t.lineHeight}</span>
                <span>w{t.weight}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-maven-text mb-4">Spacing</h2>
        <div className="space-y-3">
          {spacing.map((s) => (
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
          These components are available in the shell for all scenarios.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
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
          ].map((name) => (
            <div
              key={name}
              className="px-4 py-3 rounded-lg border border-maven-border bg-white text-sm font-mono text-maven-text-secondary"
            >
              {name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
