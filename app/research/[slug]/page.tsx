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

const DENSITY_STYLES: Record<string, string> = {
  body: "text-sky-400 border-sky-400/30 bg-sky-400/5",
  soul: "text-amber-400 border-amber-400/30 bg-amber-400/5",
  spirit: "text-violet-400 border-violet-400/30 bg-violet-400/5",
  "cross-density": "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
};

const EPISTEMIC_STYLES: Record<string, string> = {
  fact: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  interpretation: "text-blue-400 border-blue-400/30 bg-blue-400/5",
  hypothesis: "text-amber-400 border-amber-400/30 bg-amber-400/5",
  speculation: "text-violet-400 border-violet-400/30 bg-violet-400/5",
};

const TYPE_LABELS: Record<string, string> = {
  "research-paper": "Research Paper",
  "hypothesis-paper": "Hypothesis Paper",
  "translation-key": "Translation Key",
  "framework-paper": "Framework Paper",
  "technical-report": "Technical Report",
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

export default async function PaperPage({ params }: Props) {
  const { slug } = await params;
  const papers = getAllPapers();
  const paper = papers.find(p => p.slug === slug);

  if (!paper || (paper.readiness !== "preprint-ready" && paper.readiness !== "published")) {
    notFound();
  }

  const content = getPaperContent(slug);
  if (!content) notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Back nav */}
      <Link
        href="/research"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--muted-foreground)] hover:text-crimson transition-colors mb-10"
      >
        ← Research Library
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
        {/* Main content */}
        <article>
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            <span
              className={`inline-flex items-center text-[11px] font-mono font-semibold px-2 py-0.5 rounded border ${DENSITY_STYLES[paper.density] || DENSITY_STYLES.body}`}
            >
              {paper.density.toUpperCase()}
            </span>
            <span
              className={`inline-flex items-center text-[11px] font-mono font-semibold px-2 py-0.5 rounded border ${EPISTEMIC_STYLES[paper.epistemicCeiling] || EPISTEMIC_STYLES.hypothesis}`}
            >
              {paper.epistemicCeiling.toUpperCase()}
            </span>
            <span className="inline-flex items-center text-[11px] font-mono text-[var(--muted-foreground)] px-2 py-0.5 rounded border border-[var(--border)]">
              {TYPE_LABELS[paper.type] || paper.type}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] leading-tight mb-4">
            {paper.title}
          </h1>

          {/* Authors + date */}
          <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-[var(--border)]">
            <span className="text-sm text-[var(--muted-foreground)]">
              {paper.authors.join(" · ")}
            </span>
            <span className="text-[var(--border)]">·</span>
            <span className="text-sm text-[var(--muted-foreground)] font-mono">
              {formatDate(paper.fileDate)}
            </span>
            <span className="text-[var(--border)]">·</span>
            <span className="text-sm text-[var(--muted-foreground)] font-mono">
              {paper.wordCount.toLocaleString()} words
            </span>
          </div>

          {/* Rendered markdown */}
          <PaperRenderer content={content} />
        </article>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-20 self-start space-y-5">
          {/* Metadata card */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 space-y-3">
            <h2 className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-widest">
              Paper Info
            </h2>

            <div>
              <p className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase mb-1">Date</p>
              <p className="text-sm text-[var(--foreground)] font-mono">{formatDate(paper.fileDate)}</p>
            </div>

            <div>
              <p className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase mb-1">Type</p>
              <p className="text-sm text-[var(--foreground)]">{TYPE_LABELS[paper.type] || paper.type}</p>
            </div>

            <div>
              <p className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase mb-1">Density</p>
              <span className={`inline-flex items-center text-[11px] font-mono font-semibold px-1.5 py-0.5 rounded border ${DENSITY_STYLES[paper.density] || DENSITY_STYLES.body}`}>
                {paper.density.toUpperCase()}
              </span>
            </div>

            <div>
              <p className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase mb-1">Epistemic Ceiling</p>
              <span className={`inline-flex items-center text-[11px] font-mono font-semibold px-1.5 py-0.5 rounded border ${EPISTEMIC_STYLES[paper.epistemicCeiling] || EPISTEMIC_STYLES.hypothesis}`}>
                {paper.epistemicCeiling.toUpperCase()}
              </span>
            </div>

            {paper.operations.length > 0 && (
              <div>
                <p className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase mb-1.5">Operations</p>
                <div className="flex flex-wrap gap-1">
                  {paper.operations.map(op => (
                    <span key={op} className="text-[10px] font-mono text-[var(--muted-foreground)] bg-[var(--muted)] px-1.5 py-0.5 rounded">
                      {op}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <p className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase mb-1">Word Count</p>
              <p className="text-sm text-[var(--foreground)] font-mono">{paper.wordCount.toLocaleString()}</p>
            </div>
          </div>

          {/* Epistemic commitment */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--muted)] p-4">
            <h2 className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-widest mb-2">
              Epistemic Transparency
            </h2>
            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
              Claims in this paper are tagged as{" "}
              <span className="text-emerald-400 font-mono">FACT</span>,{" "}
              <span className="text-blue-400 font-mono">INTERPRETATION</span>,{" "}
              <span className="text-amber-400 font-mono">HYPOTHESIS</span>, or{" "}
              <span className="text-violet-400 font-mono">SPECULATION</span>.
              We do not present working hypotheses as established science.
            </p>
          </div>

          {/* License */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
            <p className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase tracking-widest mb-1">
              License
            </p>
            <p className="text-xs text-[var(--muted-foreground)]">
              CC-BY-SA 4.0 — Open Access
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
