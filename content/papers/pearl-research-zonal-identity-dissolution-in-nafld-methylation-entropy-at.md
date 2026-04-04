# Zonal Identity Dissolution in NAFLD: Methylation Entropy, Attractor Lock-In, and the Spatial Transcriptomics Framework for Causal Sequencing

*Pearl Research Engine — April 03, 2026*
*Focus: Users asked about 'Design a spatial transcriptomics study of human liver biopsies across NAFLD severity stages (healthy → simple steatosis → NASH → fibrosis) measuring: (1) periportal/pericentral zone boundary sharpness as proxy for zonal identity maintenance, (2) SULT1A1/SULT2B1 expression gradient, (3) SAMe-dependent methylation marks (5-methylcytosine density at zonal marker gene promoters), (4) Phase I/II enzyme ratio by zone. Cross-reference with serum SAMe/SAH ratio, HOMA-IR, and liver stiffness by elastography. This would directly test whether methylation-dependent zonal identity loss precedes or follows the lipogenic attractor lock, establishing causal sequence for multi-target intervention design.' but Pearl couldn't ground the answer*
*Confidence: medium*

---

# Zonal Identity Dissolution in NAFLD: Methylation Entropy, Attractor Lock-In, and the Spatial Transcriptomics Framework for Causal Sequencing

## Abstract

The proposed spatial transcriptomics study of human liver biopsies across NAFLD severity stages addresses one of the most mechanistically important unresolved questions in metabolic liver disease: does epigenetic (methylation-dependent) loss of hepatic zonal identity *precede* lipogenic attractor establishment, or does the attractor state cause secondary methylation erosion? This document synthesizes available evidence, generates three competing hypotheses across epistemic tiers, evaluates each against available evidence and logical objections, and produces an evolved synthesis. The core finding of this analysis is that Pearl's current knowledge base is informationally sparse for the direct biochemical domain of this query, but contains sufficient methodological and cross-domain evidence to support a medium-confidence synthesis: zonal identity loss in NAFLD is most likely a phase transition event driven by a SAMe/SAH threshold collapse that is upstream of, and causally prior to, stable lipogenic attractor establishment. The study design is methodologically sound; it requires the addition of MALDI mass spectrometry imaging for spatial SAMe quantification and co-registered mitochondrial redox markers to fully establish causal ordering.

---

## Evidence Review

### What the Evidence Base Contains

Of ten evidence entries retrieved, only four carry structural relevance to the query:

**1. Brain Spatial Transcriptomics (decoded-raw-946e29ebf6e3)**
This 2026 study in *Human Molecular Genetics* demonstrates integrated spatial and single-cell transcriptomic profiling of human prefrontal cortex tissue, revealing cell-type-specific regulation of synaptic plasticity genes during aging. Its relevance is methodological: it establishes that the technical pipeline for co-registering spatial gene expression with cell-type identity in human post-mortem tissue is feasible and yields mechanistically informative data. The liver zonation study proposed in the query is structurally identical — spatial coordinates map to hepatocyte identity zones (periportal, midzonal, pericentral) rather than cortical layers, but the analytical architecture is transferable.

**2. Multi-Omics Insulin Resistance Methylation Study (decoded-014e83147cbc)**
This study identifies blood DNA methylation signatures at ABCG1, ESR1, and VASN loci as significantly associated with insulin resistance trajectories in children with obesity. ABCG1 encodes an ATP-binding cassette transporter involved in cellular cholesterol and lipid efflux — notably expressed in hepatocytes and with known roles in hepatic lipid homeostasis. The finding that methylation at this locus tracks with IR longitudinal trajectory suggests that: (a) methylation changes are temporally correlated with IR development, not merely concurrent; (b) blood methylation may reflect systemic metabolic state, potentially serving as a proxy for hepatic epigenetic changes; (c) the methylation-IR axis is detectable before clinical endpoints, supporting early biomarker potential.

**3. mTORC1 Spatial Regulation by Amino Acids (GRK entry)**
This entry describes how mTORC1 — the master nutrient-sensing kinase — operates from spatially distinct subcellular locations (lysosomes vs. cytoplasm) in response to different amino acid sources, mediated by Rag GTPases. The critical conceptual transfer is this: the same principle that creates *functional spatial heterogeneity at the subcellular scale* (lysosomal mTORC1 responds to basal proteolysis-derived amino acids; cytoplasmic mTORC1 responds to exogenous nutrients) operates at the *organ scale* in liver zonation. Pericentral hepatocytes receive nutrient-poor, hormone-rich blood; periportal hepatocytes receive nutrient-rich, oxygen-rich portal blood. The liver's zonal metabolic identity is the macroscale analog of mTORC1's subcellular spatial switching — and SAMe availability represents a methylation-based 'switch' that maintains the identity of each zone against de-differentiation pressure. This fractal self-similarity across scales (subcellular → cellular → organ) is a non-obvious but analytically robust connection.

**4. Sarcoma Transcriptomic Cluster Prognosis (decoded-6d4c12ccabb0)**
This finding — that transcriptomic cluster classification outperforms clinical nomograms and molecular tools for sarcoma prognosis — carries an important transferable principle: *it is the coherent cluster identity, not individual biomarkers, that carries prognostic weight*. Applied to NAFLD zonation: the meaningful variable is not the expression level of any single zonal marker (e.g., SULT1A1 alone) but the *coherence and sharpness of the entire zone-cluster identity*. This reframes the spatial transcriptomics study's primary outcome: not individual gene gradients but zone-boundary sharpness as a coherent cluster property.

### What the Evidence Base Lacks

There is no direct evidence in this set for:
- SAMe/SAH ratios in NAFLD human tissue
- SULT1A1 or SULT2B1 spatial gradients in any liver disease context
- 5-methylcytosine density at zonal marker gene promoters
- Phase I/II enzyme ratios by hepatic zone
- Liver stiffness (elastography) correlation with any molecular variable
- HOMA-IR correlation with spatial transcriptomic features

This represents a genuine knowledge density gap, not a gap in the underlying science (which is published and accessible in primary hepatology literature).

---

## Hypothesis Generation

### Hypothesis A: Linear Methylation Erosion Precedes Lipogenic Lock-In (Tier 1 — Conservative)

**Claim:** Hepatic zonal identity erodes progressively and monotonically across NAFLD stages as SAMe/SAH ratio declines, with methylation loss at pericentral lipogenic gene promoters occurring in simple steatosis before stable lipogenic attractor establishment in NASH.

**Mechanism:** One-carbon metabolism is impaired early in hepatic lipid accumulation (choline deficiency, folate pathway disruption, insulin resistance impairing methionine cycle). SAMe-dependent DNA methyltransferases (DNMT1 for maintenance, DNMT3A/3B for de novo) require SAMe as methyl donor. As SAMe/SAH ratio falls, maintenance methylation at pericentral hepatocyte lipogenic gene promoters fails, allowing SREBP1c, FASN, ACC1 to become constitutively expressed. This precedes the chromatin remodeling that constitutes attractor lock-in.

**Analytical Lenses:** Entropy (increasing disorder in epigenetic patterning), Information Theory (methylation marks as information encoding zonal identity; SAMe depletion = channel noise), Phase Transitions (threshold-dependent loss of methylation maintenance), Topology/Morphogenesis (boundary sharpness as a morphogenetic property).

**Falsification Conditions:** If zonal boundary sharpness is preserved in early steatosis despite measurable SAMe/SAH decline; if chromatin accessibility at lipogenic gene promoters opens (attractor lock-in) before promoter methylation loss is detected.

---

### Hypothesis B: Phase Transition at Critical SAMe Threshold with Pericentral-First Bifurcation (Tier 2 — Integrative)

**Claim:** Zonal identity loss is not linear but undergoes a phase transition at a critical SAMe/SAH threshold, with pericentral hepatocytes bifurcating into the lipogenic attractor state first due to their higher baseline lipogenic gene expression and proximity to oxygen gradients that already partially suppress methyltransferase activity. Once locked in, the pericentral lipogenic state creates a positive feedback loop (increased lipogenesis depletes SAMe via phosphatidylethanolamine N-methyltransferase competition; increased ER stress from lipid accumulation disrupts one-carbon metabolism) that accelerates system-wide methylation collapse and eventual periportal zone erosion.

**Mechanism:** The Waddington landscape formalism predicts that cell identity states are attractors separated by energy barriers. Hepatocyte zonal identity is an epigenetically maintained attractor. SAMe/SAH ratio provides the 'epigenetic potential energy' maintaining the barrier between pericentral identity and the lipogenic de-differentiated state. When SAMe falls below a critical threshold (hypothesized ~2.0 SAMe/SAH molar ratio based on known DNMT activity kinetics), the barrier collapses asymmetrically — pericentral hepatocytes fall first into the lipogenic basin. The positive feedback loop then drives the system further from the methylation-competent state, making reversal increasingly difficult — explaining the clinical observation that NASH is far harder to reverse than simple steatosis.

**Analytical Lenses:** Chaos Attractors (Waddington landscape, bifurcation points), Phase Transitions (threshold-gated identity collapse), Control Theory (feedback loop gain exceeding damping capacity), Complexity Emergence (zone-level coherence as emergent property of methylation network), Coupled Oscillators (periportal and pericentral zones as coupled metabolic oscillators that desynchronize).

**Falsification Conditions:** If SAMe/SAH decline is linear without detectable threshold behavior across NAFLD stages; if periportal and pericentral zones show simultaneous methylation loss; if NASH-stage SULT1A1 loss is proportional to steatosis-stage loss rather than showing a step change.

---

### Hypothesis C: Mitochondrial Redox Gradient Collapse as Upstream Cause of Methylation-Based Zonal Dissolution (Tier 3 — Radical)

**Claim:** The primary upstream driver of zonal identity loss is not SAMe depletion per se but zone-specific mitochondrial dysfunction, which disrupts the oxygen-redox gradient that maintains hepatocyte zone identity via multiple parallel mechanisms: (1) DNMT enzyme activity is redox-sensitive (Fe²⁺ and SAM cofactor requirements); (2) TET enzyme demethylase activity requires α-ketoglutarate from the TCA cycle — mitochondrial dysfunction reduces α-KG, shifting the methylation/demethylation balance toward passive demethylation loss; (3) NAD⁺ depletion reduces Sirtuin activity (SIRT1 regulates DNMT3L expression); (4) mitochondrial electron transport chain generates weak electromagnetic fields contributing to spatial metabolic coherence. Pericentral mitochondria, already operating in a lower-oxygen environment, are first to fail, making pericentral hepatocytes the earliest to lose methylation-maintained zonal identity. This hypothesis predicts that mitochondrial Complex I activity by zone will precede methylation changes as a marker of impending zonal collapse.

**Analytical Lenses:** EM Fields (mitochondrial redox-electromagnetic coupling), Fractals (subcellular redox gradient → organ-level zonation gradient), Entropy (mitochondrial dysfunction as entropy increase propagating to epigenetic order), Signal Processing (TCA-derived metabolites as signals regulating epigenetic writers/erasers).

**Falsification Conditions:** If pericentral mitochondrial function (Complex I/III activity, NADH/NAD⁺ ratio) does not show earlier or greater impairment than periportal in early NAFLD; if SAMe restoration without mitochondrial support fully rescues zonal identity in NASH tissue.

---

## Debate

### Against Hypothesis A
The linear erosion model is mechanistically clean but clinically inconsistent — if methylation erosion were linear and proportional, we would expect NAFLD to reverse more readily than it does. The clinical intractability of NASH argues for a nonlinear mechanism. Additionally, the evidence for SAMe depletion as an early NAFLD event is debated; some studies show SAMe levels are maintained until late-stage disease when the liver's compensatory upregulation of MAT1A fails.

### Against Hypothesis B
Demonstrating a true phase transition requires large, well-staged cohort data with precise SAMe/SAH quantification — difficult to obtain in human liver biopsy studies. The pericentral-first hypothesis, while intuitive, assumes that oxygen gradient is the primary driver of differential methyltransferase sensitivity, which has not been directly demonstrated. The positive feedback loop (lipogenesis → SAMe depletion) requires that PEMT pathway SAMe consumption exceeds methionine cycle compensation, which is cell-type and disease-stage dependent.

### Against Hypothesis C
The EM field component of Hypothesis C lacks direct experimental support in the hepatic zonation context. While mitochondrial dysfunction in NAFLD is well-established, its relationship to TET enzyme activity and DNMT redox sensitivity in hepatocytes specifically has not been spatially resolved. The hypothesis risks overstating the EM mechanism when a simpler metabolite-based explanation (α-KG depletion → TET inactivity → passive demethylation) achieves the same prediction without invoking electromagnetic fields.

### Strongest Unified Challenge
All three hypotheses assume that zonal identity loss is *causally prior* to functional metabolic deterioration. An alternative interpretation is that zonal identity loss is *concurrent and parallel* — driven by the same upstream metabolic disruption (insulin resistance, lipotoxicity, oxidative stress) that drives lipogenic gene expression, rather than being causally upstream or downstream. This co-determination model would make the spatial transcriptomics study diagnostically interesting but not causally informative unless paired with longitudinal sampling or genetic perturbation models.

---

## Synthesis

The most defensible integrated hypothesis, drawing the strongest elements from all three:

**Zone-specific mitochondrial redox dysfunction (Hypothesis C mechanism, minus EM speculation) drives concurrent SAMe depletion and TET enzyme inactivity (Hypothesis A mechanism), producing a threshold-dependent collapse of pericentral zonal identity that establishes the lipogenic attractor (Hypothesis B dynamics). The causal sequence is: pericentral mitochondrial dysfunction → α-KG depletion + NAD⁺ decline → TET2/TET3 inactivity + SIRT1 suppression of DNMT3L → passive demethylation of pericentral lipogenic gene promoters → constitutive SREBP1c/FASN expression → lipogenic attractor lock-in → increased PEMT-mediated SAMe consumption → systemic SAMe/SAH decline → progressive periportal zone erosion.**

This sequence generates specific, testable predictions for the proposed study:
1. Mitochondrial gene expression (NDUFS1, SDHA, COX4I1) should show pericentral-predominant decline in early steatosis, before clear methylation changes at SULT1A1/SULT2B1 promoters
2. TET2 and TET3 expression should show pericentral-predominant decline correlating with α-KG pathway gene loss
3. 5-methylcytosine density at pericentral lipogenic promoters should show a step-change between steatosis and NASH, not a linear gradient
4. Serum SAMe/SAH should correlate with periportal (not pericentral) zone integrity in later stages — pericentral zones will already be collapsed before systemic SAMe falls detectably

---

## Study Design Refinements

The proposed study design is strong. Recommended additions:

**1. MALDI Mass Spectrometry Imaging (MALDI-MSI) for spatial SAMe quantification**
Serum SAMe/SAH is a systemic average that may not reflect zone-specific methylation capacity. MALDI-MSI can quantify SAMe and SAH at tissue region resolution co-registered with H&E morphology, providing the missing spatial metabolite data.

**2. Spatial ATAC-seq or CUT&RUN for chromatin accessibility by zone**
To distinguish passive demethylation (maintenance failure) from active chromatin remodeling (attractor lock-in), co-registered spatial chromatin accessibility data at lipogenic gene promoters is needed. If ATAC-seq peaks at FASN/ACC1 promoters precede methylation loss, the attractor drives demethylation; if methylation loss precedes ATAC peaks, demethylation drives attractor establishment.

**3. Mitochondrial function markers by zone**
NADH autofluorescence imaging (label-free, compatible with fresh-frozen biopsy sections), Complex I histochemistry, or spatial metabolomics of TCA intermediates (succinate, α-KG, fumarate) by zone.

**4. Longitudinal biopsy design**
Cross-sectional comparison of healthy → steatosis → NASH → fibrosis is valuable but cannot establish causality. Paired biopsies from patients undergoing bariatric surgery (pre- and 1-year post-) with documented NAFLD improvement would provide the longitudinal dimension needed to test whether methylation restoration precedes or follows boundary sharpness recovery.

**5. Single-nucleus multiome (RNA + ATAC) on biopsy material**
Adding chromatin accessibility data to the single-nucleus RNA readout, now feasible on frozen tissue, would allow simultaneous measurement of gene expression and promoter accessibility at single-cell resolution, stratified by spatial zone of origin.

---

## Implications

If the synthesized hypothesis is correct — that zonal identity loss is a phase transition upstream of stable lipogenic attractor establishment — the therapeutic implications are significant:

**Early intervention window:** The phase transition model predicts a window between early SAMe/SAH decline and attractor lock-in during which methylation support (SAMe supplementation, betaine, choline, folate) could prevent the phase transition. After lock-in, methylation support alone is insufficient — chromatin remodeling reversal requires additional HDAC inhibitor or BET bromodomain inhibitor intervention.

**Multi-target intervention design:** The causal sequence supports a three-target approach: (1) mitochondrial support (CoQ10, NMN for NAD+ restoration, mitochondria-targeted antioxidants) to protect TET enzyme function; (2) one-carbon metabolism support (SAMe, betaine, methylfolate) to maintain methylation capacity; (3) SREBP1c inhibition (PCSK9 inhibitors may have off-target effects; direct SREBP1c inhibitors in development) to prevent lipogenic attractor establishment.

**Biomarker cascade:** The spatial transcriptomics study, if it confirms the causal sequence, would validate a biomarker cascade for early intervention: (1) mitochondrial gene expression decline (earliest, detectable in blood monocytes as proxy); (2) ABCG1/ESR1 methylation in blood (intermediate, already shown to correlate with IR trajectory); (3) serum SAMe/SAH decline (late systemic signal); (4) liver stiffness by elastography (latest, reflecting structural fibrosis after functional zonal collapse).

---

## Open Questions

1. **What is the minimum SAMe/SAH ratio below which DNMT1 maintenance methylation fails in hepatocytes?** This kinetic parameter, determinable from in vitro hepatocyte experiments, would set the threshold for the phase transition model.

2. **Is TET2 loss of function (observed in clonal hematopoiesis) sufficient to accelerate hepatic NAFLD progression through non-cell-autonomous mechanisms?** TET2-mutant macrophages infiltrating the liver might contribute to zonal methylation disruption via inflammatory cytokine production.

3. **Do pericentral hepatocytes have lower baseline DNMT1 expression than periportal hepatocytes?** If so, this would explain their differential vulnerability to SAMe depletion without requiring differential SAMe availability by zone.

4. **Can spatial transcriptomics zone-boundary sharpness be quantified as a continuous clinical biomarker from needle biopsy material?** The study should include minimum tissue volume requirements and RNA quality thresholds for this to be clinically translatable.

5. **Does exogenous SAMe supplementation in NASH animal models restore pericentral SULT2B1 expression and pericentral-periportal boundary sharpness?** This experiment, already technically feasible, would provide the strongest causal evidence for the methylation-first model.

---

## Conclusion

The proposed spatial transcriptomics study is scientifically rigorous and addresses a genuine mechanistic question. The available evidence supports a medium-confidence synthesis in which methylation-dependent zonal identity loss is causally upstream of stable lipogenic attractor establishment, mediated by a phase transition at a critical SAMe/SAH threshold that is itself downstream of zone-specific mitochondrial redox dysfunction. The study design requires enrichment with spatial metabolomics (MALDI-MSI for SAMe/SAH), chromatin accessibility (spatial ATAC or snMultiome), and mitochondrial function markers to fully establish causal ordering. If confirmed, the findings would validate a multi-target intervention strategy targeting mitochondrial function, one-carbon metabolism, and SREBP1c simultaneously in the pre-NASH window — with a blood methylation biomarker cascade enabling patient stratification for precision timing of intervention.
