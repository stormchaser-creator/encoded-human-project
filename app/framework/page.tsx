import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Framework",
  description:
    "The operational architecture underlying The Encoded Human Project — how biological, psychological, and consciousness-level patterns layer and interact.",
};

const layers = [
  {
    level: "L1",
    name: "Biological Substrate",
    color: "text-emerald-400",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/5",
    description:
      "Genetic architecture, epigenetic state, autonomic nervous system organization, neurobiological baseline. The hardware layer — shaped by evolution, ancestry, and early developmental environment.",
    examples: [
      "Genetic polymorphisms in stress response pathways",
      "Epigenetic marks from ancestral trauma",
      "Autonomic nervous system baseline tone",
      "Interoceptive processing capacity",
    ],
  },
  {
    level: "L2",
    name: "Regulatory Programs",
    color: "text-amber-400",
    border: "border-amber-400/20",
    bg: "bg-amber-400/5",
    description:
      "Attachment-encoded regulatory strategies, defensive adaptations, and procedural memory. Programs installed during developmental windows that run automatically, largely outside awareness.",
    examples: [
      "Attachment strategies as regulatory templates",
      "Defensive adaptations to threat environments",
      "Procedural somatic patterns",
      "Implicit relational models",
    ],
  },
  {
    level: "L3",
    name: "Narrative & Identity",
    color: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5",
    description:
      "Conscious self-models, belief systems, and the narrative layer through which experience is interpreted. Heavily shaped by lower layers but capable of top-down influence when sufficiently coherent.",
    examples: [
      "Core beliefs about self and world",
      "Meaning-making frameworks",
      "Conscious emotional regulation",
      "Narrative coherence and identity",
    ],
  },
  {
    level: "L4",
    name: "Relational Field",
    color: "text-violet-400",
    border: "border-violet-400/20",
    bg: "bg-violet-400/5",
    description:
      "The interpersonal and collective layer — how individual systems co-regulate, transmit patterns, and embed within larger social fields. Family systems, cultural encoding, collective trauma.",
    examples: [
      "Co-regulation and nervous system entrainment",
      "Transgenerational pattern transmission",
      "Cultural and collective encoding",
      "Field dynamics in groups",
    ],
  },
];

export default function FrameworkPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <p className="text-xs font-mono text-crimson uppercase tracking-widest mb-3">
          Operational Architecture
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
          The Framework
        </h1>
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl leading-relaxed mb-4">
          A layered model of how human systems are organized — from biological
          substrate through regulatory programs, narrative identity, and
          relational field.
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-amber-400/30 bg-amber-400/5">
          <span className="text-xs font-mono font-semibold text-amber-400">
            HYPOTHESIS
          </span>
          <span className="text-xs text-[var(--muted-foreground)]">
            This framework is a working model, not established doctrine.
          </span>
        </div>
      </div>

      {/* Core premise */}
      <section className="mb-16 p-8 rounded-xl border border-[var(--border)] bg-[var(--card)]">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)] mb-4">
          Core premise
        </h2>
        <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
          <p>
            Human beings are running code. That code operates at multiple levels
            simultaneously — biological, regulatory, narrative, and relational —
            and the levels interact. What looks like a choice is often the
            output of a program. What looks like a character flaw is often an
            adaptation. What looks like pathology is often a solution to an old
            problem that has outlived its usefulness.
          </p>
          <p>
            The goal of this framework is not to reduce human beings to
            mechanisms, but to make the mechanisms legible — so that the
            difference between original code and installed code can be seen, and
            so that intervention can be targeted to the level where change is
            actually possible.
          </p>
        </div>
      </section>

      {/* Layers */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)] mb-8">
          The four layers
        </h2>

        <div className="space-y-6">
          {layers.map(({ level, name, color, border, bg, description, examples }) => (
            <div
              key={level}
              className={`p-6 rounded-xl border ${border} ${bg}`}
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <span
                    className={`font-mono text-xs font-bold ${color} block mb-1`}
                  >
                    {level}
                  </span>
                  <div className={`w-0.5 h-8 ${color} opacity-30 mx-auto`} />
                </div>

                <div className="flex-1">
                  <h3
                    className={`font-serif text-xl font-semibold mb-3 ${color}`}
                  >
                    {name}
                  </h3>
                  <p className="text-[var(--muted-foreground)] leading-relaxed mb-4 text-sm">
                    {description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {examples.map((ex) => (
                      <div
                        key={ex}
                        className="flex items-start gap-2 text-xs text-[var(--muted-foreground)]"
                      >
                        <span className={`${color} mt-0.5`}>→</span>
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-layer dynamics */}
      <section className="mb-16 p-8 rounded-xl border border-[var(--border)] bg-[var(--muted)]">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)] mb-4">
          Cross-layer dynamics
        </h2>
        <p className="text-[var(--muted-foreground)] leading-relaxed mb-6 text-sm">
          The layers are not independent. They interact bidirectionally, with
          lower layers exerting stronger influence on higher layers in most
          circumstances — but with top-down pathways that become available under
          specific conditions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: "Bottom-up dominance",
              desc: "Biological and regulatory states constrain narrative and relational capacity. A dysregulated nervous system cannot sustain coherent meaning-making.",
            },
            {
              title: "Top-down modulation",
              desc: "Sufficiently coherent narrative and relational contexts can shift regulatory patterns — but only within the constraints set by the biological layer.",
            },
            {
              title: "Horizontal transmission",
              desc: "Patterns propagate laterally within layers — between family members, across generations, and through cultural embedding.",
            },
            {
              title: "Intervention targeting",
              desc: "Effective change requires identifying which layer is primary for a given pattern and intervening at that level, not the symptomatic layer.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="p-4 rounded-lg border border-[var(--border)] bg-[var(--card)]"
            >
              <h3 className="font-sans font-semibold text-[var(--foreground)] text-sm mb-2">
                {title}
              </h3>
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Status */}
      <section className="mb-16 p-6 rounded-xl border border-dashed border-[var(--border)] text-center">
        <p className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider mb-2">
          Framework status
        </p>
        <p className="text-sm text-[var(--muted-foreground)]">
          This is a working model under active development. Detailed layer
          specifications, operational definitions, and measurement tools are in
          progress. See the research library for supporting evidence.
        </p>
      </section>

      {/* CTA */}
      <div className="flex flex-wrap gap-4">
        <Link
          href="/research"
          className="inline-flex items-center gap-2 px-6 py-3 bg-crimson text-white font-sans text-sm font-medium rounded-md hover:bg-[#a50e2d] transition-colors"
        >
          See the Research
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--foreground)] font-sans text-sm font-medium rounded-md hover:border-crimson hover:text-crimson transition-colors"
        >
          About the Project
        </Link>
      </div>
    </div>
  );
}
