import type { Metadata } from "next";
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import PaperRenderer from "@/components/PaperRenderer";
import type { Paper } from "@/components/ResearchClient";

interface Props {
  params: Promise<{ slug: string }>;
}

function getAllPapers(): Paper[] {
  const raw = readFileSync(join(process.cwd(), "content/papers.json"), "utf-8");
  const data = JSON.parse(raw) as { papers: Paper[] };
  return data.papers;
}

function getPaperContent(slug: string): string | null {
  const filePath = join(process.cwd(), "content/papers", `${slug}.md`);
  if (!existsSync(filePath)) return null;
  return readFileSync(filePath, "utf-8");
}

export async function generateStaticParams() {
  const papers = getAllPapers();
  return papers
    .filter(p => p.readiness === "preprint-ready" || p.readiness === "published")
    .map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const papers = getAllPapers();
  const paper = papers.find(p => p.slug === slug);
  if (!paper) return { title: "Paper Not Found" };
  return {
    title: paper.title,
    description: paper.abstract?.slice(0, 200),
  };
}

const DENSITY_STYLES: Record<string, { badge: string; label: string; dot: string }> = {
  body: {
    badge: "text-sky-400 border-sky-400/30 bg-sky-400/5",
    label: "Body Density",
    dot: "bg-sky-400",
  },
  soul: {
    badge: "text-amber-400 border-amber-400/30 bg-amber-400/5",
    label: "Soul Density",
    dot: "bg-amber-400",
  },
  spirit: {
    badge: "text-violet-400 border-violet-400/30 bg-violet-400/5",
    label: "Spirit Density",
    dot: "bg-violet-400",
  },
  "cross-density": {
    badge: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    label: "Cross-Density",
    dot: "bg-gradient-to-r from-sky-400 to-violet-400",
  },
};

const EPISTEMIC_STYLES: Record<string, { badge: string; label: string; dot: string; description: string }> = {
  fact: {
    badge: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    label: "Fact",
    dot: "bg-emerald-400",
    description: "Established scientific consensus or directly measured data",
  },
  interpretation: {
    badge: "text-blue-400 border-blue-400/30 bg-blue-400/5",
    label: "Interpretation",
    dot: "bg-blue-400",
    description: "Pattern recognition applied to established data — reasonable but contestable",
  },
  hypothesis: {
    badge: "text-amber-400 border-amber-400/30 bg-amber-400/5",
    label: "Hypothesis",
    dot: "bg-amber-400",
    description: "Testable claim with explicit falsification criteria",
  },
  speculation: {
    badge: "text-violet-400 border-violet-400/30 bg-violet-400/5",
    label: "Speculation",
    dot: "bg-violet-400/70",
    description: "Exploratory reasoning — not yet falsifiable, offered for discussion",
  },
};

const TYPE_LABELS: Record<string, string> = {
  "research-paper": "Research Paper",
  "hypothesis-paper": "Hypothesis Paper",
  "translation-key": "Translation Key",
  "framework-paper": "Framework Paper",
  "technical-report": "Technical Report",
  methodology: "Methodology",
  letter: "Letter to the Editor",
};

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return d;
  }
}

function getRelatedPapers(paper: Paper, allPapers: Paper[]): Paper[] {
  const ready = allPapers.filter(
    p =>
      p.slug !== paper.slug &&
      (p.readiness === "preprint-ready" || p.readiness === "published")
  );

  // Score by shared operations + same density + same type
  const scored = ready.map(p => {
    let score = 0;
    const sharedOps = p.operations.filter(op => paper.operations.includes(op)).length;
    score += sharedOps * 2;
    if (p.density === paper.density) score += 2;
    if (p.type === paper.type) score += 1;
    return { paper: p, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .filter(s => s.score > 0)
    .map(s => s.paper);
}

export default async function PaperPage({ params }: Props) {
  const { slug } = await params;
  const papers = getAllPapers();
  const paper = papers.find(p => p.slug === slug);

  if (!paper || (paper.readiness !== "preprint-ready" && paper.readiness !== "published")) {
    notFound();
  }

  const content = getPaperContent(slug);
  if (!content) notFound();

  const relatedPapers = getRelatedPapers(paper, papers);
  const densityCfg = DENSITY_STYLES[paper.density] ?? DENSITY_STYLES.body;
  const epistemicCfg = EPISTEMIC_STYLES[paper.epistemicCeiling] ?? EPISTEMIC_STYLES.speculation;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Back nav */}
      <Link
        href="/research"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--muted-foreground)] hover:text-crimson transition-colors mb-10 group"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
        Research Library
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
        {/* Main content */}
        <article>
          {/* Type label */}
          <p className="text-xs font-mono text-crimson uppercase tracking-widest mb-4">
            {TYPE_LABELS[paper.type] || paper.type}
          </p>

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-[2.25rem] font-bold text-[var(--foreground)] leading-tight mb-5">
            {paper.title}
          </h1>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            {/* Density */}
            <span
              className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-2 py-0.5 rounded border ${densityCfg.badge}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${densityCfg.dot}`} />
              {densityCfg.label.toUpperCase()}
            </span>
            {/* Epistemic */}
            <span
              className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-2 py-0.5 rounded border ${epistemicCfg.badge}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${epistemicCfg.dot}`} />
              {epistemicCfg.label.toUpperCase()}
            </span>
          </div>

          {/* Epistemic note */}
          <div className="mb-6 p-3 rounded-lg bg-[var(--muted)] border border-[var(--border)] text-xs text-[var(--muted-foreground)] leading-relaxed">
            <span className={`font-mono font-semibold ${epistemicCfg.badge.split(" ")[0]} mr-1`}>
              Epistemic ceiling:
            </span>
            {epistemicCfg.description}.
          </div>

          {/* Authors + date */}
          <div className="flex flex-wrap items-center gap-2 mb-8 pb-6 border-b border-[var(--border)] text-sm text-[var(--muted-foreground)]">
            <span>{paper.authors.join(" · ")}</span>
            <span className="text-[var(--border)]">·</span>
            <span className="font-mono">{formatDate(paper.fileDate)}</span>
            <span className="text-[var(--border)]">·</span>
            <span className="font-mono">{paper.wordCount.toLocaleString()} words</span>
          </div>

          {/* Rendered content */}
          <PaperRenderer content={content} />
        </article>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-20 self-start space-y-4">
          {/* Metadata card */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 space-y-4">
            <h2 className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase tracking-widest">
              Paper Info
            </h2>

            <div className="space-y-3 text-sm">
              <div>
                <p className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase mb-1">
                  Type
                </p>
                <p className="text-[var(--foreground)]">{TYPE_LABELS[paper.type] || paper.type}</p>
              </div>

              <div>
                <p className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase mb-1">
                  Density
                </p>
                <span
                  className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-1.5 py-0.5 rounded border ${densityCfg.badge}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${densityCfg.dot}`} />
                  {densityCfg.label}
                </span>
              </div>

              <div>
                <p className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase mb-1">
                  Epistemic Ceiling
                </p>
                <span
                  className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-1.5 py-0.5 rounded border ${epistemicCfg.badge}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${epistemicCfg.dot}`} />
                  {epistemicCfg.label}
                </span>
                <p className="text-[10px] text-[var(--muted-foreground)] mt-1 leading-relaxed">
                  {epistemicCfg.description}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase mb-1">
                  Published
                </p>
                <p className="text-[var(--foreground)] font-mono text-xs">
                  {formatDate(paper.fileDate)}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase mb-1">
                  Length
                </p>
                <p className="text-[var(--foreground)] font-mono text-xs">
                  {paper.wordCount.toLocaleString()} words
                </p>
              </div>

              {paper.operations.length > 0 && (
                <div>
                  <p className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase mb-1.5">
                    Operations
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {paper.operations.map(op => (
                      <span
                        key={op}
                        className="text-[10px] font-mono text-[var(--muted-foreground)] bg-[var(--muted)] px-1.5 py-0.5 rounded capitalize"
                      >
                        {op}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Epistemic transparency */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--muted)] p-4">
            <h2 className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase tracking-widest mb-2">
              Epistemic Transparency
            </h2>
            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
              Claims are tagged as{" "}
              <span className="text-emerald-400 font-mono">FACT</span>,{" "}
              <span className="text-blue-400 font-mono">INTERPRETATION</span>,{" "}
              <span className="text-amber-400 font-mono">HYPOTHESIS</span>, or{" "}
              <span className="text-violet-400 font-mono">SPECULATION</span>. We do not present
              working hypotheses as established science.
            </p>
          </div>

          {/* License */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
            <p className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase tracking-widest mb-1">
              License
            </p>
            <p className="text-xs text-[var(--muted-foreground)]">CC-BY-SA 4.0 · Open Access</p>
          </div>

          {/* Related papers */}
          {relatedPapers.length > 0 && (
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
              <h2 className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase tracking-widest mb-3">
                Related Papers
              </h2>
              <div className="space-y-3">
                {relatedPapers.map(related => {
                  const relEpistemic = EPISTEMIC_STYLES[related.epistemicCeiling];
                  return (
                    <Link
                      key={related.slug}
                      href={`/research/${related.slug}`}
                      className="block group"
                    >
                      <div className="flex items-start gap-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${relEpistemic?.dot ?? "bg-violet-400/70"}`}
                        />
                        <p className="text-xs text-[var(--muted-foreground)] leading-snug group-hover:text-[var(--foreground)] transition-colors line-clamp-2">
                          {related.title}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <Link
                href="/research"
                className="inline-block mt-4 text-[10px] font-mono text-crimson hover:underline"
              >
                ← Back to library
              </Link>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
