import type { ComponentType } from "react";
import type { Turn } from "./scenario-types";

export interface Prototype {
  slug: string;
  designer: string;
  title: string;
  description: string;
  type: "chat" | "screen";
  label: string;
  createdAt: string;
  isTemplate: boolean;
}

export interface ChatPrototype extends Prototype {
  type: "chat";
  turns: Turn[];
  memberContext?: string;
  variants?: Record<string, Turn[]>;
}

export interface ScreenPrototype extends Prototype {
  type: "screen";
  component: ComponentType;
}

export type AnyPrototype = ChatPrototype | ScreenPrototype;

export const DESIGNERS = [
  "andy",
  "ari",
  "chandler",
  "eli",
  "ian",
  "lin",
  "loric",
  "melissa",
  "rachel",
  "rosie",
  "sally",
  "shweta",
  "taryn",
  "taylor",
] as const;

export type Designer = (typeof DESIGNERS)[number];
