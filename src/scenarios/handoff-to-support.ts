import type { Scenario } from "@/lib/scenario-types";

export const handoffToSupport: Scenario = {
  id: "handoff-to-support",
  title: "Handoff to Support",
  description:
    "The assistant recognizes a situation that requires human support and escalates the conversation.",
  author: "Maven",
  createdAt: "2026-03-20",
  isTemplate: true,
  memberContext:
    "A member asks about a billing issue that the AI cannot resolve. The assistant escalates to a human support agent.",
  turns: [
    {
      role: "user",
      text: "I was charged twice for my last appointment and I need a refund. This is really frustrating.",
      timestamp: "3:45pm",
    },
    {
      role: "agent",
      author: "Maven Assistant",
      text: "I'm sorry about the double charge — I completely understand your frustration. Billing issues like this need to be handled by our support team who can access your payment records and process a refund.",
      timestamp: "3:45pm",
      generatingDelayMs: 1800,
    },
    {
      role: "agent",
      author: "Maven Assistant",
      text: "Let me connect you with someone who can help right away.",
      timestamp: "3:46pm",
      generatingDelayMs: 800,
      cards: [
        {
          kind: "escalation",
          title: "Connecting you with Maven Support",
          subtitle:
            "A support team member will be with you shortly to help resolve the billing issue. Average response time: under 5 minutes.",
          actions: [{ label: "View support team", variant: "primary" }],
        },
      ],
    },
    {
      role: "medical-team",
      author: "Sarah from Maven Support",
      text: "Hi there! I can see the duplicate charge on your account. I'm processing a refund right now — you should see it back on your card within 3-5 business days. Is there anything else I can help with?",
      timestamp: "3:49pm",
      generatingDelayMs: 3000,
      chips: ["That's all, thank you!", "I have another question"],
    },
  ],
};
