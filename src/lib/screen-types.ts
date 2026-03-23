import type { ComponentType } from "react";

export interface Screen {
  id: string;
  title: string;
  description: string;
  label: string;
  createdAt: string;
  component: ComponentType;
}
