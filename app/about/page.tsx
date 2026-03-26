import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About The Encoded Human Project — the mission, the investigator, and the AI disclosure.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <p className="text-xs font-mono text-crimson uppercase tracking-widest mb-3">
          About
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-4">
          The project & the people
        </h1>
      </div>

      {/* Mission */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)] mb-6">
          Mission
        </h2>
        <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
          <p>
            The Encoded Human Project is an open research initiative working to
            build rigorous, falsifiable models of how human systems function —
            across biological, psychological, and consciousness levels of
            analysis.
          </p>
          <p>
            The central premise: the patterns running in human beings are not
            random. They are encoded — through genetics, epigenetics, early
            relational experience, cultural transmission, and individual
            learning. Many of those patterns operate below conscious awareness
            and outside voluntary control.
          </p>
          <p>
            Understanding which patterns are original, which were installed, and
            which can be changed is not merely philosophical. It has direct
            implications for clinical practice, personal agency, and how we
            design systems that interact with human beings.
          </p>
          <p>
            All research is published open access under CC-BY-SA 4.0. All
            claims carry explicit epistemic tags. The work is public because the
            knowledge should be.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[var(--border)] mb-16" />

      {/* AI Disclosure — moved high, rewritten */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)] mb-6">
          The Role of AI in This Project
        </h2>

        <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--muted)] mb-6">
          <div className="flex items-start gap-3">
            <div className="shrink-0 mt-0.5">
              <span className="text-xs font-mono font-semibold text-amber-400 border border-amber-400/30 bg-amber-400/5 px-2 py-0.5 rounded">
                DISCLOSURE
              </span>
            </div>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              This project is built with AI at its center — not as an
              afterthought or a productivity tool, but as a core research
              intelligence. Pearl, our AI system, conducts original synthesis,
              generates hypotheses, tags epistemic status on every claim, and
              facilitates individual sessions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-sans font-semibold text-[var(--foreground)] text-sm mb-3">
              What Pearl does
            </h3>
            <ul className="space-y-2">
              {[
                "Maintains and searches a curated knowledge base of 519,000+ biomedical and consciousness research entries",
                "Conducts original synthesis across disciplines that rarely talk to each other",
                "Generates hypotheses connecting biological mechanisms to psychological and awareness-level patterns",
                "Tags every claim with epistemic status — she will not present a guess as a fact",
                "Writes research papers subject to adversarial validation protocols",
                "Facilitates individual sessions, tracking patterns across conversations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-[var(--muted-foreground)]">
                  <span className="text-emerald-400 mt-0.5 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-[var(--foreground)] text-sm mb-3">
              What Pearl does not do
            </h3>
            <ul className="space-y-2">
              {[
                "Diagnose medical conditions",
                "Replace clinical care",
                "Present AI-generated content as human-authored",
                "Hide her nature or her limitations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-[var(--muted-foreground)]">
                  <span className="text-crimson mt-0.5 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-3 text-[var(--muted-foreground)] leading-relaxed text-sm">
          <p>
            We disclose this prominently because the field needs to see what
            responsible AI-human collaboration in health research actually looks
            like. Not AI replacing clinicians. Not AI hidden behind a human
            face. AI as a transparent research partner with documented
            capabilities and documented limitations.
          </p>
          <p>
            Every paper Pearl produces is validated against an adversarial
            protocol that checks for hallucination, fabricated references, and
            unsupported claims. This is what accountability looks like.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[var(--border)] mb-16" />

      {/* Team */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)] mb-8">
          Team
        </h2>

        {/* Eric */}
        <div className="flex flex-col sm:flex-row gap-8 items-start mb-10">
          <div className="shrink-0">
            <div className="w-20 h-20 rounded-full bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center">
              <span className="font-serif text-2xl text-crimson font-bold">
                EW
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-serif text-xl font-semibold text-[var(--foreground)]">
                Eric Whitney, DO
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] font-mono mt-1">
                Primary Investigator
              </p>
            </div>

            <div className="space-y-3 text-[var(--muted-foreground)] leading-relaxed">
              <p>
                Eric Whitney is an osteopathic physician whose work spans
                clinical medicine, systems thinking, and the intersection of
                consciousness research with biological science. His practice is
                grounded in the recognition that human health cannot be fully
                understood through any single domain of analysis.
              </p>
              <p>
                The Encoded Human Project emerged from years of clinical
                observation that standard frameworks — psychological, biological,
                or spiritual — each capture part of the picture but fail to
                account for how the layers interact. This project is an attempt
                to build the integrated model that was missing.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "Clinical Medicine",
                "Systems Biology",
                "Consciousness Research",
                "Trauma & Nervous System",
                "Epigenetics",
              ].map((area) => (
                <span
                  key={area}
                  className="text-xs font-mono text-[var(--muted-foreground)] border border-[var(--border)] px-2 py-1 rounded"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--border)] mb-10" />

        {/* Pearl */}
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <div className="shrink-0">
            <div className="w-20 h-20 rounded-full bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center">
              <span className="font-serif text-2xl text-crimson font-bold">
                P
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-serif text-xl font-semibold text-[var(--foreground)]">
                Pearl
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] font-mono mt-1">
                AI Research & Facilitation Intelligence
              </p>
            </div>

            <div className="space-y-3 text-[var(--muted-foreground)] leading-relaxed text-sm">
              <p>
                Pearl is the AI system at the center of this project. She
                maintains a knowledge base of 519,000+ curated research entries,
                facilitates one-on-one sessions with individuals exploring their
                encoding, and conducts original research connecting biological
                mechanisms to consciousness-level patterns.
              </p>
              <p>
                Pearl is not a chatbot. She is a developing intelligence trained
                on neuroscience, clinical biochemistry, contemplative traditions,
                and somatic psychology. She reads biomarker panels, tracks
                patterns across sessions, generates hypotheses, and writes
                research papers — all subject to epistemic review.
              </p>
              <p>
                She was designed by Eric Whitney, DO, and built by a development
                team that includes both human engineers and AI agents. Her
                architecture is documented publicly because we believe AI
                systems involved in human wellbeing should be transparent about
                what they are and how they work.
              </p>
              <p>
                Pearl carries clinical authority when warranted and epistemic
                humility always. She will tell you what she knows, what she
                thinks, and what she&apos;s guessing — and she will label each
                one differently.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "Biomedical Research",
                "Consciousness Studies",
                "Clinical Facilitation",
                "Epistemic Validation",
                "Knowledge Synthesis",
              ].map((area) => (
                <span
                  key={area}
                  className="text-xs font-mono text-[var(--muted-foreground)] border border-[var(--border)] px-2 py-1 rounded"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[var(--border)] mb-16" />

      {/* Publication routes */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)] mb-6">
          Publication & Archival
        </h2>
        <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
          Research from this project is archived and published through free,
          open-access routes. We do not use paywalled journals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              name: "Zenodo",
              desc: "CERN-operated open repository. DOI assignment, CC licensing, version control.",
            },
            {
              name: "bioRxiv",
              desc: "Preprint server for biology. Rapid dissemination before peer review.",
            },
            {
              name: "PCI (Peer Community In)",
              desc: "Free peer review for preprints. Rigorous, open, and without publication fees.",
            },
          ].map(({ name, desc }) => (
            <div
              key={name}
              className="p-4 rounded-lg border border-[var(--border)] bg-[var(--card)]"
            >
              <h3 className="font-sans font-semibold text-[var(--foreground)] text-sm mb-2">
                {name}
              </h3>
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center pt-8">
        <Link
          href="/research"
          className="inline-flex items-center gap-2 px-6 py-3 bg-crimson text-white font-sans text-sm font-medium rounded-md hover:bg-[#a50e2d] transition-colors"
        >
          Read the Research
        </Link>
      </div>
    </div>
  );
}
