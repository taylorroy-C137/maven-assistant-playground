"use client";

export function FreyaFooter() {
  return (
    <div
      className="px-4 py-6 text-center"
      style={{ borderTop: "1px solid var(--color-b2c-border-disabled)" }}
    >
      <p
        className="text-xs"
        style={{ color: "var(--color-b2c-text-tertiary)" }}
      >
        &copy; 2026 Maven Clinic Co. All rights reserved.
      </p>
      <div className="flex items-center justify-center gap-3 mt-2">
        {["Terms", "Privacy", "Security", "Sitemap"].map((link) => (
          <span
            key={link}
            className="text-xs underline cursor-pointer"
            style={{ color: "var(--color-b2c-text-tertiary)" }}
          >
            {link}
          </span>
        ))}
      </div>
    </div>
  );
}
