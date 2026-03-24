"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { DESIGNERS } from "@/lib/prototype-types";

interface NewPrototypeModalProps {
  onClose: () => void;
}

const TEMPLATES = [
  { id: "blank", name: "Blank" },
  { id: "maven-assistant", name: "Default Maven Assistant" },
  { id: "consumer-home", name: "Consumer Home" },
  { id: "consumer-care", name: "Consumer Care" },
  { id: "consumer-rx", name: "Consumer Rx" },
];

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function NewPrototypeModal({ onClose }: NewPrototypeModalProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [designer, setDesigner] = useState<string>(DESIGNERS[DESIGNERS.length - 1]);
  const [template, setTemplate] = useState("blank");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const slug = toSlug(name);
  const canCreate = name.trim().length > 0;

  const handleCreate = async () => {
    if (!canCreate) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/prototypes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          description: description.trim(),
          designer,
          template,
        }),
      });

      if (res.status === 403) {
        router.push(`/${designer}/${slug}`);
        onClose();
        return;
      }

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to create prototype.");
        setLoading(false);
        return;
      }

      router.push(`/${designer}/${slug}`);
      onClose();
    } catch {
      setError("Failed to create prototype. Make sure you're running locally.");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-maven-border">
          <h2 className="text-base font-semibold text-maven-text">
            New Prototype
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-maven-bg transition-colors"
          >
            <X className="w-4 h-4 text-maven-text-secondary" />
          </button>
        </div>

        <div className="px-6 py-5 space-y-4">
          {/* Name */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-maven-text">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full px-3 py-2.5 text-sm rounded-lg border border-maven-border outline-none focus:border-maven-teal/50 focus:ring-1 focus:ring-maven-teal/20 transition-colors placeholder:text-maven-text-muted"
            />
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-maven-text">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description (optional)"
              rows={3}
              className="w-full px-3 py-2.5 text-sm rounded-lg border border-maven-border outline-none focus:border-maven-teal/50 focus:ring-1 focus:ring-maven-teal/20 transition-colors placeholder:text-maven-text-muted resize-none"
            />
          </div>

          {/* Designer */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-maven-text">
              Designer
            </label>
            <select
              value={designer}
              onChange={(e) => setDesigner(e.target.value)}
              className="w-full px-3 py-2.5 text-sm rounded-lg border border-maven-border outline-none focus:border-maven-teal/50 focus:ring-1 focus:ring-maven-teal/20 transition-colors bg-white"
            >
              {DESIGNERS.map((d) => (
                <option key={d} value={d}>
                  {d.charAt(0).toUpperCase() + d.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Template */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-maven-text">
              Template
            </label>
            <select
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
              className="w-full px-3 py-2.5 text-sm rounded-lg border border-maven-border outline-none focus:border-maven-teal/50 focus:ring-1 focus:ring-maven-teal/20 transition-colors bg-white"
            >
              {TEMPLATES.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          {error && (
            <p className="text-sm text-maven-error">{error}</p>
          )}

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-maven-text-secondary hover:text-maven-text transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleCreate}
              disabled={!canCreate || loading}
              className="px-5 py-2 text-sm font-medium text-white bg-maven-teal rounded-lg disabled:opacity-40 hover:bg-maven-teal-dark transition-colors"
            >
              {loading ? "Creating…" : "Create"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
