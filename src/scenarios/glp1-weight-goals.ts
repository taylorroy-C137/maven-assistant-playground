import type { Scenario } from "@/lib/scenario-types";

export const glp1WeightGoals: Scenario = {
  id: "glp1-weight-goals",
  title: "GLP-1: Weight-Loss Goals",
  description:
    "A consumer on GLP-1 treatment asks about their weight-loss goals and progress.",
  author: "Taylor",
  createdAt: "2026-03-23",
  isTemplate: false,
  memberContext:
    "Clara, 38, has been on semaglutide for 6 weeks. She wants to understand what realistic weight-loss milestones look like and whether her progress is on track.",
  turns: [
    {
      role: "user",
      text: "I've been on semaglutide for about 6 weeks now. Is my weight loss on track? I've lost about 8 pounds so far.",
      timestamp: "9:12am",
    },
    {
      role: "agent",
      author: "Maven Assistant",
      text: "Great question, Clara! Losing 8 pounds in 6 weeks is a really solid start — that's right in the expected range.\n\nMost people on semaglutide see about 5-10% of their body weight lost in the first 3 months, with results continuing to build over 6-12 months as your dose is optimized.\n\nHere are a few things to keep in mind:",
      timestamp: "9:12am",
      generatingDelayMs: 2000,
    },
    {
      role: "agent",
      author: "Maven Assistant",
      text: "• Weight loss isn't always linear — some weeks you may lose more, others less\n• Focus on trends over 2-4 week windows, not day-to-day changes\n• Combining medication with nutrition and movement typically improves outcomes\n• Your care team can adjust your dose if progress plateaus",
      timestamp: "9:12am",
      generatingDelayMs: 1800,
      chips: [
        "What should I eat?",
        "When does my dose increase?",
        "Book a check-in",
        "Show my progress",
      ],
    },
  ],
  variants: {
    "Clarifying question": [
      {
        role: "user",
        text: "I've been on semaglutide for about 6 weeks now. Is my weight loss on track? I've lost about 8 pounds so far.",
        timestamp: "9:12am",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "I'd love to help you understand your progress! To give you the most accurate guidance, could you share a few details?",
        timestamp: "9:12am",
        generatingDelayMs: 1500,
        chips: [
          "Sure, what do you need?",
          "Just give me general info",
        ],
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "• What's your current dose of semaglutide?\n• What was your starting weight?\n• Have you noticed any side effects?\n\nThis will help me give you personalized guidance rather than just general ranges.",
        timestamp: "9:13am",
        generatingDelayMs: 1200,
      },
    ],
    "Source cards": [
      {
        role: "user",
        text: "I've been on semaglutide for about 6 weeks now. Is my weight loss on track? I've lost about 8 pounds so far.",
        timestamp: "9:12am",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "Great progress, Clara! 8 pounds in 6 weeks is right within the expected range. Here's what the clinical data shows, along with a resource from your care team:",
        timestamp: "9:12am",
        generatingDelayMs: 2000,
        cards: [
          {
            kind: "appointment",
            title: "GLP-1 Weight Loss Milestones",
            subtitle: "Clinical resource from your care team",
            time: "Updated March 2026",
            actions: [
              { label: "View resource", variant: "primary" },
              { label: "Save", variant: "secondary" },
            ],
          },
        ],
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "Would you like to schedule a check-in with your provider to review your progress in detail?",
        timestamp: "9:13am",
        generatingDelayMs: 1000,
        cards: [
          {
            kind: "booking",
            title: "Dr. Sarah Chen",
            subtitle: "Weight management specialist",
            time: "Next available: Friday, March 28 at 2:00pm",
            actions: [
              { label: "Book appointment", variant: "primary" },
              { label: "See other times", variant: "secondary" },
            ],
          },
        ],
      },
    ],
    "Error / recovery": [
      {
        role: "user",
        text: "I've been on semaglutide for about 6 weeks now. Is my weight loss on track? I've lost about 8 pounds so far.",
        timestamp: "9:12am",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "",
        timestamp: "9:12am",
        generating: true,
        generatingDelayMs: 3000,
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "I'm sorry, I'm having trouble retrieving your health records right now. Let me try a different approach.",
        timestamp: "9:12am",
        sendFailure: false,
        generatingDelayMs: 1500,
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "Based on general guidance: losing 8 pounds in 6 weeks on semaglutide is within the expected range. For personalized feedback based on your specific records, I'd recommend connecting with your care team directly.",
        timestamp: "9:13am",
        generatingDelayMs: 1500,
        chips: ["Connect with care team", "That's helpful, thanks"],
      },
    ],
    Escalation: [
      {
        role: "user",
        text: "I've been on semaglutide for about 6 weeks now and I'm experiencing severe nausea and I can't keep anything down. Should I be worried?",
        timestamp: "9:12am",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "I'm sorry to hear you're dealing with that, Clara. While some nausea is common with semaglutide, persistent severe nausea that prevents you from keeping food down is something your care team should know about right away.",
        timestamp: "9:12am",
        generatingDelayMs: 2000,
        cards: [
          {
            kind: "escalation",
            title: "Connecting you with your care team",
            subtitle:
              "Your symptoms may require a dose adjustment or clinical review. A member of your care team will follow up with you shortly.",
            actions: [
              { label: "View care team", variant: "primary" },
            ],
          },
        ],
      },
    ],
  },
};
