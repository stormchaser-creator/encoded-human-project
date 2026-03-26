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
      <div className="mb-10">
        <p className="text-xs font-mono text-crimson uppercase tracking-widest mb-3">
          Open Access · CC-BY-SA 4.0
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-4">
          Research Library
        </h1>
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl leading-relaxed">
          Hypothesis papers, clinical translation keys, framework documents, and technical reports
          from The Encoded Human Project. Every claim carries an epistemic ceiling badge.
        </p>
      </div>

      {/* Epistemic legend */}
      <div className="flex flex-wrap gap-4 mb-10 p-4 rounded-lg border border-[var(--border)] bg-[var(--muted)]">
        <span className="text-xs font-mono text-[var(--muted-foreground)] self-center uppercase tracking-wider">
          Epistemic tiers:
        </span>
        {[
          { label: "Fact", dot: "bg-emerald-400", text: "text-emerald-400" },
          { label: "Interpretation", dot: "bg-blue-400", text: "text-blue-400" },
          { label: "Hypothesis", dot: "bg-amber-400", text: "text-amber-400" },
          { label: "Speculation", dot: "bg-violet-400/70", text: "text-violet-400" },
        ].map(({ label, dot, text }) => (
          <span key={label} className="inline-flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${dot}`} />
            <span className={`text-xs font-mono font-semibold ${text}`}>{label}</span>
          </span>
        ))}
        <span className="text-[var(--border)] mx-1">·</span>
        <span className="text-xs font-mono text-[var(--muted-foreground)] self-center uppercase tracking-wider">
          Density:
        </span>
        {[
          { label: "Body", dot: "bg-sky-400", text: "text-sky-400" },
          { label: "Soul", dot: "bg-amber-400", text: "text-amber-400" },
          { label: "Spirit", dot: "bg-violet-400", text: "text-violet-400" },
          { label: "Cross-Density", dot: "bg-gradient-to-r from-sky-400 to-violet-400", text: "text-emerald-400" },
        ].map(({ label, dot, text }) => (
          <span key={label} className="inline-flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${dot}`} />
            <span className={`text-xs font-mono font-semibold ${text}`}>{label}</span>
          </span>
        ))}
      </div>

      {/* Main library client */}
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
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="border-l-2 border-crimson pl-6">
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed italic">
            We publish early and transparently. The cost of waiting for perfection is silence. The
            cost of publishing honestly is vulnerability. We choose vulnerability.
          </p>
        </div>
      </section>
    </div>
  );
}
