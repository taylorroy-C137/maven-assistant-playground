import type { Scenario } from "./scenario-types";
import { glp1WeightGoals } from "@/scenarios/glp1-weight-goals";
import { agentAdvice } from "@/scenarios/agent-advice";
import { bookProviderAppointment } from "@/scenarios/book-provider-appointment";
import { providerRecommendation } from "@/scenarios/provider-recommendation";
import { handoffToSupport } from "@/scenarios/handoff-to-support";
import { template } from "@/scenarios/_template";
import { healthScenarios } from "@/scenarios/health-scenarios";
import { programScenarios } from "@/scenarios/program-scenarios";

const all: Scenario[] = [
  glp1WeightGoals,
  agentAdvice,
  bookProviderAppointment,
  providerRecommendation,
  handoffToSupport,
  template,
  ...healthScenarios,
  ...programScenarios,
];

export const allScenarios = all.filter((s) => !s.isTemplate);
export const templates = all.filter((s) => s.isTemplate);

export function getScenarioBySlug(slug: string): Scenario | undefined {
  return all.find((s) => s.id === slug);
}

export function groupByMonth(
  scenarios: Scenario[],
): { label: string; items: Scenario[] }[] {
  const groups = new Map<string, Scenario[]>();

  const sorted = [...scenarios].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  for (const s of sorted) {
    const date = new Date(s.createdAt);
    const now = new Date();
    const diffDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24),
    );

    let label: string;
    if (diffDays < 7) label = "This week";
    else if (diffDays < 30) label = "This month";
    else {
      label = date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
    }

    if (!groups.has(label)) groups.set(label, []);
    groups.get(label)!.push(s);
  }

  return Array.from(groups.entries()).map(([label, items]) => ({
    label,
    items,
  }));
}

export function groupTemplates(): { label: string; items: Scenario[] }[] {
  const grouped = new Map<string, Scenario[]>();

  for (const s of templates) {
    const label = s.group ?? "Other";
    if (!grouped.has(label)) grouped.set(label, []);
    grouped.get(label)!.push(s);
  }

  const ORDER = ["Health", "Program & App", "Other"];
  return ORDER.filter((label) => grouped.has(label)).map((label) => ({
    label,
    items: grouped.get(label)!,
  }));
}
