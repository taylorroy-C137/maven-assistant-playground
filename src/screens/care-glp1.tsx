"use client";

import { Apple, Dumbbell } from "lucide-react";
import { ScreenShell } from "@/components/screen/ScreenShell";
import {
  FreyaNavBar,
  FreyaTabBar,
  FreyaSectionHeader,
  FreyaAppointmentCard,
  FreyaButton,
  FreyaAccordion,
  FreyaCarousel,
  FreyaContentCard,
  FreyaFooter,
} from "@/components/freya";

export default function CareGlp1Screen() {
  return (
    <ScreenShell>
      <FreyaNavBar />
      <FreyaTabBar tabs={["Home", "Rx", "Care"]} activeTab="Care" />

      <div className="px-4 flex flex-col gap-6 pb-6">
        {/* Appointments */}
        <div>
          <FreyaSectionHeader title="Appointments" action="View all" />
          <FreyaAppointmentCard
            providerName="Marie Christine"
            specialty="Metabolic and Women's Health Provider"
            dateTime="Thursday, March 18 at 8:00 AM"
          />
        </div>

        {/* GLP-1 Care section */}
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
            className="rounded-xl p-4 mb-3"
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

        {/* Ongoing weight management */}
        <FreyaAccordion
          title="Ongoing weight management"
          description="Continue to get expert support around eating, movement, and healthy habits."
          items={[
            {
              icon: <Apple className="w-5 h-5" style={{ color: "var(--color-b2c-icon-maven)" }} />,
              label: "Nutrition",
              subLabel: "Book a consultation",
              badge: "1x Free",
            },
            {
              icon: <Dumbbell className="w-5 h-5" style={{ color: "var(--color-b2c-icon-maven)" }} />,
              label: "Physical therapy",
              subLabel: "Book a consultation",
              badge: "1x Free",
            },
          ]}
        />

        {/* Maven Clinic topic carousel */}
        <div>
          <FreyaSectionHeader title="Maven Clinic" showSearch />
          <p
            className="text-sm mb-3"
            style={{ color: "var(--color-b2c-text-secondary)" }}
          >
            Find on-demand care by topic
          </p>
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
