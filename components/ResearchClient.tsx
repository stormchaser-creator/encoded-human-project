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

// ─── Design system ──────────────────────────────────────────────────────────

const DENSITY_BADGE: Record<string, { label: string; cls: string; dot: string }> = {
  body: {
    label: "Body",
    cls: "text-sky-400 border-sky-400/40 bg-sky-400/8",
    dot: "bg-sky-400",
  },
  soul: {
    label: "Soul",
    cls: "text-amber-400 border-amber-400/40 bg-amber-400/8",
    dot: "bg-amber-400",
  },
  spirit: {
    label: "Spirit",
    cls: "text-violet-400 border-violet-400/40 bg-violet-400/8",
    dot: "bg-violet-400",
  },
  "cross-density": {
    label: "Cross-Density",
    cls: "text-emerald-400 border-emerald-400/40 bg-emerald-400/8",
    dot: "bg-gradient-to-r from-sky-400 to-violet-400",
  },
};

const EPISTEMIC_CONFIG: Record<string, { label: string; color: string; dot: string; tip: string }> = {
  fact: {
    label: "Fact",
    color: "text-emerald-400",
    dot: "bg-emerald-400",
    tip: "Established scientific consensus or directly measured data",
  },
  interpretation: {
    label: "Interpretation",
    color: "text-blue-400",
    dot: "bg-blue-400",
    tip: "Pattern recognition applied to established data — reasonable but contestable",
  },
  hypothesis: {
    label: "Hypothesis",
    color: "text-amber-400",
    dot: "bg-amber-400",
    tip: "Testable claim with explicit falsification criteria",
  },
  speculation: {
    label: "Speculation",
    color: "text-violet-400",
    dot: "bg-violet-400/70",
    tip: "Exploratory reasoning — not yet falsifiable, offered for discussion",
  },
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

// Category definitions for section-based navigation
const CATEGORIES = [
  {
    id: "all",
    label: "All Papers",
    types: null,
    description: "",
  },
  {
    id: "translation-key",
    label: "Translation Key",
    types: ["translation-key"],
    description:
      "Clinical reference sections — how to read the eight operations through standard laboratory results.",
  },
  {
    id: "hypothesis",
    label: "Hypothesis Papers",
    types: ["hypothesis-paper"],
    description:
      "Testable claims with falsification criteria. Labeled by epistemic ceiling — speculation through hypothesis through interpretation.",
  },
  {
    id: "framework",
    label: "Framework Documents",
    types: ["framework-paper", "methodology"],
    description:
      "Architecture and methodology — how The Encoded Human Project is built and how it validates its claims.",
  },
  {
    id: "technical",
    label: "Technical Reports",
    types: ["research-paper", "technical-report", "letter"],
    description:
      "Research papers, notes, and letters to the editor.",
  },
];

// Featured paper slugs — pinned at top regardless of category
const FEATURED_SLUGS = [
  "how-we-validate-research-at-the-encoded-human-project",
  "the-light-machine-cross-scale-oscillatory-coherence-as-the-unified-mechanism-of",
  "the-light-machine-translation-key-standard-laboratory-tests-read-through-the-eig",
  "cross-scale-oscillatory-coupling-as-the-biological-substrate-of-coherence-a-unif",
];

const ALL_OPERATIONS = [
  "conduction",
  "defense",
  "regulation",
  "synthesis",
  "reception",
  "elimination",
  "respiration",
  "restoration",
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  } catch {
    return d;
  }
}

function firstSentence(abstract: string): string {
  if (!abstract) return "";
  const trimmed = abstract.trim();
  // Find first sentence boundary
  const match = trimmed.match(/^[^.!?]+[.!?]/);
  if (match) return match[0].trim();
  // Fallback: first 160 chars
  return trimmed.slice(0, 160) + (trimmed.length > 160 ? "…" : "");
}

// ─── EpistemicDot ─────────────────────────────────────────────────────────────

function EpistemicDot({ tier }: { tier: string }) {
  const cfg = EPISTEMIC_CONFIG[tier] ?? EPISTEMIC_CONFIG.speculation;
  return (
    <span className="relative group/tip inline-flex items-center gap-1 cursor-default">
      <span className={`w-2 h-2 rounded-full inline-block flex-shrink-0 ${cfg.dot}`} />
      <span className={`text-[10px] font-mono font-semibold ${cfg.color}`}>
        {cfg.label.toUpperCase()}
      </span>
      {/* Tooltip */}
      <span className="absolute bottom-full left-0 mb-1.5 w-52 p-2 rounded-lg bg-[#0d0d14] border border-[var(--border)] text-[10px] text-[var(--muted-foreground)] leading-relaxed opacity-0 group-hover/tip:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl">
        {cfg.tip}
      </span>
    </span>
  );
}

// ─── DensityBadge ────────────────────────────────────────────────────────────

function DensityBadge({ density }: { density: string }) {
  const cfg = DENSITY_BADGE[density] ?? DENSITY_BADGE.body;
  return (
    <span
      className={`inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded border ${cfg.cls}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {cfg.label.toUpperCase()}
    </span>
  );
}

// ─── PaperCard ───────────────────────────────────────────────────────────────

function PaperCard({ paper, featured = false }: { paper: Paper; featured?: boolean }) {
  const summary = firstSentence(paper.abstract);

  return (
    <Link
      href={`/research/${paper.slug}`}
      className={`group flex flex-col p-5 rounded-xl border transition-all ${
        featured
          ? "border-[var(--border)] bg-[var(--card)] hover:border-crimson/30 hover:bg-[#16161e] ring-1 ring-crimson/10"
          : "border-[var(--border)] bg-[var(--card)] hover:border-[var(--border)] hover:bg-[#16161e]"
      }`}
    >
      {/* Top row: density + epistemic + type */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <DensityBadge density={paper.density} />
        <EpistemicDot tier={paper.epistemicCeiling} />
        {featured && (
          <span className="ml-auto text-[9px] font-mono text-crimson border border-crimson/30 bg-crimson/5 px-1.5 py-0.5 rounded uppercase tracking-wider">
            Featured
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-serif text-[15px] font-semibold text-[var(--foreground)] leading-snug mb-2 group-hover:text-crimson transition-colors line-clamp-3">
        {paper.title}
      </h3>

      {/* One-line summary */}
      {summary && (
        <p className="text-xs text-[var(--muted-foreground)] leading-relaxed line-clamp-2 mb-3 flex-1">
          {summary}
        </p>
      )}

      {/* Operations */}
      {paper.operations.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {paper.operations.slice(0, 5).map(op => (
            <span
              key={op}
              className="text-[9px] font-mono text-[var(--muted-foreground)] bg-[var(--muted)] px-1.5 py-0.5 rounded capitalize"
            >
              {op}
            </span>
          ))}
          {paper.operations.length > 5 && (
            <span className="text-[9px] font-mono text-[var(--muted-foreground)] px-1 py-0.5">
              +{paper.operations.length - 5}
            </span>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-[var(--border)]">
        <span className="text-[9px] font-mono text-[var(--muted-foreground)] uppercase tracking-wide">
          {TYPE_LABELS[paper.type] || paper.type}
        </span>
        <span className="text-[9px] font-mono text-[var(--muted-foreground)]">
          {formatDate(paper.fileDate)}
        </span>
      </div>
    </Link>
  );
}

// ─── CategorySection ─────────────────────────────────────────────────────────

function CategorySection({
  papers,
  featuredSlugs,
}: {
  papers: Paper[];
  featuredSlugs: Set<string>;
}) {
  const categorized = CATEGORIES.filter(c => c.id !== "all").map(cat => ({
    ...cat,
    papers: papers.filter(p => cat.types!.includes(p.type)),
  }));

  return (
    <div className="space-y-14">
      {categorized.map(cat => {
        if (cat.papers.length === 0) return null;
        const featured = cat.papers.filter(p => featuredSlugs.has(p.slug));
        const rest = cat.papers.filter(p => !featuredSlugs.has(p.slug));
        const sorted = [...featured, ...rest].sort(
          (a, b) => new Date(b.fileDate).getTime() - new Date(a.fileDate).getTime()
        );

        return (
          <section key={cat.id}>
            {/* Section header */}
            <div className="flex items-baseline gap-4 mb-2">
              <h2 className="font-serif text-xl font-semibold text-[var(--foreground)]">
                {cat.label}
              </h2>
              <span className="text-xs font-mono text-[var(--muted-foreground)]">
                {cat.papers.length} paper{cat.papers.length !== 1 ? "s" : ""}
              </span>
            </div>
            {cat.description && (
              <p className="text-sm text-[var(--muted-foreground)] mb-5 max-w-2xl leading-relaxed">
                {cat.description}
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sorted.map(p => (
                <PaperCard key={p.slug} paper={p} featured={featuredSlugs.has(p.slug)} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

// ─── StatsBar ────────────────────────────────────────────────────────────────

function StatsBar({ papers }: { papers: Paper[] }) {
  const ops = new Set(papers.flatMap(p => p.operations)).size;
  const densities = new Set(papers.map(p => p.density)).size;

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs font-mono text-[var(--muted-foreground)] mb-8 pb-6 border-b border-[var(--border)]">
      <span>
        <span className="text-[var(--foreground)] font-semibold">{papers.length}</span> papers
      </span>
      <span>
        <span className="text-[var(--foreground)] font-semibold">{ops}</span> operations
      </span>
      <span>
        <span className="text-[var(--foreground)] font-semibold">{densities}</span> densities
      </span>
      <span>Updated March 2026</span>
      <span className="ml-auto text-crimson">CC-BY-SA 4.0 · Open Access</span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ResearchClient({ papers }: { papers: Paper[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const featuredSlugs = useMemo(() => new Set(FEATURED_SLUGS), []);

  const fuse = useMemo(
    () =>
      new Fuse(papers, {
        keys: [
          { name: "title", weight: 2 },
          { name: "abstract", weight: 1 },
          { name: "operations", weight: 0.5 },
        ],
        threshold: 0.35,
        includeScore: true,
        includeMatches: true,
        minMatchCharLength: 2,
      }),
    [papers]
  );

  const activeOperations = useMemo(() => {
    const s = new Set(papers.flatMap(p => p.operations));
    return ALL_OPERATIONS.filter(op => s.has(op));
  }, [papers]);

  // Filter by category first
  const categoryFiltered = useMemo(() => {
    const cat = CATEGORIES.find(c => c.id === activeCategory);
    if (!cat || !cat.types) return papers;
    return papers.filter(p => cat.types!.includes(p.type));
  }, [papers, activeCategory]);

  // Then search within category
  const searchResults = useMemo(() => {
    if (!query.trim()) return null;
    return fuse.search(query, { limit: 50 }).map(r => r.item);
  }, [query, fuse]);

  const displayed = useMemo(() => {
    if (searchResults) {
      // When searching, apply category filter to search results
      const cat = CATEGORIES.find(c => c.id === activeCategory);
      if (cat?.types) return searchResults.filter(p => cat.types!.includes(p.type));
      return searchResults;
    }
    return categoryFiltered;
  }, [searchResults, categoryFiltered, activeCategory]);

  const isSearching = !!query.trim();

  return (
    <>
      <StatsBar papers={papers} />

      {/* Category tabs */}
      <div className="flex flex-wrap gap-1 mb-6">
        {CATEGORIES.map(cat => {
          const count =
            cat.types === null
              ? papers.length
              : papers.filter(p => cat.types!.includes(p.type)).length;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                activeCategory === cat.id
                  ? "bg-crimson text-white"
                  : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              }`}
            >
              {cat.label}
              <span
                className={`ml-1.5 text-[10px] ${
                  activeCategory === cat.id ? "text-white/70" : "text-[var(--muted-foreground)]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="mb-8">
        <div className="relative">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by title, abstract, or operation…"
            className="w-full bg-[var(--card)] border border-[var(--border)] rounded-lg pl-10 pr-10 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-crimson transition-colors font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      {isSearching ? (
        /* Search results — flat grid */
        <>
          <p className="text-xs font-mono text-[var(--muted-foreground)] mb-6">
            {displayed.length} result{displayed.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
          </p>
          {displayed.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayed.map(paper => (
                <PaperCard key={paper.slug} paper={paper} featured={featuredSlugs.has(paper.slug)} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-[var(--muted-foreground)] text-sm mb-2">
                No papers found for &ldquo;{query}&rdquo;
              </p>
              <button
                onClick={() => setQuery("")}
                className="text-xs font-mono text-crimson hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </>
      ) : activeCategory === "all" ? (
        /* Default view — categorized sections */
        <CategorySection papers={papers} featuredSlugs={featuredSlugs} />
      ) : (
        /* Single category view */
        <>
          {/* Category description */}
          {CATEGORIES.find(c => c.id === activeCategory)?.description && (
            <p className="text-sm text-[var(--muted-foreground)] mb-6 max-w-2xl leading-relaxed">
              {CATEGORIES.find(c => c.id === activeCategory)!.description}
            </p>
          )}
          <p className="text-xs font-mono text-[var(--muted-foreground)] mb-6">
            {displayed.length} paper{displayed.length !== 1 ? "s" : ""}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...displayed]
              .sort((a, b) => new Date(b.fileDate).getTime() - new Date(a.fileDate).getTime())
              .map(paper => (
                <PaperCard
                  key={paper.slug}
                  paper={paper}
                  featured={featuredSlugs.has(paper.slug)}
                />
              ))}
          </div>
        </>
      )}
    </>
  );
}
