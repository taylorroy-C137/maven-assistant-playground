"use client";

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

export default function P223TestPage() {
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
              subtitle={"Mon\u2013Fri: 9 AM\u20139 PM ET\nSat\u2013Sun: 10 AM\u20136 PM ET"}
              ctaLabel="Call Now"
              icon="phone"
            />
            <FreyaSupportCard
              title="Message Us"
              subtitle="We'll reply within 1\u20132 business days."
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
