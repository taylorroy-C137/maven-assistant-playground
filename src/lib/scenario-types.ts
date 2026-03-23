export type MessageRole = "agent" | "user" | "medical-team";

export interface Attachment {
  filename: string;
  type: string;
}

export interface SmartCard {
  kind: "appointment" | "booking" | "escalation";
  title: string;
  subtitle?: string;
  time?: string;
  bio?: string;
  actions?: CardAction[];
  visited?: boolean;
}

export interface CardAction {
  label: string;
  variant: "primary" | "secondary" | "destructive";
}

export interface Turn {
  role: MessageRole;
  text: string;
  author?: string;
  eyebrow?: string;
  timestamp?: string;
  chips?: string[];
  cards?: SmartCard[];
  attachments?: Attachment[];
  generating?: boolean;
  sendFailure?: boolean;
  generatingDelayMs?: number;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  author: string;
  createdAt: string;
  isTemplate: boolean;
  group?: "Health" | "Program & App";
  memberContext: string;
  turns: Turn[];
  variants?: Record<string, Turn[]>;
}
