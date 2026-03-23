import type { Screen } from "./screen-types";
import HomeScreen from "@/screens/home";
import CareGlp1Screen from "@/screens/care-glp1";
import RxScreen from "@/screens/rx";

export const allScreens: Screen[] = [
  {
    id: "home",
    title: "Home",
    description: "B2C consumer home screen with welcome, task cards, content carousels, and support.",
    label: "Consumer",
    createdAt: "2026-03-23",
    component: HomeScreen,
  },
  {
    id: "care-glp1",
    title: "Care (GLP-1 Care)",
    description: "GLP-1 care dashboard with appointments, support options, and weight management.",
    label: "Consumer",
    createdAt: "2026-03-23",
    component: CareGlp1Screen,
  },
  {
    id: "rx",
    title: "Rx (Prescriptions)",
    description: "Active prescriptions list with tap-to-detail view for Zepbound Pen.",
    label: "Consumer",
    createdAt: "2026-03-23",
    component: RxScreen,
  },
];

export function getScreenBySlug(slug: string): Screen | undefined {
  return allScreens.find((s) => s.id === slug);
}
