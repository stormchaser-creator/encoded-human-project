import type { Metadata } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import ResearchClient, { type Paper } from "@/components/ResearchClient";

export const metadata: Metadata = {
  title: "Research Library",
  description:
    "Original papers, synthesis documents, and clinical reference materials from The Encoded Human Project — all tagged with epistemic status, all open access.",
};

function getPapers(): Paper[] {
  const raw = readFileSync(join(process.cwd(), "content/papers.json"), "utf-8");
  const data = JSON.parse(raw) as { papers: Paper[] };
  return data.papers.filter(
    p => p.readiness === "preprint-ready" || p.readiness === "published"
  );
}

export default function ResearchPage() {
  const papers = getPapers();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="text-xs font-mono text-crimson uppercase tracking-widest mb-3">
          Open Access · CC-BY-SA 4.0
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-4">
          Research Library
        </h1>
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl leading-relaxed">
          {papers.length} papers — hypothesis documents, clinical translation keys,
          and synthesis research. Every paper carries an epistemic ceiling badge.
          All research is open access.
        </p>
      </div>

      {/* Epistemic + Density Legend */}
      <div className="flex flex-wrap gap-6 mb-10 p-4 rounded-lg border border-[var(--border)] bg-[var(--muted)]">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-[var(--muted-foreground)] font-mono uppercase tracking-wider mr-1">
            Epistemic:
          </span>
          {[
            { badge: "FACT", cls: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5" },
            { badge: "INTERPRETATION", cls: "text-blue-400 border-blue-400/30 bg-blue-400/5" },
            { badge: "HYPOTHESIS", cls: "text-amber-400 border-amber-400/30 bg-amber-400/5" },
            { badge: "SPECULATION", cls: "text-violet-400 border-violet-400/30 bg-violet-400/5" },
          ].map(({ badge, cls }) => (
            <span
              key={badge}
              className={`inline-flex items-center text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded border ${cls}`}
            >
              {badge}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-[var(--muted-foreground)] font-mono uppercase tracking-wider mr-1">
            Density:
          </span>
          {[
            { badge: "BODY", cls: "text-sky-400 border-sky-400/30 bg-sky-400/5" },
            { badge: "SOUL", cls: "text-amber-400 border-amber-400/30 bg-amber-400/5" },
            { badge: "SPIRIT", cls: "text-violet-400 border-violet-400/30 bg-violet-400/5" },
            { badge: "CROSS-DENSITY", cls: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5" },
          ].map(({ badge, cls }) => (
            <span
              key={badge}
              className={`inline-flex items-center text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded border ${cls}`}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Client search + filter + grid */}
      <ResearchClient papers={papers} />

      {/* Publication pathway */}
      <section className="mt-20 pt-12 border-t border-[var(--border)]">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)] mb-6">
          Publication Pathway
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            {
              phase: "Phase 1",
              name: "Zenodo",
              desc: "Immediate DOI assignment for all completed documents. Open access, citeable, versioned.",
            },
            {
              phase: "Phase 2",
              name: "bioRxiv / medRxiv",
              desc: "Preprint submission for papers with sufficient rigor. Public before peer review.",
            },
            {
              phase: "Phase 3",
              name: "Peer Review",
              desc: "PLOS ONE or equivalent for papers that survive community scrutiny.",
            },
          ].map(({ phase, name, desc }) => (
            <div
              key={phase}
              className="p-4 rounded-lg border border-[var(--border)] bg-[var(--card)]"
            >
              <p className="text-xs font-mono text-crimson uppercase tracking-widest mb-1">
                {phase}
              </p>
              <h3 className="font-sans font-semibold text-[var(--foreground)] text-sm mb-2">
                {name}
              </h3>
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
        <div className="border-l-2 border-crimson pl-6">
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed italic">
            We publish early and transparently. The cost of waiting for perfection
            is silence. The cost of publishing honestly is vulnerability. We choose
            vulnerability.
          </p>
        </div>
      </section>
    </div>
  );
}
