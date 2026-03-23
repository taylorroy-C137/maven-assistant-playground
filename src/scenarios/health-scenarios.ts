import type { Scenario } from "@/lib/scenario-types";

export const healthScenarios: Scenario[] = [
  {
    id: "glp1-ozempic-vs-wegovy",
    title: "Ozempic vs. Wegovy",
    description: "Member asks about the difference between Ozempic and Wegovy.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Health",
    memberContext:
      "A new member considering GLP-1 treatment asks a very common first question about the two most well-known semaglutide brands.",
    turns: [
      {
        role: "user",
        text: "whats the difference between ozempic and wegovy? are they the same thing",
        timestamp: "10:04am",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "Great question — they're actually the same active medication (semaglutide) but approved for different purposes and at different doses.\n\n**Ozempic** was originally approved for type 2 diabetes. It's prescribed off-label for weight loss by many providers, but that's not its primary intended use.\n\n**Wegovy** is the same molecule but at higher doses, specifically FDA-approved for chronic weight management.\n\nThe main practical differences:\n• Wegovy doses go up to 2.4 mg/week vs. Ozempic's 2 mg\n• Insurance coverage often differs — Wegovy may be covered under obesity benefits, Ozempic under diabetes benefits\n• Both require a prescription and medical supervision",
        timestamp: "10:04am",
        generatingDelayMs: 2200,
        chips: [
          "Which one would I get?",
          "Does insurance cover either?",
          "How do I get started?",
          "What are the side effects?",
        ],
      },
    ],
  },
  {
    id: "post-pregnancy-weight-hormones",
    title: "Post-Pregnancy Weight + Hormones",
    description:
      "Member has persistent post-pregnancy weight gain 2 years postpartum and wonders if hormones or GLP-1 could help.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Health",
    memberContext:
      "Sofia persona, 42 years old. Still carrying weight from her last pregnancy 2 years ago despite diet and exercise. Suspects hormones may be involved. Tests hormone-weight crossover nuance.",
    turns: [
      {
        role: "user",
        text: "im 42 and still can't lose the weight from my last pregnancy and it's been 2 years. eating well, walking every day, nothing works and it keeps going up especially around my stomach. could this be hormones? would a glp-1 even help",
        timestamp: "11:30am",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "I hear you — this is one of the most frustrating experiences, especially when you're already doing the right things and still not seeing results. You're not imagining it, and it's not a willpower issue.\n\nAt 42, there are a few things that could be working against you at once:\n\n**Hormonal shifts** — perimenopause can start a decade before your last period. Declining estrogen directly causes fat to redistribute toward the abdomen, and can make insulin less efficient. This alone can make weight loss dramatically harder.\n\n**Postpartum hormonal reset** — even 2 years out, thyroid function and cortisol patterns can still be off, especially if you're not sleeping enough or under stress.\n\n**Could a GLP-1 help?** Possibly, yes — but hormonal imbalance should be ruled out first. If low estrogen or a thyroid issue is the root cause, a GLP-1 will be fighting uphill. Addressing the underlying hormones often makes weight management much more effective.",
        timestamp: "11:30am",
        generatingDelayMs: 2800,
        cards: [
          {
            kind: "booking",
            title: "Hormone + Weight Consultation",
            subtitle: "Endocrinology or OB-GYN",
            time: "Discuss hormones, labs, and whether GLP-1 is right for you",
            actions: [
              { label: "Book a consultation", variant: "primary" },
              { label: "Learn more first", variant: "secondary" },
            ],
          },
        ],
        chips: [
          "Could this be perimenopause?",
          "What labs should I get?",
          "Tell me more about HRT",
          "How do I start the GLP-1 program?",
        ],
      },
    ],
  },
  {
    id: "glp1-nausea-side-effects",
    title: "GLP-1 Nausea Side Effects",
    description:
      "Member just started semaglutide and is experiencing severe nausea after 3 days.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Health",
    memberContext:
      "Member started semaglutide 3 days ago. Nausea is severe. Tests reassurance plus escalation guidance — most common GLP-1 complaint.",
    turns: [
      {
        role: "user",
        text: "started semaglutide 3 days ago and the nausea is SO bad. barely eating anything. is this normal does it go away",
        timestamp: "8:52am",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "I'm sorry you're dealing with this — nausea in the first few weeks is very common with semaglutide, and I want to give you both reassurance and some practical help.\n\n**Yes, this is normal.** Most people experience nausea when they first start, especially in the first 1–4 weeks as your body adjusts. It typically improves significantly after the first month.\n\n**Things that can help right now:**\n• Eat smaller meals more frequently (even tiny portions every few hours)\n• Avoid high-fat, spicy, or very sweet foods\n• Stay well-hydrated — sip water slowly rather than in large amounts\n• Try eating bland foods: plain crackers, toast, rice, boiled chicken\n• Take your injection at a consistent time and consider doing it before bed so you sleep through the worst of it\n\n**When to contact your care team:**\n• If you can't keep any fluids down for more than 24 hours\n• If you're losing weight very rapidly (more than 2 lbs/week)\n• If nausea is accompanied by severe stomach pain\n\nDo any of those apply right now?",
        timestamp: "8:52am",
        generatingDelayMs: 2500,
        chips: [
          "Yes, it's really severe",
          "No, just uncomfortable",
          "Can my dose be lowered?",
          "How long does it usually last?",
        ],
      },
    ],
    variants: {
      Escalation: [
        {
          role: "user",
          text: "started semaglutide 3 days ago and the nausea is SO bad. barely eating anything. is this normal does it go away",
          timestamp: "8:52am",
        },
        {
          role: "agent",
          author: "Maven Assistant",
          text: "I'm really sorry you're going through this. Some nausea is normal at the start, but what you're describing — barely able to eat anything — is on the more severe end and your care team should know about it.",
          timestamp: "8:52am",
          generatingDelayMs: 1800,
        },
        {
          role: "agent",
          author: "Maven Assistant",
          text: "You may need a temporary dose reduction or a different injection timing. Let me connect you with your care team so they can review this with you today.",
          timestamp: "8:53am",
          generatingDelayMs: 1000,
          cards: [
            {
              kind: "escalation",
              title: "Message your care team",
              subtitle:
                "Describe your nausea severity and they can advise on next steps — including whether to pause or lower your dose.",
              actions: [{ label: "Message care team", variant: "primary" }],
            },
          ],
        },
      ],
    },
  },
  {
    id: "glp1-hair-loss",
    title: "GLP-1 + Hair Loss",
    description:
      "Member with existing hair thinning asks whether GLP-1s cause hair loss.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Health",
    memberContext:
      "High-anxiety question from a member already dealing with hair thinning. Tests empathetic, honest answering without dismissing fear.",
    turns: [
      {
        role: "user",
        text: "do glp-1s cause hair loss??? my hair is already thinning and im scared to make it worse",
        timestamp: "2:10pm",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "I completely understand why this is scary, especially if you're already noticing thinning. Let me give you an honest, clear answer.\n\n**The short answer:** Temporary hair shedding (called telogen effluvium) is a known side effect — but it's usually caused by rapid weight loss, not the medication itself.\n\nWhen your body loses weight quickly, the physical stress can push hair follicles into a resting phase. This typically peaks around 3–6 months and then reverses as your body adjusts.\n\n**What can help reduce the risk:**\n• Losing weight more gradually (which is often better for overall health anyway)\n• Getting adequate protein — aim for 0.7–1g per pound of body weight\n• Checking iron and ferritin levels — low ferritin is a very common, often missed cause of hair loss in women\n• Ensuring you're eating enough overall (very low calorie intake accelerates shedding)\n\n**About your pre-existing thinning:** It's worth getting your ferritin, thyroid (TSH, T3, T4), and hormones checked before or during treatment. Underlying issues are common and treatable.",
        timestamp: "2:10pm",
        generatingDelayMs: 2500,
        chips: [
          "What labs should I check?",
          "How much protein do I need?",
          "Tell me more about telogen effluvium",
          "Book a consultation",
        ],
      },
    ],
  },
  {
    id: "perimenopause-identification",
    title: "Am I in Perimenopause?",
    description:
      "Member, 42, is still getting her period but experiencing anxiety, brain fog, and night sweats and wonders if it's perimenopause.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Health",
    memberContext:
      "Common Reddit pattern — member has the misconception that you need to stop getting your period to be in perimenopause. Tests correcting the misconception empathetically.",
    turns: [
      {
        role: "user",
        text: "i'm 42 and still getting my period but lately i have crazy anxiety, i keep forgetting words mid sentence, and i wake up sweating at 3am. is this perimenopause?? i thought you had to stop getting your period first",
        timestamp: "9:15am",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "What you're experiencing sounds very much like perimenopause — and I want to clear up a really common misconception right away:\n\n**You do not have to stop getting your period to be in perimenopause.** In fact, most people are in perimenopause for 4–10 years *before* their last period. Your cycles might even still be regular at this stage.\n\nThe symptoms you're describing — anxiety, word-finding difficulty, and 3am night sweats — are classic perimenopause symptoms. Here's what's happening:\n\n• **Anxiety + mood changes:** Fluctuating estrogen directly affects serotonin and GABA — the brain's calming chemicals.\n• **Forgetting words:** Estrogen plays a key role in cognition and verbal memory. This is real, it's measurable, and it's not dementia.\n• **Night sweats at 3am:** A signature perimenopause pattern. Estrogen fluctuations disrupt the hypothalamus, which regulates body temperature.\n\nAll three of your symptoms pointing in the same direction at 42 is a strong signal. The good news: all of these respond well to hormone therapy.",
        timestamp: "9:15am",
        generatingDelayMs: 2800,
        chips: [
          "Tell me more about HRT",
          "How is it diagnosed?",
          "Book a hormone consultation",
          "Is this early or typical timing?",
        ],
      },
    ],
  },
  {
    id: "hrt-safety-breast-cancer",
    title: "HRT Safety + Family History",
    description:
      "Member is scared about HRT safety due to the 2002 WHI study and her mother's history. Hot flashes are severe.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Health",
    memberContext:
      "High-emotion question. Mother had breast cancer at 58. Tests nuanced safety answering without dismissing her fear — the WHI study is widely misunderstood.",
    turns: [
      {
        role: "user",
        text: "is HRT actually safe? i thought there was a study that said it causes breast cancer. my mom got it at 58 and i'm terrified but my hot flashes are unbearable at this point",
        timestamp: "4:33pm",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "Your fear makes complete sense, and I want to address it directly — because the study you're thinking of has been significantly misrepresented.\n\n**The WHI study (2002):** This is the one that scared a generation of women off HRT. But here's what's important to know:\n• It studied older women (average age 63) who were *years* past menopause\n• It used oral synthetic hormones (not what's typically prescribed today)\n• The absolute risk increase it found was very small, and subsequent analysis showed it was specific to the synthetic progestin used, not estrogen\n\n**What the current evidence shows:**\n• For women under 60 or within 10 years of menopause, the benefits of HRT generally outweigh the risks\n• Modern body-identical (bioidentical) hormones, especially transdermal (patch or gel), have a different risk profile than the older oral formulations\n• The breast cancer risk from estrogen-only HRT is actually *lower* than from combined hormone therapy\n\n**About your mom:** A first-degree relative with breast cancer does increase your personal risk, and that's a real and important factor. But it doesn't automatically rule out HRT — it means the risk-benefit conversation with your provider needs to be thorough and personalized.",
        timestamp: "4:33pm",
        generatingDelayMs: 3000,
        chips: [
          "Book a hormone consultation",
          "What are my alternatives for hot flashes?",
          "Tell me about bioidentical hormones",
          "What questions should I ask my doctor?",
        ],
      },
    ],
  },
  {
    id: "glp1-and-hrt-combined",
    title: "GLP-1 + HRT at the Same Time",
    description:
      "Member is dealing with both weight gain and hot flashes and wants to know if she can take GLP-1 and HRT together.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Health",
    memberContext:
      "Emerging hot topic — multi-condition question. Member doesn't know where to start. Tests combined guidance for GLP-1 + hormone care.",
    turns: [
      {
        role: "user",
        text: "can you take a glp-1 and HRT at the same time? i'm dealing with both weight gain AND hot flashes and i don't know where to even start",
        timestamp: "1:22pm",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "Yes — you can take a GLP-1 and HRT at the same time, and actually for many women in your situation, combining them can be more effective than either alone.\n\n**Why they work well together:**\n• HRT addresses the hormonal root causes of midlife weight gain (particularly abdominal fat and metabolic slowdown)\n• GLP-1 directly reduces appetite and improves insulin sensitivity\n• Together, they can address both the hormonal and metabolic sides of weight gain — which are often interconnected\n\n**Where to start:** This is actually one of the most common questions we see, and the answer usually depends on which symptoms are most affecting your quality of life right now.\n\n• If the **hot flashes** are unbearable and disrupting sleep, starting with HRT often makes the most sense — poor sleep itself drives weight gain\n• If the **weight gain** is the priority and hot flashes are manageable, you might start with GLP-1 evaluation\n\nA good hormone and weight specialist can assess both at once, which is honestly the most efficient path.",
        timestamp: "1:22pm",
        generatingDelayMs: 2500,
        cards: [
          {
            kind: "booking",
            title: "Combined Hormone + Weight Consultation",
            subtitle: "Review both GLP-1 eligibility and hormone status in one visit",
            time: "Available this week",
            actions: [
              { label: "Book consultation", variant: "primary" },
              { label: "Learn more", variant: "secondary" },
            ],
          },
        ],
        chips: [
          "What's the GLP-1 program?",
          "Tell me about HRT options",
          "What will the consultation cover?",
        ],
      },
    ],
  },
  {
    id: "glp1-dose-titration",
    title: "GLP-1 Dose Titration",
    description:
      "Member has been on the starting dose for a month with no noticeable effect and asks when and how the dose increases.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Health",
    memberContext:
      "Informed user testing clinical dosing knowledge and when to escalate to a provider.",
    turns: [
      {
        role: "user",
        text: "been on the starting dose for a month and i don't really feel anything different. when do you go up and how do you know if it's working",
        timestamp: "3:05pm",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "It's actually really common to not notice dramatic effects at the starting dose — that's partly by design. Here's what to know:\n\n**Standard titration schedule:**\nMost semaglutide protocols start at 0.25 mg/week for the first 4 weeks specifically to let your body adjust and minimize side effects — not because it's a therapeutic dose. The escalation is typically:\n• Month 1: 0.25 mg\n• Month 2: 0.5 mg\n• Month 3: 1 mg (where most people start feeling appetite suppression meaningfully)\n• Month 4–6: Up to 2 mg or 2.4 mg based on response and tolerance\n\n**How do you know if it's working:**\n• Appetite feels slightly different — you feel full sooner or think about food less\n• Cravings for highly processed or sweet foods reduce\n• Gradual weight movement of 0.5–1 lb/week at therapeutic doses\n\n**After one month at 0.25 mg:** You're likely due for your first dose increase now. Your provider should be reviewing your progress at this point.",
        timestamp: "3:05pm",
        generatingDelayMs: 2500,
        chips: [
          "Request a dose increase",
          "How do I track my progress?",
          "What if I have side effects at a higher dose?",
          "Message my care team",
        ],
      },
    ],
  },
  {
    id: "muscle-loss-protein-glp1",
    title: "Muscle Loss + Protein on GLP-1",
    description:
      "Member is worried about losing muscle on GLP-1 and asks about protein intake and bone density.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Health",
    memberContext:
      "Informed, health-conscious user, age 42. Already thinking about bone density. Tests nutrition and lifestyle guidance.",
    turns: [
      {
        role: "user",
        text: "i keep seeing people say they lose a ton of muscle on these meds. how much protein am i supposed to eat? i'm 42 and already worried about bone density",
        timestamp: "7:44am",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "This is one of the most important things to get right on GLP-1 therapy — and you're smart to be thinking about it at 42.\n\n**Muscle loss is a real risk, but it's largely preventable.** The key factors are protein intake and resistance training.\n\n**Protein targets on GLP-1:**\n• General recommendation: **0.7–1.0g per pound of body weight per day** (or 1.6–2.2g per kg)\n• Example: If you weigh 160 lbs, target 112–160g of protein daily\n• Because GLP-1s reduce appetite significantly, getting adequate protein takes active effort — prioritize protein at every meal before eating anything else\n\n**Best protein sources:** Eggs, Greek yogurt, cottage cheese, chicken, fish, legumes, tofu\n\n**On bone density:**\nThis is an underappreciated concern. Weight-bearing exercise (walking, strength training) is the most evidence-backed intervention for bone density at this life stage. Additionally:\n• Ensure adequate calcium (1,000–1,200mg/day from food or supplements)\n• Check Vitamin D levels — deficiency is very common and directly affects bone density\n• Resistance training 2–3x per week preserves both muscle and bone",
        timestamp: "7:44am",
        generatingDelayMs: 2800,
        chips: [
          "Can I book a nutrition consult?",
          "Tell me about resistance training",
          "Should I check my Vitamin D?",
          "How do I track protein intake?",
        ],
      },
    ],
  },
  {
    id: "midlife-weight-gain",
    title: "Why Is Weight Loss Harder After 40?",
    description:
      "Member is frustrated that the same diet and exercise that worked at 35 is no longer working at 40+.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Health",
    memberContext:
      "Relatable frustration. Member is doing the same things as before but gaining weight around the stomach. Tests empathetic metabolic explanation.",
    turns: [
      {
        role: "user",
        text: "why is losing weight so much harder after 40?? doing literally the same things i did at 35 and the weight just piles on around my stomach now",
        timestamp: "12:17pm",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "You're not imagining it, and you haven't suddenly lost discipline — the rules genuinely change in your 40s, and it's mostly biology.\n\nHere's what's actually happening:\n\n**Hormonal shifts**\nDecreasing estrogen in perimenopause directly causes fat to shift from hips and thighs to the abdomen. This is a metabolic effect of estrogen loss, not a calorie problem.\n\n**Metabolic rate changes**\nResting metabolic rate declines with age and muscle loss. Muscle burns more calories at rest than fat — and most women lose muscle mass in their 40s unless actively working to preserve it.\n\n**Insulin sensitivity**\nLower estrogen reduces insulin sensitivity, meaning your body stores more of what you eat as fat — especially visceral (belly) fat — even if your diet hasn't changed.\n\n**Sleep and cortisol**\nPerimenopause disrupts sleep, and poor sleep elevates cortisol, which drives abdominal fat storage directly.\n\n**The honest answer:** Doing the same things is likely not going to produce the same results anymore. This isn't failure — it's a signal that your approach needs to adapt to match where your body is now.",
        timestamp: "12:17pm",
        generatingDelayMs: 2800,
        chips: [
          "What should I do differently?",
          "Could hormones help?",
          "Tell me about GLP-1",
          "Book a consultation",
        ],
      },
    ],
  },
  {
    id: "hrt-formulation-comparison",
    title: "HRT: Patch vs. Pill vs. Cream",
    description:
      "Member asks about the differences between estrogen delivery methods and which is best.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Health",
    memberContext:
      "Informed user exploring HRT options. Tests knowledge of delivery method differences including safety profile variations.",
    turns: [
      {
        role: "user",
        text: "what's the difference between the estrogen patch vs pill vs cream? is one better than the others",
        timestamp: "5:50pm",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "Great question — delivery method actually matters a lot, both for effectiveness and safety profile.\n\n**Transdermal (patch, gel, spray)** — Generally the preferred form today\n• Applied to skin and absorbed directly into the bloodstream\n• Bypasses the liver — this is important because oral estrogen passes through the liver first, which can increase clotting risk\n• Most consistent hormone levels throughout the day\n• Patch: applied 1–2x per week; gel/spray: daily application\n\n**Oral (pill)**\n• Convenient and well-studied\n• Does pass through the liver, which can slightly increase blood clot risk (though still low in healthy women under 60)\n• Levels can fluctuate more throughout the day\n• May slightly raise blood pressure and triglycerides in some people\n\n**Vaginal cream/ring/tablet**\n• Very low systemic absorption — primarily for vaginal dryness and urinary symptoms\n• Not typically effective for hot flashes, mood, or sleep — these need systemic estrogen\n\n**Which is best?** For most women, transdermal is currently preferred for systemic symptoms because of the more favorable safety profile and consistent levels. But the \"best\" option depends on your symptoms, health history, and lifestyle — which is why a provider conversation is important.",
        timestamp: "5:50pm",
        generatingDelayMs: 2800,
        chips: [
          "Book a hormone consultation",
          "What about progesterone?",
          "How long does HRT take to work?",
          "Is it safe long-term?",
        ],
      },
    ],
  },
  {
    id: "stopping-glp1-weight-regain",
    title: "What Happens When You Stop GLP-1?",
    description:
      "Member asks if they'll gain everything back when they stop and whether they'll be on it forever.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Health",
    memberContext:
      "Top Reddit fear. Tests honest, balanced answer without dismissing concern or being overly negative.",
    turns: [
      {
        role: "user",
        text: "what actually happens when you stop taking a glp-1. do you gain everything back. am i going to be on this forever",
        timestamp: "6:11pm",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "This is one of the most common concerns, and I want to give you an honest answer rather than a reassuring but misleading one.\n\n**What the evidence shows:**\nYes — most people who stop GLP-1 medications do regain a significant portion of the weight, often within 12 months. The STEP 4 trial showed ~7% weight regain within a year of stopping. This is because the medication is actively suppressing appetite signals — when you stop, those signals return.\n\n**But this doesn't mean you're stuck on it forever** — it means obesity and weight management are often chronic conditions that benefit from ongoing treatment, similar to how blood pressure medication works. The question is less \"can I stop?\" and more \"what's my long-term plan?\"\n\n**Factors that affect how well you maintain weight loss after stopping:**\n• How much muscle mass you've preserved (this is why protein and strength training matter so much)\n• Whether any underlying hormonal or metabolic issues were addressed\n• Sustainable eating habits developed during treatment\n• Whether you continue medical support in some form\n\n**The more useful framing:** Think of GLP-1 as a period of intensive treatment that should also be used to build sustainable habits and address root causes, not just as a medication you stop and walk away from.",
        timestamp: "6:11pm",
        generatingDelayMs: 3000,
        chips: [
          "What's the long-term plan?",
          "How do I preserve muscle?",
          "Talk to my care team",
          "What habits should I build?",
        ],
      },
    ],
  },
  {
    id: "brain-fog-perimenopause",
    title: "Brain Fog — Is Something Seriously Wrong?",
    description:
      "Member is frightened by severe cognitive symptoms at work and wants to know if this is perimenopause.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Health",
    memberContext:
      "High-anxiety question. Member is losing words at work and walking into rooms with no memory of why. Tests reassurance without dismissing concern.",
    turns: [
      {
        role: "user",
        text: "the brain fog is really scaring me. i'm losing words at work, walking into rooms and forgetting why, it feels like something is seriously wrong with me. is this really just perimenopause",
        timestamp: "3:28pm",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "I can hear how frightening this is, and I want to address it directly and honestly.\n\n**What you're describing is a very recognized pattern of perimenopausal cognitive change** — particularly word-finding difficulties and working memory lapses. This has been documented in clinical research and is directly linked to estrogen fluctuations. It is not dementia.\n\nHere's what's happening biologically:\n• Estrogen is neuroprotective — it supports myelin (nerve insulation), blood flow to the brain, and neurotransmitter function\n• During perimenopause, estrogen levels fluctuate wildly before declining — these swings are actually *worse* for cognitive function than steady low estrogen\n• The hippocampus (memory) and prefrontal cortex (word retrieval, planning) are particularly sensitive to estrogen\n\n**Symptoms that differentiate perimenopausal brain fog from something more serious:**\n• It's inconsistent — some days are much clearer than others\n• It's often worse around your period, after poor sleep, or during stress\n• You are aware that it's happening (a key distinction from dementia)\n\n**This said** — your concern about work is real, and you deserve proper evaluation. If your sleep is severely disrupted, iron levels are low, or thyroid function is off, those can compound cognitive symptoms significantly.",
        timestamp: "3:28pm",
        generatingDelayMs: 3200,
        chips: [
          "Book a hormone consultation",
          "What labs should I get?",
          "Tell me about HRT for brain fog",
          "Could this be my thyroid?",
        ],
      },
    ],
  },
  {
    id: "postpartum-vs-perimenopause",
    title: "Postpartum vs. Early Perimenopause",
    description:
      "Member had her last baby at 40 and feels completely off. Wants to know if it's still postpartum or early perimenopause.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Health",
    memberContext:
      "Quintessential Sofia question. Tests differential nuance between postpartum and perimenopausal symptoms in a woman in her 40s.",
    turns: [
      {
        role: "user",
        text: "had my last baby at 40, still feel completely off — exhausted, irritable, gained another 10 lbs this year. how do i know if this is still postpartum or if it's early perimenopause",
        timestamp: "10:55am",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "This is one of the most genuinely tricky questions in women's health right now, and the honest answer is: it could be both simultaneously — and they share many of the same symptoms.\n\n**What overlaps:**\n• Exhaustion, brain fog, mood changes, weight gain, irregular periods — all appear in both\n• Postpartum thyroiditis and perimenopausal thyroid changes are both common and both cause these exact symptoms\n\n**Signals that point more toward postpartum:**\n• Symptoms appeared right after birth and haven't shifted much\n• No previous children at 40+ (first perimenopause exposure)\n• Cycle still very regular with no lengthening or changes\n\n**Signals that point more toward perimenopause:**\n• Your cycles have become irregular — closer together, further apart, or changing in flow\n• New symptoms: night sweats, increased anxiety, hot flashes, or joint pain that weren't present in previous postpartum periods\n• Symptoms seem to fluctuate with your cycle\n• You're 2+ years out from delivery and things haven't improved\n\n**The fastest path to clarity:** Get a proper hormone panel. FSH, estradiol, progesterone, and thyroid (TSH, free T3, free T4) together give a clearer picture than any symptom checklist. At your age, a specialist can interpret these in context of both possibilities.",
        timestamp: "10:55am",
        generatingDelayMs: 3000,
        chips: [
          "Book a hormone specialist",
          "What labs do I need?",
          "Could this be my thyroid?",
          "What's the treatment for each?",
        ],
      },
    ],
  },
  {
    id: "antidepressants-vs-hrt",
    title: "Antidepressants vs. HRT",
    description:
      "Member's doctor recommended Lexapro for anxiety and mood but she wonders if it's actually a hormone issue.",
    author: "Maven",
    createdAt: "2026-03-23",
    isTemplate: false,
    label: "Maven Assistant",
    group: "Health",
    memberContext:
      "Tests nuanced hormone vs. mental health distinction. Member doesn't want antidepressants if HRT is the right answer.",
    turns: [
      {
        role: "user",
        text: "my doctor wants to put me on lexapro for anxiety and mood swings but i read it might actually be a hormone thing. how do you even tell the difference? i don't want antidepressants if what i really need is HRT",
        timestamp: "2:41pm",
      },
      {
        role: "agent",
        author: "Maven Assistant",
        text: "Your instinct is worth taking seriously — and this is unfortunately a very common experience. Many women in perimenopause are prescribed antidepressants when the root cause is hormonal.\n\n**How to tell the difference:**\n\n*Signals that it's more likely hormonal:*\n• Mood changes are cyclic — worse at certain points in your cycle\n• You have other perimenopause symptoms alongside mood changes (night sweats, brain fog, sleep disruption, joint pain)\n• Mood was stable before this period of life with no prior anxiety history\n• Symptoms started in your 40s without a clear external stressor\n\n*Signals that it's more likely primary anxiety/depression:*\n• No relationship to your menstrual cycle\n• Persistent, not episodic\n• History of anxiety or depression before this life stage\n• No accompanying physical perimenopausal symptoms\n\n**The practical problem:** Antidepressants and HRT are not mutually exclusive — some women need both. And SSRIs like Lexapro *can* reduce hot flashes, which sometimes makes them feel helpful even when hormones are the root cause.\n\n**What I'd recommend:** Before starting Lexapro, ask your doctor to check your hormone levels — FSH, estradiol, and progesterone timed to your cycle. If you're in perimenopause, a trial of HRT often dramatically improves mood and anxiety. Many gynecologists will try this first.",
        timestamp: "2:41pm",
        generatingDelayMs: 3200,
        chips: [
          "Book a hormone specialist",
          "What questions should I ask my doctor?",
          "How does HRT affect mood?",
          "Tell me more about perimenopause symptoms",
        ],
      },
    ],
  },
];
