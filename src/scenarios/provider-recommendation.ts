import type { Scenario } from "@/lib/scenario-types";

export const providerRecommendation: Scenario = {
  id: "provider-recommendation",
  title: "Provider Recommendation",
  description:
    "The assistant recommends a specialist based on the member's needs.",
  author: "Maven",
  createdAt: "2026-03-20",
  isTemplate: true,
  label: "Maven Assistant",
  memberContext:
    "A member describes symptoms and the assistant recommends an appropriate specialist from their care team.",
  turns: [
    {
      role: "user",
      text: "I've been having really bad lower back pain since I started my third trimester. Is this normal? Should I see someone?",
      timestamp: "11:45am",
    },
    {
      role: "agent",
      author: "Maven Assistant",
      text: "Lower back pain in the third trimester is very common — your body is adjusting to the extra weight and your center of gravity is shifting. That said, it's worth getting checked if the pain is severe or affecting your daily activities.\n\nI'd recommend seeing a physical therapist who specializes in prenatal care. They can help with exercises and techniques specific to pregnancy-related back pain.",
      timestamp: "11:45am",
      generatingDelayMs: 2200,
    },
    {
      role: "agent",
      author: "Maven Assistant",
      text: "Here's a great match from your care network:",
      timestamp: "11:46am",
      generatingDelayMs: 800,
      cards: [
        {
          kind: "appointment",
          title: "Dr. Abby Bales",
          subtitle: "Physical Therapist, DPT, CSCS",
          time: "Next available: Monday, March 31 at 1:00pm",
          bio: "Dr. Bales specializes in prenatal and postpartum movement. She focuses on building strength safely during pregnancy and recovery.",
          actions: [
            { label: "Book appointment", variant: "primary" },
            { label: "View profile", variant: "secondary" },
          ],
        },
      ],
      chips: [
        "Book with Dr. Bales",
        "What exercises can I do now?",
        "Is this covered by my plan?",
      ],
    },
  ],
};
