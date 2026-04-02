# Instagram Content Pipeline — 100 Posts for @drericwhitney

## Context

Eric's personal Instagram (@drericwhitney) needs depth and bulk — 100 posts that establish him as a neurosurgeon who thinks about consciousness, the body as a machine, and what the operating room reveals about the mind. The tone is **conference-level**: intellectually generous, personally interesting, professionally curated. Not therapy confessionals. Not dirty laundry. The person you want to talk to at the break.

The framework (Encoded Human), Pearl's KB, and the fractal mirrors provide the content engine. The Substack voice ("what the operating room teaches you about the mind") is the editorial north star.

## Publishing Platform

**Option B: Buffer ($6/mo)** — chosen for reliability and simplicity.
- Export 100 posts as CSV (image URL, caption, scheduled time)
- Upload to Buffer, they handle scheduling and posting
- No Graph API complexity needed

## Instagram Handle

**@drericwhitney**

## Content Architecture — 100 Posts Across 5 Pillars

> **Change from v1:** "Recovery & Resilience / Still You" pillar replaced with "OR Insights (Extended)" — 
> Still You Recovery will have its own separate Instagram presence when that platform is ready.
> Reason: Still You voice serves a different audience (brain injury survivors) and dilutes the 
> conference-physician signal that @drericwhitney is building.

| Pillar | Posts | Voice | Example |
|--------|-------|-------|---------| 
| **OR Insights** | 35 | "In the OR, you learn..." | "The brain doesn't flinch when you touch it. It has no pain receptors. But the person it belongs to will tell you exactly where it hurts." |
| **Framework Translations** | 25 | Fractal mirrors rewritten for Instagram | Pull from Pearl's top-scored mirrors, strip all jargon, rewrite as 1-3 sentence insights |
| **Questions That Keep Me Up** | 20 | The unanswerable questions | "If consciousness is produced by the brain, why does removing parts of it sometimes make people more aware, not less?" |
| **The Body Knows** | 20 | Encoding vs installation for a general audience | "Your nervous system was calibrated before you had language to describe what was happening to it. That calibration is still running." |

## Tone Rules (Hardcoded in Generation Prompts)

1. **Conference-level** — the person you'd want to sit next to at dinner, not the person oversharing at the bar
2. **No framework jargon** — zero: no "transduction," "density," "encoding layer," "epistemic tier"
3. **No clinical overshare** — no patient exploitation, no gore, no savior narratives
4. **Questions over answers** — the best posts ask something the reader carries home
5. **First person but not confessional** — "I" is fine, diary entries are not
6. **No hashtag spam** — 3-5 max, specific (#neuroscience #consciousness #neurosurgeon #thebodyknows)
7. **The test**: would this post make a colleague at a conference say "interesting — tell me more"?
8. **No TRT, no personal medical protocols** — protocol content stays private
9. **No cosmological frameworks** — no Annunaki, no channeling, no spiritual cosmology by name
10. **Bar/conference disclosure level** — what you'd share meeting someone interesting for the first time

## What NOT to Post (Explicit Exclusions)

- Personal medical data (labs, TRT, cardiovascular protocols)
- Relationship details beyond warmth (Paris mentioned occasionally, not content)
- Spiritual cosmology (Annunaki, channeling, entity frameworks)
- The Encoded Human framework by name until it has its own public presence
- Still You Recovery content (separate platform, separate audience)
- Anything that would read differently to a credentialing committee than to a curious stranger

## Seed Post Bank — 100 Approved Posts

The following posts are pre-approved by Eric. Generation script should use these as primary 
source material, not generate from scratch. Reorder, adjust image pairing, finalize hashtags.

### BLOCK 1 — THE QUESTIONS (Posts 1–20)

1. I've held a human brain in my hands. It doesn't look like the seat of consciousness. That bothered me more than I expected.
2. We spend medical school learning what the brain does. Nobody teaches us what it is.
3. The skull is the hardest structure in the body. Everything it protects is the softest. That's not accidental.
4. Most people are living someone else's answer to a question they never got to ask.
5. What if your symptoms are the most honest thing about you?
6. The body keeps score. But it also keeps the blueprint.
7. We treat the brain like hardware. What if it's closer to a receiver?
8. Medicine is extraordinary at crisis. It's not very good at asking why the crisis keeps coming back.
9. Started medical school at 40. Best decision I ever made. Also the most expensive mid-life crisis on record.
10. The neurosurgeon's secret: the brain surprises us. Every single time.
11. Science doesn't have a consciousness problem. It has a consciousness *assumption* problem.
12. I became a DO because I wanted to treat people, not just diagnoses.
13. The most important question in medicine isn't what's wrong. It's what happened.
14. Every patient who walks in has two things: what brought them here, and what they haven't told anyone yet.
15. Coherence is health. Decoherence is disease. Everything else is detail.
16. The brain doesn't stop working when we sleep. It starts the work we were too busy for during the day.
17. Function follows structure. But structure follows something deeper. That's the part that interests me.
18. The OR teaches you one thing above everything else: the body wants to live.
19. I've seen consciousness leave. I still don't know what left.
20. What if the body isn't the problem? What if it's the message?

### BLOCK 2 — THE SCIENCE, MADE LEGIBLE (Posts 21–45)

21. Your heart rate variability isn't just a stress number. It's how coherent your whole system is. Low HRV isn't anxiety — it's the machine running out of bandwidth.
22. Biophotons: your cells emit light. Not metaphor. Measurable. The DNA is broadcasting.
23. The vagus nerve is the longest nerve in your body and runs directly from brain to gut. When your gut is wrong, your brain knows immediately. The reverse is also true.
24. Inflammation isn't your enemy. Unresolved inflammation is.
25. Sleep isn't recovery. Sleep is construction. Everything your body builds happens there.
26. The glymphatic system cleans your brain while you sleep. Skip sleep, skip the cleaning cycle. What accumulates isn't abstract.
27. HRV below 20ms RMSSD means your autonomic nervous system is running on reserve. Most people have no idea where theirs is.
28. Small LDL particles aren't more cholesterol. They're a different problem — they fit through arterial walls that large particles can't access.
29. The mitochondria in your heart cells are 30% of cell volume. Your heart is an energy organ first, pump second.
30. Lp(a) doesn't respond to statins, diet, or exercise. It's genetic. Knowing your number matters more than most people realize.
31. The nervous system has two jobs: respond to threat, and restore after threat. Most people are stuck in job one.
32. Your circadian rhythm isn't just about sleep. It coordinates every cell in your body — hormone release, immune function, cellular repair. Light is the signal. We've been jamming it.
33. TMAO — a molecule your gut bacteria make from certain foods — can be elevated even in pescatarians. The mechanism isn't what most doctors think it is.
34. Neuroplasticity means the brain physically changes based on what you do repeatedly. This is the most hopeful thing in neuroscience.
35. The fascia isn't just connective tissue. It's a piezoelectric material — it generates electrical charge under pressure. Your body is conducting electricity through its entire structure.
36. Deep slow-wave sleep is when growth hormone releases. Not supplementation. Sleep.
37. Collagen synthesis requires Vitamin C as cofactor. No Vitamin C, no collagen production. The connection between wound healing and nutrition runs through this.
38. The myelin sheath around neurons determines conduction velocity. Think of it as insulation on a wire — degrade it and the signal slows. This is what MS actually is.
39. HPA axis: hypothalamus talks to pituitary talks to adrenals. Chronic stress dysregulates the conversation. The downstream effects aren't just cortisol — they're immune, metabolic, reproductive.
40. The enteric nervous system in your gut has more neurons than your spinal cord. It processes independently. It remembers.
41. Your DNA isn't a static blueprint. It's being read differently based on what you eat, how you sleep, what you feel, and what your parents experienced.
42. Soliton waves in neural tissue may propagate quantum-coherent information faster than conventional electrical conduction. This is fringe becoming mainstream.
43. The blood-brain barrier isn't a wall. It's a selective membrane that becomes more permeable under chronic inflammation. What crosses it matters.
44. Autophagy — cellular self-cleaning — requires a fast of at least 14-16 hours to initiate meaningfully. Your body doesn't start cleaning until it's done digesting.
45. The brain doesn't distinguish between physical and emotional pain at the processing level. They share neural real estate. This matters for how we treat both.

### BLOCK 3 — THE PERSON (Posts 46–65)

46. I went back to medical school at 40 because I couldn't stop asking questions that medicine was supposed to have answered. It hadn't.
47. My wife is a longevity physician. Dinner at our house is either very interesting or very long. Usually both.
48. Four kids. The youngest is seven. He has opinions about everything. He gets that from both of us.
49. The best teachers I've had weren't in medical school. They were patients who stayed curious about what was happening to them.
50. I practice as a DO — Doctor of Osteopathic Medicine. The distinction matters. We're trained to see the whole system, not just the presenting symptom.
51. Hawaii changed something in how I think about environment and health. There's a coherence to that place that I don't have a clean scientific explanation for yet.
52. I'm building a research framework that connects neuroscience, consciousness, and what it means to be human. It's the most interesting project I've ever touched.
53. The question that's driven everything I've built: what would medicine look like if it started from who the person actually is, not just what's wrong with them?
54. The Encoded Human started as a clinical observation: the people who healed fastest weren't the ones with the best treatment plans. They were the ones who knew who they were.
55. I'm a neurosurgeon who believes consciousness isn't produced by the brain. That's a strange place to stand. I've gotten comfortable there.
56. The Decoded Human project: building a connectome of scientific literature so the connections between papers are as searchable as the papers themselves. Because the breakthroughs live in the connections.
57. I published my first peer-reviewed paper on oscillatory coherence this year. It took decades of thinking to find the right question.
58. Medicine has protocols for everything. What it doesn't have is a framework for the person those protocols are being applied to.
59. I was a DO before I was a neurosurgeon. Osteopathic philosophy says the body has an inherent tendency toward health. I've watched that play out in the OR more times than I can count.
60. The best thing about starting medical school at 40: I already knew who I was. The worst thing: I still had to take biochemistry.
61. We built Still You Recovery for people who've had brain injuries and strokes — because surgery and medicine put you back together structurally, and then you're on your own to figure out who you are now. That gap is solvable.
62. I spend a lot of time at the intersection of what science can measure and what it can't yet explain. That's where the interesting questions live.
63. My Substack is where I think out loud. Not lectures. Not protocols. Just the questions I'm working through.
64. I don't separate my work as a physician from my work as a researcher. The patients teach me what to study. The research teaches me how to see the patients.
65. The OR is where I learned that the body is always ahead of the diagnosis. It's already working on the answer. Our job is not to interfere with that.

### BLOCK 4 — SHORT PROVOCATIONS (Posts 66–85)

66. Your diagnosis isn't your identity.
67. The body is never lying. We just haven't learned to listen well enough.
68. Most chronic disease is acute disease that wasn't resolved.
69. You cannot think your way into a felt sense of safety. The body doesn't take direction from the mind that way.
70. The OR teaches humility. The body is always more complex than the plan.
71. Intelligence without coherence is just fast confusion.
72. What you call anxiety might be your nervous system doing its job in the wrong context.
73. The question isn't whether you have stress. It's whether your system can complete the stress response.
74. Medicine extends life. Meaning makes it worth extending.
75. Every symptom started as a signal. We medicate signals instead of listening to them.
76. The brain that built the cage is not the brain that opens it.
77. Healing isn't returning to who you were. It's becoming who you were always supposed to be.
78. The body remembers what the mind has moved on from.
79. Your genome is the blueprint. Your life is the construction crew.
80. Precision medicine without personal medicine is just expensive guessing.
81. The most underdiagnosed condition in medicine: a person living the wrong life.
82. What if your highest functioning state isn't your normal? What if your normal is the problem?
83. We measure what we can. We treat what we measure. We miss what we don't know how to measure yet.
84. Consciousness is the one thing medicine cannot explain and cannot do without.
85. The gap between what the body can do and what we ask of it is where most disease lives.

### BLOCK 5 — THE LARGER FRAME (Posts 86–100)

86. I'm building something at the intersection of neuroscience and human identity. The short version: what if medicine started from who you actually are?
87. The light machine isn't a metaphor. The human body literally emits, conducts, and responds to light. We're just beginning to understand what that means clinically.
88. A peer-reviewed paper on composite homeostatic waves: the idea that health is oscillatory coherence across multiple biological systems simultaneously. The data supports it.
89. Still You Recovery exists because brain injury strips the accumulated roles, habits, and personas — and leaves the person. That's disorienting. It's also an opportunity nobody in medicine is taking seriously.
90. The Decoded Human: what if every scientific paper was connected to every other paper it should be connected to? The breakthroughs we need are already in the literature. We just can't see the connections.
91. I want to build the diagnostic half of something that doesn't exist yet: a device that reads where coherence is breaking down in the body and targets it. The science exists. The instrument doesn't.
92. Medicine is extraordinary. It's also missing something. The missing thing is a framework for the whole person — not as a philosophy but as a clinical tool.
93. Longevity medicine without consciousness is just keeping a confused person alive longer.
94. The research questions I'm working on: how does oscillatory coherence relate to health outcomes? Can we measure decoherence before disease manifests? What does the neuroscience of consciousness tell us about identity?
95. I published my first Substack post this week. It's about what neurosurgery taught me about the difference between the brain and the mind. Link in bio.
96. The portal sentence I keep coming back to: this human body is a multidimensional light machine, uniquely encoded with a soul, powered by spirit, for the purpose of life. That's the thing I'm trying to prove.
97. Still You Recovery + The Encoded Human + peer-reviewed research = three expressions of one question. What does it mean to be a human being, and can medicine get better at honoring that?
98. I'm a neurosurgeon who believes the brain is a receiver, not a generator. I'm building the science to test it.
99. The work is long. The question is worth it.
100. Follow along.

## Posting Cadence — 10 Weeks at 2 Posts Per Day

> **Changed from v1:** 3 posts/day → 2 posts/day (algorithm stability)
> 100 posts over 10 weeks = sustainable reach growth without suppression risk

**Week 1-2 (Days 1-14): Questions + Person — build the relationship first**
- Day 1: Post 2 (brain/consciousness hook) + Post 1 (held a brain)
- Day 2: Post 7 (brain as receiver) + Post 21 (HRV legible)
- Day 3: Post 9 (medical school at 40) + Post 66 (diagnosis isn't identity)
- Day 4: Post 3 (skull/softness) + Post 26 (glymphatic system)
- Day 5: Post 15 (coherence is health) + Post 46 (went back at 40)
- Day 6: Post 70 (OR teaches humility) + Post 36 (slow wave sleep)
- Day 7: Post 96 (portal sentence) + Post 52 (research framework)
- Day 8: Post 19 (consciousness leaving) + Post 47 (wife/longevity)
- Day 9: Post 11 (consciousness assumption) + Post 34 (neuroplasticity)
- Day 10: Post 4 (someone else's answer) + Post 55 (brain as receiver belief)
- Day 11: Post 75 (symptoms as signals) + Post 57 (first paper)
- Day 12: Post 13 (what happened, not what's wrong) + Post 31 (nervous system jobs)
- Day 13: Post 77 (healing isn't returning) + Post 41 (DNA not static)
- Day 14: Post 18 (body wants to live) + Post 62 (intersection)

**Week 3-6 (Days 15-42): Science + Provocations woven through Person**
- Alternate: 1 Science post + 1 Provocation or Person post per day
- Introduce Posts 22-45 (science) interspersed with Posts 67-85 (provocations)
- Person posts 48-65 distributed throughout

**Week 7-10 (Days 43-70): Larger Frame — reveal the architecture**
- Posts 86-100 clustered in final weeks
- Trust is established by now — the larger claims land differently
- End with Post 99 + Post 100 as the natural close

## Image Strategy — Midjourney + Quote Cards

> **Changed from v1:** GPT Image API → Midjourney (per Eric/Pearl direction)
> Stock photography via Unsplash/Pexels API remains as fill

| Type | Count | Source | Style |
|------|-------|--------|-------|
| Midjourney generated | 50 | Midjourney v6 API or manual | See prompts below |
| Stock photography | 30 | Unsplash/Pexels API (free) | OR adjacent, hands, brain scans, nature, quiet human moments |
| Quote cards | 20 | Programmatic (Sharp library) | Clean typography, dark or bone background, Eric's words |

All images: **1080x1350 (4:5 portrait)** — maximum feed real estate.

### Midjourney Prompt System

**Style directive (append to every prompt):**
```
--style editorial documentary, Leica aesthetic, natural light, shallow depth of field, 
deep navy and warm white and gold palette, no text overlays, physician-scientist warmth, 
photorealistic, --ar 4:5 --v 6
```

**Post-specific prompts (representative sample — generate remaining 40 on same pattern):**

| Post | Theme | Midjourney Prompt |
|------|-------|-------------------|
| 1 | Brain/consciousness | `Close-up of gloved surgical hands holding a human brain model, soft OR lighting, sterile blue-green tones, depth of field on fingertips` |
| 7 | Brain as receiver | `Abstract visualization of radio waves entering a human silhouette, dark background, gold signal lines, no text` |
| 15 | Coherence | `Time-lapse style visualization of synchronized pendulums, warm gold light, minimal dark background` |
| 21 | HRV | `Heart rate monitor waveform, cinematic dark background, single gold sine wave, clean and minimal` |
| 22 | Biophotons | `Single cell emitting faint blue-white light in dark field, macro photography style, bioluminescent quality` |
| 26 | Glymphatic/sleep | `Person sleeping in dark room, blue moonlight, abstract fluid channels overlaid softly on brain outline` |
| 34 | Neuroplasticity | `Neural network branching and growing, warm gold nodes on deep navy background, organic not mechanical` |
| 46 | Medical school at 40 | `Empty lecture hall, single desk lamp lit, medical textbooks stacked, warm solitary light` |
| 55 | Brain as receiver | `Old radio tower at dusk, warm gold light, minimal sky, long exposure stars beginning` |
| 66 | Diagnosis/identity | `Simple portrait, soft side lighting, contemplative expression, shallow depth of field, no medical context` |
| 84 | Consciousness | `Human figure standing in vast dark space, single light source from above, small but luminous` |
| 96 | Portal sentence | `Light entering a prism, spectrum emerging, dark background, no text, editorial quality` |

### Quote Card Spec (20 posts — the provocations)

Posts 66-85 work best as typography cards:
- Background: `#0a0a14` (deep navy) or `#f5f0e8` (bone)
- Font: Georgia serif, 32-36px
- Text: Eric's exact words, centered, 60% width
- Bottom right: `@drericwhitney` in small caps, muted
- No logo, no branding beyond the handle

## Technical Build

### Files to Create

| File | Purpose |
|------|---------|
| `app/scripts/instagram-content-pipeline.ts` | Generate 100 captions + image pairings from seed bank |
| `app/scripts/instagram-publisher.ts` | Buffer CSV export (not Graph API) |
| `app/data/instagram-posts.json` | Output: all 100 posts with caption, image_path, pillar, hashtags, scheduled_date |

### Step 1 — Content Pipeline

1. Load seed bank from this document (100 approved posts above)
2. Use Claude Haiku to finalize each post:
   - Confirm hook is under 125 chars (visible before "...more")
   - Add 3-5 hashtags: `#neuroscience #consciousness #neurosurgeon #thebodyknows #medicine`
   - Light editing only — do NOT rewrite Eric's voice
3. Assign image type (Midjourney / Stock / Quote card) per pillar
4. Generate Midjourney prompts for the 50 AI-image posts
5. Download 30 stock images from Unsplash by keyword
6. Generate 20 quote cards via Sharp
7. Output: `app/data/instagram-posts.json`

### Step 2 — Buffer CSV Export

Format per Buffer CSV spec:
```
scheduled_date, caption, image_url
2026-04-07 09:00, [caption text], [image path or URL]
```

Export as `eric-whitney-instagram-buffer-upload.csv`

### Step 3 — Review Package

Simple HTML preview at `/admin/instagram` showing:
- Post number, pillar, scheduled date
- Caption preview
- Image thumbnail
- Edit button (caption only)

Eric reviews and approves before Buffer upload.

## Cost Estimate

| Item | Cost |
|------|------|
| Midjourney images (50) | ~$10-15 via subscription or per-image |
| Stock images (30 × Unsplash/Pexels) | Free |
| Quote cards (20) | Free |
| Captions finalization (100 × Haiku) | ~$0.50 |
| Buffer (10 weeks) | ~$6 |
| **Total** | **~$17-22** |

## Verification

1. Run pipeline → verify 100 posts with captions + images
2. Spot-check 10 posts: conference-level tone? jargon-free? hook under 125 chars?
3. Preview images at 1080x1350
4. Test 1 post manually on @drericwhitney before Buffer upload
5. Test Buffer CSV import with 3 posts first

---

*Updated by Pearl — Session 137, April 2 2026*
*Changes: Recovery/Resilience pillar → OR Insights Extended | Buffer chosen over Graph API | Midjourney over GPT Image API | Handle confirmed @drericwhitney | Explicit content exclusions added | Full seed bank of 100 approved posts embedded*
