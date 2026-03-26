import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Library",
  description:
    "Original papers, synthesis documents, and clinical reference materials from The Encoded Human Project — all tagged with epistemic status, all open access.",
};

export default function ResearchPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <p className="text-xs font-mono text-crimson uppercase tracking-widest mb-3">
          Open Access
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-4">
          Research Library
        </h1>
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl leading-relaxed">
          Original papers, synthesis documents, and clinical reference
          materials. Every paper carries an epistemic ceiling badge indicating
          the maximum confidence warranted by the evidence. All research is open
          access under CC-BY-SA 4.0.
        </p>
      </div>

      {/* Epistemic legend */}
      <div className="flex flex-wrap gap-4 mb-16 p-4 rounded-lg border border-[var(--border)] bg-[var(--muted)]">
        <span className="text-xs text-[var(--muted-foreground)] font-mono uppercase tracking-wider self-center mr-2">
          Epistemic levels:
        </span>
        {[
          {
            badge: "FACT",
            className: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
          },
          {
            badge: "HYPOTHESIS",
            className: "text-amber-400 border-amber-400/30 bg-amber-400/5",
          },
          {
            badge: "INTERPRETATION",
            className: "text-blue-400 border-blue-400/30 bg-blue-400/5",
          },
          {
            badge: "SPECULATION",
            className: "text-violet-400 border-violet-400/30 bg-violet-400/5",
          },
        ].map(({ badge, className }) => (
          <span
            key={badge}
            className={`inline-flex items-center text-xs font-mono font-semibold px-2 py-0.5 rounded border ${className}`}
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Papers in Preparation */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)] mb-8">
          Papers in Preparation
        </h2>
        <p className="text-[var(--muted-foreground)] leading-relaxed mb-10 text-sm max-w-3xl">
          The Encoded Human research library will host original papers,
          hypothesis documents, and clinical reference materials — all tagged
          with epistemic status and available for public review. The following
          are currently in preparation.
        </p>

        <div className="space-y-6">
          {[
            {
              title: "The Light Machine Translation Key",
              epistemic: "INTERPRETATION",
              epistemicClass: "text-blue-400 border-blue-400/30 bg-blue-400/5",
              target: "Zenodo DOI — open access",
              description:
                "A comprehensive clinical reference translating 200+ biomarkers across eight biological operations. Each marker entry includes: what it measures, functional ranges, what deviation signals, pattern recognition across related markers, intervention levers, and a three-density reading connecting biology to meaning to awareness. Twenty-one sections covering metabolic, cardiovascular, immune, neurological, hormonal, genomic, environmental, and oncologic panels.",
            },
            {
              title: "Oscillatory Coherence as a Unifying Health Metric",
              epistemic: "HYPOTHESIS",
              epistemicClass: "text-amber-400 border-amber-400/30 bg-amber-400/5",
              target: "bioRxiv preprint",
              description:
                "A hypothesis paper proposing that health is fundamentally oscillatory coherence — the stable synchronization of biological rhythms across circadian, ultradian, and cellular scales — and that disease is decoherence. Integrates HRV research, TTFields data, circadian disruption literature, and vagal tone studies.",
            },
            {
              title:
                "The Microbiome as Ancestral Encoding Substrate",
              epistemic: "HYPOTHESIS",
              epistemicClass: "text-amber-400 border-amber-400/30 bg-amber-400/5",
              target: "bioRxiv preprint",
              description:
                "A framework paper proposing that the maternal microbiome transfer is the primary biological mechanism of ancestral encoding — that what we inherit through the birth canal, breast milk, and early environment constitutes a living ancestral record that shapes immune development, neurotransmitter production, and epigenetic expression.",
            },
          ].map(({ title, epistemic, epistemicClass, target, description }) => (
            <article
              key={title}
              className="flex flex-col p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span
                  className={`inline-flex items-center text-xs font-mono font-semibold px-2 py-0.5 rounded border ${epistemicClass}`}
                >
                  {epistemic}
                </span>
                <span className="text-xs text-[var(--muted-foreground)] font-mono shrink-0">
                  {target}
                </span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-[var(--foreground)] leading-snug mb-3">
                {title}
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Epistemic commitment */}
      <section className="mb-16 p-6 rounded-xl border border-[var(--border)] bg-[var(--muted)]">
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
          All papers will be published with full epistemic tagging. Every claim
          will be marked as{" "}
          <span className="text-emerald-400 font-mono text-xs font-semibold">
            FACT
          </span>
          ,{" "}
          <span className="text-blue-400 font-mono text-xs font-semibold">
            INTERPRETATION
          </span>
          ,{" "}
          <span className="text-amber-400 font-mono text-xs font-semibold">
            HYPOTHESIS
          </span>
          , or{" "}
          <span className="text-violet-400 font-mono text-xs font-semibold">
            SPECULATION
          </span>
          . We will not present working hypotheses as established science.
        </p>
      </section>

      {/* Publication Pathway */}
      <section className="mb-16">
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
            We publish early and transparently. The cost of waiting for
            perfection is silence. The cost of publishing honestly is
            vulnerability. We choose vulnerability.
          </p>
        </div>
      </section>
    </div>
  );
}
