import type { Scenario } from "@/lib/scenario-types";

export const template: Scenario = {
  id: "template",
  title: "Default Maven Assistant",
  description: "A blank starting point — duplicate this to begin building a new prototype from scratch.",
  author: "Maven",
  createdAt: new Date().toISOString().split("T")[0],
  isTemplate: true,
  label: "Maven Assistant",
  memberContext: "Describe the member and their situation here.",
  turns: [
    {
      role: "user",
      text: "Hi, I have a question about…",
      timestamp: "9:00am",
    },
    {
      role: "agent",
      author: "Maven Assistant",
      text: "Hi there! I'd be happy to help. Could you tell me a bit more about what you're looking for?",
      timestamp: "9:00am",
      generatingDelayMs: 1500,
    },
  ],
  variants: {
    "Clarifying question": [
      {
        role: "user",
        text: "Hi, I have a question about…",
        timestamp: "9:00am",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "Of course! Before I answer, could you clarify a few things?",
        timestamp: "9:00am",
        chips: ["Yes, go ahead", "I'll just ask my question"],
        generatingDelayMs: 1500,
      },
    ],
  },
};
