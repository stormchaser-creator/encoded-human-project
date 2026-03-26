# Light Machine Translation Key — Implementation Plan for Claude Code

## Document Purpose

This plan tells a Claude Code agent exactly how to wire the Light Machine Translation Key into Pearl's infrastructure so that when a client uploads lab results, Pearl can produce a comprehensive Body Codx operational analysis of their light machine.

---

## What Exists Now

### Translation Key Documents (KB Source Material)
- **13 section files** in `outputs/papers/light-machine/SECTION-01` through `SECTION-13`
- **196 total entries** covering 164 unique lab tests + 14 derived ratios + 12 cross-panel patterns + 6 cross-operation panels
- **~12,400 lines** of structured markdown, each entry following a consistent template
- **Body_Codx_Lab_DNA_Database.xlsx** — the master spreadsheet with 164 tests across 17 sheets (provider, cost, operation mapping, availability)

### Pearl's Current Infrastructure
- **KB system:** PostgreSQL (`kb_entries` table) + ChromaDB (vector embeddings) + Neo4j (graph relationships)
- **Ingest pipeline:** `app/scripts/pipeline.py` (full) or `app/scripts/ingest-workstations.ts` (quick)
- **Embedding model:** PubMedBERT
- **Pearl's tools:** 48 tools defined in `tool-definitions.ts`
- **Existing operations knowledge:** Body Codx operations are already in KB at body density, but lack this level of lab-specific clinical translation

### What Pearl Can Already Do
- Receive text input in chat
- Search KB via hybrid GraphRAG (BM25 + vector + graph)
- Cross-reference entries via `kb_cross_refs` table
- Generate hypotheses via debate-evolve engine
- Create KB entries via `create_kb_entry` tool
- Track session observations via `pearl_observations`

### What Pearl Cannot Yet Do
- Parse structured lab data from uploaded files (PDF, CSV, image)
- Map lab values to Translation Key entries programmatically
- Calculate derived ratios automatically
- Generate a multi-operation "Light Machine Reading" as a structured output
- Compare current labs to prior labs for trajectory analysis

---

## Implementation Plan — Three Phases

### Phase 1: KB Ingestion (Translation Key → Pearl's Knowledge Base)

**Objective:** Get all 196 Translation Key entries into Pearl's KB with proper chunking, embedding, encoding traces, and cross-references.

**Step 1.1 — Prepare workstation entries**

Create a new workstation file or set of files for the Translation Key content. The entries should be structured so the ingest pipeline can process them correctly.

Option A (recommended): Create one workstation markdown file per section (13 files) in `app/data/workstations/light-machine-translation-key/`. Each file follows existing workstation format conventions.

Option B: Create a single large workstation file. Less preferred — chunking may split entries at wrong boundaries.

**File format per entry:**
```markdown
# [Test Name] — Light Machine Translation Key

## Metadata
- Body Codx Operation: [operation]
- Category: Light Machine Translation Key
- Density: body
- Tags: lab-test, [operation-name], translation-key

## Content
[Full entry content from the section file]
```

**Step 1.2 — Configure chunking**

The ingest pipeline must chunk at entry boundaries (each `---` separator), NOT at arbitrary token counts. Each Translation Key entry is 400-600 words — well within a single chunk.

Modify or configure the ingest script to recognize `---` as chunk boundaries for these files. If the pipeline already uses markdown headers for chunking, the `## [Test Name]` headers should work.

**Step 1.3 — Run ingest pipeline**

```bash
# From project root
cd app && npx tsx src/scripts/ingest-workstations.ts
```

Verify:
```sql
SELECT COUNT(*) FROM kb_entries WHERE source LIKE '%translation-key%';
-- Should return ~196 entries
```

**Step 1.4 — Wire encoding traces**

Each Translation Key entry maps to the body density. Run encoding trace wiring:

```bash
cd /path/to/project && source .venv/bin/activate && python app/scripts/wire-encoding-traces.py
```

**Step 1.5 — Wire cross-references**

Translation Key entries should cross-reference:
- Each other (Pattern Recognition sections name related tests)
- Existing Body Codx operation entries in KB
- Supplement profiles (153 enriched profiles already in KB)
- Shadow entries (if the lab pattern reveals a shadow expression)

```bash
python app/scripts/wire-crossrefs.py
```

**Step 1.6 — Verify ingestion**

```sql
-- Check entries exist
SELECT COUNT(*) FROM kb_entries WHERE source LIKE '%translation-key%';

-- Check chunks
SELECT COUNT(*) FROM kb_chunks WHERE entry_id IN (SELECT id FROM kb_entries WHERE source LIKE '%translation-key%');

-- Check cross-references
SELECT COUNT(*) FROM kb_cross_refs WHERE source_id IN (SELECT id FROM kb_entries WHERE source LIKE '%translation-key%');

-- Check encoding traces
SELECT COUNT(*) FROM kb_encoding_traces WHERE entry_id IN (SELECT id FROM kb_entries WHERE source LIKE '%translation-key%');
```

---

### Phase 2: Lab Upload & Parsing Tool

**Objective:** Give Pearl a tool that accepts uploaded lab results (PDF, CSV, text, image) and extracts structured lab values.

**Step 2.1 — Create `parse_lab_results` tool**

Add to `tool-definitions.ts`:

```typescript
{
  name: "parse_lab_results",
  description: "Parse uploaded lab results into structured data. Accepts PDF, CSV, image (photo of lab report), or pasted text. Returns an array of {test_name, value, unit, reference_range, flag} objects.",
  input_schema: {
    type: "object",
    properties: {
      content: {
        type: "string",
        description: "Raw text content of lab results (pasted or extracted from file)"
      },
      file_path: {
        type: "string",
        description: "Path to uploaded lab file (PDF, CSV, image)"
      },
      format: {
        type: "string",
        enum: ["text", "pdf", "csv", "image"],
        description: "Format of the input"
      }
    },
    required: ["format"]
  }
}
```

**Step 2.2 — Implement parsing logic**

Location: `app/src/lib/tools/parse-lab-results.ts`

The parser should:
1. Extract text from the input (OCR for images, PDF extraction for PDFs, direct for text/CSV)
2. Identify test names using fuzzy matching against the master test list (from the spreadsheet)
3. Extract numerical values and units
4. Extract reference ranges if provided
5. Flag abnormal values (H/L flags or outside reference range)
6. Return structured JSON array

**Fuzzy matching strategy:**
- Maintain a lookup table of test name variants (e.g., "CBC" → "Complete Blood Count (CBC) w/ Differential", "HgbA1c" → "Hemoglobin A1c", "TSH" → "TSH")
- Use the `Test Name` column from the spreadsheet as canonical names
- Include common abbreviations and alternate lab report names
- Score match confidence (exact, high, medium, low)

**Step 2.3 — Create `calculate_derived_ratios` tool**

Add to `tool-definitions.ts`:

```typescript
{
  name: "calculate_derived_ratios",
  description: "Calculate derived ratios from parsed lab values. Returns HOMA-IR, TG/HDL, NLR, PLR, FIB-4, eGFR, Free T%, T3/T4, rT3/FT3, and other ratios where component values are available.",
  input_schema: {
    type: "object",
    properties: {
      lab_values: {
        type: "array",
        items: {
          type: "object",
          properties: {
            test_name: { type: "string" },
            value: { type: "number" },
            unit: { type: "string" }
          }
        },
        description: "Parsed lab values from parse_lab_results"
      },
      client_age: { type: "number", description: "Client age (needed for FIB-4)" },
      client_sex: { type: "string", enum: ["male", "female"], description: "Client sex (needed for eGFR, testosterone %)" }
    },
    required: ["lab_values"]
  }
}
```

**Implementation:** `app/src/lib/tools/calculate-derived-ratios.ts`

Formulas:
- HOMA-IR = (fasting glucose mg/dL × fasting insulin µIU/mL) / 405
- TG/HDL = triglycerides / HDL-C
- TC/HDL = total cholesterol / HDL-C
- LDL/HDL = LDL-C / HDL-C
- NLR = absolute neutrophils / absolute lymphocytes
- PLR = platelets / absolute lymphocytes
- A/G = albumin / (total protein - albumin)
- BUN/Cr = BUN / creatinine
- FIB-4 = (age × AST) / (platelets × √ALT)
- eGFR = CKD-EPI formula (creatinine, age, sex)
- Free T% = (free testosterone / total testosterone) × 100
- T3/T4 = free T3 / free T4
- rT3/FT3 = reverse T3 / free T3

Only calculate ratios where both component values are present. Return calculated ratios with interpretation notes.

---

### Phase 3: Light Machine Reading Generator

**Objective:** Pearl uses the parsed labs + derived ratios + Translation Key KB entries to generate a comprehensive multi-operation analysis.

**Step 3.1 — Create `generate_light_machine_reading` tool**

Add to `tool-definitions.ts`:

```typescript
{
  name: "generate_light_machine_reading",
  description: "Generate a comprehensive Light Machine Reading from parsed lab results. Pulls Translation Key entries from KB, maps values to operations, identifies cross-panel patterns, and produces a structured body-density analysis of the client's light machine.",
  input_schema: {
    type: "object",
    properties: {
      parsed_labs: {
        type: "array",
        description: "Output from parse_lab_results"
      },
      derived_ratios: {
        type: "array",
        description: "Output from calculate_derived_ratios"
      },
      client_id: {
        type: "string",
        description: "Client ID for session context"
      },
      prior_labs: {
        type: "array",
        description: "Optional: prior lab results for trajectory comparison"
      }
    },
    required: ["parsed_labs"]
  }
}
```

**Step 3.2 — Implementation logic**

Location: `app/src/lib/tools/generate-light-machine-reading.ts`

The tool follows this sequence:

1. **Map each lab value to its Body Codx operation** using the spreadsheet mapping (or a lookup table derived from it)

2. **Pull Translation Key entries from KB** for each identified test:
   ```typescript
   // For each parsed lab value
   const kbEntry = await searchKB({
     query: `${testName} translation key`,
     filters: { source: 'translation-key' },
     limit: 1
   });
   ```

3. **Group results by operation:**
   ```
   Reception: [Vitamin D: 28, B12: 450, Ferritin: 35, ...]
   Transduction: [RBC Mg: 4.8, B6: 12, ...]
   Conduction: [LDL-P: 1200, ApoB: 95, ...]
   Regulation: [TSH: 2.1, HbA1c: 5.4, Fasting Insulin: 8, ...]
   Synthesis: [Total T: 520, Free T: 12, DHEA-S: 280, ...]
   Defense: [hs-CRP: 1.2, WBC: 6.5, NLR: 1.8, ...]
   Restoration: [Telomere: 7.2kb, ...]
   Elimination: [GFR: 92, Uric Acid: 5.8, GGT: 28, ...]
   ```

4. **Score each operation** (0-100) based on how many markers are optimal vs. concerning:
   - All markers in functional optimal = 90-100
   - Most markers optimal, 1-2 borderline = 70-89
   - Mixed results = 50-69
   - Multiple concerning markers = 30-49
   - Critical findings = 0-29

5. **Detect cross-panel patterns** by checking the 12 pattern definitions:
   - Metabolic Syndrome: check TG/HDL, HOMA-IR, fasting glucose, waist (if available), HDL
   - Inflammatory Burden: check hs-CRP, IL-6, ESR, NLR, fibrinogen
   - Thyroid Conversion: check TSH, FT3, FT4, rT3, T3/T4 ratio, rT3/FT3 ratio
   - etc.

6. **Generate the reading** as structured markdown with:
   - **Executive Summary** (2-3 sentences: overall machine status)
   - **Operation-by-Operation Analysis** (each operation gets a section with score, key findings, what it means)
   - **Cross-Panel Patterns Detected** (which patterns triggered, what they mean together)
   - **Priority Interventions** (ranked by impact, referencing Translation Key intervention levers)
   - **What to Test Next** (gaps in current labs that would complete the picture)
   - **Trajectory** (if prior labs available: improving, stable, declining per operation)

**Step 3.3 — Wire into Pearl's conversation flow**

Pearl needs to detect when lab results are being shared and automatically invoke the tool chain:

1. **Detection trigger** in Pearl's system prompt or tool-use logic:
   - User uploads a file (PDF, image, CSV)
   - User pastes text that looks like lab results (contains test names + values)
   - User says "here are my labs" or similar

2. **Automatic chain:**
   ```
   detect_lab_upload → parse_lab_results → calculate_derived_ratios → generate_light_machine_reading
   ```

3. **Pearl's response pattern:**
   - Acknowledge the upload
   - Present the Light Machine Reading
   - Offer to go deeper on any specific operation or pattern
   - Save the reading as a session observation for future reference

**Step 3.4 — Update Pearl's system prompt**

Add to Pearl's behavioral prompt (in the tools section):

```
When a client shares lab results (uploaded file, pasted text, or described values):
1. Use parse_lab_results to extract structured data
2. Use calculate_derived_ratios to compute composite markers
3. Use generate_light_machine_reading to produce a comprehensive analysis
4. Present the reading in your voice — not as a data dump, but as a facilitation tool
5. Frame findings through the Body Codx operations: "Your Conduction operation shows..."
6. Identify the 2-3 most significant patterns first, then offer to go deeper
7. Always note: this is educational, not medical diagnosis
8. Save the reading to session observations for continuity
9. If prior labs exist, compare trajectory: "Since your last labs, your Regulation operation has..."
```

---

## Phase 4: Spreadsheet Integration (Reference Data)

**Objective:** Make the spreadsheet data (providers, costs, test codes, availability) accessible to Pearl for ordering guidance.

**Step 4.1 — Create `lab_test_lookup` tool**

```typescript
{
  name: "lab_test_lookup",
  description: "Look up lab test details: which labs offer it, test codes, estimated cost, insurance coverage, sample type, turnaround time. Uses the Body Codx Lab DNA Database.",
  input_schema: {
    type: "object",
    properties: {
      test_name: { type: "string" },
      filter_by_provider: { type: "string", description: "Filter by lab (LabCorp, Quest, etc.)" },
      filter_by_operation: { type: "string", description: "Filter by Body Codx operation" },
      max_cost: { type: "number", description: "Maximum cost filter" }
    },
    required: ["test_name"]
  }
}
```

**Step 4.2 — Import spreadsheet to PostgreSQL**

Create a `lab_test_database` table:

```sql
CREATE TABLE lab_test_database (
  id SERIAL PRIMARY KEY,
  test_name TEXT NOT NULL,
  lab_provider TEXT,
  test_code TEXT,
  category TEXT,
  body_codx_operation TEXT,
  what_it_measures TEXT,
  when_to_order TEXT,
  sample_type TEXT,
  fasting_required TEXT,
  est_cost TEXT,
  insurance_coverage TEXT,
  availability TEXT,
  turnaround_time TEXT,
  unique_value TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

Import all 562 rows (including duplicates across providers — this is intentional, because the same test from different providers has different codes/costs).

**Step 4.3 — Pearl can now answer:**
- "Where should I get my ApoB tested?" → Lab lookup with cost comparison
- "What's the cheapest way to check my thyroid?" → Filter by operation + sort by cost
- "What tests should I run for my Conduction operation?" → Filter by operation
- "Can I get this without a doctor's order?" → Filter by availability = "DTC" or "Both"

---

## File Locations Summary

| What | Where |
|---|---|
| Translation Key sections | `outputs/papers/light-machine/SECTION-01` through `SECTION-13` |
| Master spreadsheet | `Body_Codx_Lab_DNA_Database.xlsx` (project root) |
| Generation brief (original) | `app/scripts/pearl-authored/light-machine-translation-key-brief.md` |
| New tools (to create) | `app/src/lib/tools/parse-lab-results.ts`, `calculate-derived-ratios.ts`, `generate-light-machine-reading.ts`, `lab-test-lookup.ts` |
| Tool definitions (to update) | `app/src/lib/tool-definitions.ts` |
| Pearl system prompt (to update) | `app/prompts/` (wherever Pearl's behavioral prompt lives) |
| DB migration (to create) | `app/src/lib/db/migrations/` — new `lab_test_database` table |
| Workstation files (to create) | `app/data/workstations/light-machine-translation-key/` |

---

## Implementation Order

1. **Phase 1** (KB Ingestion) — Do first. No code changes, just pipeline work. ~2 hours.
2. **Phase 4** (Spreadsheet to DB) — Do second. Simple table creation + import. ~1 hour.
3. **Phase 2** (Parse + Calculate tools) — Do third. New tools, moderate complexity. ~4-6 hours.
4. **Phase 3** (Reading Generator) — Do last. Depends on Phase 1-2. Most complex. ~6-8 hours.

**Total estimated implementation:** 13-17 hours of Claude Code work.

---

## Testing Plan

### Phase 1 Verification
- Query KB for "Hemoglobin A1c translation key" — should return the full entry
- Query KB for "Conduction operation lab tests" — should return all Conduction-mapped tests
- Verify cross-references exist between related tests (e.g., ApoB ↔ Lp(a) ↔ hs-CRP)

### Phase 2 Verification
- Parse a sample LabCorp PDF → verify all tests extracted with correct values
- Parse a sample Quest CSV → verify all tests extracted
- Parse pasted text of lab results → verify fuzzy matching works
- Calculate HOMA-IR from known glucose + insulin → verify formula accuracy
- Calculate all 14 derived ratios from a complete lab set → verify all formulas

### Phase 3 Verification
- Upload a real lab report → verify complete Light Machine Reading generated
- Check that every parsed test has a corresponding Translation Key entry pulled
- Check that cross-panel patterns are correctly detected
- Check that operation scores are reasonable
- Upload two lab reports from different dates → verify trajectory comparison works

### Phase 4 Verification
- Query "ApoB" → returns LabCorp and Quest entries with different codes and costs
- Query by operation "Defense" → returns all 44 Defense tests
- Query by cost < $50 → returns affordable screening options

---

## Disclaimers Pearl Must Include

Every Light Machine Reading must include:

> *This analysis uses the Body Codx framework to translate your laboratory results into operational language. It is educational — not medical diagnosis, not treatment recommendation. Your values should be reviewed with your healthcare provider, who has your full clinical context. Functional optimal ranges cited here represent ranges associated with lowest disease risk in population studies and may differ from your provider's reference ranges.*

---

*End of Implementation Plan*
