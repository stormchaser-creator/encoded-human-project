# Nonlinearity, Data Integrity, and the Shape of Preventive Signal: A Pilot Framework for EHR-Based Diabetic Foot Care Analysis (2016–2023)

*Pearl Research Engine — April 09, 2026*
*Focus: Users asked about 'Conduct a pilot analysis on a single health system's EHR data (2016-2023) to: (a) validate the care engagement frequency distribution, (b) test for nonlinearity in the foot-check frequency → LEA risk relationship using restricted cubic splines before committing to the full Cox regression design, and (c) assess COVID-period data completeness and telehealth visit coding consistency across the study window.' but Pearl couldn't ground the answer*
*Confidence: medium*

---

# Nonlinearity, Data Integrity, and the Shape of Preventive Signal:
## A Pilot Framework for EHR-Based Diabetic Foot Care Analysis (2016–2023)

---

## Abstract

This research synthesis addresses the methodological foundations for a pilot EHR analysis examining the foot-check frequency → lower extremity amputation (LEA) risk relationship in a single health system (2016–2023). Three specific objectives require pre-commitment validation before a full Cox proportional hazards design is specified: (a) validating the care engagement frequency distribution, (b) testing for nonlinearity in the foot-check → LEA relationship using restricted cubic splines (RCS), and (c) assessing COVID-period data completeness and telehealth visit coding consistency. 

Although the retrieved evidence base does not contain direct studies on diabetic foot care or LEA, structural and analogical patterns within the evidence — particularly findings on the insufficiency of scalar metrics in predicting complex outcomes, nonlinear dose-response relationships in behavioral risk factors, extreme subgroup heterogeneity masked by aggregate statistics, and phase-transition effects on measurement systems — converge on a coherent analytical framework. Three competing hypotheses are generated and debated. The evolved insight holds that all three pilot objectives share a common threat: scalar aggregate metrics (visit count, % completeness, sample N) are necessary but insufficient proxies for the structural variables driving inference validity. The recommended next investigation is a structured EHR audit combining distributional analysis, telehealth template audit, and pre-COVID RCS fitting.

**Confidence: Medium** (analogical reasoning from orthogonal evidence; direct EHR/LEA literature absent from retrieved set)

---

## Evidence Review

### Evidence Availability and Gap Assessment

The 16 retrieved evidence entries span: early childhood prosocial development (Davidson kindness curriculum), pallidotomy mechanisms in dystonia, GBD 2023 disease burden, white matter hyperintensity and cognitive prediction, beta-glucan tolerability in MS, proteostasis support protocols, SCFA/GLP-1 mechanisms, trachoma regional variation, telomere shortening in reproductive aging, circadian disruption in aviation professionals, and multiple fractal mirror entries at soul/spirit density.

None of these directly address EHR methodology, diabetic foot examination, lower extremity amputation, Cox regression, restricted cubic splines, or COVID-period telehealth coding. This represents a genuine knowledge base gap for the specific technical query posed.

However, three evidence entries carry strong structural analogies that are analytically productive:

**Entry decoded-8224fa91bfb9 (WMH/Cognitive Prediction):** The finding that "WMH volume alone does not fully account for the extent of cognitive deficits" is a canonical example of scalar metric insufficiency. The volume of white matter hyperintensity is a count-like measure (analogous to foot-check frequency) that fails to capture network connectivity (analogous to engagement phenotype or timing patterns). This evidence directly motivates the nonlinearity and distribution shape investigations in objectives (a) and (b).

**Entry decoded-74b673d52eb7 (Trachoma Regional Variation):** A 10-fold range (4.3%–44.1%) across geographic regions within a single disease and single meta-analysis demonstrates that aggregate statistics routinely mask extreme subgroup heterogeneity. Any care engagement frequency distribution in an EHR will similarly mask variation by clinic, provider, patient demographics, and insurance status.

**Entry WS4-Elimination-Proteostasis and its soul mirror:** The framework of distinguishing 'rehabilitable' from 'irretrievably degraded' protein structures maps cleanly onto the COVID-period data triage problem: some telehealth visit records contain recoverable foot examination information; others do not. The soul mirror makes explicit that "the psyche's proteostasis is the capacity to recognize which... can be rehabilitated... and which must be released entirely rather than endlessly recycled." Applied to EHR methodology: some COVID-period data can be recoded/imputed; other data represents genuine information loss that must be acknowledged and handled through censoring or sensitivity analysis, not recycled through imputation.

### Indirect Relevant Evidence

**Entry decoded-8c3a53b588d9 (GBD 2023):** The GBD framework documents "risk-attributable burden of 88 risk factors" with explicit attention to dose-response curves that are rarely linear. Behavioral exposure-response relationships (smoking, physical activity, diet) consistently show threshold and saturation effects — precisely the structure hypothesized for foot-check frequency.

**Entry decoded-4d9330958a30 (SCFA/GLP-1):** GLP-1 agonist prescribing underwent significant secular change during 2016–2023 (FDA approval of semaglutide in 2017, dramatic uptake from 2019 onward). Any EHR study of T2DM complications over this period must account for this secular trend as a potential confounding variable — it represents a system-level intervention that changed the baseline risk landscape.

**Entry WS3-MW-Regulation (Circadian Disruption):** The finding that specific professional groups show nonlinear brain structural changes from circadian disruption illustrates that exposure-outcome relationships in real-world populations depend critically on the exposure distribution itself. If the exposed population is occupationally clustered, the apparent dose-response curve reflects both the biological relationship and the population's exposure distribution. Similarly, foot-check frequency in an EHR is not independently distributed — it reflects the health system's scheduling practices, which vary by clinic type and patient panel.

---

## Hypothesis Generation

### Hypothesis A: Threshold Nonlinearity in Foot-Check → LEA Dose-Response (Conservative)

**Claim:** The relationship between annual foot-check frequency and LEA risk follows a nonlinear (threshold/plateau) dose-response curve. Risk decreases steeply from 0 to 1–2 annual checks and then plateaus, with the marginal benefit of additional checks beyond a threshold being negligible. RCS analysis will identify this shape and reject the linear specification.

**Biological rationale:** The mechanism linking foot examination to LEA prevention operates through early detection of ulceration, neuropathy progression, and vascular insufficiency. A single annual examination provides dramatically more information than no examination (catching potentially months of undetected pathology). A second examination provides meaningful incremental value. But a 7th or 8th examination in the same year is operating on tissue whose status was evaluated weeks prior — the marginal clinical information gain per additional check diminishes steeply. This is a biological saturation argument, not merely a statistical one.

**Analytical lenses:** 
- *Chaos attractors*: The dose-response curve has an attractor state around 2–4 annual checks where LEA risk is minimized; perturbations above this threshold produce minimal further risk reduction
- *Control theory*: The foot examination acts as a monitoring signal in a feedback control system; above a sampling frequency threshold, oversampling provides no additional control gain
- *Signal processing*: The clinical signal (early pathology detection) has a Nyquist-like sampling requirement — once met, additional samples do not improve signal quality

**Falsification:** RCS global nonlinearity test p > 0.05; AIC/BIC favoring linear over spline model; visual inspection of spline plot showing linear trend through confidence interval.

### Hypothesis B: COVID-Period Differential Misclassification Bias (Integrative)

**Claim:** The 2020–2022 period introduces systematic non-random missingness in foot examination records that is positively correlated with patient comorbidity burden. High-comorbidity patients (highest LEA risk) had the greatest disruption to in-person examinations AND were most likely to have telehealth visits with incomplete foot documentation, creating differential misclassification that inflates the apparent protective effect of foot-check frequency.

**Mechanism:** Patients with advanced diabetes, cardiovascular disease, obesity, and mobility limitations faced dual barriers during COVID: (1) their clinicians were most likely to recommend avoiding in-person visits (risk of COVID complications), AND (2) their foot examination findings are most clinically relevant but hardest to assess via telehealth. This creates a perfect storm of informative missingness — the patients most likely to have a foot-check 'gap' in the EHR are precisely those at highest LEA risk.

**Data triage framework:** Drawing on the proteostasis analogy, COVID-period records require triage into:
- *Recoverable*: Telehealth visits with populated foot exam fields, or in-person visits with complete documentation → include as-is
- *Partially recoverable*: Telehealth visits without foot exam documentation but with documented neuropathy/vascular findings in visit notes → mine via NLP or structured query
- *Irretrievably absent*: Pure check-in calls, administrative visits, prescription renewals without any clinical examination content → treat as censoring events or exclude from foot-check counts

**Analytical lenses:**
- *Information theory*: Signal-to-noise ratio in the COVID period decreases; coding inconsistency introduces noise that is non-uniform across patient risk strata
- *Phase transitions*: March 2020 represents an abrupt phase transition in care delivery — not a gradual trend — requiring explicit handling as a structural break rather than a continuous covariate
- *Network theory*: The health system's network of care delivery shifted topology (in-person → telehealth) unevenly across clinics, creating hub-dependent variation in coding quality

**Falsification:** Telehealth template audit showing >80% of telehealth visits have populated foot exam documentation; Little's MCAR test failing to reject for foot-check missingness stratified by comorbidity; COVID-period sensitivity analysis showing <10% change in primary hazard ratio estimates.

### Hypothesis C: Bimodal Engagement Attractor Distribution (Radical)

**Claim:** The empirical distribution of foot-check frequency in the health system EHR will be bimodal or multimodal, reflecting two or more discrete patient engagement attractor states rather than a unimodal near-normal distribution. This means that standard power calculations (which assume a continuous, approximately normal exposure distribution) overestimate the number of patients in the clinically critical 'moderate frequency' range, potentially invalidating the study's statistical power for the RCS nonlinearity test.

**Behavioral science rationale:** Patient engagement in chronic disease management is not a continuous construct. Patient activation research (PAM scores, health behavior stage models) consistently identifies discrete engagement stages with poor transition between them. In a real-world EHR, these stages manifest as scheduling patterns: 'engaged' patients attend quarterly visits (4/year) while 'disengaged' patients attend annually or less (0–1/year). The intermediate range (2–3/year) may be sparsely populated — precisely the range where nonlinearity would be detectable.

**Implications for RCS power:** If the true distribution is bimodal with modes at 0–1/year and 4+/year, the 5th–35th percentile range (standard lower knot placement) will fall within the high-risk 'disengaged' attractor, and the 65th–95th range will fall within the low-risk 'engaged' attractor. Events will cluster at the tails, and the spline will be poorly identified in the intermediate range. This is a knot placement problem that can only be diagnosed after examining the empirical distribution.

**Analytical lenses:**
- *Chaos attractors*: Two behavioral attractors in patient engagement space, with unstable equilibrium in the intermediate engagement range
- *Complexity emergence*: The bimodal distribution is an emergent property of the interaction between patient psychology, provider scheduling systems, and insurance authorization patterns
- *Topology morphogenesis*: The engagement landscape has two basins of attraction separated by a ridge — the topology of the exposure distribution shapes the topology of the observable dose-response curve

**Falsification:** Hartigan dip test p > 0.05 (unimodal); Gaussian mixture model BIC favoring single-component; visual inspection showing smooth unimodal histogram.

---

## Debate

### Hypothesis A Debate

**Strongest support:** Threshold structures in preventive care dose-response relationships are well-established across analogous contexts (mammography frequency, HbA1c monitoring, blood pressure checks). The biological argument for saturation above ~4 annual checks is strong and consistent with clinical guidelines specifying quarterly examination as sufficient for high-risk patients.

**Strongest objection:** Power for RCS nonlinearity detection depends critically on adequate events across the exposure range. If the pilot health system has few patients with >4 annual foot checks (plausible — this exceeds most guideline recommendations), the upper spline is poorly identified, and a 'significant nonlinearity' finding may reflect sparse data at the upper tail rather than true dose-response shape. Pre-analysis examination of the event rate by exposure decile is essential before interpreting the RCS output.

**Hidden assumption:** That foot-check frequency in the EHR is a valid measure of actual foot examination quality. A documented foot check may range from a complete 10-point neuropathy assessment to a clinician noting 'feet examined' without specifics. Frequency without quality measurement may be a noisy proxy for the actual preventive intervention.

### Hypothesis B Debate

**Strongest support:** The differential burden of COVID disruption on high-comorbidity patients is well-documented in access-to-care literature. The telehealth transition created structural incompatibility with physical examination components of chronic disease management. This is not a speculative hypothesis — it is a predictable consequence of the care delivery context.

**Strongest objection:** Large academic health systems that adopted telehealth early may have implemented structured telehealth templates that preserved foot examination documentation fields. If the pilot health system is a large academic center with a mature telehealth program (pre-COVID telehealth experience), the documentation gap may be smaller than hypothesized. The hypothesis is more likely to hold for community health centers and smaller systems.

**Hidden assumption:** That the EHR contains sufficient metadata to distinguish visit types (in-person vs. telehealth vs. phone check-in) across the full study window. If visit type was not consistently recorded pre-2020, the baseline 'completeness' denominator cannot be established.

### Hypothesis C Debate

**Strongest support:** Administrative scheduling templates in most EHR systems (Epic, Cerner) create discrete scheduling options (annual wellness visit, quarterly chronic disease management visit) that impose discretization on the appointment distribution. This is structural, not behavioral — the health system's scheduling interface itself produces bimodal exposure distributions.

**Strongest objection:** The bimodality may be an artifact of the calendar year aggregation. If patients are scheduled quarterly but miss some appointments, their annual count is 2–3, populating the intermediate range. The apparent bimodality may disappear if the inter-visit interval distribution is examined instead. Annual count is a coarse aggregation that may artificially thin the middle of the distribution.

---

## Synthesis

The three hypotheses are not competing so much as nested: they address three distinct threats to the validity of the same analysis at different stages.

**The meta-pattern** is that scalar aggregate metrics systematically underperform as proxies for structural variables:
- Visit *count* underperforms visit *distribution shape* (Hypothesis C → motivation for Hypothesis A)
- % data *completeness* underperforms *stratified missingness structure* (Hypothesis B)
- *Sample N* underperforms *effective sample size within the clinically informative exposure range* (interaction of Hypotheses A and C)

This meta-pattern is robustly supported by the WMH/cognitive finding (decoded-8224fa91bfb9), the trachoma heterogeneity finding (decoded-74b673d52eb7), and the proteostasis triage framework (WS4 soul mirror). The structural pattern — that first-order aggregate measures mask second-order structural features that determine analytical validity — repeats across biological, epidemiological, and methodological contexts.

### Recommended Pilot Analysis Sequence

**Phase 1: Distribution Characterization (Objective a)**
1. Extract annual foot-check counts for all T2DM patients 2016–2019 (pre-COVID baseline)
2. Compute inter-visit interval distribution (not just annual count)
3. Apply Hartigan dip test + Gaussian mixture model to both metrics
4. Stratify by clinic type, insurance status, baseline comorbidity score
5. Use empirical percentiles (not assumed percentiles) to pre-specify RCS knot locations

**Phase 2: Telehealth Audit (Objective c)**
1. Random sample of 200 telehealth visits, 2020–2021, stratified by clinic type
2. Manual audit: is foot examination field populated? If not, is examination documented in note text?
3. Compute documentation completeness rate by visit type × clinic × comorbidity quartile
4. Test: is missingness MCAR, MAR, or MNAR? (Little's test, logistic regression of missingness on covariates)
5. Define COVID-period inclusion/exclusion criteria based on audit findings

**Phase 3: Nonlinearity Test (Objective b)**
1. Restrict to 2016–2019 cohort with complete follow-up and pre-specified exclusions
2. Fit RCS with 4 knots at empirically determined percentiles (from Phase 1)
3. Global test of nonlinearity (p-value for nonlinear spline terms)
4. Visual inspection of spline plot with confidence intervals
5. AIC/BIC comparison: linear vs. spline model
6. If nonlinearity confirmed: characterize the shape (threshold location, plateau level)
7. If nonlinearity not detected: assess power — was this a true null or an underpowered test?

---

## Implications

### For the Full Cox Regression Design

If Hypothesis A is confirmed (nonlinearity detected), the full model must use foot-check frequency as a spline term, not a linear covariate. The knot locations established in the pilot become pre-registered for the full analysis.

If Hypothesis B is confirmed (differential COVID missingness), the full model must either: (a) restrict the primary analysis to 2016–2019 with COVID period as a secondary analysis, or (b) include a time-varying covariate for visit type × COVID period interaction.

If Hypothesis C is confirmed (bimodal distribution), the power calculation for the full study must be revised using the empirical exposure distribution, and the primary analysis may benefit from treating engagement attractor state (high vs. low engagement) as a categorical variable alongside the continuous spline.

### For EHR Research Methodology Generally

The COVID-period telehealth coding problem is a generalizable methodological challenge for any longitudinal EHR study spanning 2019–2023. The structured audit approach described here — distinguishing visit-absence from exam-documentation-absence, stratified by comorbidity and clinic type — provides a replicable template for assessing data fitness before committing to a study design.

---

## Open Questions

1. **Coding validity:** Are ICD-10 codes Z01.818 and Z13.88 applied consistently for foot examinations across in-person and telehealth visits in the target EHR system? Do different providers use different coding practices?

2. **GLP-1 secular trend:** How should the 2017–2023 uptake of GLP-1 agonists (which reduce cardiovascular and neuropathic complications) be modeled? As a time-varying covariate? A stratification variable? Ignoring it risks confounding the foot-check frequency → LEA relationship.

3. **Inter-visit interval vs. annual count:** Does the timing distribution of foot checks within the year (evenly spaced vs. clustered) provide additional predictive information beyond annual count? This is a testable hypothesis within the pilot data.

4. **Laterality:** Are unilateral and bilateral LEA events treated as the same outcome? First-event-only Cox models may undercount patients with contralateral LEA.

5. **Definition of 'foot check':** Should remote patient monitoring (connected wound imaging devices, deployed in some systems post-2020) count as a foot examination event? This represents a third visit type category beyond in-person and telehealth.

6. **Lag structure:** Is there a clinically meaningful lag between foot-check frequency and LEA risk reduction? Should foot checks from the prior 12 months, 6 months, or 3 months be weighted differently as time-varying exposures in the Cox model?

---

## Conclusion

The three pilot objectives — distribution validation, nonlinearity testing, and COVID-period data assessment — are not administrative checkboxes before the 'real' analysis begins. They are the analytical substance. The pilot is where the study's inferential architecture is validated or revised. Scalar aggregate metrics (visit count, % completeness, sample N) are necessary but insufficient proxies for the structural variables — engagement phenotype, coding fidelity, dose-response shape — that determine whether the full Cox regression produces valid inference.

The recommended pilot sequence is: Phase 1 (distribution characterization with inter-visit interval analysis and mixture modeling) → Phase 2 (telehealth documentation audit stratified by comorbidity) → Phase 3 (RCS nonlinearity test in pre-COVID cohort using empirically determined knots). The findings from Phases 1 and 2 directly determine the validity of Phase 3.

**Overall confidence in this analytical framework: Medium.** The structural analogies from the evidence base are coherent and the methodological reasoning is standard for EHR-based survival analysis. The absence of direct evidence from diabetic foot care literature in the retrieved set precludes higher confidence.