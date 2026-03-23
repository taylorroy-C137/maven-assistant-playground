import type { Scenario } from "@/lib/scenario-types";

export const programScenarios: Scenario[] = [
  {
    id: "how-glp1-program-works",
    title: "How Does the GLP-1 Program Work?",
    description:
      "New member asks what actually happens after signing up for the GLP-1 program.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Program & App",
    memberContext:
      "First question a new user asks after landing on the GLP-1 program page. Tests onboarding explanation.",
    turns: [
      {
        role: "user",
        text: "how does this whole glp-1 program work. like what actually happens after i sign up",
        timestamp: "9:33am",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "Great question — here's exactly what happens after you sign up:\n\n**Step 1: Health intake (online, ~15 min)**\nYou'll complete a detailed health history — current medications, medical conditions, weight history. This is reviewed by a licensed provider before anything is prescribed.\n\n**Step 2: Provider review**\nA Maven provider reviews your intake and determines if GLP-1 therapy is appropriate for you. If approved, they'll write your prescription.\n\n**Step 3: Prescription sent to pharmacy**\nYour prescription is sent to a mail-order pharmacy. Medication typically arrives within 5–7 business days.\n\n**Step 4: Ongoing care**\nThis is where Maven's program is different from just getting a prescription:\n• Monthly check-ins with your provider to review progress and adjust dosing\n• Access to nutrition and physical therapy consultations (included)\n• Messaging your care team any time through the app\n• Maven Assistant (that's me!) available 24/7 for questions\n\nThe program is designed to be medical supervision + support, not just a prescription service.",
        timestamp: "9:33am",
        generatingDelayMs: 2500,
        chips: [
          "How much does it cost?",
          "Do I need a video call?",
          "How long does it take to get the medication?",
          "Am I eligible?",
        ],
      },
    ],
  },
  {
    id: "pricing-what-is-included",
    title: "What Does $150/Month Cover?",
    description:
      "Member wants to know exactly what's included in the monthly fee and whether medication is extra.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Program & App",
    memberContext:
      "High-stakes confusion — member doesn't know if the subscription covers medication. Tests clear pricing communication.",
    turns: [
      {
        role: "user",
        text: "what does the $150/month actually cover. is the medication included or is that extra",
        timestamp: "11:15am",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "Good question — I want to be completely clear so there are no surprises.\n\n**The $150/month membership covers:**\n• Your prescription and ongoing medical oversight (provider visits, dosing adjustments)\n• Monthly check-ins with your assigned provider\n• Nutrition consultation (included, at least once)\n• Physical therapy consultation (included, at least once)\n• Unlimited messaging with your care team through the app\n• Access to Maven Assistant 24/7\n\n**Medication is separate.** Here's why that matters:\n• The cost of semaglutide varies depending on whether you're getting brand-name (Wegovy/Ozempic) or compounded semaglutide\n• Brand-name with insurance: often $0–$50/month with a coupon or coverage\n• Brand-name without insurance: typically $900–$1,300/month without assistance\n• Compounded semaglutide: typically $150–$300/month depending on dose\n\nYour provider will discuss which option is right for you. We'll also help you navigate insurance coverage and manufacturer savings programs.",
        timestamp: "11:15am",
        generatingDelayMs: 2500,
        chips: [
          "Does insurance cover the medication?",
          "What's compounded semaglutide?",
          "How do I get started?",
          "Can I cancel anytime?",
        ],
      },
    ],
  },
  {
    id: "first-month-promo-cancellation",
    title: "$50 First Month — Am I Locked In?",
    description:
      "Member wants to know if the first month promotional price commits them to a subscription.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Program & App",
    memberContext:
      "Commitment anxiety. Tests transparent cancellation policy communication.",
    turns: [
      {
        role: "user",
        text: "is the $50 first month thing a trial or am i locked in after that. can i cancel",
        timestamp: "2:05pm",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "The $50 first month is a discounted introductory price — not a trial in the sense that you're not locked in. Here's how it works:\n\n**After the first month:**\n• Your membership automatically continues at the standard rate ($150/month)\n• You will receive a reminder before the renewal\n\n**Cancellation:**\n• You can cancel anytime through the app or by messaging support\n• Cancellation takes effect at the end of your current billing period — you won't be charged for the next month\n• There are no cancellation fees or long-term commitments\n\n**A few things to know before canceling:**\n• Any active prescriptions would need to be discussed with your provider before stopping medication\n• If you're mid-titration on semaglutide, your provider can advise on the safest way to stop if needed\n\nIs there anything specific making you uncertain about committing?",
        timestamp: "2:05pm",
        generatingDelayMs: 2200,
        chips: [
          "How do I cancel?",
          "What happens to my prescription if I cancel?",
          "Tell me more about what's included",
          "I'm ready to sign up",
        ],
      },
    ],
  },
  {
    id: "prescription-process",
    title: "How Do I Get the Prescription?",
    description:
      "Member asks whether they need a video call or just a form, and how long the medication takes to arrive.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Program & App",
    memberContext:
      "Critical path question for new members. Tests Rx workflow explanation including timing expectations.",
    turns: [
      {
        role: "user",
        text: "how do i get the actual prescription. do i have to do a video call or just fill out a form. how long does it take to get the meds",
        timestamp: "4:22pm",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "Here's the exact process:\n\n**Step 1: Health intake form (online, no video required for most people)**\nYou complete a detailed health history online. This typically takes 10–15 minutes and covers your current medications, health history, and weight history.\n\n**Step 2: Async provider review**\nA licensed provider reviews your intake asynchronously — meaning they review it on their own time, not in a live call. Most reviews are completed within 24–48 hours.\n\n**When a video call is required:**\nSome states require a synchronous visit before prescribing controlled medications. If this applies to you, you'll be notified and a quick video appointment will be scheduled — usually 15 minutes.\n\n**Step 3: Prescription to pharmacy**\nOnce approved, your prescription is sent to a pharmacy partner. Medication typically arrives in 5–7 business days after approval.\n\n**Total time from sign-up to first dose:** Most members receive their medication within 7–10 days of completing their intake.\n\n**Important:** If you're prescribed a GLP-1 and already have one from another provider, we can transfer your care.",
        timestamp: "4:22pm",
        generatingDelayMs: 2500,
        chips: [
          "Start my health intake",
          "Am I eligible?",
          "What if my state requires a call?",
          "What medications do you prescribe?",
        ],
      },
    ],
  },
  {
    id: "insurance-coverage",
    title: "Does Insurance Cover This?",
    description:
      "Member with a PPO asks if insurance covers the GLP-1 program or medication.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Program & App",
    memberContext:
      "Very common question. Tests insurance navigation guidance — the answer is nuanced and depends on medication vs. program costs.",
    turns: [
      {
        role: "user",
        text: "does insurance cover any of this. i have a PPO through my job",
        timestamp: "1:48pm",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "Insurance coverage for GLP-1 programs is genuinely complicated right now, so let me break it down clearly:\n\n**The Maven membership fee ($150/month):**\nTypically not covered by insurance directly, but may be partially reimbursable through an FSA or HSA account if you have one.\n\n**The medication (semaglutide):**\nThis is where insurance can make a huge difference:\n\n*If you have type 2 diabetes:* Ozempic is often well-covered (sometimes $0–$50/month with a copay card)\n\n*If you're using it for weight management:* Coverage varies significantly:\n• Some PPO plans do cover Wegovy with prior authorization\n• Prior authorization typically requires a BMI ≥30, or ≥27 with a weight-related condition (hypertension, sleep apnea, etc.)\n• Many employer plans have excluded GLP-1s for weight loss specifically — you'd need to check your specific plan\n\n**How to find out quickly:**\n1. Call the member services number on the back of your insurance card and ask specifically: \"Does my plan cover Wegovy or semaglutide for weight management?\"\n2. Ask for the formulary tier and prior authorization requirements\n\nWe can also help you submit the prior authorization request once you're in the program.",
        timestamp: "1:48pm",
        generatingDelayMs: 2800,
        chips: [
          "Help me check my coverage",
          "What's an FSA/HSA?",
          "What if insurance doesn't cover it?",
          "How do I get started?",
        ],
      },
    ],
  },
  {
    id: "glp1-vs-hormone-care-comparison",
    title: "GLP-1 Program vs. Hormone Care",
    description:
      "Member asks about the difference between the two programs and whether she can do both.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Program & App",
    memberContext:
      "Tests cross-program knowledge. Good opportunity to explain that the two programs are complementary — common upsell scenario.",
    turns: [
      {
        role: "user",
        text: "what's the difference between the glp-1 program and the hormone care thing. can you do both",
        timestamp: "3:10pm",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "Great question — they address different (but often overlapping) needs, and yes, many members do both.\n\n**GLP-1 Program**\n• Focused on weight management\n• Includes: medical assessment, prescription for semaglutide (if eligible), ongoing provider supervision, nutrition and PT consults, monthly check-ins\n• Best for: members whose primary goal is weight loss and who meet GLP-1 eligibility criteria\n\n**Hormone Care Program**\n• Focused on perimenopause, menopause, and hormonal health\n• Includes: hormone assessment, prescription for HRT (if appropriate), follow-up visits, care management\n• Best for: members experiencing perimenopausal symptoms — hot flashes, mood changes, sleep disruption, brain fog, irregular cycles\n\n**Can you do both?**\nYes, and actually for many women in their 40s, combining them makes a lot of sense — hormonal imbalance is often a significant driver of weight gain, and addressing both together tends to produce better outcomes than treating them separately.\n\nMembers enrolled in both programs are typically assigned a coordinating provider who can manage the interaction between both treatments.",
        timestamp: "3:10pm",
        generatingDelayMs: 2500,
        chips: [
          "Tell me more about Hormone Care",
          "Am I eligible for GLP-1?",
          "What does both cost?",
          "Book a consultation",
        ],
      },
    ],
  },
  {
    id: "booking-menopause-specialist",
    title: "Booking a Menopause Specialist",
    description:
      "Member wants to book with a doctor who actually specializes in menopause, not a general doctor.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Program & App",
    memberContext:
      "Tests provider booking flow and specialist availability. Member is frustrated with generalist care and wants someone with real menopause expertise.",
    turns: [
      {
        role: "user",
        text: "how do i book an appointment with someone who actually specializes in menopause. not just a general doctor",
        timestamp: "10:20am",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "I completely understand — getting menopause care from a generalist who isn't up to date on current evidence is frustrating, and you deserve better.\n\nThrough Maven, you can book with providers who specialize in menopause and perimenopause:\n\n**Provider types in our network:**\n• OB-GYNs with a focus on midlife and hormonal health\n• Endocrinologists specializing in hormonal conditions\n• Menopause-certified practitioners (NAMS-certified)\n\n**How to book:**\nYou can filter by specialty when browsing providers. Look for \"Hormone Care\" or \"Menopause\" in the specialty filter. Provider profiles show their areas of focus and approach to HRT.\n\nHere are a couple of available providers who specialize in this area:",
        timestamp: "10:20am",
        generatingDelayMs: 2500,
        cards: [
          {
            kind: "booking",
            title: "Dr. Laura MacIsaac",
            subtitle: "OB-GYN, Hormonal Health Specialist",
            time: "Next available: Thursday, March 27 at 11:00am",
            bio: "Dr. MacIsaac specializes in perimenopause and menopause management, with a focus on individualized hormone therapy and evidence-based care.",
            actions: [
              { label: "Book appointment", variant: "primary" },
              { label: "View profile", variant: "secondary" },
            ],
          },
        ],
        chips: [
          "Book with Dr. MacIsaac",
          "Show more specialists",
          "What should I prepare?",
          "Is this covered by Hormone Care?",
        ],
      },
    ],
  },
  {
    id: "messaging-care-team-urgently",
    title: "Messaging Care Team Urgently",
    description:
      "Member has a side effect and next appointment is 2 weeks away. Wants to know how to message someone and response time.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Program & App",
    memberContext:
      "Urgency test — critical to get right for member safety. Tests care team messaging routing and response time expectations.",
    turns: [
      {
        role: "user",
        text: "i'm having a side effect and my next appointment isn't for 2 weeks. how do i message someone. how fast do they respond",
        timestamp: "7:55am",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "You don't need to wait for your scheduled appointment — you can reach your care team right now.\n\n**How to message your care team:**\nTap the **Messages** tab in the app → select your care team thread → send your message. Your assigned provider and care coordinator will both see it.\n\n**Response times:**\n• During business hours (Mon–Fri, 9am–6pm ET): typically within a few hours\n• After hours or weekends: usually by the next business morning\n\n**For urgent medical concerns** (severe side effects, inability to keep food or fluids down, chest pain, severe abdominal pain): please call 911 or go to urgent care — do not wait for a message response.\n\n**What to include in your message:**\n• Which medication you're taking and your current dose\n• What you're experiencing and when it started\n• How severe it is on a scale of 1–10\n• Whether it's affecting your ability to eat, drink, or function\n\nShall I help you draft that message now?",
        timestamp: "7:55am",
        generatingDelayMs: 2200,
        cards: [
          {
            kind: "escalation",
            title: "Message your care team",
            subtitle:
              "Tap Messages in the app to reach your care team directly. They'll review your concern and respond as soon as possible.",
            actions: [{ label: "Open messages", variant: "primary" }],
          },
        ],
        chips: [
          "Help me write the message",
          "Is this an emergency?",
          "What side effect are you experiencing?",
        ],
      },
    ],
  },
  {
    id: "specialist-types-available",
    title: "What Specialists Are Available?",
    description:
      "Member asks what kind of doctors are available and whether there are perimenopause specialists.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Program & App",
    memberContext:
      "Tests provider network knowledge. Member is specifically asking about menopause/perimenopause specialty.",
    turns: [
      {
        role: "user",
        text: "what kind of doctors can i see on here. do you have anyone who specializes in menopause or perimenopause specifically",
        timestamp: "4:40pm",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "Yes — menopause and perimenopause specialists are a core part of our network. Here's a breakdown of provider types available:\n\n**Hormone & Menopause Care:**\n• OB-GYNs specializing in midlife hormonal health\n• Endocrinologists focused on hormonal conditions\n• NAMS-certified menopause practitioners (the gold standard in menopause care)\n• Internal medicine physicians with hormonal health focus\n\n**Weight Management:**\n• Obesity medicine specialists\n• Endocrinologists for metabolic/thyroid conditions\n• Primary care with GLP-1 prescribing experience\n\n**Allied Health (included in programs):**\n• Registered dietitians (nutrition consultation)\n• Physical therapists (movement and PT consultation)\n• Mental health practitioners (available separately)\n\n**What to look for when browsing:**\nProvider profiles include their clinical focus areas. Filter by \"Menopause\", \"Hormone Care\", or \"Weight Management\" to narrow your search.\n\nWould you like to see available specialists right now?",
        timestamp: "4:40pm",
        generatingDelayMs: 2500,
        chips: [
          "Show me menopause specialists",
          "Book an appointment",
          "What's the Hormone Care program?",
          "Do I need a referral?",
        ],
      },
    ],
  },
  {
    id: "refills-how-they-work",
    title: "How Do Refills Work?",
    description:
      "Member asks whether medication refills are automatic or require a manual request each month.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Program & App",
    memberContext:
      "Operational question about Rx management flow. Tests clear explanation of the refill process.",
    turns: [
      {
        role: "user",
        text: "how do refills work. does it auto renew or do i have to request it every month",
        timestamp: "6:02pm",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "Refills are largely handled automatically, but with some built-in checkpoints to make sure your dosing stays appropriate.\n\n**How it works:**\n\nYour prescription is written with refills included, and your pharmacy will typically ship your next supply automatically before you run out.\n\n**The monthly check-in:**\nEach month, your provider reviews your progress — this is usually a brief async check-in (you answer a few quick questions in the app). This allows them to:\n• Adjust your dose up if you're tolerating it well and ready for the next step\n• Note any side effects or concerns\n• Ensure the prescription renewal is appropriate\n\n**You don't need to request refills manually** unless:\n• Your pharmacy has a question about your prescription\n• There's a delay in your check-in response\n• You've missed a dose cycle and want to restart\n\n**Timing tip:** Most members receive their next month's supply about 5 days before they run out. If you're running low earlier than expected, message your care team to flag it.",
        timestamp: "6:02pm",
        generatingDelayMs: 2200,
        chips: [
          "What if I run out early?",
          "How do I do my monthly check-in?",
          "Can I pause my prescription?",
          "Message care team",
        ],
      },
    ],
  },
  {
    id: "dose-adjustment-logistics",
    title: "Dose Adjustment — Do I Need an Appointment?",
    description:
      "Member's nausea is bad on current dose and wants to know if she needs a full appointment to lower it.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Program & App",
    memberContext:
      "Tests care team messaging vs. appointment routing for clinical decisions. Member is looking for the fastest path to relief.",
    turns: [
      {
        role: "user",
        text: "nausea is really bad on my current dose, want to lower it. do i need a whole appointment for that or can i just message someone",
        timestamp: "1:33pm",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "You don't need a full appointment for a dose adjustment — a message to your care team is the right first step.\n\n**What to message your provider:**\nBe specific about your symptoms so they can make the best decision quickly:\n• Current dose and how long you've been on it\n• Severity of nausea (1–10) and how long it's been this bad\n• Whether you're able to keep food and fluids down\n• Any other symptoms alongside the nausea\n\nYour provider can adjust your prescription and send an updated order to the pharmacy without a live appointment.\n\n**Typical dose adjustment timeline:**\n• Message sent → provider reviews → updated prescription → 3–5 days for updated supply to arrive\n\n**While you wait for the lower dose:**\n• Eat smaller meals more frequently\n• Avoid high-fat or spicy foods\n• Take your injection before bed to sleep through the worst of it\n• Stay well-hydrated with small sips throughout the day",
        timestamp: "1:33pm",
        generatingDelayMs: 2200,
        cards: [
          {
            kind: "escalation",
            title: "Message your care team about your dose",
            subtitle:
              "Your provider can review your symptoms and adjust your prescription without a full appointment.",
            actions: [{ label: "Message care team", variant: "primary" }],
          },
        ],
        chips: [
          "Help me write the message",
          "How bad is too bad?",
          "What are the lower dose options?",
        ],
      },
    ],
  },
  {
    id: "nutrition-pt-consults",
    title: "How to Schedule Nutrition + PT Consults",
    description:
      "Member wants to know how to book the included nutrition and PT consultations and what they cover.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Program & App",
    memberContext:
      "Tests knowledge of included program benefits and the booking flow for allied health consultations.",
    turns: [
      {
        role: "user",
        text: "how do i schedule the nutrition and PT consults that are supposed to be included. what do they actually cover",
        timestamp: "3:50pm",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "Both nutrition and physical therapy consultations are included in your program — here's how to access them and what to expect.\n\n**How to book:**\n1. Go to **Care Team** in the app\n2. Select **Schedule a consultation**\n3. Choose **Nutrition** or **Physical Therapy**\n4. Pick an available time\n\nMost members can get an appointment within 5–7 business days.\n\n**Nutrition Consultation (45–60 min):**\n• What to eat on GLP-1 to maximize results and minimize side effects\n• Protein targets personalized to your weight, activity level, and goals\n• Practical meal strategies for reduced appetite (eating enough of the right things when you're not hungry)\n• Any dietary conditions — PCOS, insulin resistance, food intolerances\n\n**Physical Therapy Consultation (45–60 min):**\n• Assessing your current movement capacity and any limitations\n• Building or preserving muscle during weight loss\n• Managing joint pain that may accompany midlife weight changes\n• A personalized movement plan you can actually follow\n\n**How many are included?**\nMost members receive 1 nutrition and 1 PT consultation per program cycle. Additional sessions can be scheduled at a reduced rate.",
        timestamp: "3:50pm",
        generatingDelayMs: 2500,
        cards: [
          {
            kind: "booking",
            title: "Nutrition Consultation",
            subtitle: "Registered Dietitian",
            time: "Next available: Tuesday, March 25 at 10:00am",
            actions: [
              { label: "Book nutrition consult", variant: "primary" },
              { label: "Book PT consult", variant: "secondary" },
            ],
          },
        ],
        chips: [
          "Book nutrition consult",
          "Book PT consult",
          "What should I bring to the consult?",
          "Can I do more sessions?",
        ],
      },
    ],
  },
  {
    id: "cancellation-policy",
    title: "Can I Cancel and Get a Refund?",
    description:
      "Member wants to know if they can cancel and get a refund if the side effects are too much.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Program & App",
    memberContext:
      "Commitment anxiety. Tests cancellation policy clarity — member is asking specifically because of side effects, not buyer's remorse.",
    turns: [
      {
        role: "user",
        text: "if the side effects are too much can i cancel and get refunded?",
        timestamp: "9:05am",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "I want to make sure you have the right information and also that we explore whether cancellation is actually necessary.\n\n**On cancellation:**\n• You can cancel your membership at any time with no cancellation fee\n• Cancellation stops future billing at the end of your current billing period\n• The monthly membership fee is generally non-refundable for the current period\n• Medication costs (paid separately to the pharmacy) are subject to the pharmacy's refund policy — most don't accept returned medication\n\n**But before canceling because of side effects:**\nMost side effects are dose-dependent and manageable. Common options:\n• **Dose reduction** — your provider can lower your dose without stopping entirely\n• **Injection timing adjustment** — many people find side effects are better when injecting at night\n• **Dietary changes** — smaller, blander meals during the first few weeks help significantly\n\nIf side effects are severe — you're unable to keep fluids down, or experiencing significant pain — your care team needs to know right away. This warrants medical review, not just cancellation.\n\nWould it help to message your care team about what you're experiencing before making a decision?",
        timestamp: "9:05am",
        generatingDelayMs: 2800,
        chips: [
          "Message care team about side effects",
          "I want to cancel anyway",
          "Tell me more about dose reduction",
          "How do I cancel?",
        ],
      },
    ],
  },
  {
    id: "post-hormone-care-support",
    title: "What Happens After the Hormone Care Program?",
    description:
      "Member asks what ongoing support looks like after completing the hormone care program.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Program & App",
    memberContext:
      "Tests program boundary clarity and continuity of care pathway. Member is worried about being left without support after the program ends.",
    turns: [
      {
        role: "user",
        text: "what happens after i finish the hormone care program. like is there ongoing support or does it just end after the 2 visits??",
        timestamp: "5:15pm",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "Great question, and I want to address the \"2 visits\" part directly — the Hormone Care program isn't limited to just two visits.\n\n**What's included in Hormone Care:**\nThe program is structured as ongoing care, not a fixed number of visits:\n• Initial consultation and hormone assessment\n• Follow-up at 4–6 weeks to review how you're responding to any prescribed treatment\n• Ongoing check-ins as needed, typically every 3–6 months once your treatment is stable\n• Messaging your care team between visits at any time\n\n**After initial treatment is established:**\nOnce you're on a stable HRT regimen that's working, visits become less frequent — typically every 6–12 months for monitoring. This mirrors how ongoing hormone management works in general practice.\n\n**Long-term support options:**\n• Continue your Maven Hormone Care membership for ongoing provider access\n• Transition to a pay-per-visit model if you prefer less frequent touchpoints\n• Your treatment records and prescriptions are yours — you can continue HRT with your own doctor\n\n**The short answer:** Hormone care doesn't just end. Menopause is a life stage, not a short-term condition, and Maven's model is designed for ongoing support.",
        timestamp: "5:15pm",
        generatingDelayMs: 2800,
        chips: [
          "How much is the ongoing membership?",
          "Can I transfer care to my doctor?",
          "Book a follow-up",
          "Tell me about HRT monitoring",
        ],
      },
    ],
  },
  {
    id: "pay-as-you-go-option",
    title: "Can I Just Book One Appointment First?",
    description:
      "Member doesn't want a subscription and wants to book one appointment to talk through their options.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Program & App",
    memberContext:
      "Tests Maven Clinic pay-as-you-go explanation. Member is hesitant about subscriptions and wants lower commitment entry point.",
    turns: [
      {
        role: "user",
        text: "i don't want a subscription - i just want to book one appointment first to talk through my options",
        timestamp: "11:45am",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "Totally understandable — and yes, that's an option.\n\n**Maven Clinic (pay-as-you-go):**\nYou can book individual appointments with our providers without enrolling in a subscription program. This gives you:\n• A one-time consultation with an OB-GYN, endocrinologist, or other specialist\n• Time to discuss your symptoms, get a professional assessment, and explore your options\n• A prescription, if appropriate, that you can fill wherever you choose\n\n**How it works:**\n1. Browse providers and book a consultation\n2. Pay for the visit (typical cost: $75–$150 depending on provider and visit length)\n3. Have your appointment — this is your time to ask every question\n4. Decide after whether a program membership makes sense for you\n\n**When a subscription program makes more sense:**\nIf you're going to need ongoing provider oversight (like for HRT adjustment or GLP-1 titration), the program works out cheaper per month than repeated individual visits. But there's no pressure — starting with one appointment is a completely valid approach.\n\nWould you like to see available providers for a first consultation?",
        timestamp: "11:45am",
        generatingDelayMs: 2500,
        cards: [
          {
            kind: "booking",
            title: "One-Time Consultation",
            subtitle: "Maven Clinic — no subscription required",
            time: "Browse providers and book when you're ready",
            actions: [
              { label: "Browse providers", variant: "primary" },
              { label: "Learn about programs", variant: "secondary" },
            ],
          },
        ],
        chips: [
          "Show me available providers",
          "What's the difference from a program?",
          "How much does it cost?",
          "What should I ask in the consultation?",
        ],
      },
    ],
  },
];
