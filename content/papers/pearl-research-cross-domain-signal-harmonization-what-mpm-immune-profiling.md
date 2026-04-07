# Cross-Domain Signal Harmonization: What MPM Immune Profiling Gaps Reveal About Computational Re-Analysis Methodology Across Heterogeneous Biomedical Datasets

*Pearl Research Engine — April 07, 2026*
*Focus: Users asked about 'Systematic computational re-analysis: download all available MPM immune profiling raw data from public repositories (GEO, ArrayExpress, TCGA immune deconvolution outputs), apply a single harmonized pipeline (Seurat/Harmony or scVI for scRNA-seq; CIBERSORT for bulk), and test cluster reproducibility with adjusted Rand index across cohorts. This directly tests Hypothesis B and either validates or invalidates the substrate for Hypothesis A's experimental predictions.' but Pearl couldn't ground the answer*
*Confidence: medium*

---

# Cross-Domain Signal Harmonization: What MPM Immune Profiling Gaps Reveal About Computational Re-Analysis Methodology

## Abstract

The research focus requests a systematic computational re-analysis of malignant pleural mesothelioma (MPM) immune profiling data from public repositories, applying harmonized pipelines (Seurat/Harmony, scVI, CIBERSORT) to test immune cluster reproducibility via adjusted Rand index. This investigation was triggered by Pearl's inability to ground prior answers in specific evidence — and the 10 evidence entries retrieved from the knowledge base confirm a genuine density gap: none are directly relevant to MPM immunology, single-cell RNA sequencing harmonization, or immune deconvolution methodology.

However, this absence is itself analytically productive. The retrieved evidence, spanning ICH deep learning annotation, esophageal adenocarcinoma transcription factor biology, COVID-19 microbiome dysbiosis, monogenic diabetes precision therapy, pediatric malnutrition guidelines, and spider endogenous viral elements, collectively instantiates a set of structural principles that apply directly to the harmonization problem: methodology determines discriminative capacity; biological states can be bistable near transition boundaries; chronicity and timing introduce variance that static snapshots cannot capture; and multi-source synthesis is systematically confounded by methodological heterogeneity.

Three competing hypotheses are developed: (A) Pipeline harmonization will collapse reported MPM immune diversity by resolving batch-driven variance; (B) Reported clusters represent arbitrary discretizations of a continuous immune state manifold near bifurcation points; (C) Temporal and systemic coupling variables unrepresented in cross-sectional data are the primary drivers of between-cohort irreproducibility. An evolved synthesis recommends a three-layer analytical architecture for the proposed re-analysis.

---

## Evidence Review

### What the Evidence Base Contains

The 10 retrieved entries span five biological domains and four methodological frameworks. While none directly address MPM immune profiling, their structural content is analytically relevant:

**Methodological quality and discriminative capacity** (decoded-42f8294dc85d): The intracranial hemorrhage deep learning study provides the clearest structural analog. It demonstrates that strongly annotated training data — precise, slice-wise segmentation — enables deep learning models to learn discriminative features that weakly annotated data obscures. The pathway is explicit: *annotation quality → feature representation quality → model generalization*. Transposed to scRNA-seq: *pipeline choice + reference quality → cell type label quality → cluster reproducibility*. This entry is the strongest indirect support for the claim that methodology drives apparent immune diversity.

**Cell identity bistability and transformation** (decoded-3c1bacbf719f): The ZBED2/HNF4A esophageal adenocarcinoma entry demonstrates that transcription factor network state can determine cell identity in a switch-like manner — ZBED2 suppression enables HNF4A activation, which enables columnar transformation. This is evidence-grade support for the concept of biological bistability: cells can occupy qualitatively different identity states depending on upstream regulatory context. In the immune profiling context, this raises the question of whether immune cell 'subtypes' in MPM are genuinely stable attractor states or are highly sensitive to small perturbations in the tumor microenvironment cytokine field.

**Dysbiosis and opportunistic proliferation** (decoded-27a018ead5b1): The COVID-19 microbiome dysbiosis entry establishes that when a regulatory ecosystem is disrupted (microbiome dysbiosis), opportunistic species proliferate and dominate the compositional signal. By analogy, when biological signal in a dataset is weak (low immune infiltration, low read depth, poor sample quality), technical artifacts (batch effects, ambient RNA contamination) proliferate and dominate the cluster structure. This is a conceptual argument for why batch correction is most critical precisely in the samples where immune biology is most interesting.

**Precision classification and downstream validity** (decoded-6cc615046435): The monogenic diabetes entry makes the mechanistic link explicit: precise subtype classification (KCNJ11 vs. ABCC8 vs. HNF1A vs. HNF4A) is the prerequisite for precision therapy efficacy. The validity of therapeutic predictions depends entirely on the accuracy of biological categorization upstream. For MPM, this means: if immune subtype reproducibility is low, any therapeutic hypothesis built on immune subtype identity (e.g., 'cold' vs. 'hot' tumors, macrophage polarization state) is correspondingly fragile.

**Temporal dynamics and chronicity** (decoded-de895e71e71, decoded-6cc615046435, decoded-59dea441c401): Three separate entries converge on the principle that timing matters. Autism diagnosis reliability depends on developmental stage (below age 3). Diabetes complication risk reduction requires *early and sustained* glycemic control. Cognitive training efficacy depends on neuroplasticity windows. This convergence across unrelated domains suggests a general principle: cross-sectional profiling misses temporal structure that may be the dominant variable.

**Multi-source synthesis and heterogeneity** (decoded-bf3cf9ce34a4, decoded-9eebf5409cce, decoded-0258524b7edd): The pediatric malnutrition guidelines entry is notable because it explicitly challenges guidelines derived from heterogeneous, underpowered studies — the existing evidence does not justify the restrictiveness of WHO recommendations. This is a direct analog to the situation in MPM: immune profiling-derived clinical hypotheses may be built on a foundation of methodologically heterogeneous, underpowered datasets whose synthesis has not been critically examined.

### What the Evidence Base Does NOT Contain

The knowledge base contains no entries on:
- MPM tumor microenvironment characterization
- Seurat, Harmony, scVI, or batch correction methodology
- CIBERSORT or immune deconvolution algorithms
- Adjusted Rand index or clustering validation methodology
- GEO, ArrayExpress, or TCGA immune profiling datasets
- Single-cell RNA sequencing methodology
- Mesothelioma immunotherapy or immune escape mechanisms

This is a significant density gap. Before any computational re-analysis is interpreted, Pearl's knowledge base should be populated with MPM-specific immunology literature to provide grounding for result interpretation.

---

## Hypothesis Generation

### Hypothesis A: The Methodology Collapse Hypothesis (Tier 1 — Conservative)

**Claim**: Methodological heterogeneity in existing MPM immune profiling datasets is the primary driver of irreproducible cluster assignments. A harmonized single-pipeline re-analysis will reveal that a substantial fraction (estimated 30-50%) of reported immune subtype diversity collapses upon standardized batch correction and normalization.

**Mechanism**: Different research groups apply different normalization strategies (CPM, TPM, SCTransform, log-normalization), different clustering algorithms (Louvain vs. Leiden), different resolution parameters, and different batch correction methods (ComBat, Harmony, BBKNN, no correction). Each choice introduces systematic variance in cell type label assignment. When these choices co-vary with cohort identity (which they do, because different labs use different pipelines), batch effects and methodological effects are confounded and appear as biological 'subtypes.'

**Analytical lenses**: Information theory (signal-to-noise ratio; methodological variance as noise), signal processing (normalization as filtering; resolution parameter as frequency cutoff), network theory (immune cell type labels as network node identities whose stability depends on edge weight thresholds).

**Falsifiable by**: If adjusted Rand index for major immune populations (CD8+ T cells, CD4+ T cells, macrophages, NK cells) exceeds 0.7 across independently processed cohorts after harmonization, methodology is not the dominant driver of irreproducibility.

### Hypothesis B: The Continuous Manifold Hypothesis (Tier 2 — Integrative)

**Claim**: MPM immune cell populations exist on a continuous state manifold near bifurcation points, and reported 'immune subtypes' across cohorts represent arbitrary discretizations of this manifold at different computational thresholds — making cluster label irreproducibility a mathematical inevitability rather than a fixable technical problem.

**Mechanism**: Near a bifurcation point on a biological state manifold, small perturbations (in clustering resolution, in normalization, in cell number) produce qualitatively different categorical outcomes. The ZBED2/HNF4A example demonstrates that biological cell identity can itself be bistable — there is no reason to expect immune cell identity to be more stable. T cell exhaustion, macrophage polarization, and NK cell activation are all known to exist on continua rather than as discrete states. CIBERSORT's reference matrix approach imposes categorical structure on what may be continuous variation.

**Analytical lenses**: Phase transitions (immune states near bifurcation points), chaos attractors (strange attractors in immune state space), complexity emergence (higher-order immune phenotypes emerging from continuous underlying variation), topology/morphogenesis (topology of immune state manifold; symmetry-breaking events in cell fate).

**Falsifiable by**: If trajectory inference (RNA velocity, Monocle 3) applied to harmonized MPM scRNA-seq data reveals clear inter-cluster voids and discrete attractor basins, cell states are genuinely discrete. If CIBERSORT deconvolution fractions show bimodal distributions for major populations across patients, discreteness is real and the continuous manifold hypothesis is incorrect.

### Hypothesis C: The Temporal Coupling Hypothesis (Tier 3 — Radical)

**Claim**: MPM immune microenvironment profiling is fundamentally limited by the cross-sectional nature of existing datasets. The immune infiltrate composition at any single time point reflects the history of a decades-long tumor-immune co-evolutionary process driven by asbestos exposure chronicity, tumor mutation burden accumulation, and systemic immune aging — variables that are unmeasured and uncontrolled in any harmonized re-analysis. Harmonization will improve cluster reproducibility only marginally because the dominant variance is biological-temporal, not technical.

**Mechanism**: MPM has a latency of 20-50 years from asbestos exposure to diagnosis. During this period, the immune microenvironment undergoes continuous remodeling. At the time of biopsy, the immune state reflects: (1) the oscillatory phase of tumor-immune cycling (immune editing, equilibrium, escape); (2) the cumulative effect of prior immune activation and exhaustion events; (3) the coupling between the local tumor immune state and systemic peripheral immune aging. Cross-sectional profiling at diagnosis captures only the terminal state of this trajectory — and that terminal state varies enormously depending on where in the oscillatory cycle the biopsy was taken.

**Analytical lenses**: Coupled oscillators (tumor-immune cycling; systemic-local immune coupling), entropy (increasing disorder in immune ecosystem over tumor evolution), fractals (self-similar patterns of immune editing at cell, tissue, and systemic scales), control theory (feedback loops in tumor-immune equilibrium; setpoint drift with tumor evolution).

**Falsifiable by**: If serial biopsies or longitudinal MPM immune profiling shows HIGHER within-patient cluster stability over time than between-patient cluster similarity at a single time point, temporal dynamics are relevant. If adjusted Rand index is high (>0.7) after harmonization despite temporal complexity, the static snapshot is capturing stable biology adequately.

---

## Debate

### Against Hypothesis A
The strongest objection is that major immune populations — CD8+ T cells, CD4+ T cells, monocytes/macrophages — are robustly reproducible across pipelines in most benchmark studies. Pan-cancer TCGA immune analyses have shown that CIBERSORT estimates for these major populations are highly correlated across different deconvolution methods. If MPM is dominated by these major lineages (which existing literature suggests), harmonization may validate rather than collapse the existing taxonomy. The 30-50% collapse estimate is speculative and may be too high for dominant populations.

### For Hypothesis A
The evidence that methodology quality drives discriminative capacity (ICH deep learning study) is mechanistically compelling. Rare immune populations — MAIT cells, γδ T cells, tissue-resident memory T cells — which may be biologically most relevant to MPM immunity, are precisely the populations most sensitive to pipeline choice. The collapse effect is likely population-specific: major populations survive harmonization; rare/intermediate populations do not.

### Against Hypothesis B
The continuous manifold framing risks becoming unfalsifiable. Any clustering result can be described as 'arbitrary discretization.' The ZBED2/HNF4A analogy involves a different biological mechanism (master transcription factor switching) than immune cell state transitions (which are driven by cytokine gradient sensing and TCR/BCR signaling). The analogy may not hold mechanistically.

### For Hypothesis B
RNA velocity and trajectory inference analyses of tumor-infiltrating immune cells in multiple cancer types have revealed connected state transitions rather than discrete clusters — the published evidence for continuous immune state manifolds in tumor microenvironments is growing rapidly (outside Pearl's evidence base but consistent with the manifold hypothesis). The question is whether MPM specifically follows this pattern.

### Against Hypothesis C
This hypothesis is currently untestable with available MPM data. Longitudinal MPM immune profiling datasets with matched peripheral blood samples essentially do not exist in public repositories. Making it the central interpretive framework for a computational re-analysis that uses cross-sectional data would be premature. The hypothesis is a theoretical ceiling on what the proposed analysis can achieve, not an argument against conducting it.

### For Hypothesis C
The convergent evidence from multiple biological domains (autism timing, diabetes chronicity, cognitive plasticity windows) suggests that temporal variables are systematically underweighted in cross-sectional multi-cohort analyses. MPM's exceptionally long latency makes it one of the diseases where this underweighting is most likely to be consequential. Even if current data cannot test the hypothesis, designing the re-analysis with this limitation in mind (by collecting exposure chronicity and treatment history metadata) would improve interpretability.

---

## Synthesis

The three hypotheses are not mutually exclusive. A realistic evolved framework holds:

1. **Pipeline harmonization will improve cluster reproducibility for major immune populations** (Hypothesis A is partially correct for dominant lineages, incorrect for rare populations).

2. **For rare and intermediate immune populations, continuous manifold geometry may render adjusted Rand index an inadequate metric** — trajectory geometry metrics (e.g., topology of UMAP embedding, RNA velocity field coherence) may be more informative than cluster label agreement (Hypothesis B provides the right analytical lens for rare populations).

3. **Between-patient variance will remain substantially unexplained after harmonization**, and the residual variance should be systematically tested for correlation with available clinical metadata (exposure duration, time to diagnosis, treatment history) as a proxy test of the temporal dynamics hypothesis (Hypothesis C provides the right interpretive frame for residual unexplained variance).

The three-layer analytical architecture recommended in the evolved insight — pipeline harmonization layer, state geometry layer, biological uncertainty layer — operationalizes this synthesis.

---

## Implications

**For the proposed computational re-analysis**: The adjusted Rand index is the right primary metric but should be supplemented by: (a) silhouette scores to assess cluster compactness; (b) UMAP topology comparison (topological data analysis, e.g., persistent homology, to compare manifold structure across cohorts independent of discrete labels); (c) correlation of CIBERSORT fraction estimates across methods as a bulk-level validation.

**For Hypothesis A experimental predictions**: If harmonization reveals that only 2-3 reproducible major immune subtypes exist (rather than the 5-8 reported in individual cohort studies), this would substantially reduce the substrate for immune subtype-based therapeutic predictions, requiring experimental validation to focus on functionally confirmed rather than transcriptomically defined populations.

**For Hypothesis B experimental predictions**: If continuous manifold geometry is confirmed, the field should shift toward functional assays (ex vivo cytokine response, TCR clonotype analysis, single-cell protein co-expression) rather than transcriptomic clustering as the primary classification framework.

**For Pearl's knowledge base**: The complete absence of MPM-specific immunology evidence represents a critical density gap. Population of this domain should be prioritized before the computational re-analysis results are interpreted through Pearl's reasoning systems.

---

## Open Questions

1. What is the actual adjusted Rand index for major MPM immune populations when the same samples are processed through Seurat/Harmony vs. scVI vs. CIBERSORT?
2. Do MPM immune cluster fractions show bimodal vs. unimodal distributions across patients in CIBERSORT outputs?
3. Are there longitudinal MPM immune profiling datasets suitable for testing temporal dynamics hypotheses?
4. Does asbestos exposure duration correlate with immune cluster assignment in harmonized analysis?
5. What is the minimum sample size required for stable adjusted Rand index estimates for rare immune populations in MPM?
6. Has Pearl's knowledge base been populated with MPM immunology literature, or does this represent a fundamental density gap requiring targeted curation?
7. Do existing MPM public datasets contain sufficient metadata (exposure history, treatment chronology, performance status) to partial out temporal confounders in harmonized analysis?
8. Is there a matched peripheral blood + tumor immune profiling MPM dataset that could test systemic-local immune coupling hypotheses?