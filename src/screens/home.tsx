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

export default function HomeScreen() {
  return (
    <ScreenShell>
      <FreyaNavBar />
      <FreyaTabBar tabs={["Home", "Rx", "Care"]} activeTab="Home" />

      <div className="px-4 flex flex-col gap-6 pb-6">
        {/* Welcome heading */}
        <h1
          className="text-[34px] leading-[1.2] mt-2"
          style={{
            fontFamily: "var(--font-family-b2c-emphasis)",
            fontStyle: "italic",
            color: "var(--color-b2c-text-primary)",
          }}
        >
          Welcome, <em>Kate</em>
        </h1>

        {/* GLP-1 Care task card */}
        <FreyaTaskCard
          badge="GLP-1 CARE"
          title="Book a GLP-1 follow-up to continue your prescription"
          description="Your provider needs a bit more information before they can continue your prescription. Please review their message and reply."
          cta="Continue"
          secondaryCta="View progress"
        />

        {/* What to expect */}
        <div>
          <FreyaSectionHeader title="What to expect" />
          <FreyaCarousel>
            <FreyaContentCard
              badge="Badge"
              subjectTag="SUBJECT TAG"
              title="Article title goes here Nullam id dolor id nibh ultricies vehicula"
              timeLabel="Time and format"
            />
            <FreyaContentCard
              badge="Badge"
              subjectTag="SUBJECT TAG"
              title="Article title goes here Nullam id dolor id nibh ultricies vehicula"
              timeLabel="Time and format"
            />
          </FreyaCarousel>
        </div>

        {/* Recommended */}
        <div>
          <FreyaSectionHeader title="Recommended" showSearch />
          <FreyaCarousel>
            <FreyaContentCard
              badge="Badge"
              subjectTag="SUBJECT TAG"
              title="Article title goes here Nullam id dolor id nibh ultricies vehicula"
              timeLabel="Time and format"
            />
            <FreyaContentCard
              badge="Badge"
              subjectTag="SUBJECT TAG"
              title="Article title goes here Nullam id dolor id nibh ultricies vehicula"
              timeLabel="Time and format"
            />
          </FreyaCarousel>
        </div>

        {/* Have questions? */}
        <div>
          <h2
            className="text-[28px] leading-[1.2] mb-4"
            style={{
              fontFamily: "var(--font-family-b2c-emphasis)",
              fontStyle: "italic",
              color: "var(--color-b2c-text-primary)",
            }}
          >
            Have questions?
          </h2>
          <div className="flex flex-col gap-3">
            <FreyaSupportCard
              title="Call Support"
              subtitle="Mon–Fri: 9 AM–9 PM ET
Sat–Sun: 10 AM–6 PM ET"
              ctaLabel="Call Now"
              icon="phone"
            />
            <FreyaSupportCard
              title="Message Us"
              subtitle="We'll reply within 1–2 business days."
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
