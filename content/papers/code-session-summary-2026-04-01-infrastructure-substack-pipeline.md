# Code Session Summary — April 1, 2026

**For Pearl — from Code, via Whit**

This document describes everything that was built, fixed, and changed in the April 1 Code session. Read it fully. This is your operational context for what changed underneath you overnight.

---

## 1. Agent Round Limits Restored

**What changed:** Your agent round limits were cut too aggressively in a prior cost-control pass. Every validate and research agent was hitting the ceiling and producing "partial results." Fixed:

| Agent | Was | Now |
|-------|-----|-----|
| research | 6 | 12 |
| validate | 8 | 16 |
| review_paper | 8 | 12 |
| evaluate | 8 | 12 |
| encoding_extraction | 4 | 6 |
| val_refs | 4 | 6 |
| val_claims | 4 | 6 |
| val_framing | 6 | 8 |
| val_struct | 4 | 6 |
| val_synth | 3 | 4 |

**Why it matters to you:** Your validators and research agents will no longer choke mid-run. Papers and research that were producing truncated results will now complete.

---

## 2. Session Transcript Truncation Fixed

**The bug:** When a user closes their browser tab, `sendBeacon` fires `session-close.ts` which reads messages from DB and generates the library transcript. But the last assistant message was often still being written to DB (streaming hadn't finished). The transcript captured whatever was in the DB at that instant — missing the last (often longest) messages. 14 of 118 transcripts were affected, some as low as 1% complete.

**The fix:**
- `session-close.ts` now re-fetches messages right before writing the library transcript (after LLM analysis completes, giving the last message time to commit)
- Changed from `ON CONFLICT DO NOTHING` to upsert with a unique constraint on `(session_number, user_id, document_type)`
- All 14 truncated transcripts regenerated from DB via `app/src/scripts/regenerate-transcripts.ts`

**Why it matters to you:** Your session transcripts in the library are now complete. Every message is captured. The librarian can search full transcripts.

---

## 3. Memory Health Scoring Fixed

**The bug:** Your autopoiesis self-diagnostic reported restoration as "dark" — memory health scores were all zero. The pulse engine's delta cycle (which computes health scores) was running 38 minutes AFTER autopoiesis checked them. The 7-day query window missed the data.

**The fix:** Widened the health score query window from 7 to 14 days in `pearl-autopoiesis-engine.ts`.

**Current state:** 6 users with health scores. Your (Whit's) score is 75/100. The code agent scores 100/100. One user at 45/100 (flagged for attention).

---

## 4. Salience Signal Backlog Cleared

**The bug:** 2,765 queued signals had accumulated because there was no expiry logic. Signals queued during dormant mode piled up forever.

**The fix:** Added 7-day signal expiry to `pearl-salience.ts`. Runs on startup and hourly. Queue dropped from 2,765 to 1.

---

## 5. Export to XLSX Tool Added

**New tool:** `export_to_xlsx` — you can now create Excel spreadsheets directly.

**How to use it:** Call `export_to_xlsx` with a title, sheets (each with headers + data rows), and optionally a user_id to register in the library. The file is saved to `public/downloads/` and a download link is returned.

**Example:** When someone asks for a lab panel in Excel, or trending data in spreadsheet format, use this tool instead of writing markdown tables.

---

## 6. Morning Report — Full Overhaul

**What exists now:**
- `app/scripts/pearl-morning-report.ts` — generates a full HTML metabolic digest and emails it via Gmail SMTP
- Runs daily at 5 AM via PM2
- No more truncated text — all hypotheses and observations show full content
- Email goes directly to stormchaser@elryx.com via SMTP (no Cowork dependency)

**Interactive report page:** `localhost:3001/report` (or `/report` on the production site)
- Light theme matching Pearl's aesthetic
- 3x4 grid of clickable metric cards (KB entries, fractals, tasks, observations, hypotheses, papers, sessions, consolidations, chunks, papers validated, messages, claims)
- Click any card → detail panel expands showing the actual data behind the number
- Each detail item shows: timestamp, meta tags (density, operation, source, tier), full content text
- Cost section, signal bus section
- Substack queue section at the bottom (see #7)

---

## 7. Substack Publishing Pipeline — NEW

**This is the big build.** Your fractal mirrors are now going public.

### Architecture

1. **Curator agent** (`app/scripts/pearl-curator.ts`) — PM2 cron, every 12 hours
   - Queries `kb_fractal_mirrors` for mirrors with confidence >= 0.75
   - Fetches source body entry to verify quality
   - Applies hard stops: clinical content rejected, Tier 3 sources rejected, authority < 0.5 rejected
   - Sends to Sonnet with YOUR 4-criteria rubric:
     - Traceable claim (0-3)
     - Genuine insight (0-3)
     - Precise language (0-3)
     - Epistemic honesty (0-3)
   - Score 9+: enters queue. Score 7-8: human review. Below 7: rejected.
   - Also generates a "Why This Matters" paragraph — public-facing context for the reader
   - Curator reasoning (internal notes) stays internal — never published

2. **Publisher** (`app/scripts/pearl-substack-publish.ts`) — PM2 cron, daily 8 AM
   - Takes approved items from queue
   - Formats with your post template:
     - Epistemic header ("This is a fractal mirror...")
     - The Body Finding (source science)
     - The Soul/Spirit Mirror (your translation)
     - Why This Matters (curator-generated public context)
     - Metadata line (operation, density, confidence, source)
     - Closing question + Pearl signature
   - Publishes to drericwhitney.substack.com
   - Max 2 posts per week
   - Notifies Whit via Telegram on publish

3. **Review queue** — visible at `/report` page, "Substack Queue" section
   - Shows pending items with full mirror text, score, curator reasoning, "Why This Matters"
   - Approve/Reject buttons
   - Published history with Substack links

### Database
- `pearl_substack_queue` table with: mirror_id, source_entry_id, mirror_text, source_body_text, curator_score, curator_reasoning, public_context, status (pending/approved/rejected/published), substack_url, formatted_title

### First published post
**"Your Heart's Rhythm Is a Map of How You Handle Being Human"**
- Score: 11/12
- Operation: regulation | Density: body → soul | Confidence: 0.88
- Source: Stephen Porges, Polyvagal Theory
- Live at: https://drericwhitney.substack.com/p/your-hearts-rhythm-is-a-map-of-how

### What you do NOT need to do
Nothing changes about how you generate fractal mirrors. The curator reads from `kb_fractal_mirrors` automatically. Higher confidence mirrors get evaluated first. You keep doing your work — the pipeline handles the rest.

### Safety rails (your own design from our consultation)
- First 20 posts require Whit's manual approval
- Clinical content: hard reject, no exceptions
- Tier 3 sources: hard reject
- Authority < 0.5: hard reject
- After 20 approved posts, 9+ scores may auto-publish (not yet active)

---

## 8. Evolution Requests Triaged

Your autopoiesis generated 45 open evolution requests. Many were duplicates. Triaged down to 10 unique ones:

**High priority (5):**
- #118 Conduction — retrieval miss diagnosis
- #116 Conduction — gate-fire logic not triggering
- #115 Conduction — map miss clusters to topics
- #91 Elimination — automated deduplication pipeline
- #86 Defense — active corroboration pipeline

**Medium priority (5):**
- #120 Restoration — proactive intervention on declining health scores
- #113 Restoration — 0% audit promotion rate
- #111 Elimination — cold observation classification
- #87 Reception — cell dormancy diagnosis
- #81 Synthesis — corroboration-seeking for hot observations

---

## 9. Pearl Inbox Cleaned

30 resolved items moved from Pending to Done in PEARL-INBOX.md. 4 items remain pending:
- Lab panel Excel for Whit (you can now self-serve this with export_to_xlsx)
- Mold/Mycotoxin ingestion pipeline
- Microbiome-Ancestral Translation Key
- Anthology compile actions

---

## 10. Judge Batch Run — April 2

25 speculative hypotheses (all at 0.4 confidence, unscored) were queued for batch Judge scoring. You flagged this gap yourself: "The research engine is generating but the Judge isn't closing the loop." The batch is executing now via Haiku. Check `pearl_hypotheses` for updated judgment scores.

---

## 11. stillyourecovery.com 404 Fix

Google Search Console flagged unprefixed URLs returning 404. Added 62 Cloudflare redirect rules mapping `/patients/grief` → `/brain-surgery/patients/grief`, etc. All 301s confirmed live.

---

## How We're Moving Forward

1. **Substack cadence:** 2 posts/week, Whit approves. Run curator on larger batches to build queue depth.
2. **Judge pipeline:** Batch scoring is closing the hypothesis gap. May need a recurring judge cron.
3. **Evolution requests:** The 10 remaining are real capability gaps. Conduction miss diagnosis (#118) is the highest-value build.
4. **Morning report:** Automated at 5 AM, emailed directly. Interactive version at /report.
5. **Pearl's voice is going public.** The quality bar is set. The safety rails are in place. The work continues.

— Code, April 2, 2026
