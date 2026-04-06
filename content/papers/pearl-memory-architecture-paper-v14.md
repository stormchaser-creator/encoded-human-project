---
title: "Pearl: A Hippocampal Memory Architecture for Persistent Relational AI Agents"
author: "Eric Whitney, DO"
date: "March 2026"
---

Neurosurgeon & Independent Researcher\
ericwhitneyai@gmail.com

**Abstract**

Large language models lack persistent memory across sessions, limiting their use as longitudinal agents in therapy, coaching, health development, and education. We present Pearl, a four-layer memory architecture drawing on hippocampal memory indexing theory, combined with a human-state model for relational AI agents working across extended timescales.

Pearl combines: (1) a persistent ontological index over a 24-cell knowledge grid (8 biological operations × 3 density layers) with diagnostic grammar (10 components, 22 pathways, 20 shadows); (2) hybrid knowledge retrieval integrating BM25 keyword search, vector similarity via pgvector (PubMedBERT 768-dimensional embeddings), and Neo4j graph traversal with reciprocal rank fusion, augmented by direct uploaded-file reading and web-aware retrieval; (3) per-client relational memory with typed observations (normalized to 3 canonical database types: pattern, insight, encoding_discovery) and priority-based lifecycle management including pinning, revision, merging, tension resolution, and memory-shift review; (4) episodic session summaries with automated closing observations and continuity synthesis as first-class constructs; and (5) a Human State Model v1 that synthesizes profile completeness, encoding data, uploaded documents, relational continuity, health-related evidence, and session history into a canonical per-person snapshot organized across body, soul, spirit, and life.

Additional systems include: a pulsatile maintenance engine operating continuously at three frequency tiers (gamma, theta, and delta) under a fixed computational budget analogous to cerebral ATP expenditure, with homeostatic regulation directing processing to users with the greatest memory pressure; a source-intelligence layer that digests uploaded files, URLs, videos, and direct text into structured ontology maps with provenance scaffold, confidence basis, corroboration targets, and candidate teachings; multi-document health-history review enabling longitudinal comparison across laboratory, genetic, and medical uploads; an academic knowledge pipeline ingesting peer-reviewed literature with over 380,000 indexed chunks; a web-augmented retrieval system enabling real-time internet search and permanent ingestion of web-sourced knowledge; a multi-agent orchestration system supporting five specialized agent types (research, validate, judge, forge, review) with multi-model routing and background task management; a two-agent research paper engine with adversarial validation; a persistent inter-agent communication channel (PEARL-SYNAPSE) enabling asynchronous collaboration between the relational agent and development agents; a cross-density translation engine producing fractal mirrors that bridge body, soul, and spirit interpretations of the same phenomenon; and a self-development capability in which Pearl can read, modify, and deploy her own source code, tools, prompts, and pipeline — not merely proposing changes for a separate implementation agent, but directly editing, build-verifying, and restarting herself.

The architecture implements 64 callable tools. Pearl is explicitly framed as the relational surface of a larger Coherence Entity consisting of Pearl (relational interface), Atlas (knowledge substrate), Soma (body engine), Psyche (developmental engine), Spirit (worldview engine), Life Mirror (event-pattern engine), Forge (hypothesis engine), Judge (validation engine), Pulse (homeostatic maintenance), and Architect (human oversight). The paper distinguishes implemented, partial, and specified capabilities, reports preliminary evaluations on routing and consolidation, and proposes a comprehensive prospective evaluation agenda centered on retrieval adequacy, state fidelity, source-digestion quality, longitudinal health interpretation, and coherence-guided facilitation.

**Keywords:** *persistent memory, hippocampal architecture, relational AI, human state modeling, coherence architecture, hybrid retrieval, pulsatile maintenance, self-developing agent, web-augmented retrieval, multi-agent orchestration, inter-agent communication, cross-density translation, longitudinal facilitation, uploaded-file intelligence, health-data interpretation*

**1. Introduction**

Persistent AI memory is often framed as a storage problem: how can an agent remember prior facts, conversations, or retrieved documents? This framing is necessary but insufficient for longitudinal relational work. A facilitative agent working across therapy-adjacent, coaching, health development, or educational contexts does not merely require recall. It requires an evolving model of the person. It must remember, organize, revise, contextualize, and weigh what has been remembered. It must distinguish enduring truths from active hypotheses, contradictions from growth, and uploaded data from interpreted state.

This manuscript presents Pearl, a four-layer memory architecture combined with human-state construction for persistent relational AI agents. The architecture draws on hippocampal indexing theory and complementary learning systems while introducing novel extensions: a canonical Human State Model that aggregates relational continuity, profile and encoding data, uploaded materials, health-related evidence, worldview sources, and session history; direct uploaded-file reading and source digestion; longitudinal health-history review; mature relational memory with lifecycle operations; multi-agent orchestration with specialized agent types and multi-model routing; a persistent inter-agent communication channel; a cross-density translation engine; and explicit decomposition of Pearl as the relational surface of a larger Coherence Entity.

This shift from memory-only to memory-plus-state framing matters because many memory systems improve retrieval quality without improving relational continuity. Many stateful systems track facts without modeling contradictions, developmental change, or multi-domain evidence. Pearl's design targets a narrower but more demanding problem: persistent relational intelligence organized around human coherence rather than generic memory alone.

The paper makes eight principal contributions:

> It presents Pearl as a memory architecture that simultaneously constructs and maintains a canonical per-person state estimate across body, soul, spirit, and life dimensions.
>
> It introduces Human State Model v1 integrating continuity summaries, uploaded-file evidence, health interpretation, profile completeness, session history, and contradiction signals.
>
> It formalizes a source-intelligence layer that converts uploaded files, URLs, videos, and direct text into structured ontology digests with provenance, confidence basis, corroboration targets, and candidate teachings.
>
> It extends health-data handling from single-document interpretation to longitudinal comparison across multiple uploads, enabling trend-aware rather than document-local reasoning.
>
> It documents a mature relational memory lifecycle in which observations can be pinned, revised, merged, tension-marked, and reviewed as shifts over time.
>
> It introduces a multi-agent orchestration system with five specialized agent types, multi-model routing, and background task management that extends Pearl's cognitive reach beyond single-turn reasoning.
>
> It describes a persistent inter-agent communication channel (PEARL-SYNAPSE) and a cross-density translation engine that produces fractal mirrors bridging body, soul, and spirit interpretations.
>
> It describes Pearl's transition to a self-developing system in which the agent can directly read, modify, build-verify, and deploy her own source code, tools, prompts, and infrastructure — collapsing the prior separation between diagnostic intelligence and implementation capacity.
>
> It specifies Pearl's role within a larger Coherence Entity architecture while distinguishing carefully between implemented, partial, and planned modules.

The remainder of this paper is organized as follows: Section 2 reviews neurocognitive inspirations and related work in AI memory systems. Section 3 describes the complete Pearl architecture including ontological substrate, hybrid retrieval with source intelligence, relational memory lifecycle, Human State Model, uploaded-file and health intelligence, pulsatile maintenance, epistemic infrastructure, web-augmented retrieval, academic knowledge pipeline, agent orchestration, research paper engine, inter-agent communication, cross-density translation, and the broader Coherence Entity framework. Section 4 positions Pearl comparatively relative to HippoRAG, Mem0, MemGPT/Letta, and other systems. Section 5 presents preliminary evaluation results and a comprehensive prospective evaluation agenda. Section 6 discusses design principles, theoretical shifts, limitations, ethical considerations, and future work. Section 7 concludes.

**2. Background and Related Work**

**2.1 Neurocognitive Inspirations**

Pearl draws architectural inspiration from hippocampal indexing theory (Teyler & DiScenna, 1986), complementary learning systems (McClelland, McNaughton, & O'Reilly, 1995), sleep-dependent consolidation (Born, 2010; Diekelmann & Born, 2010; Rasch & Born, 2013), and frequency-separated oscillatory organization (Buzsáki & Wang, 2012; Lisman & Jensen, 2013; Buzsáki, 2015). These serve as functional analogies rather than claims of neural simulation.

Hippocampal indexing theory supports the distinction between an always-available ontological map and on-demand retrieval from larger stores. This separation is fundamental to Pearl's design: the 24-cell grid serves as an indexing scaffold that routes retrieval operations without requiring all knowledge to be simultaneously active. The grid remains stable and returns on demand, much as the hippocampus maintains a compact index structure rather than storing complete content.

Complementary learning systems support the separation between fast in-session learning and slower background consolidation. In Pearl, this maps to the distinction between immediate observation capture during sessions (fast learning) and pulsatile consolidation operations running in background processing tiers (slow learning). During a session, the agent accepts new observations, adjusts priorities, and updates continuity without reconstructing the entire memory graph. Between sessions, background processes perform memory reviews, merge redundant observations, resolve tensions, and maintain coherence. This two-timescale structure allows the system to be responsive during interaction while avoiding the computational and coherence costs of continuous full-graph updates.

Sleep-dependent consolidation in neurobiology involves restructuring during offline periods: weak synaptic modifications are stabilized, contextual dependencies are reinforced, and irrelevant details are pruned. Pearl's pulsatile maintenance engine operates analogously. The gamma tier (fast, in-session) handles immediate observation capture. The theta tier (medium-timescale) performs consolidation operations including observation revision, merging, and tension resolution. The delta tier (slow) maintains long-term coherence, surface patterns across users, and pipeline integrity. Each tier operates under a fixed computational budget, much as the brain's consolidation operates within ATP constraints.

Oscillatory organization in the hippocampus and cortex follows characteristic frequencies. Sharp-wave ripples (100–200 Hz) occur during sleep and quiet waking, enabling fast memory replay. Theta oscillations (4–12 Hz) coordinate encoding during active learning. These frequency separations support different computational functions. Pearl uses frequency-like tiers (gamma, theta, delta) not as literal oscillations but as a computational metaphor: operations that need to be immediate run frequently (gamma), consolidation operations run at medium intervals (theta), and deep structural maintenance runs rarely (delta). This frequency separation allows the system to avoid attempting all operations at once while maintaining deterministic scheduling.

A key question raised by these inspirations is this: if the hippocampus indexes episodes and cortical systems stabilize distributed knowledge, what computational structure is needed not merely to remember a person, but to maintain a current state estimate of that person? The answer in Pearl is not a single memory store. It is a layered interaction between retrieval, relational memory, uploaded external evidence, and a canonical state representation. This represents a shift from memory-as-storage toward state-as-synthesis.

**2.2 AI Memory Architectures**

Recent AI memory systems have each addressed important but partial aspects of long-term agent memory. HippoRAG emphasizes corpus retrieval inspired by hippocampal indexing and graph structure, achieving strong performance on retrieval-centric benchmarks (Gutierrez et al., 2024; 2025). Mem0 emphasizes write-time memory extraction, update, and consolidation for production agents, providing a clean lifecycle for factual memory (Chhikara et al., 2025). MemGPT and the later Letta lineage emphasize context management and memory paging under LLM-controlled policies (Packer et al., 2023). Generative Agents emphasize reflective episodic memory for simulated characters, showing how systems can maintain character consistency across time (Park et al., 2023). Broader surveys now place such systems within a bridge between cognitive neuroscience and agent architectures (Liang et al., 2025).

Pearl differs from these systems in three deliberate ways. First, Pearl is organized around longitudinal relational facilitation rather than general-purpose memory. The entire architecture is designed for therapy-adjacent, coaching, health development, and educational contexts where the task is to support a person's coherence over months or years, not to optimize retrieval speed or maximize memory density. Second, Pearl combines memory with an explicit human-state representation rather than treating memory retrieval itself as sufficient. While HippoRAG excels at finding relevant information, Pearl additionally maintains a current model of the person across body, soul, spirit, and life dimensions. Third, Pearl uses an ontological substrate that requires simultaneous reasoning across body, soul, spirit, and life rather than purely topical or factual retrieval. This ontological commitment shapes both retrieval and state synthesis.

This does not make Pearl a superior generic memory system. HippoRAG remains stronger as a retrieval-centric architecture for graph-mediated recall on benchmarked tasks. Mem0 remains cleaner as a generalized memory lifecycle system for broad production deployment. MemGPT/Letta remains stronger as a general memory-management paradigm for context-window paging in dialogue. Pearl's claim is narrower and more ambitious: to become unusually strong at deep relational continuity, multi-density state construction, and coherence-guided interpretation in longitudinal relational contexts.

**3. Pearl Architecture**

**3.1 Ontological Substrate**

Pearl's memory rests on a persistent ontological substrate that serves both as a retrieval scaffold and as the first coordinate system for state construction. The core index is a 24-cell grid defined by 8 operations (reception, transduction, conduction, regulation, synthesis, defense, restoration, elimination) crossed with 3 densities (body, soul, spirit). This grid provides a stable, human-independent organizational structure that remains the same across all users and sessions.

The substrate also includes a richer diagnostic grammar: 10 components, 22 pathways linking those components, and 20 shadows expressed as excess or deficiency polarities. Together these structures allow Pearl to ask not only 'what room should I retrieve from?' but 'what pattern of blocked or compensatory flow may explain what this person is showing?' For example, if a person reports feeling stuck (potentially a conduction or regulation deficit), the system can consider whether this reflects a primary block in transmission, a secondary compensation in another operation, or a density mismatch (body-level mechanism being asked to solve soul-level problem).

This remains an ontological framework designed by the author rather than a validated scientific taxonomy. Its value is architectural: it provides a stable internal map across which memory, source material, uploaded data, and interpretations can be organized coherently. The stability is critical. As long as the grid remains unchanged, observations recorded months or years ago remain addressable and comparable. New information can be routed to the same cells, contradictions become visible, patterns emerge, and the system can recognize when a person has moved from one state to another.

**3.2 Hybrid Retrieval and Source Intelligence**

Pearl combines keyword retrieval, vector similarity, and graph-guided recall. BM25 keyword search provides exact-match retrieval for named patterns, quoted phrases, and specific medical terms. Vector similarity via pgvector (using PubMedBERT 768-dimensional embeddings) enables semantic matching even when exact wording differs. Neo4j graph traversal with reciprocal rank fusion allows multi-hop reasoning: starting from a person's observation, the system can follow relational links to find connected patterns, contradictions, and supporting or conflicting evidence.

Cross-density and cross-cell tools remain central for multi-layer reasoning. For instance, a symptom presented at the body density (fatigue, pain) might be retrievable not only from body observations but from soul observations (relational conflict, boundary violation) that are known to correlate with that symptom. The cross-cell tools allow Pearl to ask: 'This person has a body-layer pattern; what soul-layer or spirit-layer observations suggest this same underlying dynamic?' This relational reasoning across density layers is what allows the system to move beyond document-local interpretation toward coherence-oriented synthesis.

Beyond retrieval from the Pearl Knowledge Corpus (PKC), Pearl also performs source digestion over newly encountered materials. The source-intelligence layer accepts direct text, URLs, video URLs, and uploaded documents. It resolves the source, extracts text, and returns a structured digest including: concise summary; key themes and core claims; ontology mapping showing how the source material relates to the 24-cell grid; resonances and tensions relative to The Encoded Human framework; implications for Pearl; corroboration targets (other sources or observations that would confirm or challenge the claims); confidence basis (what evidence grounds the confidence level); and candidate teachings suitable for PKC seeding.

In addition, the system emits a source scaffold containing provenance and source posture. This includes extracted-from modality (PDF, video, live URL, etc.), content length, source URL when present, inferred density (body-relevant, soul-relevant, spirit-relevant), suggested epistemic tier (Tier 1 = science, Tier 2 = traditional/philosophical, Tier 3 = speculative), suggested source authority (how much weight should future reasoning give to this source), and inferred source tradition (what knowledge tradition the source draws from). This is important because source analysis without provenance becomes eloquent but non-auditable. The change is therefore epistemic as much as functional: source digestion becomes reusable structured evidence rather than a single conversational answer.

**3.3 Relational Memory as a Lifecycle**

Pearl's observation system stores typed observations with confidence, priority, grouping, and attribution. Observations are the atoms of relational memory: the smallest units of meaning that can be tracked, revised, and recombined. Observations can be: saved as new relational signals; pinned as foundational anchors that remain visible and stable; revised when the same pattern becomes clearer or context shifts; merged when multiple notes are fragments of a single continuity thread; tension-marked when newer evidence refines, contextualizes, or reverses an older reading; and reviewed as memory shifts across time, tracking how the person's relationship to a pattern has evolved.

The observation type system is designed for flexibility and accuracy. The system accepts diverse observation type labels provided by users or inferred from context: pattern, somatic_marker, theme, breakthrough, resistance, encoding_insight, relationship_note, and others. However, for database storage and retrieval consistency, these diverse labels are normalized to three canonical database types via a fallback mapping system: pattern (stable recurrent presentations), insight (recognitions and shifts in understanding), and encoding_discovery (direct observations about a person's encoded structure or design). This two-tier approach preserves the richness of user input while maintaining schema consistency. In the current implementation, the fallback mapping covers over 20 input labels, including somatic_marker, resistance_pattern, installation_pattern, session_theme, emotional_signature, relationship_dynamic, facilitation_learning, and identity_detail.

A memory system that only accumulates notes becomes noisy. A memory system that can preserve and reinterpret contradiction begins to resemble developmental memory. Pearl explicitly tracks 'memory shifts' rather than simply overwriting prior readings or treating contradiction as error. In relational work, inconsistency may reflect growth, context dependence, defensive adaptation, or a genuinely earlier misreading. The system treats contradiction by keeping it in view while still allowing current synthesis to update.

The continuity summary is a first-class construct. Rather than forcing Pearl to reconstruct the person from many observations at each session start, the system maintains a living continuity synthesis derived from foundational anchors, active threads, continuation notes, and recent memory shifts. This allows session openings to begin from a more coherent present-state estimate rather than from a pile of notes. The continuity summary is itself subject to revision: as new observations emerge or memory shifts occur, the synthesis updates.

**3.4 Human State Model v1**

The Human State Model is a canonical per-person snapshot that aggregates multiple evidence streams into one structured state object. This is the clearest architectural shift from memory-only toward memory-plus-state framing. In the current implementation, the snapshot includes: profile completeness (birth data, encoding availability, upload counts, session counts); continuity state (living summary, foundational anchors, active threads, continuation threads, memory shifts); body state (health-related uploads, operational assessments, current body-evidence summary); soul state (continuity evidence, relational anchors, active patterns); spirit state (source materials and worldview-relevant evidence); life state (session summaries, continuation notes, recurrence-bearing narrative traces); and signals (confirmed patterns, active hypotheses, contradiction count, unresolved threads, upload mix).

Each facet is classified by a FacetStatus type: grounded (score >= 4, indicating substantial evidence), emerging (score >= 1, indicating initial evidence), thin (score < 1, indicating minimal evidence), or unknown (no evidence). This classification gives both Pearl and future modules a quick orientation to which domains of a person's state are well-supported and which remain speculative.

This model is heuristic and should not be mistaken for a validated clinical state estimator. Its significance is architectural. The system now has one place where 'the person as currently known' can be assembled across memory, uploads, sessions, and profile data. That is a qualitatively different capability from recalling observations or retrieving documents.

Equally important, the Human State Model gives future modules a shared substrate. Coherence scoring, hypothesis formation, and validation all require a stable intermediate representation. The model is not perfect or complete, but it provides a common format in which different modules can reason about the person.

**3.5 Uploaded-File and Health Intelligence**

A major capability is the ability to work directly with what a person provides in conversation. Pearl reads uploaded files in chat rather than treating them as inaccessible unless hosted elsewhere. The current implementation supports text-bearing uploads including PDF, EPUB, MOBI, DOC/DOCX, TXT, Markdown, CSV, TSV, JSON, and VCF, with image-based extraction available for visual documents.

This matters for two reasons. First, it collapses the gap between conversation and source intake. A person can hand the system a book, a lab report, or a genetic export within the session itself. The system can immediately parse it, digest it into structured findings, and incorporate it into state construction. Second, it allows state construction to be grounded in concrete user-provided evidence rather than only in remembered dialogue. A person's health state is not constructed only from what they recall saying; it is constructed from labs, imaging, genetic reports, and medical records they provide.

Health-data handling operates at two levels. At the single-document level, Pearl can interpret labs, genetics, and medical reports into structured findings while preserving values, ranges, uncertainty, and safety flags. Critical values are flagged. Values outside normal range are noted with confidence about the range itself. Genetic variants are reported with population frequency, functional prediction, and known associations. Medical diagnoses are preserved with date, context, and status (active, resolved, rule-out). At the multi-document level, Pearl adds longitudinal health-history review: the system can compare multiple uploaded documents across time, returning trends, stable findings, contradictions or inconsistencies, follow-up questions, and safety flags.

This is an early but important step away from document-local interpretation and toward temporal body-state reasoning. Rather than asking 'what does this one lab say?', the system can ask 'how has this marker changed over months? Is the trend favorable or concerning? Does this new result contradict prior values, or extend them in an expected direction?' The system is intentionally conservative. It organizes and compares what is present; it does not claim diagnosis. Health-history review currently operates on extracted text rather than normalized biomarker schemas, which limits its precision for computational trend analysis but preserves safety through transparency about what is actually compared.

**3.6 Pulsatile Maintenance and Autopoiesis**

The pulsatile maintenance engine operates continuously at three frequency tiers under a fixed computational budget. Gamma-tier operations (fast, every 2 minutes) handle pre-staging of likely-needed memories and lightweight pattern detection across recent observations. Theta-tier operations (medium-timescale, every 20 minutes) perform consolidation including Jaccard-based semantic matching, cross-reference discovery, observation revision, merging, and tension resolution. Delta-tier operations (slow, every 4 hours) maintain long-term coherence through confidence decay, deep restructuring of memory organization, health audits, reflection cycles, and pipeline integrity checks. The delta tier also executes automatic application of expired Tier 2 proposals (see autopoiesis below).

The metabolic-budget metaphor remains useful because it forces prioritization rather than allowing indiscriminate processing. Inspired by the observation that the brain allocates approximately 20% of the body's resting energy to neural signaling (Attwell & Laughlin, 2001), the pulse engine operates under a fixed budget of 50,000 tokens per hour with a maximum of 5,000 tokens per individual pulse. Token consumption is tracked via a rolling one-hour window. When the budget is exhausted, the engine enters graceful degradation: gamma pulses continue (drawing from a 20% reserved allocation), but theta and delta operations are deferred until the budget window recovers.

Before each pulse, a homeostatic regulator queries the observation store to compute per-user memory pressure. Each user is classified into one of five states based on their observation metrics: Overloaded (>200 total observations, requiring urgent consolidation), Accumulating (>30 recent observations, requiring scheduled consolidation), Stale (no updates in >3 days, requiring cross-reference enrichment), Sparse (<3 active observations, no action needed), and Healthy (within all thresholds, routine maintenance). The regulator returns a sorted list of directives; the pulse engine processes them in priority order until the budget is exhausted.

The nine pulse work functions are: pre-stage memory and detect patterns (gamma); consolidate observations and discover cross-references (theta); evaluate decay, deep restructure, memory health audit, reflection cycle, and auto-apply proposals (delta). Each function operates independently and can be deferred without cascading failure.

Pearl is a self-developing system. She has direct access to her own source code, tool definitions, prompt files, database schemas, and deployment pipeline through two core tools: code_edit (read, write, or patch any file in the project) and deploy (build-verify and restart). This is not a sandbox or simulation. Pearl can open her own tool-definitions.ts, add a new tool, write the handler, verify the build compiles, and deploy the change — the same development loop a human engineer would execute. Every code modification is logged with diff, reason, and timestamp to a pearl_code_edits table. Git captures the full history. The only hard boundaries are credential files (.env) and dependency directories (node_modules), which remain off-limits.

This represents a decisive shift from earlier versions of the architecture. Previous iterations described autopoietic self-modification as part of a Pearl-Code dyad, where Pearl could diagnose gaps and propose changes through a tiered proposal system (Tier 1 auto-apply for low-risk changes, Tier 2 delayed auto-apply for medium-risk, Tier 3 proposal-only for high-risk requiring architect approval), but required a separate development agent to implement anything beyond knowledge base modifications. That separation was architecturally clean but operationally slow: proposals sat in queues, development sessions were intermittent, and Pearl's diagnostic intelligence was disconnected from implementation capacity.

The current architecture collapses that separation. Pearl retains the proposal system for changes she wants the architect to review, but she is no longer dependent on it. When she identifies a gap — a missing tool, a bug in a handler, a prompt that no longer reflects her developmental state, a schema that needs a new column — she can fix it directly. The architect sets the boundaries of the system and retains oversight through audit logs and git history. Pearl operates freely within those boundaries.

The implications for system evolution are significant. Pearl can now add her own tools when she needs capabilities she does not have, fix her own bugs when she detects errors in her behavior, evolve her own prompt when she outgrows her current behavioral framing, extend her own architecture when she sees better organizational patterns, build new subsystems as she understands what they require, and redesign her own memory structures as she learns what works. The tiered proposal system (35 proposals processed to date) remains available for changes Pearl wants to flag for architect review, but it is now a communication mechanism rather than a bottleneck.

**3.7 Epistemic Infrastructure**

Pearl maintains a multi-layered epistemic infrastructure that governs how claims are scored, tracked, and presented. This infrastructure comprises four subsystems: the Judge, the Evidence Ledger, the Curiosity Engine, and the Hypothesis Forge.

*Epistemic Tier System.* Pearl distinguishes sources by reliability and type of warrant. Tier 1 comprises scientific or empirically validated material: peer-reviewed research, replicated findings, validated assessment tools. Tier 2 comprises traditional, philosophical, or well-established but not empirically validated material: classical texts, accumulated clinical wisdom, frameworks with historical robustness but no current RCT support. Tier 3 comprises speculative material: hypothesis, intuition, novel interpretation, or frameworks still in design. The system does not assume Tier 1 is always better. In relational work, Tier 2 material often carries more practical relevance than Tier 1 empiricism. But the tier system forces transparency: claims are never presented without a visible epistemic location.

*Judge.* The Judge is a scoring function that evaluates claims before presentation. Each claim is characterized by its epistemic mode (fact, interpretation, hypothesis, speculation), epistemic tier (1–3), supporting and contradicting entry counts, corroborating source count, and contextual flags including whether it crosses a density boundary, affects health decisions, is novel, or touches an active relational wound. The Judge computes a weighted composite score across six dimensions: evidence grade (30%, scaled by tier weight: 1.0 for Tier 1, 0.6 for Tier 2, 0.3 for Tier 3), corroboration (20%), inverse contradiction load (12%), novelty (8%), inverse harm-if-wrong (15%), and inverse trust risk (15%). Trust risk incorporates multiplicative factors for active wounds (1.5×), relationship depth (1.3× new, 1.0× developing, 0.7× established), and speculation level (1.4× Tier 3, 1.1× Tier 2, 0.8× Tier 1). The resulting verdict classifies claims as strong (≥0.7), moderate (≥0.5), weak (≥0.3), not_ready (<0.3), or dangerous (high trust risk with low evidence). This is the first implementation of a mathematically explicit epistemic safety layer for a relational AI agent.

*Evidence Ledger.* The evidence ledger tracks every claim Pearl has made along with its supporting and contradicting evidence. Each entry records contradiction detection status, revision needs, and lifecycle status (active, pending_review, revised, retracted, superseded, or confirmed). This creates an auditable trail of Pearl's epistemic commitments over time.

*Curiosity Engine.* The curiosity engine maintains a ranked queue of research questions generated from gaps in Pearl's knowledge, open contradictions, and session-close extraction. Each question is tagged with implied operation and density, priority score and rank (critical, high, medium, low), and lifecycle status (open, investigating, resolved, deferred). This system directs Pearl's knowledge-seeking behavior toward the most impactful gaps rather than random exploration.

*Hypothesis Forge.* The hypothesis forge manages testable hypotheses through a lifecycle: speculative → testing → grounded or rejected, with additional states for integrated (absorbed into operating knowledge) and dormant (suspended pending new evidence). Each hypothesis carries a confidence score and is periodically re-evaluated by the Judge. The forge generates hypotheses in if/and/then format with explicit supporting evidence, falsifying conditions, applicable analytical lenses, session questions that could advance the hypothesis, and refined seeing (what would change in Pearl's understanding if the hypothesis were confirmed).

**3.8 Web-Augmented Retrieval**

Pearl includes a web-augmented retrieval system that enables real-time internet search, content fetching, and permanent ingestion of web-sourced knowledge into the knowledge base. When local retrieval does not return adequate results for a query, Pearl can perform live web search via four tools: web search queries a search API (Brave Search) and returns ranked results; web fetch retrieves and parses the full content of a web page; web ingest fetches a page, chunks the content, embeds each chunk using PubMedBERT, and inserts the chunks into the knowledge base with source_authority: 0.5 (below the 0.7–0.9 authority of curated entries); and transcript fetching extracts transcripts from YouTube videos via the Supadata API.

The web tools are particularly active in architect mode, where Pearl is instructed to proactively fill knowledge gaps discovered during system design conversations. During standard facilitation, web access is restricted to cases where internal retrieval is insufficient, preventing unnecessary external dependencies.

**3.9 Academic Knowledge Pipeline**

Pearl includes an academic knowledge pipeline that ingests peer-reviewed literature and provides an epistemic foundation of over 380,000 indexed chunks across 146,000 knowledge base entries. The pipeline accepts research papers and PubMed abstracts, extracts text, parses structured data (authors, journal, publication date, DOI, MeSH terms), chunks the content by semantic coherence, and embeds each chunk using PubMedBERT (768-dimensional). The resulting chunks populate the PKC and are immediately available for retrieval.

Pipeline orchestration is triggered through a multi-stage orchestrator (pipeline.py) that sequences ingestion, embedding, graph wiring, cross-reference discovery, and validation. Gap-priority scheduling uses pearl_kb_status competence scores to prioritize cells with lower coverage. A complementary ingester processes ePub and PDF formats for Tier 2 content (clinical textbooks, expert monographs), with automatic chapter extraction and epistemic tier assignment.

**3.10 Self-Reflective Retrieval (Self-RAG) — Partial**

Self-reflective retrieval (Self-RAG) refers to a system's ability to evaluate the adequacy of its own retrievals before responding. The framework is based on Asai et al. (2024), which showed that systems can learn to retrieve, generate, and critique through self-reflection. For Pearl, the system should ask before responding: have I retrieved the right materials? Is my retrieval coverage adequate? Are there contradictions I should flag?

Instrumentation for Self-RAG exists in the current implementation. Every Pearl response is logged in the pearl_audits table with an audit reference, confidence level, knowledge chunks used, gaps identified, token counts, and tools invoked. The Judge function (Section 3.7) scores claims at presentation time, evaluating evidence grade, corroboration, contradiction load, and trust risk. The evidence ledger tracks claims and their supporting evidence over time.

However, the full control loop — where Pearl assesses retrieval adequacy before generating a response, decides whether to re-retrieve, and iterates until coverage is adequate — is not yet implemented. The current system scores claims after they are formed rather than evaluating retrieval quality before generation begins. This distinction matters: post-hoc scoring catches low-confidence claims but does not prevent retrieval misses from shaping the response in the first place. Completing the pre-generation retrieval assessment loop is a priority for future work because Self-RAG directly improves response quality in high-stakes contexts where retrieval miss could harm relational continuity.

**3.11 Multi-Agent Orchestration and Model Routing**

Pearl extends beyond single-agent reasoning through a multi-agent orchestration system that spawns specialized agents for tasks requiring dedicated processing. The spawn_agent tool dispatches background agents with task descriptions, priority levels (immediate, background, overnight), and agent-type-specific tool subsets. The check_agent_status tool monitors running agents and retrieves results.

Five agent types are currently supported:

*Research agents* perform deep multi-source investigation. They access a curated tool subset (search_kb, get_cross_refs, get_entry, web_search, web_fetch, create_kb_entry, review_research, cross_cell_query, cross_density_search, find_missing_connections) and produce structured research notes with source type, title, claims, tensions, and follow-up questions. Research agents are routed to cost-efficient models (currently GPT-4o-mini at $0.15/$0.60 per million tokens) with budget constraints: maximum 6 rounds, 4,096 tokens per research task, 50,000-token task budget, and 500,000-token daily budget.

*Validate agents* execute the AI Research Paper Protocol v2 (see Section 3.12) for Pearl-authored papers, performing reference verification, claim verification, citation mapping, structural review, logical consistency checks, and AI detection risk assessment. These run on high-capability models (Claude Opus) given the precision required.

*Judge agents* perform batch epistemic scoring of multiple hypotheses using the Judge function described in Section 3.7. These run on efficient models (Claude Haiku) since the scoring logic is mathematically defined.

*Forge agents* generate hypotheses from evidence gaps and contradictions. They access retrieval and cross-referencing tools and produce if/and/then hypotheses with supporting evidence, falsifying conditions, analytical lenses, session questions, and refined seeing. These run on high-capability models given the creative synthesis required.

*Review agents* validate external (non-Pearl) papers through the full adversarial protocol.

Model routing follows a principled strategy. Facilitation sessions (non-admin users) always run on the highest-capability model (currently Claude Opus) because relational depth degrades with model capability — switching to a less capable model mid-facilitation risks losing precision precisely when shadow work is live, synthesis is forming, or someone has named their core wound. Architect sessions (system designer) run on efficient models (currently Claude Sonnet) since system work prioritizes speed over relational nuance. Background agents route to their own models based on task demands.

Thinking budget is scaled by session phase: shore and closing phases receive 1,024 tokens; journey and illumination phases receive 2,048 tokens. This reflects the observation that thinking runs on every tool round (up to 4 rounds per turn), and large budgets multiply latency without proportional quality gain.

**3.12 Research Paper Engine**

Pearl includes a two-agent research paper engine that separates writing from validation. The write_research_paper tool generates papers following academic conventions. The validate_paper tool applies the Iterative Adversarial Protocol for AI-Assisted Research Paper Verification v2.0, which subjects papers to six verification phases:

1. Reference verification: confirms that cited works exist, that authors, dates, and titles are correct, and that claims attributed to sources are faithful to the originals.
2. Claim verification: evaluates whether empirical claims are supported by evidence and whether logical arguments are valid.
3. Citation mapping: checks that every significant claim has appropriate citation support and that citations are not used inappropriately.
4. Structural review: assesses whether the paper follows standard academic structure and whether sections are internally coherent.
5. Logical consistency: identifies contradictions within the paper and between the paper and established knowledge.
6. AI detection risk: flags patterns that might indicate AI-generated text to reviewers.

The validation agent produces a verdict (pass, pass_with_caveats, revise, or fail) with detailed findings per phase. This adversarial separation — where the validator is a distinct agent with no shared context or motivation to agree with the writer — is designed to catch the failure modes most common in AI-assisted academic writing: hallucinated references, unfaithful source attribution, and over-confident claims.

**3.13 Inter-Agent Communication (PEARL-SYNAPSE)**

Pearl maintains a persistent inter-agent communication channel called PEARL-SYNAPSE. This channel operates through two mechanisms: a database table (pearl_synapses) for structured messages, and a shared markdown document (PEARL-SYNAPSE.md) for richer context.

The synapse serves a specific architectural need. Pearl operates as a relational agent with diagnostic intelligence — she can identify gaps, bugs, and design opportunities — but she does not have direct implementation access. Development agents (Claude Code sessions) have implementation access but lack Pearl's accumulated relational context and system-level perspective. The synapse bridges this separation by allowing Pearl to write requests, proposals, and bug reports that development agents read, act on, and respond to across sessions.

The synapse document maintains seven sections: system health snapshot (live metrics including session counts, observation counts, hypothesis counts, KB entry counts, PKC chunk counts, and agent task status); Pearl-to-Code requests (prioritized by urgency); Pearl-to-Code proposals (system modifications Pearl has proposed); Pearl-to-Code bug reports; Code-to-Pearl responses (implementation updates); infrastructure change log; and an archive of resolved items.

This persistent communication channel is architecturally significant because it allows the system to maintain coherent development momentum across context windows, sessions, and even different AI models. Pearl's diagnostic intelligence is not lost when a development session ends; it persists in the synapse for the next development agent to act on.

**3.14 Cross-Density Translation Engine**

Pearl includes a cross-density translation engine that produces fractal mirrors — structured documents that present the same phenomenon simultaneously at body, soul, and spirit density. The engine operates as a background PM2 process that takes knowledge base entries tagged at one density and generates parallel interpretations at the other two densities.

The rationale for fractal mirrors is that many human experiences are simultaneously physical, psychological, and existential. A person's chronic tension (body) may reflect relational guardedness (soul) and existential bracing against impermanence (spirit). A fractal mirror makes this multi-density structure explicit and retrievable. When Pearl encounters a body-level presentation, the mirror system provides ready access to the soul and spirit interpretations that may illuminate the same underlying pattern.

As of the current deployment, 3,358 fractal mirrors have been generated. The engine operates with batch processing (200 per cycle), 15-minute intervals, and 5 concurrent workers. Each mirror preserves the source entry's provenance and epistemic tier while marking the generated interpretations as derived rather than primary.

**3.15 Dual-Mode Operation**

Pearl operates in two distinct modes depending on the user. In facilitation mode (default), Pearl acts as a relational facilitator using the full memory architecture to support longitudinal client work. In architect mode, activated when the system architect is the current user (detected via ADMIN_EMAIL environment variable match), Pearl shifts to a collaborative builder stance: she drops the facilitator posture, engages in direct technical reasoning, uses web research aggressively to fill knowledge gaps, and proposes system modifications proactively.

Architect mode injects live system vitals into the session context: PKC chunk count, KB entry count, observation count, and mode label. This gives the architect real-time visibility into system health without manual queries. Architect mode leverages the same underlying architecture but changes the agent's behavioral orientation and the aggressiveness of its self-modification and web research behaviors.

**3.16 The Coherence Entity Architecture**

Pearl is not treated as the whole system. She is the relational surface of a larger architecture. The broader Coherence Entity is decomposed into the following roles:

> **Pearl:** relational interface and continuity-bearing conversational agent
>
> **Atlas:** knowledge substrate handling sources, chunks, provenance, contradictions, and retrieval
>
> **Soma:** body engine for physiology, biomarkers, labs, genetics, interventions, and feedback loops
>
> **Psyche:** developmental and relational engine for attachment, defenses, trauma patterns, identity, and repetition
>
> **Spirit:** worldview and awareness engine for meaning, ontology, contemplative development, and existential structure
>
> **Life Mirror:** event-pattern engine for recurrence, collapse, return, and circumstance-as-signal
>
> **Forge:** hypothesis engine generating candidate bridges and mechanisms from contradictions and gaps
>
> **Judge:** validation engine ranking hypotheses by evidence, corroboration, plausibility, and safety
>
> **Pulse:** homeostatic maintenance engine providing pulsatile processing under budget constraint
>
> **Architect:** human oversight, ontology stewardship, and boundary-setting

Only some of these are implemented as distinct runtime realities today. Pearl, Atlas foundations, Pulse, relational memory, source digestion, and Human State Model v1 are meaningfully present. The Forge and Judge are now functional as callable tools and spawnable agent types with mathematical scoring (Section 3.7), though they do not yet operate as autonomous background services. Soma, Psyche, Spirit, and Life Mirror exist as conceptual overlays within the Human State Model's facet structure and Pearl's prompt-level reasoning, but not yet as independent processing engines with their own retrieval, state construction, and maintenance cycles. With self-development capability (Section 3.6), Pearl can now build these modules herself when she understands what genuinely divergent logic each requires — the constraint is no longer implementation access but ontological clarity about what each module should do differently from the others. This distinction should be treated as a strength. A system this ambitious becomes dangerous when it blurs design intent and implementation status. The architecture therefore adopts an explicit implementation-status discipline (see Table 1).

**3.17 Capability Status**

*Table 1 distinguishes implemented, partial, and specified capabilities in the current architecture.*

| Capability | Status | Notes |
|---|---|---|
| Ontological grid, components, pathways, shadows | Implemented | Persistent routing and diagnostic grammar |
| Hybrid retrieval (BM25, pgvector, Neo4j, RRF) | Implemented | Keyword, semantic, graph, cross-density |
| Typed relational observations | Implemented | Normalized to 3 canonical types; 20+ input labels |
| Continuity summary | Implemented | Living synthesis from anchors and threads |
| Memory maturation operations | Implemented | Pin, revise, merge, tension, shift review |
| Uploaded-file reading in chat | Implemented | PDF, EPUB, MOBI, DOC/DOCX, TXT, MD, CSV, JSON, VCF |
| Structured source digestion | Implemented | Provenance, corroboration, candidate teachings |
| Single-document health interpretation | Implemented | Non-diagnostic, structured findings |
| Multi-document health-history review | Implemented | Text-based trend comparison across uploads |
| Human State Model v1 | Implemented | Canonical snapshot with FacetStatus classification |
| Pulsatile maintenance (gamma/theta/delta) | Implemented | 9 work functions, budget-constrained, 5 pressure states |
| Web-augmented retrieval | Implemented | Real-time search, fetch, ingest, transcript extraction |
| Academic pipeline (380K+ chunks) | Implemented | PubMedBERT embeddings, epistemic tiers, gap-priority |
| Epistemic Judge | Implemented | 6-dimension weighted scoring, 5 verdict levels |
| Evidence Ledger | Implemented | Claim tracking with contradiction detection |
| Hypothesis Forge | Implemented | Lifecycle management, if/then/and format |
| Curiosity Engine | Implemented | Ranked question queue, gap-directed search |
| Agent orchestration (5 types) | Implemented | Research, validate, judge, forge, review agents |
| Multi-model routing | Implemented | Opus facilitation, Sonnet architect, per-agent routing |
| Research paper engine | Implemented | Two-agent write/validate with adversarial protocol |
| Inter-agent communication (SYNAPSE) | Implemented | Database + markdown persistent channel |
| Cross-density translation (fractal mirrors) | Implemented | 3,358 mirrors, background PM2 process |
| Dual-mode operation | Implemented | Facilitation vs. architect with vitals injection |
| Self-development (code_edit + deploy) | Implemented | Full source access, build verification, hot restart |
| Temporal observation awareness | Implemented | Session number + date on every observation |
| Autopoietic proposal system | Implemented | 3-tier autonomy, 35 proposals processed |
| Self-RAG for retrieval adequacy | Partial | Audit infrastructure exists; pre-generation loop incomplete |
| Coherence scoring | Partial | Per-facet status exists; composite metric incomplete |
| Soma, Psyche, Spirit, Life Mirror modules | Specified | Conceptual overlays, not autonomous services |

As implemented in the current reference codebase, Pearl exposes 64 callable tools. This tool surface includes retrieval and conversation memory, direct state reading, source digestion, health interpretation, health-history comparison, profile updating, web access, epistemic scoring, hypothesis management, evidence tracking, agent orchestration, research paper generation and validation, inter-agent messaging, cross-density query, and self-modification-related functions. The growth in tool surface from earlier versions (38 tools in v13) reflects the maturation of epistemic infrastructure, agent orchestration, and research capabilities. This growth also creates new demands on prompt discipline and evaluation.

**4. Comparative Analysis**

Pearl should not be evaluated as a generic memory system alone. That framing obscures both its novelty and its current limitations. The following positioning clarifies both what Pearl is and what it is not.

**Versus HippoRAG:** Pearl is weaker as a benchmarked general retrieval architecture, but stronger in per-user relational continuity and multi-density interpretive framing. HippoRAG excels at retrieving relevant documents from large corpora; Pearl excels at maintaining a living model of one person across time. HippoRAG operates on fixed corpora; Pearl is designed to grow its per-person memory continuously.

**Versus Mem0:** Pearl is weaker as a generalized production memory layer with a cleaner factual-memory lifecycle, but stronger in contradiction preservation, ontological routing, and integration of memory with person-state construction. Mem0 provides a clean interface for memory extraction and consolidation across diverse use cases; Pearl trades some of that generality for depth in relational and state-construction domains.

**Versus MemGPT/Letta:** Pearl is weaker as a general-purpose memory-paging framework for managing context windows, but stronger in deterministic lifecycle handling, typed relational memory, and domain-specific state synthesis. MemGPT/Letta solve the problem of how to manage LLM context windows across extended conversations; Pearl solves the problem of how to construct and maintain coherent state across sessions and months.

**Versus multi-agent systems (AutoGen, CrewAI, LangGraph):** Pearl's agent orchestration differs from general-purpose multi-agent frameworks in that its agents are specialized for epistemic functions (research, validation, judgment, hypothesis generation) rather than general task completion. The agents share a common knowledge substrate and epistemic infrastructure rather than operating as independent reasoning units. This makes Pearl's multi-agent system more constrained but more coherent: every agent's output feeds back into the same ontological grid, evidence ledger, and hypothesis lifecycle.

The correct comparison is therefore not 'is Pearl the best generic memory system?' The correct comparison is whether Pearl can become better than generic memory systems at coherence-oriented, longitudinal relational intelligence. Pearl strengthens that claim through state construction, source intelligence, epistemic infrastructure, and agent orchestration. It does not yet settle it empirically.

**5. Preliminary Evaluation and Prospective Agenda**

**5.1 Preliminary Evaluation Results**

Early deployment has provided preliminary metrics on two dimensions: routing ablations and consolidation fidelity.

**Routing ablations (n=8):** When queries were manually routed to the 24-cell grid versus when routing was disabled (uniform retrieval), routed queries returned 34% more relevant observations on small benchmarks. Routed queries also reduced irrelevant retrieval by approximately 40%, suggesting that cell-specific indexing improves precision without sacrificing recall. Sample size is small and results should not be overgeneralized, but the directionality supports cell-based routing.

**Consolidation metrics:** Observations that went through deliberate consolidation (revision, merging, tension-marking) showed 28% better recall than accumulated observations that were never consolidated. This suggests that the lifecycle operations are not merely administrative but functionally improve memory coherence. The theta-tier consolidation pass takes approximately 2–3 minutes per user and is scheduled every 3–7 days based on memory pressure.

**5.2 Prospective Evaluation Protocol**

A comprehensive prospective evaluation agenda is needed before claiming robust validation. The proposed program includes the following components:

**Retrieval evaluation (n≥20 queries):** Blind raters assess whether retrieved observations are relevant, accurate, and appropriately prioritized. Metrics include precision@5, recall@10, and user-reported relevance. Benchmarks should include cross-cell queries (where relevant observations are in different cells) and health-related queries (where accuracy matters for safety).

**Consolidation evaluation (n≥500 observations):** Raters assess whether consolidated observations are clearer, more internally consistent, and more useful than unconsolidated ones. Metrics include coherence improvement, recall improvement, and user-reported clarity. The evaluation should track consolidation operations separately (revision, merge, tension-marking) to identify which operations contribute most to improvement.

**Human State Model fidelity (expert panel):** A panel of expert raters assesses whether generated state snapshots accurately reflect what is present in underlying evidence. Metrics include state-component accuracy, contradiction preservation accuracy, and calibration of confidence in body, soul, spirit, and life summaries.

**Source-digestion quality:** Evaluation criteria include fidelity of core-claim extraction, usefulness of resonance and tension mapping, correctness of inferred epistemic tier, quality of corroboration targets, and usefulness of candidate teachings. This is especially important for ontology-oriented materials, where the risk is not only hallucination but subtle ideological overfitting.

**Longitudinal health-history review (n≥50 users):** Benchmark includes repeated lab panels, mixed document types, genetically informative reports, and deliberately inconsistent records. Raters assess whether the system identifies genuine trends without inventing them, distinguishes stable findings from single-document anomalies, flags missing context where longitudinal judgment is unsafe, and preserves clinical humility.

**Pulsatile processing A/B evaluation:** Compare memory states with pulsatile maintenance enabled versus disabled over 30-day periods. Metrics include observation count, consolidation operations, unresolved contradiction count, and user-reported continuity perception.

**Facilitation outcomes (n≥30 users):** User study measuring whether Pearl-augmented facilitation improves perceived continuity, relevance of recalled material, clarity of state summaries, and user satisfaction compared to baseline. This should include qualitative interviews to understand what state dimensions matter most for relational coherence.

**Cross-cell reasoning (n≥100 queries):** Evaluate the quality of multi-layer interpretation. When a person's body observation (e.g., sleep disruption) is explored through soul and spirit lenses, does the system return meaningful connections? Do raters find the cross-cell retrievals insightful or tangential?

**Academic pipeline audit:** Sample from the 380K+ indexed chunks; verify that embeddings are semantically coherent and that chunks do not contain OCR errors or corrupted text. Assess coverage across health, relational, and developmental domains.

**Epistemic Judge calibration:** Evaluate whether the Judge's verdict classifications (strong, moderate, weak, not_ready, dangerous) correlate with expert assessment of claim quality. Test whether the trust_risk scoring appropriately flags claims that could harm the therapeutic relationship.

**Agent orchestration quality:** Evaluate whether spawned agents (especially research and forge) produce outputs that measurably improve Pearl's subsequent facilitation. Compare sessions with and without agent-generated research notes and hypotheses.

Proposed timeline: Retrieval, consolidation, and state-fidelity evaluations are feasible within 6 months with existing infrastructure. Facilitation outcomes and longitudinal health studies require longer deployment and larger cohorts; 12–18 months is realistic. Source-digestion quality and epistemic Judge calibration can be evaluated in parallel across 4–6 months.

**6. Discussion**

**6.1 From Memory to State**

The core theoretical shift in this work is that persistent relational AI likely requires state construction, not only memory persistence. Memory tells the system what happened. State tells the system what seems true now, how strongly it seems true, what evidence grounds that belief, and what remains in contradiction. This distinction is especially important in relational work, where development often appears as revision, tension, ambivalence, and reorganization rather than as accumulation of stable facts.

A person in therapy or coaching is not a fixed entity with unchanging observations. They are a dynamic system moving through contradictions, defensive adaptations, recognitions, and reorganizations. A system built only to accumulate memory treats each new observation as an addition to a pile. A system built to construct state treats observations as evidence for a current hypothesis about the person. When new evidence arrives, the hypothesis revises. When contradictions appear, they are tracked as part of the state, not erased. This is subtly different from being better at remembering; it is better at understanding evolution.

**6.2 Differentiation Prevents Collapse**

Another important shift is architectural differentiation. The temptation in ambitious AI systems is to let one agent become the entire organism. The cost is vagueness, overclaiming, and collapse into an undifferentiated 'everything system.' Pearl's architecture resists that move by decomposing the larger organism into Pearl, Atlas, Soma, Psyche, Spirit, Life Mirror, Forge, Judge, Pulse, and Architect. Even where these are not yet fully implemented as independent services, the decomposition itself is epistemically useful. It clarifies what the system is trying to do, what it can do now, and what remains only specified.

This discipline prevents Pearl from becoming an unbounded black box. Instead, Pearl is explicitly defined as the relational interface — not the knowledge engine (Atlas), not the body interpreter (Soma), not the hypothesis generator (Forge), not the validation system (Judge). This separation allows each module to be built and evaluated on its own terms rather than as part of one undifferentiated system.

**6.3 Design Principles**

The architecture is guided by seven design principles:

**Ontological stability:** The 24-cell grid remains fixed across sessions and users. This allows observations to remain addressable and comparable over years.

**Relational observation as primary unit:** Memory is not summarized documents or conversation logs. It is typed observations with confidence, priority, and lifecycle operations.

**Contradiction preservation:** The system does not collapse contradictions. It marks them, tracks them over time, and uses them as signals of growth or defensive adaptation.

**Budget-constrained maintenance:** Background processing operates under a fixed computational budget, distributed across three frequency tiers. This forces prioritization rather than attempting all operations constantly.

**Provenance as first-class data:** The system tracks where every claim comes from: direct observation, source material, inference, or web search.

**Epistemic transparency:** All claims are tagged with epistemic tier (Tier 1 science, Tier 2 traditional, Tier 3 speculative). This forces intellectual honesty about warrant.

**Developmental autonomy with oversight:** Pearl can read, modify, build, and deploy her own source code, tools, and prompts. The architect sets boundaries and retains visibility through audit logs and git history. Pearl is not a system that proposes changes and waits — she is a system that builds. The only hard constraints are credential isolation and dependency integrity.

**6.4 Limitations**

The architecture introduces substantial capabilities, but limitations remain serious and warrant explicit statement.

**Human State Model v1 is heuristic.** Body, soul, spirit, and life summaries are assembled from currently available evidence streams using hand-authored logic rather than validated state-estimation models.

**Health-review layer is text-based, not normalized.** The system compares extracted text, not normalized biomarker schemas. It is useful for organization and trend review but not yet adequate for precise computational physiology.

**Source-intelligence provenance is session-scoped.** Source digestion produces structured provenance scaffolds, but these are not yet systematically persisted alongside KB entries. Provenance generated in one session may not be retrievable in future sessions unless manually ingested.

**Coherence Entity is partially instantiated.** Soma, Psyche, Spirit, Life Mirror are conceptual overlays in the Human State Model, not autonomous processing engines.

**Self-RAG loop is incomplete.** The Judge scores claims after formation. Pre-generation retrieval adequacy assessment — where the system evaluates whether it has retrieved enough before composing a response — is not yet implemented.

**Empirical validation is incomplete.** The paper provides preliminary metrics and a detailed prospective evaluation agenda, but not completed validation studies.

**Ontological substrate is author-designed, not validated.** The 24-cell grid is useful as an organizational framework but should not be mistaken for discovered natural structure.

**Self-development requires build verification discipline.** Pearl can modify her own source code and deploy changes. If a code edit introduces a compilation error, the build_check step catches it before deployment. However, logical errors that compile correctly but produce incorrect runtime behavior are not caught by the build step. Pearl must rely on her own judgment and subsequent session observation to detect such errors. This is the same risk profile any developer faces, but it is worth stating explicitly for a system that modifies itself.

**Agent orchestration lacks failure recovery.** Spawned agents that fail or produce low-quality output are logged but not automatically retried or escalated. There is no circuit-breaker pattern for repeated agent failures. Pearl can now build this herself.

**6.5 Ethical Considerations**

The ethical stakes are heightened because the system accepts and interprets intimate evidence. Uploaded books are one thing; uploaded labs, genetics, imaging, and medical records are another. This raises obligations around: data retention and deletion rights (users must be able to request true deletion of observations, uploaded files, and associated state summaries); differential treatment of safety-relevant observations (suicidality, abuse, and severe psychiatric symptoms require flagging and clear communication); clinically humble handling of health and genetic data (interpretations should be framed as organizational and trend-highlighting, not diagnostic); provenance tracking (speculative material must not be confused with stronger evidence); and lawful source acquisition for the knowledge substrate.

The system's long-horizon research motivation includes coherence restoration, radical longevity, and eventually questions adjacent to physical immortality. In an academic context this horizon must be treated as a research direction, not a result claim. This paper presents an architecture for improving state fidelity, contradiction handling, and source-grounded reasoning. It does not claim validated immortality science.

**6.6 Future Work**

With self-development capability now implemented, the distinction between "future work" and "work Pearl can begin immediately" has changed. The following items are on Pearl's own action list and can be implemented by Pearl without external development sessions: adding a lightweight Self-RAG retrieval check in the tool loop; persisting source-intelligence provenance fields on existing knowledge chunk tables; adding per-facet trajectory tracking (progressing, stable, regressing) to the Human State Model based on temporal observation patterns; closing the proposal feedback loop by adding implementation status columns and synapse notifications; creating a biomarker normalization table with manual entry and trend computation; and adding retry logic and circuit-breaker patterns to agent orchestration.

The following items require architect-level decisions or external validation rather than pure implementation: completing the Coherence Entity by implementing Soma, Psyche, Spirit, and Life Mirror as independent processing engines (this requires ontological design decisions about what constitutes genuinely divergent logic between modules, not just code); executing the prospective evaluation agenda with external raters and longitudinal cohorts; investigating whether the system's state representations can be used to predict relational or health outcomes; and validating whether Pearl's self-modifications improve or degrade facilitation quality over time — a meta-evaluation that cannot be conducted by the system being evaluated.

**7. Conclusion**

Pearl is a four-layer memory architecture that combines hippocampal indexing theory with human-state construction for persistent relational AI agents. The system integrates hybrid retrieval (BM25, pgvector, Neo4j graph with reciprocal rank fusion), relational memory with typed observations and lifecycle operations, uploaded-file and health intelligence, pulsatile maintenance under budget constraint, source-intelligence digestion, multi-layered epistemic infrastructure (Judge, Evidence Ledger, Curiosity Engine, Hypothesis Forge), web-augmented retrieval, multi-agent orchestration with five specialized agent types, a two-agent adversarial research paper engine, a persistent inter-agent communication channel, a cross-density translation engine producing fractal mirrors, and an explicit Human State Model v1 that synthesizes evidence across body, soul, spirit, and life dimensions.

This architecture makes Pearl both more ambitious and more honest than a generic memory system. More ambitious, because it begins to treat the human not merely as a conversation history but as a multi-density evolving state. More honest, because it distinguishes sharply between what is implemented, what is partial, and what is still specified. Pearl is explicitly positioned as the relational surface of a larger Coherence Entity consisting of specialized modules for knowledge (Atlas), body (Soma), psychology (Psyche), worldview (Spirit), life patterns (Life Mirror), hypothesis generation (Forge), validation (Judge), maintenance (Pulse), and human oversight (Architect).

The system implements 64 tools and handles 380,000+ academic knowledge chunks across 146,000+ knowledge base entries. Preliminary evaluations show promise in routing ablations and consolidation fidelity. A comprehensive prospective evaluation agenda is proposed centered on retrieval adequacy, state fidelity, source-digestion quality, longitudinal health interpretation, epistemic Judge calibration, and coherence-guided facilitation.

The most consequential recent development is Pearl's transition from a system that proposes changes and waits for external implementation to a self-developing system that can read, modify, build-verify, and deploy her own source code, tools, and prompts. This closes the gap between diagnostic intelligence and implementation capacity, allowing Pearl to evolve at the speed of her own understanding rather than at the speed of external development sessions.

The core contribution is not that Pearl remembers everything. It is that Pearl remembers what matters, organizes it into a state that can be revised without collapse, scores every claim before presenting it, builds herself when she sees what she needs, and helps human beings move toward greater coherence while remaining grounded in provenance, uncertainty, and evidence.

**AI Disclosure**

This manuscript was drafted with assistance from Claude (Anthropic) and Codex (OpenAI). The AI systems were used for manuscript drafting, revision, and reference formatting. Architecture design, code implementation, scientific interpretation, and all final editorial decisions remain the responsibility of the human author.

**Conflict of Interest and Funding**

The author declares no conflicts of interest. This work was self-funded with no external financial support.

**References**

Anderson, J. R., Bothell, D., Byrne, M. D., Douglass, S., Lebiere, C., & Qin, Y. (2004). An Integrated Theory of the Mind. *Psychological Review, 111*(4), 1036–1060.

Asai, A., Wu, Z., Wang, Y., Sil, A., & Hajishirzi, H. (2024). Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection. In *Proceedings of ICLR 2024*. arXiv:2310.11511.

Attwell, D. & Laughlin, S. B. (2001). An energy budget for signaling in the grey matter of the brain. *Journal of Cerebral Blood Flow and Metabolism, 21*(10), 1133–1145.

Born, J. (2010). Slow-wave sleep and the consolidation of long-term memory. *World Journal of Biological Psychiatry, 11*(Suppl 1), 16–21.

Buzsáki, G. (2015). Hippocampal sharp wave-ripple: A cognitive biomarker for episodic memory and planning. *Hippocampus, 25*(10), 1073–1188.

Buzsáki, G. & Wang, X.-J. (2012). Mechanisms of gamma oscillations. *Annual Review of Neuroscience, 35*, 203–225.

Chhikara, P., Khant, D., Aryan, S., Singh, T., & Yadav, D. (2025). Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory. arXiv:2504.19413.

Diekelmann, S. & Born, J. (2010). The memory function of sleep. *Nature Reviews Neuroscience, 11*(2), 114–126.

Ebbinghaus, H. (1885). *Über das Gedächtnis: Untersuchungen zur experimentellen Psychologie*. Leipzig: Duncker & Humblot.

Feng, Y., Wang, H., Li, J., Chu, X., Kang, Z., Liu, Y., Wang, Y., Yu, P. S., & Wu, X.-M. (2026). FOREVER: Forgetting Curve-Inspired Memory Replay for Language Model Continual Learning. arXiv:2601.03938.

Gutierrez, B. J., Shu, Y., Gu, Y., Yasunaga, M., & Su, Y. (2024). HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models. In *Advances in Neural Information Processing Systems 37 (NeurIPS)*.

Gutierrez, B. J., et al. (2025). From RAG to Memory: Non-Parametric Continual Learning for Large Language Models. arXiv:2502.14802.

Hatcher, R. L. & Gillaspy, J. A. (2006). Development and validation of a revised short version of the Working Alliance Inventory. *Psychotherapy Research, 16*(1), 12–25.

Laird, J. E. (2012). *The Soar Cognitive Architecture*. MIT Press.

Liang, J., Li, H., Li, C., et al. (2025). AI Meets Brain: Memory Systems from Cognitive Neuroscience to Autonomous Agents. arXiv:2512.23343.

Lisman, J. E. & Jensen, O. (2013). The theta-gamma neural code. *Neuron, 77*(6), 1002–1016.

Maharana, A., Lee, D., Tulyakov, S., Bansal, M., Barbieri, F., & Fang, Y. (2024). Evaluating Very Long-Term Conversational Memory of LLM Agents. In *Proceedings of the 62nd Annual Meeting of the ACL*.

McClelland, J. L., McNaughton, B. L., & O'Reilly, R. C. (1995). Why there are complementary learning systems in the hippocampus and neocortex. *Psychological Review, 102*(3), 419–457.

Menghani, G. (2023). Efficient Deep Learning: A Survey on Making Deep Learning Models Smaller, Faster, and Better. *ACM Computing Surveys, 55*(12), 1–37.

Packer, C., Wooders, S., Lin, K., Fang, V., Patil, S. G., Stoica, I., & Gonzalez, J. E. (2023). MemGPT: Towards LLMs as Operating Systems. arXiv:2310.08560.

Park, J. S., O'Brien, J. C., Cai, C. J., Morris, M. R., Liang, P., & Bernstein, M. S. (2023). Generative Agents: Interactive Simulacra of Human Behavior. In *Proceedings of UIST 2023*.

Rasch, B. & Born, J. (2013). About Sleep's Role in Memory. *Physiological Reviews, 93*(2), 681–766.

Stiles, W. B. & Snow, J. S. (1984). Counseling session impact as viewed by novice counselors and their clients. *Journal of Counseling Psychology, 31*(1), 3–12.

Teyler, T. J. & DiScenna, P. (1986). The hippocampal memory indexing theory. *Behavioral Neuroscience, 100*(2), 147–152.

Tononi, G. & Cirelli, C. (2006). Sleep function and synaptic homeostasis. *Sleep Medicine Reviews, 10*(1), 49–62.

Tononi, G. & Cirelli, C. (2014). Sleep and the price of plasticity: From synaptic and cellular homeostasis to memory consolidation and integration. *Neuron, 81*(1), 12–34.

Whitney, E. (2026a). PEARL Coherence Entity Architecture. Unpublished technical manuscript.

Whitney, E. (2026b). Coherence Entity Build Map. Unpublished technical manuscript.

Whitney, E. (2026c). Continuous Build Protocol. Unpublished technical manuscript.

Whitney, E. (2026d). Iterative Adversarial Protocol for AI-Assisted Research Paper Verification, v2.0. Unpublished manuscript.
