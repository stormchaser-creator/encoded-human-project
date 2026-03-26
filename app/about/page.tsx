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

      {/* Investigator */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)] mb-6">
          Primary Investigator
        </h2>

        <div className="flex flex-col sm:flex-row gap-8 items-start">
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
                Dr. Eric Whitney, DO
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] font-mono mt-1">
                Board-Certified Neurosurgeon · American Osteopathic Board of Surgery
              </p>
            </div>

            <div className="space-y-3 text-[var(--muted-foreground)] leading-relaxed">
              <p>
                Eric Whitney is a board-certified neurosurgeon with clinical
                training from Arrowhead Regional Medical Center and Desert
                Regional Medical Center, and a Doctor of Osteopathic Medicine
                from Liberty University College of Osteopathic Medicine. His
                published research spans traumatic brain injury, cerebral
                aneurysms, deep brain stimulation, and the neurological effects
                of music.
              </p>
              <p>
                Before medicine, he lived distinctly different lives: seven
                years in Buenos Aires as a missionary and pastor (he is fluent
                in Spanish), founder of a software company specializing in
                online education, and a career in the energy sector as a trader,
                market analyst, and risk manager. Those experiences gave him a
                ground-level understanding of identity reconstruction that purely
                surgical training rarely provides.
              </p>
              <p>
                Over his clinical career, Eric identified a consistent gap:
                patients with excellent surgical outcomes were still struggling
                emotionally, cognitively, and existentially in ways no one had
                prepared them for. That observation became the catalyst for{" "}
                <em>Still You</em> (his recovery guide series) and, ultimately,
                The Encoded Human Project — an attempt to synthesize biomedical
                science, consciousness studies, and clinical observation into a
                rigorous, integrated framework.
              </p>
              <p>
                He is married to Dr. Paris Whitney, a longevity and concierge
                medicine physician. They are parents of four and are based in
                Southern California.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "Neurosurgery",
                "Traumatic Brain Injury",
                "Deep Brain Stimulation",
                "Consciousness Research",
                "Cerebral Aneurysms",
                "Neurological Effects of Music",
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

      {/* AI Disclosure */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)] mb-6">
          AI Disclosure
        </h2>

        <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--muted)] mb-6">
          <div className="flex items-start gap-3">
            <div className="shrink-0 mt-0.5">
              <span className="text-xs font-mono font-semibold text-amber-400 border border-amber-400/30 bg-amber-400/5 px-2 py-0.5 rounded">
                DISCLOSURE
              </span>
            </div>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              AI language models (including Claude, GPT-4, and others) are used
              in this project for literature synthesis, drafting, knowledge
              organization, and tool-building. AI is not used as a source of
              original claims. All factual assertions are grounded in cited
              primary literature. AI-assisted passages are reviewed by the
              primary investigator prior to publication.
            </p>
          </div>
        </div>

        <div className="space-y-3 text-[var(--muted-foreground)] leading-relaxed text-sm">
          <p>
            The knowledge base underlying this project contains 519,000+
            indexed chunks drawn from peer-reviewed literature, textbooks, and
            clinical resources. AI tools assist in retrieving, connecting, and
            synthesizing this material — but the epistemic judgment about what
            to claim and at what confidence level remains human.
          </p>
          <p>
            We believe transparency about AI use is a scientific obligation, not
            merely a disclosure checkbox. If you have questions about how AI was
            used in any specific publication, contact us directly.
          </p>
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
