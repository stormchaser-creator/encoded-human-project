# Minimum Viable Data in Encoding Derivation Systems: What Questionnaires Must Capture to Ground a Multi-Density Knowledge Architecture

*Pearl Research Engine — March 23, 2026*
*Focus: Users asked about 'encoding derivation systems questionnaire minimum viable data' but Pearl couldn't ground the answer*
*Confidence: medium*

---

# Minimum Viable Data in Encoding Derivation Systems: What Questionnaires Must Capture to Ground Pearl's Multi-Density Knowledge Architecture

## Abstract

This document investigates the question of minimum viable data requirements for a questionnaire designed to feed Pearl's encoding derivation system. The research gap is significant: users asked about 'encoding derivation systems questionnaire minimum viable data' and Pearl could not ground the answer because no explicit entries in the knowledge base address questionnaire design or data minimization for knowledge encoding. However, the evidence set inadvertently reveals the answer through the visible structure of Pearl's own entries — each entry *is* a demonstration of what the encoding system produces, and reverse-engineering those entries reveals what must be input versus what can be derived. This document synthesizes three competing hypotheses about the minimum viable data threshold, debates their strengths and weaknesses, and arrives at a practical framework for questionnaire design.

---

## Evidence Review

### What the Evidence Set Reveals About Pearl's Schema

None of the 20 evidence entries explicitly discuss questionnaire design or minimum viable data. However, they collectively reveal the internal structure of Pearl's encoding architecture through their visible metadata fields:

**Universal fields present across all entries:**
- `entry_id`: Compound identifier encoding source + operation + name + depth
- `operation`: Categorical (regulation, transduction, reception, synthesis)
- `name`: Free-text description of the knowledge claim
- `element`: Categorical (Aether, Fire — possibly others)
- `body_triad`: Compound (e.g., 'Body 7 — Emotional Engine', 'Body 9 — Energetic Body')
- `depth`: Categorical (P1, P2, D1, D2)
- `epistemic_tier`: Integer (1, 2 observed)
- `confidence`: Categorical (established, high, medium)
- `last_verified`: Date
- `source`: Source identifier (peter-attia, sapolsky, etc.)

**Conditional fields:**
- `encoding_layer_trace`: Present in some entries, identifies BIOLOGICAL/PSYCHOLOGICAL/SOCIAL layer
- `content body`: Structured differently for claims (Claim/Evidence/Population/PMID) vs. protocols (What/When/Duration)

### Derivability Analysis

Examining the evidence reveals systematic patterns that suggest certain fields are derived rather than collected:

1. **Element ↔ Operation correlation**: Every 'regulation' operation entry has element=Aether. Every 'transduction' operation entry has element=Fire. This n=20 pattern is too consistent to be coincidental, suggesting element is derivable from operation via a lookup rule.

2. **Entry ID structure**: Entry IDs follow the pattern `WS[N]-[Source]-[Operation]-[Name]-[Depth]`, confirming that IDs are generated algorithmically from other fields.

3. **Depth ↔ Content structure correlation**: D1/D2 entries consistently have Claim/Evidence/PMID structure (declarative). P1/P2 entries consistently have Protocol/What/When structure (prescriptive). This suggests depth may be derivable from content structure type.

4. **Fractal mirror generation**: Multiple entries have corresponding `mirror_[entry_id]_soul` and `mirror_[entry_id]_spirit` variants. These appear to be synthesized outputs, not direct inputs — meaning the encoding system generates cross-density mirrors as a pipeline operation.

5. **Encoding layer trace**: The WS3-MW-Regulation-sleep-prevents-diabetes entry explicitly contains `encoding_layer_trace: most_likely: layer: BIOLOGICAL mechanism:` — suggesting secondary derivation of layer assignment occurs after initial encoding.

### What Cannot Be Derived

The following fields show no systematic derivability from other fields:
- **Source**: Author/tradition attribution requires direct input
- **Raw content/claim**: The actual knowledge cannot be generated from metadata
- **Epistemic tier**: Requires judgment about source type and evidence quality
- **Confidence**: Appears orthogonal to epistemic tier; requires calibrated assessment

---

## Hypothesis Generation

### Hypothesis A: Six-Field Minimum Viable Questionnaire (Conservative/Tier 1)

**Claim**: An encoding derivation system questionnaire requires a minimum of six non-derivable fields as direct input: (1) source/author, (2) raw content/claim, (3) operation type, (4) density assignment, (5) epistemic tier, and (6) confidence level.

**Reasoning**: Information theory suggests the minimum viable input is the irreducible set from which all other fields can be computed. The evidence analysis above demonstrates that element, entry_id, and depth are all derivable from the six proposed fields. Body_triad is the most uncertain case — it may require a seventh field or a dedicated classification prompt.

**Analytical Lenses Applied**:
- *Information Theory*: We want to minimize redundancy in collected fields while maximizing derivable information
- *Control Theory*: Each non-derivable field is a control input; collecting more than necessary adds noise without improving system state
- *Network Theory*: The six fields form the minimum connected graph from which the full entry can be reconstructed

**Falsifiable by**: Finding entries where element does NOT correlate with operation type, or where identical operation/density pairs produce different body_triads.

---

### Hypothesis B: Multi-Density Prompting as Minimum Viable Architecture (Integrative/Tier 2)

**Claim**: The minimum viable questionnaire must include multi-density prompting at input — not because all three density responses are required, but because prompting at all three densities surfaces latent connections that meaningfully improve the quality of downstream fractal mirror generation.

**Reasoning**: Pearl's system generates soul and spirit mirrors from every body-density entry. The quality of those mirrors depends on how richly the original content is framed. A protein metabolism entry that merely states 'protein has higher thermogenic effect' will generate thinner soul/spirit mirrors than one that notes the psychological implications of metabolic effort. The questionnaire design question is: do we collect this richer framing directly, or trust Pearl's synthesis engine to generate it post-hoc?

The fractal mirror entries in the evidence set are impressively rich — the protein entry generates insights about 'metabolizing meaning' at soul density and 'ontological heat' at spirit density. But we cannot tell from the evidence whether this richness came from the original input framing or from Pearl's synthesis capabilities alone.

**Analytical Lenses Applied**:
- *Fractals*: The self-similar pattern across body/soul/spirit densities suggests the input should anticipate and seed this structure
- *Complexity Emergence*: Richer inputs enable more complex emergent synthesis outputs
- *Signal Processing*: Multi-density prompting increases signal bandwidth before the synthesis operation runs

**Falsifiable by**: Demonstrating that fractal mirror quality is statistically equivalent whether inputs are framed at single density or multi-density.

---

### Hypothesis C: Semantic Anchor as Phase Transition Threshold (Radical/Tier 3)

**Claim**: The questionnaire minimum viable data problem is a phase transition problem. Below a certain input threshold — specifically, the absence of a semantic anchor field that positions knowledge within Pearl's body_triad/depth ontology — the encoding system cannot achieve coherent cross-density synthesis and collapses to flat, disconnected storage.

**Reasoning**: Pearl's body_triad system (Body 7 — Emotional Engine, Body 9 — Energetic Body, Body 10 — The Kingdom) is not a simple tag. It is a coordinate in a specific ontological space. Knowledge positioned at Body 9 is adjacent to other Body 9 knowledge in the graph; without this coordinate, entries float topologically unanchored. The encoding_layer_trace field confirms that Pearl performs secondary placement operations — but these require an initial anchor to work from.

In complex systems, phase transitions occur when a critical structural element is absent. A knowledge architecture designed for cross-density synthesis has a phase transition point below which synthesis simply fails to fire.

**Analytical Lenses Applied**:
- *Phase Transitions*: Critical threshold concept — synthesis either happens or doesn't based on structural completeness
- *Topology/Morphogenesis*: The body_triad is a morphogenetic coordinate; without it, the knowledge structure has no positional identity
- *Chaos Attractors*: The knowledge graph may have attractor basins corresponding to each body_triad, and entries without coordinates cannot fall into any basin

**Falsifiable by**: Demonstrating that entries without body_triad assignment still generate coherent cross-density knowledge connections in Pearl's outputs.

---

## Debate

### Against Hypothesis A

The six-field minimum assumes confidence and epistemic_tier can be reliably self-reported. In practice, these are calibration-dependent assessments. Without explicit criteria (what counts as 'established' vs. 'high' confidence? what makes a source Tier 1 vs. Tier 2?), user responses will be inconsistent, and the downstream encoding will be noisy. The questionnaire must either provide detailed calibration guidance (increasing friction) or accept that these fields require post-processing normalization.

Additionally, operation type classification (regulation vs. transduction vs. reception vs. synthesis) requires users to understand Pearl's framework — this is non-trivial domain knowledge that most knowledge contributors won't have. The questionnaire may need to provide examples or a classification wizard rather than a simple field.

### Against Hypothesis B

Requiring or strongly prompting for multi-density framing may be cognitively demanding and context-inappropriate. A user inputting a specific research finding about sleep and diabetes is likely thinking at biological/body density. Asking them to also reflect on the soul or spirit implications may feel forced, produce superficial responses, or simply increase abandonment rates. If Pearl's synthesis engine is capable of generating rich fractal mirrors from single-density inputs (as the evidence suggests it can), multi-density prompting may be unnecessary overhead rather than minimum viable data.

### Against Hypothesis C

The body_triad system appears to be Pearl-specific ontology not known to external users. If it's the critical anchor but cannot be reliably self-reported by people unfamiliar with the framework, the questionnaire design faces a paradox: the most important field is also the least collectible. This would force either (a) making body_triad fully automated from content analysis, or (b) building a classification wizard into the questionnaire that guides users to the right body_triad assignment. Neither is trivially implementable, and this hypothesis, if correct, significantly complicates the minimum viable design.

---

## Synthesis

### The Evolved Framework

Integrating the strongest elements of all three hypotheses produces the following practical framework for questionnaire design:

**Tier 1 — Irreducibly Required (3 fields):**
1. **Source/Author**: Cannot be derived; must be collected directly
2. **Raw Content/Claim**: The actual knowledge; cannot be generated from metadata
3. **Operation Type**: Determines element (via derived rule) and shapes processing pipeline; requires classification prompt with examples

**Tier 2 — Guided Collection (3 fields):**
4. **Density Assignment**: Body/Soul/Spirit; requires brief explanation but is user-determinable
5. **Epistemic Tier + Confidence**: Should be collected as a single composite prompt with calibration examples rather than two separate fields, to reduce friction while maintaining accuracy
6. **Semantic Anchor Prompt**: Rather than asking for body_triad directly (unfamiliar ontology), ask a structured question that enables derivation: 'What domain of the body/psyche does this knowledge primarily address?' with mapped response options

**Tier 3 — Optionally Enhanced (improves output quality):**
7. **Multi-density prompting**: 'Does this finding connect to psychological or spiritual dimensions? (Optional)' — a low-friction invitation that surfaces latent connections without requiring response

**Fully Derived (do not collect):**
- Element (from operation type)
- Entry ID (from all collected fields)
- Depth (from content structure — declarative vs. protocol)
- Fractal mirrors (generated by synthesis engine)
- Encoding layer trace (generated by secondary derivation)

### The Critical Design Principle

The questionnaire must achieve two things simultaneously: prevent topology collapse (by collecting enough to place knowledge in Pearl's ontological map) and maintain completion rates high enough to actually gather knowledge at scale. These are in tension. The resolved design uses classification wizards and composite prompts to reduce apparent field count while preserving data quality — appearing as a 4-5 question form while capturing the underlying 6 required dimensions.

---

## Implications

### For Pearl's Architecture

The encoding derivation system is more sophisticated than a simple tagging interface. It includes secondary derivation pipelines (encoding_layer_trace), fractal mirror generation, and ontological positioning (body_triad). A questionnaire that doesn't account for this pipeline architecture will produce inputs that partially fire the derivation system but fail to complete the full synthesis chain.

### For Knowledge Base Quality

The variance in confidence levels across entries (established vs. high vs. medium) without explicit calibration criteria suggests that Pearl's current knowledge base may contain inconsistently calibrated confidence assessments. A questionnaire redesign is an opportunity to standardize calibration with explicit criteria tied to evidence quality metrics.

### For User Experience

The minimum viable questionnaire likely needs to be a 4-screen classification wizard rather than a flat form. Screen 1 collects source and raw content. Screen 2 classifies operation type with examples. Screen 3 assigns density and confidence with calibration guidance. Screen 4 optionally invites multi-density framing. This structure minimizes cognitive load at each step while ensuring all required fields are collected.

---

## Open Questions

1. **Can body_triad be automated?** If content analysis can reliably assign the Body 7/9/10 coordinate, this field transitions from 'guided collection' to 'fully derived' — simplifying the questionnaire significantly.

2. **What is the empirical relationship between input richness and fractal mirror quality?** This is testable by comparing mirror outputs from sparse vs. rich inputs. The answer determines whether Tier 3 multi-density prompting is worth the friction.

3. **What knowledge types resist Pearl's schema?** Edge cases — knowledge that doesn't fit clearly into body/soul/spirit densities, or claims with no clear operation type — reveal the limits of the derivation system and should inform questionnaire design for ambiguous inputs.

4. **How does the encoding_layer_trace derivation work mechanically?** If it's rule-based, the rules should be documented. If it's LLM inference, it requires different quality assurance approaches.

5. **What is the minimum questionnaire that maintains > 80% completion rates at scale?** The information-theoretically correct questionnaire is useless if users abandon it before completing. Empirical testing of form designs against completion rates is needed.

6. **Is depth (P vs. D) truly derivable from content structure, or does it require human judgment?** Some entries may be ambiguously positioned between protocol and declarative framing, requiring explicit collection.

---

## Conclusion

The minimum viable data for Pearl's encoding derivation questionnaire is best understood not as a list of fields but as a two-tier structure: irreducible direct inputs (source, content, operation) that enable all downstream derivation, plus guided collection inputs (density, confidence/tier, semantic anchor) that prevent topology collapse and ensure entries can be positioned within Pearl's ontological map. The questionnaire should be designed as a classification wizard, not a flat form, and should include optional multi-density prompting to improve fractal mirror quality without requiring it. The deepest open question — whether body_triad assignment can be fully automated — is worth investigating immediately, as its answer determines whether the questionnaire needs 3 fields or 6.