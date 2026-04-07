# Temporal Stability Architecture in MS Biomarker Signals: Autocorrelation, DBS-Serum Concordance, and the Sampling Frequency Problem in RRMS Remission Monitoring

*Pearl Research Engine — April 07, 2026*
*Focus: Users asked about 'Pilot study: 10 stable RRMS patients, weekly serum + simultaneous DBS for 12 weeks during confirmed remission, analyzing MSDA pathway scores for (1) within-patient coefficient of variation by pathway, (2) lag-1 to lag-6 autocorrelation structure, (3) DBS-serum concordance coefficients. This calibration-only pilot would generate the empirical parameters necessary to power the full 12-month relapse-prediction study and determine whether weekly or biweekly sampling is sufficient given the observed autocorrelation decay rates.' but Pearl couldn't ground the answer*
*Confidence: medium*

---

# Temporal Stability Architecture in MS Biomarker Signals: Autocorrelation, DBS-Serum Concordance, and the Sampling Frequency Problem in RRMS Remission Monitoring

## Abstract

This document synthesizes available evidence to generate candidate hypotheses for a proposed calibration pilot study in 10 stable RRMS patients undergoing weekly paired serum and dried blood spot (DBS) collection over 12 weeks. The study aims to characterize three analytic parameters necessary to power a subsequent 12-month relapse-prediction study: within-patient coefficient of variation (CV) by MSDA pathway, lag-1 to lag-6 autocorrelation structure, and DBS-serum concordance coefficients. 

The primary finding of this synthesis is that the evidence base contains no direct Tier 1 or Tier 2 entries addressing MSDA pathway behavior, DBS concordance in MS populations, or autocorrelation structure of MS biomarkers during remission. The query lands in a genuine empirical gap. However, applying the 12 analytical lenses to adjacent evidence reveals a coherent theoretical framework: the three pilot aims are not independent but are coupled through underlying biological kinetics, and this coupling should be reflected in the study's analytic design.

Three hypotheses are advanced at progressively speculative tiers, followed by structured debate and a synthetic evolved claim.

---

## Evidence Review

### What the Evidence Base Contains

Of the 22 evidence entries provided, the following are structurally relevant to the query:

**sPDGFRβ as peripheral CNS integrity marker (WS3-RP-Regulation, Tier 2, high confidence):** This entry establishes a critical proof-of-concept: pericyte-derived soluble proteins measurable in plasma can serve as blood-accessible indicators of CNS structural integrity. This is the class of analyte that MSDA panels are designed to measure, and it confirms the biological plausibility of the entire pilot design. Importantly, it does not address DBS stability, within-patient variability, or temporal dynamics.

**DHA sn2-position CNS bioavailability (WS3-JK-Regulation, Tier 3, low confidence):** Despite its low epistemic tier, this entry introduces a principle with broad applicability: bioavailability is not determined by concentration alone but by molecular configuration. In the context of DBS vs. serum matrix comparison, this maps onto a well-established analytical chemistry problem — the same molecule may behave differently in dried vs. liquid matrices depending on its binding properties, hydrophilicity, and stability under oxidative conditions. The principle survives even if the specific source citation is unreliable.

**Mind-training/health economics (WS3-RD-Regulation, Tier 3, low confidence):** This entry models chronic disease management as a system where a latent underlying state variable drives observable healthcare events (utilization, costs). This is structurally isomorphic to the relapse-prediction problem: MS relapses are observable events driven by a latent immunological state that biomarkers attempt to track. The entry's relevance is architectural rather than evidential.

**DTD dissociation entry (WS3-BK-Regulation, Tier 2, high confidence):** Clinically irrelevant to MS but structurally instructive: it describes a system where internal state fluctuations are poorly accessible through conventional self-report, requiring physiological measurement — precisely the argument for biomarker-based relapse prediction over symptom-based surveillance.

**Fractal mirror entries (soul/spirit density):** The fractal mirrors for the sn2-DHA principle articulate a recurring architectural theme: structural configuration determines what a system will receive and integrate. At the spirit density, this becomes a statement about selectivity of uptake as a feature rather than a limitation. Applied to the pilot design, this reframes the concordance problem: DBS is not a degraded version of serum but a different matrix with its own selectivity profile. The question is not 'does DBS approximate serum?' but 'which analytes are DBS-stable, and are those analytes the ones that matter for prediction?'

### What the Evidence Base Does Not Contain

The following are critical gaps that must be acknowledged:
- No MSDA assay technical specifications or validation data
- No DBS vs. serum concordance data for any MS-relevant analyte class
- No within-patient variability data for any MS biomarker during confirmed remission
- No autocorrelation or time-series structure data for MS biomarkers
- No sampling frequency optimization literature for MS longitudinal studies
- No published power calculations for MSDA-based relapse prediction studies

This knowledge gap is the justification for the pilot, and it is genuine.

---

## Hypothesis Generation

### Hypothesis A: Pathway-Heterogeneous CV (Conservative, Tier 1 Framework)

**Claim:** Within-patient coefficient of variation for MSDA pathway scores during stable RRMS remission will be pathway-heterogeneous, with neuroaxonal structural integrity markers showing lower intra-remission CV than neuroinflammatory effector markers.

**Mechanistic basis:** Structural proteins (neurofilaments, myelin components, pericyte-derived markers like sPDGFRβ) have slow turnover kinetics — their serum levels during stable disease reflect the cumulative balance of damage and clearance over weeks to months. This produces smooth, slowly-varying signals. In contrast, immune effector molecules (cytokines, chemokines, adhesion molecules) are regulated at the transcriptional level in response to environmental stimuli, diurnal rhythms, infection, and stochastic immune fluctuations — even during clinical remission, these signals oscillate on timescales of hours to days.

**Analytical lenses:** Control theory (setpoint stability differs by pathway), signal processing (different frequency content in different analyte classes), entropy (high-entropy rapid fluctuation vs. low-entropy stable signals).

**Falsification criterion:** CV values clustering uniformly across all MSDA pathways (e.g., all 8-15%), or neuroaxonal pathway CVs systematically exceeding neuroinflammatory pathway CVs, would falsify this hypothesis.

**Implications for pilot design:** If confirmed, this means the pilot should report pathway-specific CVs rather than a single 'MSDA variability' estimate, and the full study's power calculation should use the pathway-specific CV for whichever pathways are planned as primary endpoints.

---

### Hypothesis B: Differential DBS-Serum Concordance as Analyte-Class Function (Integrative, Tier 2)

**Claim:** DBS-serum concordance coefficients will vary systematically by analyte class, with lipid-associated and matrix-protein-bound analytes showing lower concordance than freely soluble small proteins, because the DBS matrix transformation introduces differential stability conditions that are not uniformly distributed across the MSDA analyte landscape.

**Mechanistic basis:** Dried blood spot methodology involves spreading whole blood on filter paper, drying, and punch-based elution. This process introduces several matrix-specific effects: (1) haematocrit variation affects volumetric accuracy for all analytes; (2) oxidative and enzymatic degradation during drying differentially affects lipid-containing analytes; (3) protein binding dynamics change as the liquid phase evaporates; (4) haemoglobin-rich matrix can interfere with certain immunoassay formats. The DHA sn2-position principle — that molecular configuration gates what enters a receiving system — maps directly onto this: the configuration of an analyte (lipid-soluble vs. water-soluble, protein-bound vs. free, stable vs. labile under oxidative conditions) determines its concordance behavior in the DBS matrix transformation.

**Analytical lenses:** Information theory (signal-to-noise ratio changes differently for different analytes in the DBS transformation), network theory (which analytes serve as hubs in MSDA pathway scoring — if hub analytes have poor DBS concordance, the entire pathway score is compromised), signal processing (the DBS process is a filter with analyte-specific transfer functions).

**Falsification criterion:** If all MSDA analytes show ICC > 0.85 between paired DBS and serum samples regardless of analyte class, the differential concordance hypothesis is falsified.

**Implications for pilot design:** The concordance analysis should be stratified by analyte class from the outset, not reported as a single aggregate coefficient. The deliverable should be an analyte-class concordance map that specifies which MSDA pathways are DBS-deployable.

---

### Hypothesis C: Long-Memory Autocorrelation Structure Indicating Near-Critical System Dynamics (Radical, Tier 3)

**Claim:** MSDA pathway scores during RRMS remission will display non-exponential (long-memory) autocorrelation decay, consistent with a biological system operating near a critical threshold, implying that the informative predictive signal lives at sub-weekly timescales and that biweekly sampling will lose critical early warning information.

**Mechanistic basis:** Computational models of autoimmune disease and MS-specific immunological work suggest that relapse onset is not a discontinuous jump from a stable steady state but a gradual drift through a bifurcation zone — a phase transition preceded by detectable 'critical slowing down' in which the system's recovery from perturbation becomes progressively slower. In systems near criticality, autocorrelation functions decay as power laws rather than exponentials — long-memory structure — because the system has no dominant characteristic timescale. If MS remission-phase immunology exhibits this behavior, then biomarker time series will show high lag-1 autocorrelation that decays slowly, and the predictive information is distributed across all accessible lag timescales rather than concentrated at a specific horizon.

**Analytical lenses:** Chaos attractors (proximity to bifurcation point), coupled oscillators (immune regulatory networks that are normally entrained become desynchronized as relapse approaches), phase transitions (clinical relapse as phase transition preceded by detectable precursor dynamics), complexity emergence (the scale-free autocorrelation structure as emergent property of near-critical immune network).

**Falsification criterion:** If autocorrelation structure is adequately described by an AR-1 (exponential decay) model with independence reached by lag-2 or lag-3, the long-memory hypothesis is falsified. If biweekly and weekly sampling yield equivalent predictive performance in subsequent follow-up, the sub-weekly signal hypothesis is falsified.

**Limitations:** With n=10 and T=12 time points, statistical power to distinguish AR-1 from long-memory processes is extremely limited. This hypothesis may require the full 12-month study rather than the 12-week pilot to evaluate.

---

## Debate

### Against Hypothesis A

The strongest objection is that MSDA pathway scores are composite measures — they aggregate multiple analytes into pathway-level summaries. If the averaging or weighting process combines fast-varying and slow-varying analytes, the pathway-level CV may be dominated by the highest-variance individual analytes regardless of the pathway's biological character. Additionally, 'confirmed remission' is a clinical/radiological construct (absence of new lesions, absence of relapse) that does not guarantee immunological quiescence. Some patients classified as clinically stable may have active subclinical inflammatory activity detectable by sensitive biomarkers, inflating CV estimates across all pathways.

The strongest support remains the well-documented differential kinetics of structural vs. inflammatory proteins across biomarker biology — this is not speculative but a general principle with multiple independent lines of evidence.

### Against Hypothesis B

The DBS concordance problem has been partially addressed in adjacent literature. DBS methods for NfL measurement have shown reasonable concordance in some preliminary MS studies (external Tier 1, not in this evidence set). If MSDA analytes are primarily protein-based rather than lipid-based, the sn2-DHA analogy may be misleading — the relevant variability is haematocrit adjustment and protein-specific matrix effects rather than lipid configuration. The hypothesis risks over-generalizing from a low-confidence source.

However, the underlying analytical chemistry argument holds independently of the sn2 citation: matrix transformation effects on assay performance are analyte-class-specific by first principles.

### Against Hypothesis C

The critical slowing down / long-memory autocorrelation hypothesis has been proposed for many biological systems and has a poor track record — observed deviations from AR-1 often turn out to be artifacts of non-stationarity (seasonal or treatment-related trends in the time series) rather than true scale-free dynamics. With only 12 time points per patient, this pilot cannot adequately test the hypothesis. Furthermore, the clinical experience of MS — with identifiable stable remission periods lasting months to years — argues against the system being continuously near a critical bifurcation point. Long-memory dynamics would imply that 'stable' periods are less stable than they appear, which contradicts the clinical utility of confirmed remission as a sampling criterion.

---

## Synthesis

### The Coupling Problem

The core evolved insight is that the three analytic aims of the pilot are not parallel independent questions but are mechanistically coupled:

**CV → Concordance Coupling:** An analyte with high biological variability (high CV in serum) will show degraded DBS-serum concordance even if the DBS matrix transformation is technically adequate, because the additional analytical noise from DBS processing will represent a larger fraction of the total signal variance. This means high-CV pathways will appear to have poor DBS concordance even if the concordance failure is primarily biological rather than analytical.

**CV → Autocorrelation Coupling:** High-CV pathways may show either high or low autocorrelation depending on whether the variance is structured (correlated fluctuations) or unstructured (white noise). The pilot needs to distinguish these cases: a pathway with high CV and high lag-1 autocorrelation contains predictive information (the variance reflects genuine biological trajectory); a pathway with high CV and low autocorrelation is dominated by measurement or stochastic biological noise and may not be useful for prediction.

**Autocorrelation → Sampling Frequency Coupling:** The sampling frequency recommendation (weekly vs. biweekly) should be determined by the autocorrelation decay constant of the pathways that are both biologically variable AND DBS-concordant. If the most predictively promising pathways have long autocorrelation (memory extending to lag-4 or lag-6), biweekly sampling preserves most of the predictive signal. If the most promising pathways have short autocorrelation (memory limited to lag-1 or lag-2), weekly sampling is necessary and biweekly is insufficient.

### The Deployability Quadrant Framework

The most actionable analytic framework for this pilot is a two-dimensional deployability map:

- **X-axis:** Within-patient CV (low = stable, high = variable)
- **Y-axis:** DBS-serum concordance (ICC; high = concordant, low = discordant)

Pathways in the **low-CV / high-concordance quadrant** are the candidates for DBS-based remote monitoring: they produce stable, reliably measured signals. Pathways in the **high-CV / high-concordance quadrant** contain biological signal that can be measured by DBS but require frequent sampling to capture. Pathways in the **low-CV / low-concordance quadrant** may be biologically stable but are not DBS-deployable. Pathways in the **high-CV / low-concordance quadrant** are analytically problematic regardless of sampling frequency.

The autocorrelation structure should then be characterized specifically for the deployable (high-concordance) pathways, since only these are candidates for the full longitudinal study.

---

## Implications for Pilot Design

**Sample size:** n=10 is adequate for preliminary CV and concordance estimation but underpowered for autocorrelation structure analysis, particularly for distinguishing AR-1 from higher-order processes. The pilot should explicitly acknowledge this limitation and frame autocorrelation estimates as priors for a larger study rather than definitive parameters.

**Remission confirmation:** The CV estimates will be sensitive to how strictly remission is defined. MRI-confirmed no-evidence-of-disease-activity (NEDA) criteria will produce lower CVs than clinical-only remission criteria. The pilot should document remission confirmation method and consider sensitivity analyses by remission stringency.

**DBS methodology:** Haematocrit correction is critical for DBS analyte quantification and should be measured at each time point. Volume normalization errors propagate into concordance estimates.

**Timing of paired samples:** Serum and DBS should be collected simultaneously from each draw. Diurnal variation in some immune analytes (circadian rhythms in cytokines, ACTH-driven immune regulation) means that samples collected at different times of day would confound concordance estimates with biological variation.

**Autocorrelation estimation:** With T=12 and n=10, individual-level autocorrelation estimates will have large confidence intervals. Mixed-effects autoregressive models pooling information across patients will be more reliable than patient-level estimates. The pilot analysis should specify whether autocorrelation is treated as a fixed effect (same for all patients) or random effect (patient-varying).

---

## Open Questions

1. **MSDA pathway composition:** What specific analytes are included in each MSDA pathway score, and what are their individual kinetic properties? This would allow a priori prediction of which pathways will have high vs. low CV.

2. **Existing DBS concordance data:** Are there published DBS vs. serum concordance studies for any MSDA constituent analytes? Even partial prior data would allow Bayesian power calculations.

3. **Circadian design:** Should samples be collected at standardized times of day to minimize diurnal variability, or should timing be naturalistic to capture real-world DBS implementation conditions?

4. **Subclinical activity:** How will the pilot handle patients who show subclinical MRI activity during the 12-week observation window? Excluding them post-hoc will bias CV estimates downward; including them will inflate CV estimates.

5. **Long-memory detection:** What minimum time series length is needed to distinguish AR-1 from long-memory processes with adequate power? A simulation study using plausible parameter ranges would answer this before the 12-month study is designed.

6. **Pathway interdependence:** MSDA pathways are not biologically independent — neuroaxonal injury activates neuroinflammatory pathways, and vice versa. Cross-pathway autocorrelation (cross-correlation functions) may contain predictive information beyond within-pathway autocorrelation. Should the pilot include cross-correlation analysis?

7. **Patient heterogeneity:** RRMS is a heterogeneous disease with distinct immunological subtypes. Will n=10 patients produce biomarker CV estimates that generalize, or will between-patient variance dominate within-patient variance, requiring stratified analysis?

---

## Conclusion

The proposed calibration pilot addresses a genuine empirical gap with no available evidence to directly answer its design questions. The synthesis advanced here suggests that the three analytic aims (CV, autocorrelation, concordance) should be treated as a coupled system rather than parallel analyses, with the primary deliverable being a two-dimensional deployability map (CV × concordance) that identifies which MSDA pathways are suitable candidates for DBS-based remote monitoring. Sampling frequency should be determined by the autocorrelation decay constant of the deployable pathways specifically. The most conservative actionable recommendation from available evidence is to design the concordance analysis stratified by analyte class from the outset, recognizing that matrix transformation effects will not be uniform across the MSDA analyte landscape.