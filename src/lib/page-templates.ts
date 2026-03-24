function toPascalCase(slug: string): string {
  const name = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
  // JS identifiers can't start with a digit
  return /^\d/.test(name) ? "P" + name : name;
}

export function getPageTemplate(
  template: string,
  slug: string,
  title: string,
): string {
  const componentName = toPascalCase(slug) + "Page";

  switch (template) {
    case "consumer-home":
      return consumerHomeTemplate(componentName);
    case "consumer-care":
      return consumerCareTemplate(componentName);
    case "consumer-rx":
      return consumerRxTemplate(componentName);
    case "maven-assistant":
      return mavenAssistantTemplate(componentName, title);
    default:
      return blankTemplate(componentName, title);
  }
}

function blankTemplate(name: string, title: string): string {
  return `"use client";

import { ScreenShell } from "@/components/screen/ScreenShell";
import { FreyaNavBar, FreyaTabBar, FreyaFooter } from "@/components/freya";

export default function ${name}() {
  return (
    <ScreenShell>
      <FreyaNavBar />
      <FreyaTabBar tabs={["Home", "Rx", "Care"]} activeTab="Home" />

      <div className="px-4 flex flex-col gap-6 pb-6 flex-1 items-center justify-center">
        <h1
          style={{
            fontSize: 28,
            lineHeight: 1.2,
            fontFamily: "var(--font-family-b2c-emphasis)",
            color: "var(--color-b2c-text-primary)",
            fontWeight: 400,
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          ${title}
        </h1>
        <p
          className="text-sm text-center"
          style={{ color: "var(--color-b2c-text-secondary)" }}
        >
          Start building your prototype here.
        </p>
      </div>

      <FreyaFooter />
    </ScreenShell>
  );
}
`;
}

function mavenAssistantTemplate(name: string, title: string): string {
  return `"use client";

import { useState } from "react";
import { ChatShell } from "@/components/chat/ChatShell";

const turns = [
  {
    role: "assistant" as const,
    blocks: [
      {
        type: "text" as const,
        content: "Hi there! How can I help you today?",
      },
    ],
  },
];

export default function ${name}() {
  const [variant, setVariant] = useState("");

  return (
    <ChatShell
      title="${title}"
      turns={turns}
      variant={variant}
      onVariantChange={setVariant}
    />
  );
}
`;
}

function consumerHomeTemplate(name: string): string {
  return `"use client";

import { ScreenShell } from "@/components/screen/ScreenShell";
import {
  FreyaNavBar,
  FreyaTabBar,
  FreyaTaskCard,
  FreyaSectionHeader,
  FreyaCarousel,
  FreyaContentCard,
  FreyaSupportCard,
  FreyaFooter,
} from "@/components/freya";

export default function ${name}() {
  return (
    <ScreenShell>
      <FreyaNavBar />
      <FreyaTabBar tabs={["Home", "Rx", "Care"]} activeTab="Home" />

      <div className="px-4 flex flex-col gap-6 pb-6">
        <h1
          className="mt-2"
          style={{
            fontSize: 34,
            lineHeight: 1.2,
            fontFamily: "var(--font-family-b2c-emphasis)",
            color: "var(--color-b2c-text-primary)",
            fontWeight: 400,
          }}
        >
          Welcome,{" "}
          <em style={{ fontStyle: "italic" }}>Kate</em>
        </h1>

        <FreyaTaskCard
          overline="GLP-1 CARE"
          badge="Action needed"
          title="Book a GLP-1 follow-up to continue your prescription"
          description="Your provider needs a bit more information before they can continue your prescription."
          cta="Continue"
          secondaryCta="View progress"
        />

        <div>
          <FreyaSectionHeader title="What to expect" />
          <FreyaCarousel dotCount={3} activeDot={0}>
            <FreyaContentCard
              badge="GLP-1"
              subjectTag="GETTING STARTED"
              title="What to expect in your first month on GLP-1 medication"
              timeLabel="5 min read"
            />
            <FreyaContentCard
              badge="Nutrition"
              subjectTag="DIET & WELLNESS"
              title="High-protein meals that support your weight loss journey"
              timeLabel="4 min read"
            />
          </FreyaCarousel>
        </div>

        <div>
          <h2
            className="mb-4"
            style={{
              fontSize: 28,
              lineHeight: 1.2,
              fontFamily: "var(--font-family-b2c-emphasis)",
              fontStyle: "italic",
              color: "var(--color-b2c-text-primary)",
              fontWeight: 400,
            }}
          >
            Have questions?
          </h2>
          <div className="flex flex-col gap-3">
            <FreyaSupportCard
              title="Call Support"
              subtitle={"Mon\\u2013Fri: 9 AM\\u20139 PM ET\\nSat\\u2013Sun: 10 AM\\u20136 PM ET"}
              ctaLabel="Call Now"
              icon="phone"
            />
            <FreyaSupportCard
              title="Message Us"
              subtitle="We'll reply within 1\\u20132 business days."
              ctaLabel="Send Message"
              icon="message"
            />
          </div>
        </div>
      </div>

      <FreyaFooter />
    </ScreenShell>
  );
}
`;
}

function consumerCareTemplate(name: string): string {
  return `"use client";

import { ScreenShell } from "@/components/screen/ScreenShell";
import {
  FreyaNavBar,
  FreyaTabBar,
  FreyaSectionHeader,
  FreyaAppointmentCard,
  FreyaButton,
  FreyaCarousel,
  FreyaContentCard,
  FreyaFooter,
} from "@/components/freya";

export default function ${name}() {
  return (
    <ScreenShell>
      <FreyaNavBar />
      <FreyaTabBar tabs={["Home", "Rx", "Care"]} activeTab="Care" />

      <div className="px-4 flex flex-col gap-6 pb-6">
        <div>
          <FreyaSectionHeader title="Appointments" action="View all" />
          <FreyaAppointmentCard
            providerName="Marie Christine"
            specialty="Metabolic and Women's Health Provider"
            dateTime="Thursday, March 18 at 8:00 AM"
          />
        </div>

        <div>
          <h2
            className="text-[24px] leading-[1.2] mb-3"
            style={{
              fontFamily: "var(--font-family-b2c-emphasis)",
              color: "var(--color-b2c-text-primary)",
            }}
          >
            GLP-1 Care
          </h2>
          <div
            className="rounded-xl p-4"
            style={{
              border: "1px solid var(--color-b2c-border-primary)",
              backgroundColor: "var(--color-b2c-surface-primary)",
            }}
          >
            <h3
              className="text-base font-semibold mb-1"
              style={{ color: "var(--color-b2c-text-primary)" }}
            >
              Support for your GLP-1 treatment
            </h3>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--color-b2c-text-secondary)" }}
            >
              Get help managing side effects and tracking progress with ongoing provider support.
            </p>
            <div className="flex flex-col gap-2">
              <FreyaButton variant="primary">Book a video appointment</FreyaButton>
              <FreyaButton variant="secondary">Message GLP-1 Care Team</FreyaButton>
            </div>
          </div>
        </div>

        <div>
          <FreyaSectionHeader title="Maven Clinic" showSearch />
          <FreyaCarousel>
            <FreyaContentCard
              subjectTag="NUTRITION SUPPORT"
              title="Making healthy choices, supplements, managing your weight"
              badgeVariant="neutral"
            />
            <FreyaContentCard
              subjectTag="EMOTIONAL SUPPORT"
              title="Help navigating moments, transitions"
              badgeVariant="neutral"
            />
          </FreyaCarousel>
        </div>
      </div>

      <FreyaFooter />
    </ScreenShell>
  );
}
`;
}

function consumerRxTemplate(name: string): string {
  return `"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ScreenShell } from "@/components/screen/ScreenShell";
import {
  FreyaNavBar,
  FreyaTabBar,
  FreyaBadge,
  FreyaButton,
  FreyaFooter,
} from "@/components/freya";

export default function ${name}() {
  const [view, setView] = useState<"list" | "detail">("list");

  if (view === "detail") {
    return (
      <ScreenShell>
        <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid var(--color-b2c-border-disabled)" }}>
          <button onClick={() => setView("list")} className="text-sm" style={{ color: "var(--color-b2c-text-link)" }}>
            &larr; Back
          </button>
          <span className="text-base font-medium" style={{ color: "var(--color-b2c-text-primary)" }}>Your Prescription</span>
        </div>
        <div className="px-4 flex flex-col gap-5 pb-6 pt-4">
          <h1
            className="text-[28px] leading-[1.2]"
            style={{ fontFamily: "var(--font-family-b2c-emphasis)", color: "var(--color-b2c-text-primary)" }}
          >
            Zepbound Pen
          </h1>
          <div className="rounded-xl p-4 flex flex-col gap-3" style={{ border: "1px solid var(--color-b2c-border-primary)" }}>
            <h3 className="text-base font-semibold" style={{ color: "var(--color-b2c-text-primary)" }}>
              Request your next dose
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-b2c-text-secondary)" }}>
              You're almost up on your monthly supply. Let your Care Team know how it's going.
            </p>
            <FreyaButton variant="primary">Request next dose</FreyaButton>
          </div>
        </div>
        <FreyaFooter />
      </ScreenShell>
    );
  }

  return (
    <ScreenShell>
      <FreyaNavBar />
      <FreyaTabBar tabs={["Home", "Rx", "Care"]} activeTab="Rx" />
      <div className="px-4 flex flex-col gap-4 pb-6">
        <h2
          className="text-[24px] leading-[1.2] mt-2"
          style={{ fontFamily: "var(--font-family-b2c-emphasis)", color: "var(--color-b2c-text-primary)" }}
        >
          Active Prescriptions
        </h2>
        <button
          onClick={() => setView("detail")}
          className="w-full rounded-xl p-4 flex items-center justify-between text-left"
          style={{ border: "1px solid var(--color-b2c-border-primary)" }}
        >
          <div>
            <h3 className="text-base font-semibold" style={{ color: "var(--color-b2c-text-primary)" }}>Zepbound Pen</h3>
            <p className="text-sm mt-0.5" style={{ color: "var(--color-b2c-text-secondary)" }}>0.5mg Weekly</p>
          </div>
          <div className="flex items-center gap-2">
            <FreyaBadge label="Order dose" variant="maven" />
            <ChevronRight className="w-4 h-4" style={{ color: "var(--color-b2c-text-tertiary)" }} />
          </div>
        </button>
      </div>
      <FreyaFooter />
    </ScreenShell>
  );
}
`;
}
