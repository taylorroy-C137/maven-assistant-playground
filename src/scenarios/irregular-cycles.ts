import type { Scenario } from "@/lib/scenario-types";

export const irregularCycles: Scenario = {
  id: "irregular-cycles",
  title: "Irregular Cycles",
  description:
    "Member wants to talk about irregular cycles. Demonstrates thinking state, short reply, and long reply variants.",
  author: "Maven",
  createdAt: "2026-03-25",
  isTemplate: false,
  label: "Maven Assistant",
  group: "Health",
  memberContext:
    "A member reaches out about irregular menstrual cycles. Used to demonstrate core assistant UI states: thinking, short text response, and long text response.",
  turns: [
    {
      role: "user",
      text: "I want to talk to someone about my irregular cycles",
      timestamp: "8:33am",
    },
    {
      role: "agent",
      text: "",
      generating: true,
      generatingDelayMs: 999999,
    },
  ],
  variants: {
    "Short reply": [
      {
        role: "user",
        text: "I want to talk to someone about my irregular cycles",
        timestamp: "8:33am",
      },
      {
        role: "agent",
        text: "Okay, let's get started. Tell me more about the cramping \u2014 Is the pain constant or does it come and go? Have you noticed any unusual bleeding or discharge?",
        generatingDelayMs: 1800,
      },
    ],
    "Long reply": [
      {
        role: "user",
        text: "I want to talk to someone about my irregular cycles",
        timestamp: "8:33am",
      },
      {
        role: "agent",
        text: "**Super long message example**\n\nOkay, let's get started. Tell me more about the cramping \u2014 Is the pain constant or does it come and go? Have you noticed any unusual bleeding or discharge?\n\nOkay, let's get started. Tell me more about the cramping \u2014 Is the pain constant or does it come and go? Have you noticed any unusual bleeding or discharge?\n\nOkay, let's get started. Tell me more about the cramping \u2014 Is the pain constant or does it come and go? Have you noticed any unusual bleeding or discharge?",
        generatingDelayMs: 2200,
      },
    ],
  },
};
