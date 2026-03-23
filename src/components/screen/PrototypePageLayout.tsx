"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PhoneFrame } from "@/components/chat/PhoneFrame";

interface PrototypePageLayoutProps {
  title: string;
  description: string;
  label: string;
  children: React.ReactNode;
}

const labelColors: Record<string, { bg: string; color: string }> = {
  Consumer: { bg: "rgba(155, 244, 199, 0.9)", color: "#035748" },
  "Maven Assistant": { bg: "rgba(229, 240, 255, 0.9)", color: "#003D99" },
  Enterprise: { bg: "rgba(242, 240, 236, 0.9)", color: "#5C5954" },
};

export function PrototypePageLayout({
  title,
  description,
  label,
  children,
}: PrototypePageLayoutProps) {
  const lc = labelColors[label] ?? labelColors["Enterprise"];

  return (
    <div
      className="min-h-dvh flex flex-col items-center py-8 px-6"
      style={{
        background: "linear-gradient(145deg, #013126 0%, #035748 40%, #00826A 100%)",
      }}
    >
      {/* Top bar: back button */}
      <div className="w-full max-w-[500px] mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Playground
        </Link>
      </div>

      {/* Prototype metadata */}
      <div className="w-full max-w-[500px] mb-5 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span
            className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wide"
            style={{ backgroundColor: lc.bg, color: lc.color }}
          >
            {label}
          </span>
        </div>
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="text-sm text-white/60 leading-relaxed">{description}</p>
      </div>

      {/* Phone frame */}
      <PhoneFrame>{children}</PhoneFrame>
    </div>
  );
}
