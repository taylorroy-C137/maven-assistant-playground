import type { Scenario } from "@/lib/scenario-types";

export const bookProviderAppointment: Scenario = {
  id: "book-provider-appointment",
  title: "Book Medical Provider Appointment",
  description:
    "The assistant helps a member find and book an appointment with a medical provider.",
  author: "Maven",
  createdAt: "2026-03-20",
  isTemplate: true,
  memberContext:
    "A member wants to book an appointment with a medical provider. The assistant helps them find availability and complete the booking.",
  turns: [
    {
      role: "user",
      text: "I need to see a doctor about my hormone levels. Can you help me book an appointment?",
      timestamp: "2:15pm",
    },
    {
      role: "agent",
      author: "Maven Assistant",
      text: "Of course! Based on your care plan, I'd recommend meeting with an endocrinologist or your primary care provider. Here's who's available on your care team:",
      timestamp: "2:15pm",
      generatingDelayMs: 1800,
      cards: [
        {
          kind: "booking",
          title: "Dr. Sarah Chen",
          subtitle: "Endocrinologist",
          time: "Next available: Thursday, March 27 at 10:00am",
          bio: "Dr. Chen specializes in hormone health and has been part of your care team since January.",
          actions: [
            { label: "Book this time", variant: "primary" },
            { label: "See more times", variant: "secondary" },
          ],
        },
        {
          kind: "booking",
          title: "Dr. Laura MacIsaac",
          subtitle: "OB-GYN",
          time: "Next available: Friday, March 28 at 3:30pm",
          actions: [
            { label: "Book this time", variant: "primary" },
            { label: "See more times", variant: "secondary" },
          ],
        },
      ],
    },
    {
      role: "agent",
      author: "Maven Assistant",
      text: "Would you like to book with one of these providers, or would you prefer to see someone else?",
      timestamp: "2:16pm",
      generatingDelayMs: 800,
      chips: [
        "Book with Dr. Chen",
        "Book with Dr. MacIsaac",
        "Show more providers",
        "What should I prepare?",
      ],
    },
  ],
};
