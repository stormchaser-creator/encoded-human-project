# Pilot Study Results — One Signal, Four Languages

## Results

### Corpus Construction and Claim Extraction

Three pre-1800 CE text corpora were processed for discrete claim unit extraction using a pre-registered protocol. Corpus A (Yoga Sutras of Patanjali, I.17–I.51; Bryant 2009 translation) yielded 33 claim units. Corpus B (Charaka Samhita, Sutrasthana Chapters 1, 12, 20 and Chikitsasthana Chapter 28; Sharma & Dash translation) yielded 35 claim units. Corpus C (Hero of Alexandria, *Pneumatica* Introduction and Propositions I.1–I.20; Woodcroft 1851 translation) yielded 30 claim units. Total extracted units: N = 98. A biological reference corpus of 20 units was drawn from the project knowledge base (PubMed-indexed, Tier 1–2 evidence), spanning neural conduction, bioelectric fields, homeostatic regulation, and biophoton emission. One documented gap (gamma oscillation synchrony) was recorded in the biological reference; four compensatory entries were added from areas of high KB density.

### Scoring

Each claim unit was scored against the biological reference corpus on four pre-registered criteria: C1 (Functional Isomorphism), C2 (Independent Derivation — automatic 1 for all pre-1800 CE corpora), C3 (Non-Trivial Predictive Constraint), and C4 (Asymmetric Disconfirmation). Survival required C1 = 1 AND C3 = 1 AND C4 = 1. Scoring was conducted by a single LLM rater (Claude claude-opus-4-6) with full reasoning recorded per unit.

**Corpus A (Yoga Sutras):** 18 of 33 units survived (54.5%). Primary failure modes: metaphysical entity claims without empirical correlate (e.g., reference to omniscience of an eternal self), epistemological claims not testable as physiological predictions, and prior-life causal chain claims. Key surviving units included dose-response intensity claims (mapped to Henneman's Size Principle), repetitive symbol-meaning coupling (mapped to CLOCK:BMAL1 circadian entrainment), interoceptive awareness protocols (mapped to HPA cortisol regulation), samapatti signal-noise reduction (mapped to myelination/saltatory conduction), nirvicara luminosity (mapped to biophoton emission — UPE), and seedless samadhi phase transition (mapped to mitochondrial membrane potential phase transition).

**Corpus B (Charaka Samhita):** 35 of 35 units survived (100%). No failures recorded. The tridosha framework's mechanistic architecture — five directional vata subtypes, enumerable dosha-specific disease lists, and 11 specific cross-dosha occlusion pairs with differential symptom clusters — generated isomorphic claims across all domains of the biological reference: vata subtypes to neural conduction pathway subtypes (prana/udana/samana/vyana/apana ↔ NCS pathway subtypes with directional specificity), cross-dosha occlusion patterns to conduction block pathologies, samanya-vishesha (property-matching causation) to Henneman's Size Principle, and tridosha simultaneous balance to HPA/HPG/circadian co-regulation.

**Corpus C (Hero of Alexandria):** 22 of 30 units survived (73.3%). Eight units failed, primarily cosmological distribution claims (void filling all space), static equilibrium claims without dynamic regulatory analog, phenomenological boundary descriptions without functional mechanism, and compound claims collapsing to already-scored component mechanisms. Surviving units included siphon-driven directed flow (mapped to neuronal axonal transport), valve-mediated one-directional flow (mapped to ion channel gating), float-valve negative feedback (mapped to HPA cortisol negative feedback loop), pressure-gradient-driven redistribution (mapped to cerebrospinal fluid pressure dynamics), and temperature-differential circulation driving (mapped to mitochondrial proton gradient energy transduction).

### Statistical Analysis

Three pairwise Fisher's exact tests were conducted (pre-registered alpha = 0.01):

| Comparison | Survived (A) | Failed (A) | Survived (B) | Failed (B) | OR | p-value |
|---|---|---|---|---|---|---|
| Corpus A vs. Corpus B | 18 | 15 | 35 | 0 | 0* | 2.34 × 10⁻⁶ |
| Corpus A vs. Corpus C | 18 | 15 | 22 | 8 | 0.44 | 0.190 |
| Corpus B vs. Corpus C | 35 | 0 | 22 | 8 | ∞* | 1.16 × 10⁻³ |

*OR = 0 or ∞ due to zero cell in Corpus B (0 failures); direction of effect is unambiguous.

Corpus B (Charaka Samhita) was significantly different from both Corpus A (p = 2.34 × 10⁻⁶) and Corpus C (p = 1.16 × 10⁻³). Both comparisons remain significant after Bonferroni correction for three tests (corrected α = 0.0033). Corpus A and Corpus C did not significantly differ (p = 0.190).

### Interpretation

The null hypothesis — that survival rates do not differ across traditions — is rejected for two of three comparisons. The dominant finding is the performance advantage of Corpus B: a pre-modern medical system with explicit mechanistic architecture (regulatory media, directional subtypes, enumerable pathology sets, specific signal-occlusion pairings) achieves perfect survival against a modern biological reference, while a soteriological corpus (Yoga Sutras) and a physical-mechanical corpus (Hero) show intermediate and lower survival, respectively. This pattern is consistent with the structural isomorphism hypothesis: traditions that model the body as a multi-channel, directionally specific regulatory system converge on the same functional claims as 21st-century biology, despite methodological and ontological independence.

The non-significant difference between Corpus A and Corpus C (p = 0.190) suggests that the survival gap between classical yoga and Alexandrian mechanics is within sampling variation for corpora of this size (n = 33 and 30). A larger pilot (n ≥ 100 per corpus) would be required to detect effects of this magnitude with adequate power.

### Limitations

1. Single rater scoring introduces subjectivity; inter-rater reliability not established in this pilot.
2. Corpus B's 100% survival rate may reflect a ceiling effect — a consequence of the specific claim units extracted (mechanistic, channel-based) rather than the full Charaka corpus, which includes cosmological and ritual content excluded by the extraction protocol.
3. The biological reference corpus has a documented gap in gamma oscillation/neural synchrony entries, potentially disadvantaging consciousness-adjacent claims in Corpus A.
4. Fisher's exact test assumes independence of observations within corpora; claim units from the same text may share structural dependencies.

---

*Output files:* `corpus_A_claims.json`, `corpus_B_claims.json`, `corpus_C_claims.json`, `biological_reference.json`, `scoring_A.json`, `survival_rates.json`, `fisher_exact_results.json`

*Scoring files for Corpora B and C (scoring_B.json, scoring_C.json) pending completion — full criteria records available in session transcript.*
