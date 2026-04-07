# Temporal Signal Architecture in RRMS: Designing a Longitudinal MSDA Study as a Phase-Space Mapping Problem

*Pearl Research Engine — April 07, 2026*
*Focus: Users asked about 'Design a longitudinal sampling study in relapsing-remitting MS patients collecting serum at fixed time-of-day intervals (weekly or biweekly) across a 12-month period, analyzing MSDA scores for temporal autocorrelation structure, pathway-specific leading/lagging indicators of clinical relapse, and minimum detectable signal change relative to within-patient biological noise floor. Include a home collection arm with dried blood spots to test real-world pre-analytical robustness.' but Pearl couldn't ground the answer*
*Confidence: medium*

---

# Temporal Signal Architecture in RRMS: Designing a Longitudinal MSDA Study as a Phase-Space Mapping Problem

## Abstract

Designing a longitudinal serum sampling study in relapsing-remitting multiple sclerosis (RRMS) using the Multiple Sclerosis Disease Activity (MSDA) proteomics panel is not primarily a logistics problem — it is a signal architecture problem. The core challenge is characterizing the within-patient biological noise floor and temporal autocorrelation structure before relapse-associated signals can be meaningfully detected above that floor. Drawing on structural principles from longitudinal biomarker research, dynamical systems theory, and information-theoretic study design, we propose three competing frameworks for understanding what a 12-month weekly/biweekly MSDA study is actually measuring. We argue that the most productive design approach treats the first months of sampling as a calibration epoch for building patient-specific null models, uses dried blood spot (DBS) home collection as a complementary compartment rather than a serum substitute, and grounds the minimum detectable change calculation within-patient rather than at the population level. The pre-relapse detection problem may fundamentally be a phase-space topology problem — detecting when a patient's immune state trajectory enters the pre-relapse attractor basin — rather than a simple threshold-crossing problem in a single biomarker dimension.

---

## Evidence Review

The available evidence base does not contain direct MSDA literature, MS biomarker dynamics, or neuroimmunology data. This constraint is significant and must be stated clearly. The hypotheses generated here are therefore structural and theoretical, grounded in analogous systems rather than MS-specific Tier 1 evidence. What the evidence base *does* provide is a set of structurally important precedents:

### Temporal Drift in Molecular Biomarkers
The G6PD longitudinal study (decoded-6db18d65f027) demonstrates that enzyme activity shows systematic, directional drift over a 4-month assessment period in neonates. This is the clearest available evidence that molecular biomarkers are not stationary — their values change not only in response to disease but as a function of time itself, independent of pathological events. For MSDA study design, this precedent argues strongly that a single baseline measurement is insufficient as a normalization reference. Instead, the 'normal' trajectory for each patient must be established empirically across multiple early timepoints, and any disease-associated signal must be defined as a deviation from that patient-specific trajectory rather than from a population norm.

### Longitudinal Data Transformation and Missing Data
The L2C transformation approach in dementia prediction (decoded-9bd2c7699755) provides a methodological precedent for longitudinal study design. The finding that transforming longitudinal sequences into a cross-sectional representation substantially reduces missing data burden while preserving predictive power has direct implications for the RRMS study: patient dropout, missed collection visits, and pre-analytical failures will create irregular time series. The study must be designed from the outset with explicit handling of irregular sampling intervals — either through L2C-style transformation or through state-space models capable of handling non-uniform timepoints (e.g., Kalman filters, Gaussian process regression).

### Multi-Analyte Complexity and Proteomics Dynamics
The HDL proteome entry (WS3-PA-Regulation-hdl) notes that HDL particles carry hundreds of diverse proteins, dramatically more than simpler lipoprotein classes. This structural fact — that circulating particles serve as multi-analyte reporters of systemic biological state — is directly analogous to the MSDA panel's multi-protein architecture. Critically, these proteins are not independent: they are co-regulated by overlapping biological pathways, meaning their temporal trajectories will be correlated. A longitudinal MSDA study must model this correlation structure (the temporal-cross-analyte covariance matrix) to avoid both false discovery inflation and false negative suppression.

### Threshold Kinetics and Pre-Transition Detection
The lactic acid / fatigue entry (WS2-PA-Transduction) describes anaerobic threshold as a phase transition: below the threshold, the system operates in one regime (aerobic, sustainable); above it, a qualitatively different regime emerges (anaerobic, unsustainable, lactate-accumulating). The pre-transition kinetics are distinctive — the system shows characteristic slowing of recovery from perturbations near the threshold. This is the metabolic analog of the 'critical slowing down' phenomenon well-characterized in dynamical systems theory. For RRMS relapse prediction, the hypothesis that pre-relapse immune state resembles a system approaching a phase transition — showing increased response variance, increased autocorrelation, and decreased resilience — provides a theoretically motivated framework for what biomarker signatures to seek in the weeks preceding clinical relapse.

### Study Design Failures from Enrollment Mismatch
The fibrate trial lesson (WS3-PA-Regulation-previous-trials) is methodologically crucial: clinical trials that enrolled patients without the target biomarker signature (elevated triglycerides in the context of existing statin use creating low residual risk) produced null results that were interpreted as therapeutic failure but were actually design failures. The RRMS analog is clear: longitudinal MSDA studies that enroll patients with low disease activity and high DMT efficacy will show apparent 'stability' that makes it impossible to detect the biological dynamics associated with subclinical disease activity and pre-relapse state transitions. Patient stratification by expected relapse rate and DMT mechanism should be a primary design variable, not a covariate.

### Soul/Spirit Density Mirrors: Reception Architecture Insights
The fractal mirror entries, while operating at a different density level, provide structurally illuminating metaphors for the immunological problem. The description of a 'reception apparatus organized around lack' that reads present signals through the template of prior absence (mirror_decoded-raw-e8f82f4a820e_spirit) maps with striking precision onto the concept of immunological memory in RRMS: the immune system between relapses is not in a neutral state but in a state shaped by prior inflammatory episodes, maintaining low-level activation signatures that represent a persistent attractor toward inflammatory response. This 'prior absence' template — prior relapse encoding — creates a lower energy barrier back to the inflammatory state, potentially detectable as elevated baseline MSDA scores or as characteristic autocorrelation structure in remission-phase sampling.

The air quality assessment mirrors (mirror_WS6-Reception-AirQualityBreathingAssessment) describe 'discriminating awareness: the capacity of consciousness to receive experience fully while maintaining the integrity of the receiving aperture.' This maps directly onto the methodological problem of DBS home collection: the sampling instrument must maintain fidelity (receive the biological signal fully) while also filtering pre-analytical noise (maintain aperture integrity). The split between naive openness (taking in everything without filtering) and defensive closure (filtering so aggressively that true signal is lost) precisely describes the calibration challenge in DBS pre-analytical validation.

---

## Hypothesis Generation

### Hypothesis A: Temporal Autocorrelation Structure Is the Primary Design Constraint

**Claim:** Weekly MSDA sampling across 12 months will reveal statistically significant within-patient temporal autocorrelation with decay constants on the order of 2-6 weeks, making consecutive measurements non-independent and requiring explicit autocorrelation modeling in all downstream analyses.

**Mechanistic basis:** Circulating proteins contributing to MSDA scores have half-lives of days to weeks, are regulated by upstream transcriptional programs with their own temporal dynamics, and are subject to systemic inflammatory state that itself has temporal persistence. The combination of these factors virtually guarantees autocorrelation structure. The question is the timescale.

**Design implication:** The statistical power calculation for detecting relapse-associated MSDA changes cannot use standard independent-samples assumptions. Mixed-effects models with AR(1) or AR(p) error structures, or autoregressive-integrated moving average (ARIMA) models fit to each patient's individual trajectory, are necessary. Failure to account for autocorrelation will systematically inflate apparent sample sizes required (if autocorrelation is positive) or underestimate them (if negative).

**Analytical lenses:** Information theory (effective sample size reduction from autocorrelation), signal processing (autocorrelation as filter characterization), control theory (system memory as evidence of feedback loop dynamics).

**Falsification:** Demonstration that lag-1 to lag-6 autocorrelation in stable-remission MSDA scores is statistically indistinguishable from zero within patients.

---

### Hypothesis B: Pathway-Specific Oscillatory Frequencies Create Sampling Aliasing Risk

**Claim:** Different MSDA pathways (e.g., innate immune activation vs. complement vs. neurodegeneration markers) operate as coupled oscillators at different characteristic frequencies. Weekly sampling may alias faster-cycling pathways while adequately capturing slower ones. Pathway-specific Nyquist frequency analysis should inform whether weekly or biweekly sampling is sufficient for each pathway independently.

**Mechanistic basis:** Circadian regulation of immune function is well-established, with many cytokines and immune activation markers showing strong time-of-day variation with periods of ~24 hours. Higher-frequency ultradian oscillations (periods of hours) exist in some immune parameters. Lower-frequency oscillations (periods of weeks to months) are hypothesized based on the temporal clustering of MS relapses and documented seasonality of MS disease activity. A multi-pathway panel like MSDA is therefore sampling across a range of biological frequencies simultaneously.

**Design implication:** Time-of-day-fixed sampling (as specified in the study design) is essential to prevent circadian phase aliasing but is insufficient to prevent aliasing of other frequency components. The biweekly sampling interval (sample frequency ~0.5/week) has a Nyquist frequency of ~0.25 cycles/week — meaning biological cycles shorter than 4 weeks will be aliased. If pre-relapse dynamics include significant power at 2-3 week periods, biweekly sampling will miss them. This argues for weekly rather than biweekly sampling frequency, at minimum for the first 3-6 months of the study.

**Pathway-specific leading/lagging indicator hypothesis:** If fast-cycling pathways (innate immune) serve as leading indicators and slow-cycling pathways (neurodegeneration, myelin biology) serve as lagging indicators, cross-correlation analysis between pathway scores across time should reveal predictive lead times. A relapse might be preceded by innate pathway elevation 2-3 weeks before adaptive/structural pathway changes become detectable.

**Analytical lenses:** Coupled oscillators, signal processing (Nyquist/sampling theory), fractals (multi-scale temporal structure), network theory (pathway coupling topology).

**Falsification:** Spectral analysis of longitudinal MSDA pathway scores showing flat power spectra (white noise) or single dominant frequency shared across all pathways.

---

### Hypothesis C: Pre-Relapse Critical Slowing Down Is Detectable as Statistical Signature

**Claim:** In the 3-6 weeks preceding clinical relapse, MSDA pathway score trajectories will show measurable increases in variance and lag-1 autocorrelation — dynamical signatures of critical slowing down in a system approaching a bifurcation — detectable above the patient-specific remission-phase noise floor established during the calibration epoch.

**Mechanistic basis:** Critical slowing down (CSD) is a generic phenomenon in dynamical systems approaching phase transitions. As a system moves toward a bifurcation point (transition between stable states), its recovery rate from perturbations decreases (slower return to equilibrium = increased autocorrelation) and its stochastic fluctuations increase in amplitude (increased variance). The RRMS immune system, conceptualized as a bistable dynamical system with remission and relapse attractors, should exhibit CSD in the pre-relapse period as inflammatory regulatory mechanisms become progressively less effective at damping immune activation perturbations.

**Implications for DBS arm:** Dried blood spot samples contain cellular components (leukocytes, platelets) absent from serum. These cellular components may carry informative transcriptomic and epigenetic signals of impending immune activation — signals that precede the circulating protein changes captured by serum MSDA. If DBS-derived signals lead serum MSDA changes, home DBS collection might provide earlier warning than clinic serum collection, partially compensating for its lower collection frequency.

**Design implication:** The study must be powered not just to detect mean MSDA changes around relapse but to detect *second-order statistical changes* (variance, autocorrelation) in the pre-relapse trajectory. This requires substantially more timepoints per patient than a simple mean-comparison design. The 12-month / weekly schedule provides approximately 52 timepoints per patient — sufficient for this analysis if the CSD window is 3-6 weeks (capturing 3-6 observations in the critical window per relapse event).

**Analytical lenses:** Chaos attractors, phase transitions, complexity emergence, control theory (damping coefficient changes near bifurcation).

**Falsification:** Pre-relapse epochs showing identical variance and autocorrelation to matched inter-relapse remission epochs in the same patient.

---

## Debate

### Against Hypothesis A
The most serious objection is the protein turnover argument: if key MSDA analytes have circulating half-lives of 2-3 days, the biological signal would decorrelate on a timescale of days, making weekly measurements effectively independent. If so, the autocorrelation concern is a non-issue and conventional power calculations apply. Counter-argument: the relevant temporal variable is not individual protein half-life but the upstream regulatory state (inflammatory milieu, DMT effect, relapse activity) that determines protein production rate. Regulatory states have much longer temporal persistence than individual molecules.

### Against Hypothesis B
The strongest objection is resolution: serum protein concentrations are population averages over enormous numbers of cells, and oscillatory behavior that exists at the cellular level may be thoroughly averaged out at the serum measurement level. Single-cell oscillators are known to be noisy and poorly synchronized; their population average may show no detectable periodicity. This is a genuine concern that makes the coupled oscillator hypothesis potentially inaccessible to this measurement modality, regardless of whether the underlying biology is oscillatory.

### Against Hypothesis C
Critical slowing down detection in real biological systems has a poor track record outside controlled ecological experiments. The required signal-to-noise ratio for CSD detection typically exceeds what's available from noisy, irregularly sampled biological time series. In practice, the change in variance and autocorrelation preceding clinical events is often smaller than between-measurement noise, making CSD an unreliable early warning indicator in clinical settings. The hypothesis is theoretically sound but may be empirically inaccessible.

---

## Synthesis

The three hypotheses are not mutually exclusive — they operate at different levels of the same underlying question. Hypothesis A (autocorrelation structure) describes the statistical reality that must be accounted for regardless of mechanism. Hypothesis B (oscillatory pathway coupling) proposes a mechanistic explanation for that autocorrelation structure and adds the prediction of pathway-specific frequency differences. Hypothesis C (critical slowing down) proposes an additional signal layer detectable only near relapse events — a signal that presupposes the autocorrelation structure of Hypothesis A as its baseline reference.

The evolved design recommendation is:

**Phase 1 (Months 1-3): Calibration Epoch**
All enrolled patients (targeting N=40-60 to allow for dropout), weekly serum and simultaneous biweekly DBS. No relapse expected; goal is establishing patient-specific temporal null models: within-patient mean, variance, lag-1 to lag-6 autocorrelation for each MSDA pathway score. This phase answers: what is the noise floor for each patient?

**Phase 2 (Months 4-12): Prospective Detection Phase**
Continued weekly/biweekly sampling. For any patient experiencing relapse, retrospective analysis of pre-relapse trajectory for CSD signatures and pathway-specific leading indicator structure. DBS vs. serum concordance analysis.

**Statistical framework:** Personalized baseline models (ARIMA or Gaussian process per patient) fit on Phase 1 data, with Phase 2 relapse periods analyzed as anomalies relative to the patient-specific model. Minimum detectable signal change defined empirically as the patient-specific noise floor × z-score threshold, not as a population-level effect size.

**DBS integration:** Simultaneous DBS and serum collection at 2-week intervals allows direct concordance estimation. DBS-serum divergence index as a potential additional signal.

---

## Implications

If the autocorrelation structure hypothesis is confirmed, it will fundamentally alter how MSDA-based clinical monitoring studies should be designed and analyzed — shifting from cross-sectional snapshot logic to time-series analysis logic.

If pathway-specific oscillatory structure is confirmed, it will suggest that optimal MSDA monitoring protocols should be pathway-specific in their sampling frequency recommendations — potentially arguing for different clinical monitoring intervals depending on which pathway is the primary concern for a given patient.

If critical slowing down signatures are confirmed, the MSDA panel could transition from a disease activity assessment tool to a relapse prediction tool — with potential implications for just-in-time therapeutic intervention before clinical relapse occurs.

The DBS home collection arm has implications beyond MS: if DBS-serum concordance is established with known offset correction factors, it opens a pathway to fully decentralized biomarker monitoring for chronic neurological conditions.

---

## Open Questions

1. What is the empirical autocorrelation decay constant for each MSDA pathway in stable RRMS remission?
2. Do DBS and matched serum MSDA scores show stable multiplicative or additive offset that can be pre-analytically corrected?
3. Is CSD detectable in the pre-relapse window with the sensitivity and specificity required for clinical utility?
4. How does DMT mechanism (interferons vs. natalizumab vs. ocrelizumab) modulate the temporal autocorrelation structure and noise floor?
5. Is the within-patient noise floor itself non-stationary — changing across seasons, infections, or stress events in ways that would confound relapse signal detection?
6. Can L2C-style transformation approaches handle the irregular time series that will inevitably result from missed collections and DBS quality failures?
7. What is the minimum number of pre-relapse timepoints required to reliably detect CSD, and how does this constrain the required relapse rate in enrolled patients?
8. Are there patients for whom MSDA shows no pre-relapse signal change — and if so, is this a biomarker failure or a biologically distinct RRMS subtype?

---

*Confidence classification: Medium. These hypotheses are grounded in structural principles and analogous systems but require MS-specific empirical validation. The absence of direct MSDA longitudinal data in the evidence base means all claims are candidates for investigation, not established findings.*