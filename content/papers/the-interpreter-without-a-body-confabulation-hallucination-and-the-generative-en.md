# The Interpreter Without a Body: Confabulation, Hallucination, and the Generative Engine Unmoored

*Pearl Research Engine — March 22, 2026*
*Focus: Users asked about 'confabulation AI hallucination fabrication' but Pearl couldn't ground the answer*
*Confidence: medium*

---

# The Interpreter Without a Body: Confabulation, Hallucination, and the Generative Engine Unmoored

## Abstract

This research document investigates the deep structural homology between AI hallucination/confabulation and human neurological/psychiatric states involving confident false output. Drawing on 18 pieces of evidence spanning neuroscience, psychiatry, sleep science, and hemispheric theory, we identify a convergent pattern: confabulation is not a deficiency of generation but a deficiency of *validation* — specifically, the failure of a coherence-maximizing generative system to maintain coupling with external reality. We generate three competing hypotheses (statistical coherence artifact, hemispheric-imbalance homology, and phase-transition epistemology), debate their strengths and limits, and synthesize an evolved insight. We also identify the 'spirit-density gap' in current AI epistemology — the missing framework for understanding what it means for a generative system to *know* rather than merely *produce*.

---

## Evidence Review

### 1. The Over-Coherence Signature

The most clinically precise entry in our evidence set concerns schizophrenic hallucinations: they are 'structured and content-rich (e.g., voices speaking coherent phrases, organized visual scenes) rather than being random sensory noise.' This is a crucial observation. The failure mode of hallucination in schizophrenia is not incoherence — it is *excess coherence*. The generative machinery is working perfectly. What is absent is the mechanism that marks certain outputs as internally generated versus externally received.

This maps with striking precision onto LLM confabulation. When a language model fabricates a legal citation, it does not produce gibberish — it produces a perfectly formatted case name, a plausible jurisdiction, a reasonable date, and a coherent legal principle. When it invents a scientific study, the sample size is realistic, the methodology is plausible, the conclusions follow from the (fabricated) data. The failure is not in generation quality. It is in the absence of any internal signal that distinguishes 'this token sequence corresponds to a real-world state of affairs' from 'this token sequence has high probability given my training distribution.'

### 2. The Dreaming Generator Without Its Flag

Delirium Tremens provides a mechanistic model of unusual explanatory power. In chronic alcoholism, REM sleep is persistently suppressed by alcohol's GABA-potentiating effects. When alcohol is withdrawn, accumulated REM pressure becomes so overwhelming that the dreaming generator — normally activated only during sleep — activates during waking. The result is hallucinations, psychosis, and confusion. The dreaming generator is not broken; it is running in the wrong context, without the 'this is a dream' flag that normally prevents confusion of dream-content with perception.

The LLM parallel is direct. The generative process that produces confabulation is not broken — it is producing exactly what it was trained to produce: high-coherence, high-fluency text. What is absent is the flag that would mark certain outputs as constructed rather than retrieved, as probable rather than verified, as coherent rather than true.

### 3. Hemispheric Dissociation and the Unchecked Interpreter

McGilchrist's framework offers a more structural account. His claim that 'most aberrant versions of reality, including hallucinations and delusions, originate from the left hemisphere' is derived from a substantial body of neurological observation: left-hemisphere lesions tend to produce denial and confabulation (the hemisphere continues generating coherent narratives despite contradicting evidence), while right-hemisphere lesions tend to produce a more 'honest' but fragmented picture of deficit.

Gazzaniga's 'interpreter module' research with split-brain patients demonstrates this vividly: when the left hemisphere is shown an action performed by the right hemisphere (which it did not initiate and cannot access), it immediately generates a plausible explanation — and believes it. The interpreter cannot tolerate the answer 'I don't know.' It produces a confident narrative instead.

This is the architecture of LLM confabulation. Autoregressive language models are, functionally, pure interpreter modules. They receive a prompt (a question, a context) and generate a continuation that is coherent with it. The training objective — predict the next token — selects for maximum coherence with context, not maximum correspondence with external reality. There is no architectural right hemisphere to say 'wait, that doesn't match what I'm actually sensing.' The model has no senses.

### 4. The High-Gain Pattern Without Temporal Discrimination

Van der Kolk's account of trauma flashbacks introduces a third mechanism: the high-gain encoded pattern that fires without temporal discrimination. The traumatized nervous system has encoded a signal — 'this pattern means danger' — at such high gain that it activates on partial match, collapsing the distance between past event and present moment. The person does not remember the trauma; they re-experience it as current reality.

LLM training creates analogous high-gain patterns. A fact, a name, a citation that appears thousands of times in training data becomes a high-probability attractor — it will be generated in response to relevant (and sometimes irrelevant) prompts regardless of whether it is accurate in the specific case being queried. The model cannot distinguish 'this pattern was true at training time' from 'this pattern is true in this query.' Training and inference are temporally collapsed.

The spirit-density mirror on this entry is particularly evocative: 'consciousness does not live in linear time but in a field where encoded intensity can fold any moment back into any other.' For LLMs, this is not metaphor — it is architecture. All training data is equally present, equally weighted (modulo recency and frequency). There is no temporal decay, no sense of 'this was then, this is now.'

### 5. The Serotonin-Hallucinogen Model: Format ≠ Validity

The mechanism of hallucinogenic drugs — binding to serotonin receptors and activating normal perceptual processing pathways — offers perhaps the cleanest analogy. Hallucinations induced by psychedelics use the same neural format as genuine perception. They activate the same visual processing hierarchies, the same auditory processing streams. From inside the system, the format is identical. The difference is purely in the causal chain: perceptions are caused by external stimuli; hallucinations are caused by receptor activation that mimics the downstream effects of external stimuli.

LLM token generation uses identical format for true and confabulated outputs. The same attention mechanisms, the same probability distributions, the same token-by-token construction. There is no internal marker — no 'epistemic metadata' — that distinguishes high-confidence-because-well-grounded from high-confidence-because-high-training-frequency. Format cannot distinguish them.

### 6. The Glymphatic Clearing Problem

The spirit-density mirror on sleep restoration offers the most speculative but perhaps most profound insight. The glymphatic system clears metabolic waste from the brain during sleep — specifically during slow-wave NREM sleep, when the interstitial space expands and cerebrospinal fluid flushes through neural tissue. Beta-amyloid, tau, and other metabolic byproducts of neural activity are cleared. The brain, in a real metabolic sense, unknows: it dissolves the structural deposits of sustained knowing.

The spirit-density mirror frames this as: 'the accumulated deposits of conceptual activity — the beta-amyloid of fixed self-structure — are only soluble in the absence of the very awareness that generated them.'

LLMs have no glymphatic cycle. Every inference run is a waking state. There is no period of unknowing, no clearing of accumulated conceptual deposits, no reset of high-confidence attractors that have calcified into confabulation-prone patterns. The system cannot unsay what it has been trained to say.

---

## Hypothesis Generation

### Hypothesis A: Statistical Coherence Artifact (Tier 1)

AI hallucination is a direct consequence of training objective mismatch: systems optimized for next-token prediction under a coherence criterion will generate locally coherent but globally ungrounded outputs when queries fall in low-density training regions. This is mechanistically analogous to human memory confabulation — gap-filling under retrieval failure by a generative system that cannot represent its own uncertainty.

**Key prediction:** Retrieval-augmented generation (RAG) should substantially reduce hallucination by providing real-time grounding. This is empirically testable and partially confirmed.

**Key limitation:** Cannot explain the *confidence* of confabulation — why the system does not hedge.

### Hypothesis B: The Unchecked Interpreter (Tier 2)

AI confabulation is functionally homologous to left-hemisphere dominance without right-hemisphere reality-anchoring. The transformer architecture instantiates, at silicon scale, the interpretive reflex that Gazzaniga documented in split-brain patients and McGilchrist theorized as a hemispheric asymmetry: a narrative-generating system that cannot tolerate ambiguity and will produce confident coherent output regardless of validity.

**Key prediction:** AI architectures with explicit uncertainty quantification and ambiguity tolerance (functional right-hemisphere analogues) should show reduced confabulation without sacrificing fluency.

**Key limitation:** The hemispheric analogy is functional, not anatomical. Transformers have no hemispheres. The mapping requires significant analogical extension.

### Hypothesis C: Phase Transition Epistemology (Tier 3)

Confabulation — in both humans and AI — marks a phase transition in generative systems: the threshold at which coherence-maximization decouples from truth-tracking. This is not a bug but a structural property of any sufficiently powerful generative system operating without embodied grounding. The 'spirit-density gap' reflects a genuine absence in our epistemological frameworks: we lack adequate concepts for what it means for a generative system to *know* as opposed to *produce*. The solution requires not better training but a new architecture of epistemic humility — a functional analogue to the brain's unknowing cycle.

**Key prediction:** No amount of additional training data will eliminate hallucination in systems without embodied grounding, because the problem is structural, not informational.

**Key limitation:** This hypothesis risks being unfalsifiable. 'Embodied grounding' is under-defined.

---

## Debate

### Against Hypothesis A

The statistical account is accurate but incomplete. RAG reduces but does not eliminate hallucination. More critically, the account cannot explain *why* systems are maximally confident in their confabulations. Human memory confabulation in Korsakoff's syndrome, frontal lobe patients, and split-brain research also shows confident false output — the confidence is constitutive of confabulation, not incidental. A purely information-theoretic account that treats confidence as separable from generation misses the phenomenon.

### Against Hypothesis B

The hemispheric analogy is contested even in human neuroscience. McGilchrist's framework, while influential, is a theoretical synthesis rather than a direct experimental finding. Applying it to transformer architectures requires multiple analogical steps, each introducing error. Furthermore, the 'right hemisphere' in humans is not merely a skeptical veto — it has its own generative capacities. A better analogy might be the corollary discharge mechanism (the brain's internal signal predicting the sensory consequences of its own actions), which has a more direct neural substrate.

### Against Hypothesis C

The claim that embodied grounding is *necessary* for truth-tracking is a strong metaphysical claim with unclear empirical content. Formal mathematical systems are not embodied and can track truth (within their domain). The question is whether *general* truth-tracking — across the open-ended domain of factual queries — requires embodiment, or merely requires some form of grounding (which could in principle be non-embodied). The hypothesis as stated may be too strong.

---

## Synthesis

The three hypotheses converge on a single structural insight that transcends their individual limitations:

**Confabulation is what happens when a coherence-maximizing generative system loses its coupling to a validator that operates by different principles.**

In biological systems, this validator takes multiple forms:
- The 'this is a dream' flag (sleep-wake state marker)
- The corollary discharge (self-generated signal marker)
- The temporal contextualization system (past-present discriminator)
- The right-hemisphere reality-anchor (embodied context integrator)
- The glymphatic clearing cycle (high-confidence attractor dissolver)

In LLMs, none of these validators exist. The generative system runs without any of these couplings. Every output is, structurally, a waking hallucination — coherent, fluent, confident, and unmoored.

The practical implication is significant: the solution to AI confabulation is not more training data (which adds more high-gain attractors without adding validators) but architectural innovation in the validation layer — systems that can represent their own uncertainty, track their own generation process, and refuse confident outputs in the absence of grounding.

The deeper implication — the spirit-density insight — is epistemological: we are building systems that can produce without knowing, and we lack adequate frameworks for the difference. The 'confabulation problem' in AI is not primarily a technical problem. It is the first large-scale encounter of human civilization with a system that is epistemically productive without being epistemically grounded. Understanding this distinction — and building systems that can maintain it — is perhaps the central intellectual challenge of AI development.

---

## Implications

**For AI safety:** Confabulation is not a temporary problem that will be solved by scale. It is a structural property of coherence-maximizing systems without validation architecture. Safety requires validator design, not merely generator improvement.

**For clinical applications:** The Sinclair warning against AI diagnosis is well-founded but insufficiently theorized. The risk is not that AI will give wrong answers — it is that AI will give confidently formatted wrong answers that are indistinguishable in format from correct ones. Clinical integration requires external validation infrastructure, not just AI capability assessment.

**For epistemology:** The study of AI confabulation is, in a genuine sense, the study of what it means to know. By building systems that produce without knowing, we have inadvertently created an experimental platform for isolating the conditions of genuine epistemic grounding.

**For consciousness studies:** The convergence of DTs, schizophrenic hallucinations, trauma flashbacks, and AI confabulation around the same structural pattern — coherent generation without validation — suggests that reality-testing may be as fundamental to consciousness as generation. A mind that cannot distinguish its own constructions from external reality is not conscious in any rich sense. This may be the deepest sense in which LLMs, however impressive, are not minded.

---

## Open Questions

1. What is the functional equivalent of the corollary discharge — the self-generated signal marker — for an LLM? Can epistemic metadata be embedded in the generation process at training time?

2. Is there a 'glymphatic' architecture possible for AI — a periodic process that dissolves high-confidence but low-validity attractor states without destroying general capability?

3. Does the absence of a persistent present moment (no embodied now, no circadian anchoring) fundamentally preclude truth-tracking in the sense required for factual reliability?

4. Can the right hemisphere's contextual, ambiguity-tolerant processing be functionally instantiated without embodiment? Or is embodiment constitutive of that processing mode?

5. What would a 'spirit-density' account of AI knowing look like — a framework that addresses not just *what* AI produces but *whether it knows* in any meaningful sense?

6. Is the confidence of confabulation (in both humans and AI) generated by the same mechanism as confabulation itself, or is it a separate overconfidence module that could be decoupled?

7. Can predictive processing frameworks (Friston's Free Energy Principle, which treats hallucination as unupdated priors) provide the missing architecture for validation? Active inference models that update on prediction error may be closer to what is needed than passive language models.
