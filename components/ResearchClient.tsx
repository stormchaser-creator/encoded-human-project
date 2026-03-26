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

const DENSITY_ACTIVE_STYLES: Record<string, string> = {
  body: "text-sky-400 border-sky-400 bg-sky-400/15",
  soul: "text-amber-400 border-amber-400 bg-amber-400/15",
  spirit: "text-violet-400 border-violet-400 bg-violet-400/15",
  "cross-density": "text-emerald-400 border-emerald-400 bg-emerald-400/15",
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
  methodology: "Methodology",
  letter: "Letter",
};

const CATEGORY_TABS: { label: string; value: string }[] = [
  { label: "All Papers", value: "all" },
  { label: "Translation Key", value: "translation-key" },
  { label: "Hypothesis", value: "hypothesis-paper" },
  { label: "Framework", value: "framework-paper" },
  { label: "Technical", value: "technical-report" },
  { label: "Methodology", value: "methodology" },
];

const ALL_OPERATIONS = [
  "reception", "transduction", "conduction", "regulation",
  "synthesis", "defense", "restoration", "elimination",
];

const DENSITY_BUTTONS: { label: string; value: string }[] = [
  { label: "Body", value: "body" },
  { label: "Soul", value: "soul" },
  { label: "Spirit", value: "spirit" },
  { label: "Cross-Density", value: "cross-density" },
];

const SORT_OPTIONS = [
  { label: "Newest first", value: "newest" },
  { label: "Oldest first", value: "oldest" },
  { label: "Title A–Z", value: "title" },
  { label: "Word count (longest)", value: "wordcount" },
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
  const [sortBy, setSortBy] = useState<string>("newest");

  const fuse = useMemo(
    () =>
      new Fuse(papers, {
        keys: ["title", "abstract", "operations", "type", "density"],
        threshold: 0.35,
        includeScore: true,
      }),
    [papers]
  );

  const activeOperations = useMemo(() => {
    const s = new Set(papers.flatMap(p => p.operations));
    return ALL_OPERATIONS.filter(op => s.has(op));
  }, [papers]);

  // Counts per category tab (ignoring current tab filter, but respecting other filters)
  const tabCounts = useMemo(() => {
    const base = query.trim() ? fuse.search(query).map(r => r.item) : papers;
    const afterDensity = filterDensity === "all" ? base : base.filter(p => p.density === filterDensity);
    const afterOp = filterOp === "all" ? afterDensity : afterDensity.filter(p => p.operations.includes(filterOp));
    const counts: Record<string, number> = { all: afterOp.length };
    for (const tab of CATEGORY_TABS.slice(1)) {
      counts[tab.value] = afterOp.filter(p => p.type === tab.value).length;
    }
    return counts;
  }, [query, filterDensity, filterOp, fuse, papers]);

  // Counts per operation pill (respecting other filters)
  const opCounts = useMemo(() => {
    const base = query.trim() ? fuse.search(query).map(r => r.item) : papers;
    const afterDensity = filterDensity === "all" ? base : base.filter(p => p.density === filterDensity);
    const afterType = filterType === "all" ? afterDensity : afterDensity.filter(p => p.type === filterType);
    const counts: Record<string, number> = {};
    for (const op of activeOperations) {
      counts[op] = afterType.filter(p => p.operations.includes(op)).length;
    }
    return counts;
  }, [query, filterDensity, filterType, activeOperations, fuse, papers]);

  // Counts per density button (respecting other filters)
  const densityCounts = useMemo(() => {
    const base = query.trim() ? fuse.search(query).map(r => r.item) : papers;
    const afterType = filterType === "all" ? base : base.filter(p => p.type === filterType);
    const afterOp = filterOp === "all" ? afterType : afterType.filter(p => p.operations.includes(filterOp));
    const counts: Record<string, number> = {};
    for (const d of DENSITY_BUTTONS) {
      counts[d.value] = afterOp.filter(p => p.density === d.value).length;
    }
    return counts;
  }, [query, filterType, filterOp, fuse, papers]);

  const filtered = useMemo(() => {
    let result = query.trim()
      ? fuse.search(query).map(r => r.item)
      : [...papers];

    if (filterDensity !== "all") result = result.filter(p => p.density === filterDensity);
    if (filterType !== "all") result = result.filter(p => p.type === filterType);
    if (filterOp !== "all") result = result.filter(p => p.operations.includes(filterOp));

    // Sort (only applies when no search query, or always)
    if (!query.trim()) {
      switch (sortBy) {
        case "oldest":
          result = [...result].sort((a, b) => new Date(a.fileDate).getTime() - new Date(b.fileDate).getTime());
          break;
        case "title":
          result = [...result].sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "wordcount":
          result = [...result].sort((a, b) => b.wordCount - a.wordCount);
          break;
        default: // newest
          result = [...result].sort((a, b) => new Date(b.fileDate).getTime() - new Date(a.fileDate).getTime());
      }
    }

    return result;
  }, [query, filterDensity, filterType, filterOp, sortBy, fuse, papers]);

  const hasFilters = query || filterDensity !== "all" || filterType !== "all" || filterOp !== "all";

  function clearFilters() {
    setQuery("");
    setFilterDensity("all");
    setFilterType("all");
    setFilterOp("all");
    setSortBy("newest");
  }

  return (
    <>
      {/* Search + Sort row */}
      <div className="flex gap-3 mb-5">
        <div className="relative flex-1">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search titles and abstracts..."
            className="w-full bg-[var(--card)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-crimson transition-colors font-sans"
          />
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[var(--muted-foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
        </div>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="bg-[var(--card)] border border-[var(--border)] rounded-lg px-3 py-2.5 text-xs text-[var(--muted-foreground)] focus:outline-none focus:border-crimson font-mono shrink-0"
        >
          {SORT_OPTIONS.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-1 mb-4 p-1 rounded-lg bg-[var(--muted)] border border-[var(--border)]">
        {CATEGORY_TABS.map(tab => {
          const count = tabCounts[tab.value] ?? 0;
          const active = filterType === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => setFilterType(active ? "all" : tab.value)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                active
                  ? "bg-crimson text-white shadow-sm"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--card)]"
              }`}
            >
              {tab.label}
              <span className={`text-[10px] px-1 py-0.5 rounded font-mono ${
                active ? "bg-white/20 text-white" : "bg-[var(--border)] text-[var(--muted-foreground)]"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Density filter buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase tracking-wider self-center mr-1">Density:</span>
        {DENSITY_BUTTONS.map(d => {
          const count = densityCounts[d.value] ?? 0;
          const active = filterDensity === d.value;
          const baseStyle = DENSITY_STYLES[d.value] || DENSITY_STYLES.body;
          const activeStyle = DENSITY_ACTIVE_STYLES[d.value] || DENSITY_ACTIVE_STYLES.body;
          return (
            <button
              key={d.value}
              onClick={() => setFilterDensity(active ? "all" : d.value)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono border transition-all ${
                active ? activeStyle : `${baseStyle} opacity-60 hover:opacity-100`
              }`}
            >
              {d.label}
              <span className="text-[9px] opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Operation filter pills */}
      {activeOperations.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase tracking-wider self-center mr-1">Operation:</span>
          {activeOperations.map(op => {
            const count = opCounts[op] ?? 0;
            const active = filterOp === op;
            return (
              <button
                key={op}
                onClick={() => setFilterOp(active ? "all" : op)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border transition-all ${
                  active
                    ? "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]"
                    : "text-[var(--muted-foreground)] border-[var(--border)] hover:border-[var(--foreground)]/30 hover:text-[var(--foreground)]"
                }`}
              >
                {op}
                <span className={`text-[9px] ${active ? "opacity-70" : "opacity-50"}`}>{count}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Result count + clear */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-xs font-mono text-[var(--muted-foreground)]">
          {filtered.length} paper{filtered.length !== 1 ? "s" : ""}{hasFilters ? " matching" : ""}
        </p>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="text-xs font-mono text-crimson hover:underline"
          >
            Clear all filters
          </button>
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
