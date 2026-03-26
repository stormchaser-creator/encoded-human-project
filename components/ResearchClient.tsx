"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Fuse from "fuse.js";

export interface Paper {
  slug: string;
  title: string;
  abstract: string;
  filename: string;
  fileDate: string;
  wordCount: number;
  type: string;
  density: string;
  operations: string[];
  epistemicCeiling: string;
  epistemicTier: number;
  readiness: string;
  authors: string[];
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
  "research-paper": "Research",
  "hypothesis-paper": "Hypothesis",
  "translation-key": "Translation Key",
  "framework-paper": "Framework",
  "technical-report": "Technical",
  letter: "Letter",
};

const ALL_OPERATIONS = [
  "conduction", "defense", "regulation", "synthesis",
  "reception", "elimination", "respiration", "restoration",
];

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return d;
  }
}

function PaperCard({ paper }: { paper: Paper }) {
  return (
    <Link
      href={`/research/${paper.slug}`}
      className="group flex flex-col p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--border)] hover:bg-[#16161e] transition-all"
    >
      {/* Top badges row */}
      <div className="flex flex-wrap items-center gap-1.5 mb-3">
        <span className={`inline-flex items-center text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded border ${DENSITY_STYLES[paper.density] || DENSITY_STYLES.body}`}>
          {paper.density.toUpperCase()}
        </span>
        <span className={`inline-flex items-center text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded border ${EPISTEMIC_STYLES[paper.epistemicCeiling] || EPISTEMIC_STYLES.hypothesis}`}>
          {paper.epistemicCeiling.toUpperCase()}
        </span>
        <span className="inline-flex items-center text-[10px] font-mono text-[var(--muted-foreground)] px-1.5 py-0.5 rounded border border-[var(--border)]">
          {TYPE_LABELS[paper.type] || paper.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-serif text-[15px] font-semibold text-[var(--foreground)] leading-snug mb-2 group-hover:text-crimson transition-colors line-clamp-3">
        {paper.title}
      </h3>

      {/* Abstract */}
      <p className="text-xs text-[var(--muted-foreground)] leading-relaxed line-clamp-3 mb-3 flex-1">
        {paper.abstract}
      </p>

      {/* Operations */}
      {paper.operations.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {paper.operations.slice(0, 4).map(op => (
            <span key={op} className="text-[10px] font-mono text-[var(--muted-foreground)] bg-[var(--muted)] px-1.5 py-0.5 rounded">
              {op}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-[var(--border)]">
        <span className="text-[10px] font-mono text-[var(--muted-foreground)]">
          {formatDate(paper.fileDate)}
        </span>
        <span className="text-[10px] font-mono text-[var(--muted-foreground)]">
          {paper.wordCount.toLocaleString()} words
        </span>
      </div>
    </Link>
  );
}

export default function ResearchClient({ papers }: { papers: Paper[] }) {
  const [query, setQuery] = useState("");
  const [filterDensity, setFilterDensity] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");
  const [filterOp, setFilterOp] = useState<string>("all");
  const [filterEpistemic, setFilterEpistemic] = useState<string>("all");

  const fuse = useMemo(
    () =>
      new Fuse(papers, {
        keys: ["title", "abstract", "operations", "type", "density"],
        threshold: 0.35,
        includeScore: true,
      }),
    [papers]
  );

  const densities = useMemo(() => {
    const s = new Set(papers.map(p => p.density));
    return [...s].sort();
  }, [papers]);

  const types = useMemo(() => {
    const s = new Set(papers.map(p => p.type));
    return [...s].sort();
  }, [papers]);

  const activeOperations = useMemo(() => {
    const s = new Set(papers.flatMap(p => p.operations));
    return ALL_OPERATIONS.filter(op => s.has(op));
  }, [papers]);

  const filtered = useMemo(() => {
    let result = query.trim()
      ? fuse.search(query).map(r => r.item)
      : [...papers].sort((a, b) => new Date(b.fileDate).getTime() - new Date(a.fileDate).getTime());

    if (filterDensity !== "all") result = result.filter(p => p.density === filterDensity);
    if (filterType !== "all") result = result.filter(p => p.type === filterType);
    if (filterOp !== "all") result = result.filter(p => p.operations.includes(filterOp));
    if (filterEpistemic !== "all") result = result.filter(p => p.epistemicCeiling === filterEpistemic);

    return result;
  }, [query, filterDensity, filterType, filterOp, filterEpistemic, fuse, papers]);

  const hasFilters = query || filterDensity !== "all" || filterType !== "all" || filterOp !== "all" || filterEpistemic !== "all";

  function clearFilters() {
    setQuery("");
    setFilterDensity("all");
    setFilterType("all");
    setFilterOp("all");
    setFilterEpistemic("all");
  }

  return (
    <>
      {/* Search + filters */}
      <div className="mb-8 space-y-3">
        {/* Search */}
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search papers..."
          className="w-full bg-[var(--card)] border border-[var(--border)] rounded-lg px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-crimson transition-colors font-sans"
        />

        {/* Filter row */}
        <div className="flex flex-wrap gap-2">
          <select
            value={filterDensity}
            onChange={e => setFilterDensity(e.target.value)}
            className="bg-[var(--card)] border border-[var(--border)] rounded-md px-3 py-1.5 text-xs text-[var(--muted-foreground)] focus:outline-none focus:border-crimson font-mono"
          >
            <option value="all">All Densities</option>
            {densities.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <select
            value={filterType}
            onChange={e => setFilterType(e.target.value)}
            className="bg-[var(--card)] border border-[var(--border)] rounded-md px-3 py-1.5 text-xs text-[var(--muted-foreground)] focus:outline-none focus:border-crimson font-mono"
          >
            <option value="all">All Types</option>
            {types.map(t => (
              <option key={t} value={t}>{TYPE_LABELS[t] || t}</option>
            ))}
          </select>

          <select
            value={filterOp}
            onChange={e => setFilterOp(e.target.value)}
            className="bg-[var(--card)] border border-[var(--border)] rounded-md px-3 py-1.5 text-xs text-[var(--muted-foreground)] focus:outline-none focus:border-crimson font-mono"
          >
            <option value="all">All Operations</option>
            {activeOperations.map(op => (
              <option key={op} value={op}>{op}</option>
            ))}
          </select>

          <select
            value={filterEpistemic}
            onChange={e => setFilterEpistemic(e.target.value)}
            className="bg-[var(--card)] border border-[var(--border)] rounded-md px-3 py-1.5 text-xs text-[var(--muted-foreground)] focus:outline-none focus:border-crimson font-mono"
          >
            <option value="all">All Epistemic Levels</option>
            <option value="fact">Fact</option>
            <option value="interpretation">Interpretation</option>
            <option value="hypothesis">Hypothesis</option>
            <option value="speculation">Speculation</option>
          </select>

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="px-3 py-1.5 text-xs font-mono text-crimson border border-crimson/30 rounded-md hover:bg-crimson/5 transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Result count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-xs font-mono text-[var(--muted-foreground)]">
          {filtered.length} paper{filtered.length !== 1 ? "s" : ""}{hasFilters ? " matching" : ""}
        </p>
        {!query && !hasFilters && (
          <p className="text-xs font-mono text-[var(--muted-foreground)]">
            Sorted by date — newest first
          </p>
        )}
      </div>

      {/* Card grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(paper => (
            <PaperCard key={paper.slug} paper={paper} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-[var(--muted-foreground)] text-sm mb-2">No papers found</p>
          <button onClick={clearFilters} className="text-xs font-mono text-crimson hover:underline">
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
