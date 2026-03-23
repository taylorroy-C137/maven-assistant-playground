"use client";

import { ChevronRight } from "lucide-react";

interface FreyaAppointmentCardProps {
  providerName: string;
  specialty: string;
  dateTime: string;
  providerImage?: string;
  ctaLabel?: string;
}

export function FreyaAppointmentCard({
  providerName,
  specialty,
  dateTime,
  providerImage,
  ctaLabel = "View appointment",
}: FreyaAppointmentCardProps) {
  const initials = providerName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className="rounded-xl p-4 flex flex-col gap-3"
      style={{
        backgroundColor: "var(--color-b2c-surface-primary)",
        border: "1px solid var(--color-b2c-border-primary)",
      }}
    >
      <div className="flex items-center gap-3">
        {providerImage ? (
          <img
            src={providerImage}
            alt={providerName}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold"
            style={{
              backgroundColor: "var(--color-b2c-surface-secondary)",
              color: "var(--color-b2c-text-secondary)",
            }}
          >
            {initials}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p
            className="text-sm font-semibold"
            style={{ color: "var(--color-b2c-text-primary)" }}
          >
            {providerName}
          </p>
          <p
            className="text-xs leading-snug"
            style={{ color: "var(--color-b2c-text-secondary)" }}
          >
            {specialty}
          </p>
          <p
            className="text-xs mt-0.5"
            style={{ color: "var(--color-b2c-text-secondary)" }}
          >
            {dateTime}
          </p>
        </div>
      </div>
      <button
        className="flex items-center justify-center gap-1 text-sm font-medium"
        style={{ color: "var(--color-b2c-text-link)" }}
      >
        {ctaLabel}
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
