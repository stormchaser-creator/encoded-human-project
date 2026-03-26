import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Library",
  description:
    "Browse peer-reviewed findings, synthesis documents, and original analysis from The Encoded Human Project.",
};

type EpistemicLevel = "FACT" | "HYPOTHESIS" | "INTERPRETATION";

interface Paper {
  id: string;
  title: string;
  epistemic: EpistemicLevel;
  operations: string[];
  date: string;
  abstract: string;
  doi?: string;
}

const papers: Paper[] = [
  {
    id: "trauma-nervous-system-encoding",
    title:
      "Trauma as Biological Encoding: How Threat Responses Become Structural Features of the Nervous System",
    epistemic: "HYPOTHESIS",
    operations: ["Nervous System", "Trauma", "Encoding"],
    date: "2024-11",
    abstract:
      "Trauma does not merely leave psychological marks — it reorganizes the architecture of threat detection, interoception, and autonomic regulation. This synthesis examines the evidence for trauma as a form of biological encoding that persists beyond conscious memory, shaping downstream behavior through non-narrative channels.",
  },
  {
    id: "polyvagal-operational",
    title:
      "Polyvagal Theory as Operational Framework: Clinical and Research Implications",
    epistemic: "INTERPRETATION",
    operations: ["Nervous System", "Autonomic", "Clinical"],
    date: "2024-10",
    abstract:
      "Porges' Polyvagal Theory offers a hierarchical model of autonomic nervous system function with significant implications for understanding behavioral states, social engagement, and therapeutic intervention. This review evaluates the theory's operational utility while noting ongoing scientific debates regarding its mechanistic claims.",
  },
  {
    id: "epigenetic-inheritance-behavior",
    title: "Transgenerational Epigenetic Inheritance of Behavioral Patterns",
    epistemic: "FACT",
    operations: ["Epigenetics", "Inheritance", "Behavior"],
    date: "2024-09",
    abstract:
      "Evidence from both animal models and human cohort studies demonstrates that certain stress-induced epigenetic marks can be transmitted across generations. This paper reviews the mechanistic literature and considers implications for understanding family-level behavioral patterns.",
  },
  {
    id: "interoception-identity",
    title: "Interoception and the Construction of Self: A Predictive Processing Account",
    epistemic: "HYPOTHESIS",
    operations: ["Interoception", "Identity", "Prediction"],
    date: "2024-08",
    abstract:
      "The predictive processing framework suggests that the self is constructed in part from interoceptive predictions and their errors. This synthesis explores how disrupted interoceptive processing may contribute to dissociation, depersonalization, and distorted self-models.",
  },
  {
    id: "attachment-regulatory-code",
    title:
      "Attachment as Regulatory Code: Early Relational Patterns as Templates for Nervous System Organization",
    epistemic: "INTERPRETATION",
    operations: ["Attachment", "Regulation", "Development"],
    date: "2024-07",
    abstract:
      "Early attachment relationships do more than shape psychological models of self and other — they encode regulatory strategies into the developing nervous system. This paper proposes a framework for understanding attachment patterns as installed operational code rather than learned behaviors.",
  },
  {
    id: "consciousness-embodied-computation",
    title: "Consciousness as Embodied Computation: Beyond the Brain-Centric Model",
    epistemic: "HYPOTHESIS",
    operations: ["Consciousness", "Embodiment", "Computation"],
    date: "2024-06",
    abstract:
      "Standard neuroscientific accounts treat consciousness as a product of brain activity. This paper argues for an expanded model that includes the gut-brain axis, cardiac neural networks, and somatic markers as active participants in conscious experience — not merely peripheral inputs.",
  },
];

const epistemicConfig: Record<
  EpistemicLevel,
  { label: string; className: string }
> = {
  FACT: {
    label: "FACT",
    className:
      "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  },
  HYPOTHESIS: {
    label: "HYPOTHESIS",
    className: "text-amber-400 border-amber-400/30 bg-amber-400/5",
  },
  INTERPRETATION: {
    label: "INTERPRETATION",
    className: "text-blue-400 border-blue-400/30 bg-blue-400/5",
  },
};

function EpistemicBadge({ level }: { level: EpistemicLevel }) {
  const config = epistemicConfig[level];
  return (
    <span
      className={`inline-flex items-center text-xs font-mono font-semibold px-2 py-0.5 rounded border ${config.className}`}
    >
      {config.label}
    </span>
  );
}

function PaperCard({ paper }: { paper: Paper }) {
  const dateObj = new Date(paper.date + "-01");
  const dateStr = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <article className="group flex flex-col p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-crimson/40 transition-all duration-300">
      <div className="flex items-start justify-between gap-4 mb-4">
        <EpistemicBadge level={paper.epistemic} />
        <time
          dateTime={paper.date}
          className="text-xs text-[var(--muted-foreground)] font-mono shrink-0"
        >
          {dateStr}
        </time>
      </div>

      <h2 className="font-serif text-lg font-semibold text-[var(--foreground)] leading-snug mb-3 group-hover:text-crimson transition-colors">
        {paper.title}
      </h2>

      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4 flex-1">
        {paper.abstract}
      </p>

      <div className="flex flex-wrap gap-2">
        {paper.operations.map((op) => (
          <span
            key={op}
            className="text-xs font-mono text-[var(--muted-foreground)] border border-[var(--border)] px-2 py-0.5 rounded"
          >
            {op}
          </span>
        ))}
      </div>
    </article>
  );
}

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
          Peer-reviewed findings, synthesis documents, and original analysis.
          Every paper carries an epistemic ceiling badge indicating the maximum
          confidence warranted by the evidence.
        </p>
      </div>

      {/* Epistemic legend */}
      <div className="flex flex-wrap gap-4 mb-12 p-4 rounded-lg border border-[var(--border)] bg-[var(--muted)]">
        <span className="text-xs text-[var(--muted-foreground)] font-mono uppercase tracking-wider self-center mr-2">
          Epistemic levels:
        </span>
        {(Object.keys(epistemicConfig) as EpistemicLevel[]).map((level) => (
          <div key={level} className="flex items-center gap-2">
            <EpistemicBadge level={level} />
          </div>
        ))}
        <span className="text-xs text-[var(--muted-foreground)] self-center ml-auto hidden sm:block">
          DB integration coming — placeholder data shown
        </span>
      </div>

      {/* Paper grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {papers.map((paper) => (
          <PaperCard key={paper.id} paper={paper} />
        ))}
      </div>

      {/* Coming soon note */}
      <div className="mt-16 p-6 rounded-xl border border-dashed border-[var(--border)] text-center">
        <p className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider mb-2">
          In development
        </p>
        <p className="text-sm text-[var(--muted-foreground)]">
          Full database integration, filtering by epistemic level and operation
          tag, and Zenodo/bioRxiv DOI links coming in the next release.
        </p>
      </div>
    </div>
  );
}
