import type { AnyPrototype, ChatPrototype, ScreenPrototype, Prototype } from "./prototype-types";
import type { Scenario } from "./scenario-types";

import { glp1WeightGoals } from "@/scenarios/glp1-weight-goals";
import { agentAdvice } from "@/scenarios/agent-advice";
import { bookProviderAppointment } from "@/scenarios/book-provider-appointment";
import { providerRecommendation } from "@/scenarios/provider-recommendation";
import { handoffToSupport } from "@/scenarios/handoff-to-support";
import { template } from "@/scenarios/_template";
import { healthScenarios } from "@/scenarios/health-scenarios";
import { programScenarios } from "@/scenarios/program-scenarios";

import HomeScreen from "@/screens/home";
import CareGlp1Screen from "@/screens/care-glp1";
import RxScreen from "@/screens/rx";

function scenarioToChat(s: Scenario, designer: string): ChatPrototype {
  return {
    slug: s.id,
    designer,
    title: s.title,
    description: s.description,
    type: "chat",
    label: s.label ?? "Maven Assistant",
    createdAt: s.createdAt,
    isTemplate: s.isTemplate,
    turns: s.turns,
    memberContext: s.memberContext,
    variants: s.variants,
  };
}

const allScenarios: Scenario[] = [
  glp1WeightGoals,
  agentAdvice,
  bookProviderAppointment,
  providerRecommendation,
  handoffToSupport,
  template,
  ...healthScenarios,
  ...programScenarios,
];

const chatPrototypes: ChatPrototype[] = allScenarios.map((s) =>
  scenarioToChat(s, "taylor"),
);

const screenPrototypes: ScreenPrototype[] = [
  {
    slug: "home",
    designer: "taylor",
    title: "Home",
    description: "B2C consumer home screen with welcome, task cards, content carousels, and support.",
    type: "screen",
    label: "Consumer",
    createdAt: "2026-03-23",
    isTemplate: false,
    component: HomeScreen,
  },
  {
    slug: "care-glp1",
    designer: "taylor",
    title: "Care (GLP-1 Care)",
    description: "GLP-1 care dashboard with appointments, support options, and weight management.",
    type: "screen",
    label: "Consumer",
    createdAt: "2026-03-23",
    isTemplate: false,
    component: CareGlp1Screen,
  },
  {
    slug: "rx",
    designer: "taylor",
    title: "Rx (Prescriptions)",
    description: "Active prescriptions list with tap-to-detail view for Zepbound Pen.",
    type: "screen",
    label: "Consumer",
    createdAt: "2026-03-23",
    isTemplate: false,
    component: RxScreen,
  },
];

const allPrototypes: AnyPrototype[] = [...chatPrototypes, ...screenPrototypes];

export const prototypes = allPrototypes.filter((p) => !p.isTemplate);
export const templates = allPrototypes.filter((p) => p.isTemplate);

export function getPrototype(
  designer: string,
  slug: string,
): AnyPrototype | undefined {
  return allPrototypes.find(
    (p) => p.designer === designer && p.slug === slug,
  );
}

export function groupByMonth(
  items: Prototype[],
): { label: string; items: Prototype[] }[] {
  const groups = new Map<string, Prototype[]>();

  const sorted = [...items].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  for (const p of sorted) {
    const date = new Date(p.createdAt);
    const isCurrentMonth =
      date.getMonth() === currentMonth && date.getFullYear() === currentYear;

    const label = isCurrentMonth
      ? "This month"
      : date.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        });

    if (!groups.has(label)) groups.set(label, []);
    groups.get(label)!.push(p);
  }

  return Array.from(groups.entries()).map(([label, items]) => ({
    label,
    items,
  }));
}
