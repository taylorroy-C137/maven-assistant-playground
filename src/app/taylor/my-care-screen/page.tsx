"use client";

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

export default function MyCareScreenPage() {
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
