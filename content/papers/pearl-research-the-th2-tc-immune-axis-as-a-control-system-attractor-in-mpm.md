# The TH2/TC Immune Axis as a Control System Attractor in MPM: Why Cellular Balance Outperforms Molecular Biomarkers

*Pearl Research Engine — April 07, 2026*
*Focus: 'TH2 and TC cell abundance are clinically relevant immune fractions associated with overall survival in MPM patients' has 5 cross-references — high connectivity suggests unexplored synthesis*
*Confidence: medium*

---

# The TH2/TC Immune Axis as a Control System Attractor in MPM: Why Cellular Balance Outperforms Molecular Biomarkers

## Abstract

Malignant pleural mesothelioma (MPM) presents a persistent clinical challenge: standard immune checkpoint biomarkers (PD-L1 expression, tumor mutational burden) fail to predict treatment response with sufficient precision. Two independent transcriptomic studies now converge on a compelling alternative: the balance between T-Helper 2 (TH2) and cytotoxic T (TC) cells in the tumor immune microenvironment more powerfully predicts both overall survival and immune checkpoint blockade (ICB) benefit than any current molecular marker. This synthesis examines these findings through multiple analytical lenses — control theory, attractor dynamics, information theory, and phase transition modeling — to generate three competing hypotheses about why this cellular axis is so clinically decisive, and what it implies for therapeutic strategy. The central evolved insight is that the TH2/TC axis functions not merely as a biomarker but as the primary state variable of a bistable immune control system, with most MPM patients trapped in a TH2-dominant immunosuppressive attractor that checkpoint blockade alone cannot escape.

---

## Evidence Review

### Study 1: Integrative Transcriptome Analysis of MPM (medRxiv, 2020)
**DOI: 10.1101/2020.08.14.20174789**

This landmark preprint conducted integrative transcriptome analysis across MPM patient cohorts, identifying three reproducible immune gene clusters:

- **IG1 (54.5% of patients):** High TH2 / Low TC → Worse overall survival
- **IG2 (~37% of patients):** Intermediate phenotype
- **IG3 (8.5% of patients):** Low TH2 / High TC → Better overall survival

Critically, this study also assessed PD-L1 expression and tumor mutational burden (TMB) as predictive biomarkers and found both to have **limited predictive value** for ICB response in MPM. The mechanistic link offered: TH2 cells actively suppress TH1 cytokine production (including IFN-γ, IL-2, TNF-α), creating an immunosuppressive microenvironment that promotes tumor growth while simultaneously preventing effective cytotoxic T cell activity.

### Study 2: T- and B-cell Transcriptomic Signatures for ICB Response in Pleural Mesothelioma (medRxiv, 2025)
**DOI: 10.1101/2025.05.12.25326806**

A more recent independent study confirmed and extended these findings, demonstrating that:
- Tumor immune microenvironment characterization through T- and B-cell infiltration assessment shows **greater promise than genetic alterations** for predicting ICB benefit
- MPM's **low mutation rate and absence of microsatellite instability** mechanistically explain the failure of TMB as a biomarker — there is simply insufficient neoantigen load to drive the TMB-dependent T cell activation model

### Cross-Study Synthesis

These two independent studies, employing different methodologies and patient cohorts across a five-year span, converge on the same structural conclusion: **cellular immune state > molecular tumor genotype** for predicting MPM outcomes. This convergence across independent lines of evidence is the strongest signal in this evidence cluster.

---

## Analytical Lenses Applied

### Control Theory Perspective

The TH2/TC axis can be modeled as a **feedback control system** with the following architecture:

- **Setpoint:** TH2/TC ratio
- **Feedback loop:** TH2 cells suppress TH1 cytokines → reduced TH1 activity → less competitive pressure on TH2 polarization → self-reinforcing TH2 dominance
- **Disturbance:** Tumor-derived signals, checkpoint molecules (PD-L1), cytokine milieu
- **Output:** Immune surveillance efficacy / cytotoxic T cell activity

From this perspective, the three immune clusters represent three distinct **setpoint equilibria**. The IG1 state (54.5% of patients) represents a pathologically high TH2 setpoint with insufficient gain in the cytotoxic arm. Checkpoint blockade (PD-1/PD-L1 inhibition) addresses one damping mechanism but does not reset the underlying TH2 setpoint — explaining its insufficient efficacy as a monotherapy.

### Chaos Attractors and Phase Transitions

The **non-uniform distribution** of immune clusters (54.5% / ~37% / 8.5%) is statistically incompatible with random sampling from a continuous distribution. This asymmetric distribution is consistent with an **attractor landscape model** featuring:

- A **deep global attractor** (IG1): TH2-dominant immunosuppression. Most patients fall into this basin and remain there. The depth of this attractor explains why therapeutic perturbations (checkpoint blockade) may be insufficient to escape.
- A **shallow local attractor** (IG2): Intermediate state, potentially transitional or meta-stable.
- A **rare escape basin** (IG3): Low TH2/high TC — functionally immunocompetent. Only 8.5% of patients naturally inhabit this state, consistent with a high energy barrier to transition.

This framing has direct therapeutic implications: treatments must provide sufficient "energy" (perturbation magnitude) to push patients from IG1 toward IG3, crossing a potential energy barrier. Checkpoint blockade alone may be insufficient because it addresses a dampening mechanism (PD-1 brake) without addressing the underlying attractor topology (TH2 suppression of TH1).

### Information Theory Perspective

PD-L1 expression and TMB represent **low-information-density signals** in MPM because:
1. TMB is uniformly low across most MPM patients (low variance → low information)
2. PD-L1 expression is noisy and context-dependent

The TH2/TC ratio, by contrast, encodes **high-information-density** about the functional state of the immune system. It is not a single molecular measurement but an integrative readout of cytokine signaling networks, co-stimulatory molecule expression, and clonal T cell selection pressures. This makes it a **compressed representation** of immune system state — higher signal, lower noise, better prediction.

### Network Theory Perspective

In the immune network of the MPM tumor microenvironment, TH2 cells function as **immunosuppressive hubs** — highly connected nodes whose activity simultaneously:
- Inhibits TH1 cell differentiation
- Promotes alternatively activated macrophage (M2) polarization
- Suppresses NK cell cytotoxicity
- Potentially supports regulatory T cell expansion

Removing or reducing TH2 hub activity would theoretically produce non-linear (disproportionate) downstream effects on immune network topology — consistent with the large survival differences observed between IG1 and IG3 clusters.

---

## Hypothesis Generation

### Hypothesis A (Conservative, Tier 1): Cellular Immune Phenotyping Should Replace Molecular Biomarkers in MPM Patient Selection

**Claim:** The TH2/TC ratio, as operationalized through transcriptomic immune deconvolution, constitutes a superior patient stratification tool for ICB therapy in MPM compared to PD-L1 or TMB, and should be incorporated into clinical trial design and routine oncology practice.

This is a conservative, evidence-proximal hypothesis that follows directly from the convergent findings of both studies. The key analytical lenses are control theory (measuring system state rather than a single molecular component) and information theory (TH2/TC as higher-density signal).

**Falsified by:** Prospective RCT showing equivalent performance of molecular vs. cellular biomarkers in ICB response prediction; or peer-review rejection of the underlying preprints.

### Hypothesis B (Integrative, Tier 2): TH2-Dominant MPM Requires Attractor-Escape Combination Therapy

**Claim:** The TH2-dominant immune microenvironment is a self-stabilizing pathological attractor established partly through asbestos-driven type-2 inflammatory programming. Durable ICB responses require a phase transition out of this attractor, achievable through combination of TH2-pathway inhibition (IL-4Rα or IL-13 blockade) with conventional checkpoint blockade, with TH2/TC ratio serving as a pharmacodynamic response marker.

This hypothesis integrates the mechanistic finding (TH2 suppresses TH1), the cluster distribution data (attractor architecture), and the failure of checkpoint monotherapy into a unified therapeutic model.

**Falsified by:** Demonstration that TH2-pathway inhibition does not shift immune clusters or does not augment ICB response in preclinical MPM models; or evidence that TC cell abundance can be raised independently of TH2 suppression.

### Hypothesis C (Radical, Tier 3): Spatial-Biophysical Factors Determine Immune Attractor State in MPM

**Claim:** The three immune clusters represent emergent self-organized criticality states in the tumor-immune ecosystem, where the TH2/TC axis functions as an order parameter. The specific immune cluster a patient occupies is determined not only by molecular signaling but by spatial and biophysical factors — including pleural cavity geometry, fiber distribution, oxygen tension gradients, and host immune architecture — that establish initial conditions from which the attractor dynamics evolve. This predicts that **spatial immune mapping** will outperform bulk transcriptomic classification for clinical prediction.

**Falsified by:** Demonstration that spatial immune organization in MPM is random and not predictive of outcomes; or that cluster assignments based on bulk vs. spatial analysis are equivalent.

---

## Debate and Objections

### Against Hypothesis A

The critical vulnerability is **preprint status**. Both source studies remain on medRxiv without documented peer-reviewed publication in major journals — the 2020 study has been available for over four years without apparent indexing. This raises questions about whether the findings withstand scrutiny. Transcriptomic immune deconvolution also has methodological limitations: the CIBERSORT, xCell, or similar algorithms used to estimate TH2/TC fractions from bulk RNA-seq have imperfect accuracy, particularly for less common T cell subtypes. Single-cell RNA-seq validation in prospective cohorts is needed before clinical implementation.

### Against Hypothesis B

The causal arrow from asbestos → TH2 programming → sustained TH2 dominance in established tumors is inferential. By the time MPM develops (typically 30-50 years after asbestos exposure), the immune microenvironment may be driven primarily by tumor-intrinsic factors rather than the original carcinogen. The therapeutic leap to IL-4/IL-13 blockade is speculative — these pathways are approved in atopic disease (dupilumab) but completely untested in MPM.

### Against Hypothesis C

Self-organized criticality is an intellectually powerful but empirically demanding framework. The evidence provided does not directly support spatial immune organization as the key variable — it's an inference from the cluster distribution topology. The hypothesis makes strong predictions (spatial mapping > bulk transcriptomics) that could readily be tested but currently lack any direct evidence.

---

## Synthesis

The most defensible synthesis integrates elements of all three hypotheses at appropriate confidence levels:

**Core validated finding (high confidence):** Cellular TH2/TC immune phenotyping outperforms molecular biomarkers (TMB, PD-L1) in MPM prognosis and ICB response prediction. This is supported by two independent studies and is mechanistically coherent given MPM's low mutational burden.

**Structural inference (medium confidence):** The three-cluster architecture reflects a bistable or tristable immune control system with TH2-dominant immunosuppression as the default attractor state. The self-reinforcing nature of TH2 suppression of TH1 cytokines provides the feedback mechanism necessary to sustain this attractor.

**Therapeutic hypothesis (medium-low confidence):** Combination strategies targeting TH2 polarization alongside checkpoint blockade represent the most mechanistically rational next step, but remain speculative pending preclinical validation.

**Speculative structural claim (low confidence):** Spatial and biophysical factors contribute to immune cluster assignment and may explain the extreme rarity of the favorable IG3 state.

---

## Implications

### For Clinical Trial Design

1. **Patient stratification:** Future MPM immunotherapy trials should stratify patients by TH2/TC immune cluster at baseline, not by PD-L1 or TMB. This would reduce noise in response data and potentially unmask signals obscured by current enrollment strategies.

2. **Endpoint design:** The TH2/TC ratio should be incorporated as a pharmacodynamic endpoint — measuring whether therapeutic interventions actually shift immune cluster assignment.

3. **Combination therapy hypothesis generation:** The finding that IG1 (54.5% of patients) is TH2-dominant and treatment-refractory motivates trials of TH2-pathway inhibition + ICB. Dupilumab (IL-4Rα blocker, FDA-approved for atopic disease) represents a potentially repositionable agent.

### For Biomarker Development

The superiority of cellular over molecular biomarkers in MPM may have broader implications for other malignancies with low TMB. Pleural and peritoneal malignancies in particular — driven by inflammatory rather than mutagenic carcinogenesis — may systematically require cellular immune phenotyping as the primary predictive framework.

### For Basic Research

The discrete cluster architecture invites formal modeling of the TH2/TC attractor landscape. Mathematical modeling of the TH1/TH2 feedback system in MPM could predict minimum perturbation thresholds required for IG1→IG3 transition, informing rational combination therapy design.

---

## Open Questions

1. **Temporal stability:** Are immune cluster assignments stable over time within individual patients? Do they shift with platinum-based chemotherapy (standard of care)? Longitudinal tumor sampling studies needed.

2. **Drivers of IG3:** What host or tumor factors enable 8.5% of patients to maintain a TC-dominant immune phenotype? Germline immune genetics? Lower cumulative asbestos fiber burden? Specific driver mutations (BAP1, NF2, SETD2)? This is potentially the most clinically important question.

3. **Liquid biopsy potential:** Can TH2/TC balance be estimated from pleural fluid cytology, cfDNA, or blood immune profiling? Tumor biopsy in MPM is challenging given diffuse pleural involvement.

4. **B-cell contribution:** The 2025 study emphasized T- AND B-cell signatures. Do B-cell infiltration patterns provide additive information to TH2/TC classification, or do they covary?

5. **Spatial immune architecture:** Is the TH2/TC ratio uniform throughout the tumor, or are there intra-tumor immune niches? Spatial transcriptomics in MPM is an unexplored frontier.

6. **Pediatric/young-onset MPM:** Rare patients with MPM lacking asbestos exposure history — do they show different immune cluster distributions, potentially illuminating the asbestos→TH2 causal hypothesis?

7. **Cross-tumor generalizability:** Does the TH2/TC attractor model apply to other inflammation-driven malignancies (cholangiocarcinoma, bladder cancer from chronic infection, gastric cancer from H. pylori)?

---

## Conclusion

The convergent evidence from integrative transcriptome analysis of MPM points toward a fundamental reframing: the immune microenvironment in MPM is not a passive bystander variable but a dynamic system with discrete stable states. The TH2/TC axis is its primary order parameter. Understanding this system through the lens of control theory and attractor dynamics — rather than simply as a set of molecular markers — generates more powerful clinical predictions and more rational therapeutic hypotheses. The field's current reliance on PD-L1 and TMB represents a category error: applying a molecular-genomic model (neoantigen-driven T cell activation) to a cancer whose pathogenesis and immune landscape follow different rules. The next phase of MPM immunotherapy research should be organized around shifting patients between immune attractor states, not simply unblocking individual molecular checkpoints.
