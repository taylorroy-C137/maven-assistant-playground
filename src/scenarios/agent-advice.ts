import type { Scenario } from "@/lib/scenario-types";

export const agentAdvice: Scenario = {
  id: "agent-advice",
  title: "Agent Advice",
  description:
    "The assistant provides general wellness advice and follow-up suggestions.",
  author: "Maven",
  createdAt: "2026-03-20",
  isTemplate: true,
  label: "Maven Assistant",
  memberContext:
    "A member asks the Maven Assistant a general wellness question and receives advice with follow-up options.",
  turns: [
    {
      role: "user",
      text: "I've been feeling really fatigued lately, even though I'm sleeping 8 hours. What could be going on?",
      timestamp: "10:30am",
    },
    {
      role: "agent",
      author: "Maven Assistant",
      text: "Fatigue despite adequate sleep can have many causes. Here are some common ones worth exploring:\n\n• Thyroid function — both hypo- and hyperthyroidism can cause fatigue\n• Iron levels — low iron is one of the most common causes in women\n• Sleep quality — 8 hours of disrupted sleep isn't the same as 8 hours of restful sleep\n• Stress and cortisol — chronic stress affects energy levels significantly\n• Medication side effects — some medications can cause drowsiness",
      timestamp: "10:30am",
      generatingDelayMs: 2500,
    },
    {
      role: "agent",
      author: "Maven Assistant",
      text: "I'd recommend starting with some basic bloodwork to rule out the most common causes. Would you like to schedule a lab review or talk to a provider?",
      timestamp: "10:31am",
      generatingDelayMs: 1200,
      chips: [
        "Schedule labs",
        "Talk to a provider",
        "Tell me more about sleep quality",
        "Could it be my medication?",
      ],
    },
  ],
};
