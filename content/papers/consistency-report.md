# The Light Machine — Cross-Section Consistency Report

**Date:** 2026-03-16
**Reviewer:** Claude (automated cross-section analysis)
**Scope:** All 15 chapters (00-abstract through 14-conclusion)

---

## MUST FIX Issues

### 1. Scale Numbering Conflict: Hierarchy Chapter vs. Dedicated Chapters

**Severity:** MUST FIX
**Chapters involved:** 02 (hierarchy) vs. 03-09 (scale chapters)

Chapter 02 defines seven scales by frequency band:
- Scale 1: Quantum Oscillations (~10^12 - 10^15 Hz)
- Scale 2: Molecular Oscillations (~10^-1 - 10^-3 Hz)
- Scale 3: Organellar Oscillations (~10^-2 - 10^-1 Hz)
- Scale 4: Organ-Level Oscillations (~0.01 - 1 Hz)
- Scale 5: Neural Network Oscillations (~0.5 - 120 Hz)
- Scale 6: Circadian Oscillations (~1/86,400 Hz)
- Scale 7: Infradian Oscillations (~10^-6 - 10^-8 Hz)

The dedicated chapters (03-09) use completely different content assignments:
- Ch 03 "Scale 1": Molecular Coherence (Soliton Physics) -- maps to Ch 02's Scale 1 (Quantum) + Scale 2 (Molecular)
- Ch 04 "Scale 2": Organelle Network Synchrony -- maps to Ch 02's Scale 3
- Ch 05 "Scale 3": Epigenetic Oscillatory Fidelity -- NOT in Ch 02's hierarchy at all
- Ch 06 "Scale 4": Tissue Coordination (Circadian) -- maps to Ch 02's Scale 6
- Ch 07 "Scale 5": Systemic Oscillation (HRV/Sleep) -- maps to Ch 02's Scale 4 + Scale 5
- Ch 08 "Scale 6": Morphogenetic Field Integrity -- NOT in Ch 02's hierarchy
- Ch 09 "Scale 7": Observer Coupling (Consciousness) -- NOT in Ch 02's hierarchy

**Fix applied:** Rewrote the seven-scale definitions in Ch 02 to match the actual content of the dedicated chapters. The hierarchy now reads: (1) Molecular Coherence, (2) Organelle Network Synchrony, (3) Epigenetic Oscillatory Fidelity, (4) Tissue Coordination (Circadian), (5) Systemic Oscillation (HRV/Sleep), (6) Morphogenetic Field Integrity, (7) Observer Coupling. Frequency ranges reassigned to match the content of each chapter. Cross-references updated, including the "hourglass decoherence" prediction paragraph and the infradian rhythms (moved to a non-numbered "Infradian Context" section). Also fixed a downstream cross-reference in Ch 08 where "Scale 2-3" was updated to "Scales 1-2" to match the new numbering.

---

### 2. Introduction Roadmap Does Not Match Paper Structure

**Severity:** MUST FIX
**Chapters involved:** 01 (introduction)

The introduction's roadmap paragraph describes a 6-section paper:
> "Section 2 establishes the mathematical foundations... Section 3 presents the three-tier coherence hierarchy... Section 4 introduces the coherence fingerprint hypothesis... Section 5 addresses falsifiability... Section 6 considers the implications..."

The actual paper has 14 sections with completely different organization. This roadmap matches no part of the actual structure.

**Fix applied:** Replaced the roadmap paragraph with one that accurately describes the 14-section structure: hierarchy (Section 2), seven scale chapters (Sections 3-9), critics (Section 10), missing lenses (Section 11), interventions (Section 12), Pearl (Section 13), conclusion (Section 14).

---

### 3. Cross-Reference Error in Intervention Hierarchy

**Severity:** MUST FIX
**Chapters involved:** 12 (intervention hierarchy)

Chapter 12 states: "The cross-scale oscillatory coupling hypothesis identifies three nested tiers that must function simultaneously for biological permanence (see Section 4):"

Section 4 is Ch 04 (Scale 2 -- Organelle Network Synchrony), not the three-tier coupling model. The three-tier model is introduced in Section 2 (Ch 02, The Seven-Scale Hierarchy, under "The Coupling Problem").

**Fix applied:** Changed "see Section 4" to "see Section 2."

---

## SHOULD FIX Issues

### 4. Sleep Spindle Frequency Range Inconsistency

**Severity:** SHOULD FIX
**Chapters involved:** 02, 07, 12 vs. 00, 01

Most chapters cite spindles as 12-15 Hz. Chapter 07 uses "11-15 Hz" in one instance. The abstract and introduction consistently use 12-15 Hz.

**Fix applied:** Standardized to 12-15 Hz in Ch 07.

---

### 5. Slow Oscillation Frequency Inconsistency

**Severity:** SHOULD FIX
**Chapters involved:** 00, 02 vs. 07, 12

The abstract and Ch 02 cite slow oscillations at "~0.75 Hz." Chapters 07 and 12 cite "0.5-1 Hz" and "~0.75 Hz" in different places. Both are defensible (0.75 Hz is a typical peak, 0.5-1 Hz is the range), but the paper should be consistent in how it presents this.

**Fix applied:** Standardized primary references to "~0.75 Hz" with the range "(0.5-1 Hz)" used only when explicitly discussing the band. Changed Ch 07 to "cortical slow oscillations (~0.75 Hz)" at first mention to match other chapters.

---

### 6. Gamma Frequency Range Inconsistency

**Severity:** SHOULD FIX
**Chapters involved:** 00, 01, 02, 09, 13

Gamma oscillations are cited with varying ranges:
- Abstract: "30-100 Hz" (in the phrase "30-100 Hz")
- Introduction: "~4-100 Hz" (theta-to-gamma range conflated)
- Ch 02: "30-120 Hz"
- Ch 09: "30-100 Hz" and ">25 Hz"
- Ch 13: "25-100 Hz"

The standard definition is 30-100 Hz or 30-120 Hz. The "4-100 Hz" in the introduction conflates theta (4-8 Hz) with gamma. The "25-100 Hz" in Ch 13 is non-standard.

**Fix applied:** Standardized gamma to "30-100 Hz" throughout as the primary range. Fixed the introduction's "~4-100 Hz" to "~4-8 Hz for theta, ~30-100 Hz for gamma." Fixed Ch 13's "25-100 Hz" to "30-100 Hz."

---

### 7. UPE Intensity Range Inconsistency

**Severity:** SHOULD FIX
**Chapters involved:** 04, 08, 11

Ch 04 and Ch 08 both cite "10-1,000 photons/cm^2/s." Ch 11 cites "1-1,000 photons per second per square centimeter." The lower bound differs (10 vs. 1).

**Fix applied:** Standardized to "approximately 10-1,000 photons/cm^2/s" in Ch 11 to match the other chapters.

---

### 8. "Three-Tier" vs. "Seven-Scale" Terminology Confusion

**Severity:** SHOULD FIX
**Chapters involved:** 02, 11, 12

Chapter 02 introduces both a "seven-scale hierarchy" and a "three-tier coupling model" (circadian + cardiac-respiratory + sleep). Ch 12 uses "three-tier" terminology extensively for its intervention hierarchy. Ch 11 references "three-tier coherence hierarchy." These are related but distinct concepts: the seven scales are the full oscillatory hierarchy, while the three tiers are a clinically actionable subset. This distinction is never explicitly made.

**Fix applied:** Added a clarifying sentence in Ch 12 noting that the three tiers represent the most clinically accessible layers of the seven-scale hierarchy.

---

## MINOR Issues (not edited)

### 9. Redundant Content Across Chapters

The following content appears in near-verbatim form across multiple chapters:
- The CLOCK/SIRT1/NAD+/NAMPT feedback loop is described in detail in both Ch 04 (Scale 2) and Ch 05 (Scale 3). Both chapters explain NAMPT transcriptional regulation by CLOCK:BMAL1 and SIRT1's role.
- The tri-phasic NREM sleep coupling (slow oscillation -> spindle -> ripple) is described in full in Ch 02, Ch 07, and Ch 12.
- The 700-800% gamma increase in meditators appears in Ch 02, Ch 12, and Ch 13.

These are not contradictions but represent significant redundancy. In a final edit pass, later occurrences could reference earlier descriptions rather than repeating them.

---

### 10. Calcium Oscillation Frequency Overlap Between Scales

Ch 02 assigns calcium oscillations to Scale 2 (Molecular, ~10^-1 - 10^-3 Hz). Ch 04 (Scale 2, Organelle) also discusses calcium at 0.1-1 Hz. Ch 08 (Scale 6, Morphogenetic) discusses calcium waves propagating through gap junctions with references to "Scale 2-3." The calcium oscillation story spans multiple scales, which is appropriate but could benefit from a brief cross-reference note.

---

### 11. Terminology: "Biological Permanence" Definition

The term "biological permanence" is used throughout without a formal definition until the abstract's parenthetical: "the capacity of living systems to maintain structural and functional integrity against entropic degradation." This definition is adequate but could be surfaced more prominently in the introduction.

---

### 12. DFA Alpha Values Slightly Different

Ch 02 says "DFA alpha exponent of approximately 1.0." Ch 07 says "DFA alpha_1 near 1.0" and specifies deviation ranges (< 0.85 or > 1.15 for abnormal, < 0.65 or > 1.4 for mortality-predictive). Ch 10 says "DFA alpha exponent approximately 1.0." These are consistent but the subscript notation (alpha vs. alpha_1) varies. Alpha_1 (short-term) is technically the correct clinical measure; plain "alpha" could refer to either short-term or long-term. Minor but worth noting.

---

### 13. Section Numbering in Headers

The hierarchy chapter uses "## 2. The Seven-Scale Hierarchy" (with section number), while most scale chapters use just "## Scale N -- Title" without a section number prefix. Ch 01 uses "# 1. Introduction" and Ch 10 uses "## 10. Answering The Critics." This inconsistency is cosmetic.

---

### 14. Conclusion References "Eight Conserved Operations"

Ch 14 (Conclusion) mentions "eight conserved operations (Reception, Transduction, Conduction, Regulation, Synthesis, Defense, Restoration, Elimination)" which are framework concepts from the Encoded Human system but are never introduced or discussed in the preceding 13 chapters of the paper. This is a non-sequitur for readers who have only read the paper.

---

### 15. Introduction's "Seven Orders of Temporal Magnitude" Claim

The introduction claims oscillatory phenomena span "at least seven orders of temporal magnitude." The Needs Verification section of Ch 01 itself flags this as likely incorrect (ultradian hours to gamma 100 Hz spans ~5-6 orders). With the quantum scale included (10^15 Hz), the range extends further, but the introduction's frequency range ("ultradian...through...gamma") does not include quantum.

---

## Summary

| Severity | Count | Fixed |
|----------|-------|-------|
| MUST FIX | 3 | 3 |
| SHOULD FIX | 5 | 5 |
| MINOR | 7 | 0 (listed only) |

All MUST FIX and SHOULD FIX issues have been addressed through direct edits to the chapter files.
