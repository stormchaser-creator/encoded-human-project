import Link from "next/link";

const pillars = [
  {
    icon: "⬡",
    title: "Framework",
    description:
      "A structural model of the human system across three vessels, ten components, eight operations, and three densities of analysis. Not metaphor — operational architecture.",
    href: "/framework",
    tag: "Model",
  },
  {
    icon: "◎",
    title: "Research",
    description:
      "Peer-reviewed findings, synthesis documents, and original analysis. Every claim carries an epistemic ceiling badge: FACT, HYPOTHESIS, INTERPRETATION, or SPECULATION.",
    href: "/research",
    tag: "Evidence",
  },
  {
    icon: "⬟",
    title: "Tools",
    description:
      "Instruments for pattern recognition, diagnostic mapping, and intervention design. Built for clinicians, researchers, and informed individuals.",
    href: "/framework#tools",
    tag: "Applied",
  },
];

const trustItems = [
  {
    label: "Primary Investigator",
    value: "Eric Whitney, DO",
    sub: "Osteopathic physician",
  },
  {
    label: "Knowledge Base",
    value: "519K+ chunks",
    sub: "indexed & tagged",
  },
  {
    label: "License",
    value: "CC-BY-SA 4.0",
    sub: "open access",
  },
  {
    label: "AI Disclosed",
    value: "Built with Pearl",
    sub: "transparent AI use",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/50 to-[var(--background)]" />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--muted)] text-xs text-[var(--muted-foreground)] font-mono mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson inline-block animate-pulse" />
              Open Research · v0.1 Public
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--foreground)] leading-[1.1] mb-6">
              The Encoded
              <br />
              <span className="text-crimson">Human</span> Project
            </h1>

            <p className="text-xl text-[var(--muted-foreground)] leading-relaxed mb-10 max-w-2xl">
              An open research project mapping how the human body actually works
              — across biology, consciousness, and lived experience — and
              building tools to read the difference between original design and
              what got installed on top.
            </p>

            {/* Hook */}
            <div className="border-l-2 border-crimson pl-6 mb-12">
              <p className="text-lg text-[var(--foreground)] font-serif italic leading-relaxed">
                Your body is a light machine. It arrived with a design — a
                specific pattern of how you process, regulate, defend, restore,
                and eliminate. Before you could understand that design, life
                wrote over parts of it. Family, culture, trauma, adaptation.
                Most of what people call personality is a mixture of original
                encoding and accumulated installation. We&apos;re building the
                science to distinguish one from the other.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-6 py-3 bg-crimson text-white font-sans text-sm font-medium rounded-md hover:bg-[#a50e2d] transition-colors"
              >
                Read the Research
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/framework"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--foreground)] font-sans text-sm font-medium rounded-md hover:border-crimson hover:text-crimson transition-colors"
              >
                Explore the Framework
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-[var(--border)] bg-[var(--muted)]">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map(({ label, value, sub }) => (
              <div key={label} className="text-center">
                <div className="text-lg font-serif font-semibold text-[var(--foreground)]">
                  {value}
                </div>
                <div className="text-xs text-[var(--muted-foreground)] mt-0.5">
                  {label}
                </div>
                <div className="text-xs text-crimson mt-0.5">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-xs font-mono text-crimson uppercase tracking-widest mb-6">
          Why this matters
        </p>
        <div className="max-w-3xl space-y-6 text-[var(--foreground)] text-lg leading-relaxed">
          <p>
            Medicine treats organs. Psychology treats minds. Spirituality treats
            souls. Nobody treats the whole system — because nobody has a map of
            the whole system.
          </p>
          <p className="font-serif text-xl font-medium">
            The Encoded Human is building that map.
          </p>
          <p className="text-[var(--muted-foreground)]">
            We start with biology — 519,000 curated research entries spanning
            every major physiological operation from receptor-level signal
            transduction to circadian regulation to immune surveillance. We tag
            every claim with its epistemic status: peer-reviewed fact, framework
            interpretation, or working hypothesis. Nothing is hidden. Nothing is
            inflated.
          </p>
          <p className="text-[var(--muted-foreground)]">
            Then we ask a question no single discipline asks: is this pattern
            original to the person&apos;s design, or was it installed by
            circumstance?
          </p>
          <p className="text-[var(--muted-foreground)]">
            A child inherits their microbiome from their mother&apos;s birth
            canal. They inherit stress-response set points from their
            family&apos;s nervous system. They inherit beliefs from their
            culture, coping strategies from their developmental environment, and
            epigenetic markers from ancestors they never met. By adulthood, the
            original signal is buried under layers of installation — some
            useful, some not, most invisible.
          </p>
          <p className="text-[var(--muted-foreground)]">
            We are building the diagnostic instruments and the research
            framework to read those layers. Not to judge them. To see them
            clearly enough that the person can choose what stays and what goes.
          </p>
          <div className="border-l-2 border-[var(--border)] pl-6 mt-8">
            <p className="text-[var(--muted-foreground)] text-base">
              This is not alternative medicine. This is not wellness culture.
              This is a serious attempt to build an integrated model of the
              human system that holds biological rigor and consciousness
              research in the same frame — without pretending either one is the
              whole picture.
            </p>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="border-t border-[var(--border)] max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="text-xs font-mono text-crimson uppercase tracking-widest mb-3">
            What we&apos;re building
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
            Three pillars of an integrated science
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map(({ icon, title, description, href, tag }) => (
            <Link
              key={title}
              href={href}
              className="group relative flex flex-col p-8 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-crimson/50 transition-all duration-300"
            >
              <div className="absolute top-6 right-6">
                <span className="text-xs font-mono text-[var(--muted-foreground)] border border-[var(--border)] px-2 py-0.5 rounded">
                  {tag}
                </span>
              </div>

              <div className="text-2xl text-crimson mb-6 leading-none">
                {icon}
              </div>

              <h3 className="font-serif text-xl font-semibold text-[var(--foreground)] mb-3 group-hover:text-crimson transition-colors">
                {title}
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed flex-1">
                {description}
              </p>

              <div className="mt-6 flex items-center gap-1 text-xs text-crimson opacity-0 group-hover:opacity-100 transition-opacity">
                Explore
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Epistemic standards section */}
      <section className="border-y border-[var(--border)] bg-[var(--muted)]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-mono text-crimson uppercase tracking-widest mb-3">
                Epistemic clarity
              </p>
              <h2 className="font-serif text-3xl font-bold text-[var(--foreground)] mb-6">
                Science, not belief
              </h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
                Every claim in this project carries an epistemic tag. We
                distinguish between what is established, what is hypothesized,
                and what is interpretive. The ceiling of each claim is marked
                explicitly.
              </p>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                This is not wellness content. Not self-help. Not a spiritual
                framework wearing scientific clothing. It is an attempt to build
                rigorous, falsifiable models of how human systems work — and to
                make those models publicly available.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  badge: "FACT",
                  color:
                    "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
                  desc: "Supported by peer-reviewed evidence; reproducible.",
                },
                {
                  badge: "HYPOTHESIS",
                  color: "text-amber-400 border-amber-400/30 bg-amber-400/5",
                  desc: "Testable claim consistent with evidence but not yet confirmed.",
                },
                {
                  badge: "INTERPRETATION",
                  color: "text-blue-400 border-blue-400/30 bg-blue-400/5",
                  desc: "Analytical inference or synthesis. Explicitly labeled as such.",
                },
                {
                  badge: "SPECULATION",
                  color:
                    "text-violet-400 border-violet-400/30 bg-violet-400/5",
                  desc: "Creative or intuitive leap without direct evidence. Flagged clearly.",
                },
              ].map(({ badge, color, desc }) => (
                <div
                  key={badge}
                  className="flex items-start gap-4 p-4 rounded-lg border border-[var(--border)] bg-[var(--card)]"
                >
                  <span
                    className={`shrink-0 text-xs font-mono font-semibold px-2 py-1 rounded border ${color}`}
                  >
                    {badge}
                  </span>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
          Start with the research
        </h2>
        <p className="text-[var(--muted-foreground)] mb-10 max-w-xl mx-auto">
          Browse synthesis documents and original analysis. Filter by epistemic
          level and operation tag. Everything is open access.
        </p>
        <Link
          href="/research"
          className="inline-flex items-center gap-2 px-8 py-4 bg-crimson text-white font-sans text-sm font-medium rounded-md hover:bg-[#a50e2d] transition-colors"
        >
          Read the Research
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </section>
    </div>
  );
}
