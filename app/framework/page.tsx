import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Framework",
  description:
    "The Encoded Human architecture — a structural model of the human system across three vessels, ten components, eight operations, and three densities.",
};

export default function FrameworkPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <p className="text-xs font-mono text-crimson uppercase tracking-widest mb-3">
          Operational Architecture
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
          The Encoded Human Architecture
        </h1>
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl leading-relaxed mb-4">
          A structural model of the human system across three densities — body,
          soul, and spirit — unified by eight operations and connected by
          twenty-two pathways.
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

      {/* Portal Sentence */}
      <section className="mb-16 p-8 rounded-xl border border-crimson/20 bg-crimson/5">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)] mb-4">
          The Portal Sentence
        </h2>
        <blockquote className="font-serif text-xl text-[var(--foreground)] italic leading-relaxed mb-6 border-l-2 border-crimson pl-6">
          &ldquo;This human body is a multidimensional light machine, uniquely
          encoded with a soul, powered by spirit, for the purpose of
          life.&rdquo;
        </blockquote>
        <p className="text-[var(--muted-foreground)] leading-relaxed text-sm">
          Every word is load-bearing. Four key terms — Body, Soul, Spirit, Life
          — name the four dimensions of the system and establish how they pair:
          Body and Spirit form the vertical axis (hardware and electricity), Soul
          and Life form the horizontal axis (software and output).
        </p>
        <p className="text-[var(--muted-foreground)] leading-relaxed text-sm mt-3">
          This is not metaphor. It is an architectural claim — that the human
          system operates simultaneously at three densities of resolution, and
          that life circumstances are the diagnostic mirror showing whether those
          densities are coherent or fragmented.
        </p>
      </section>

      {/* Three Vessels, Ten Components */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)] mb-4">
          Three Vessels, Ten Components
        </h2>
        <p className="text-[var(--muted-foreground)] leading-relaxed mb-8 text-sm max-w-3xl">
          The system consists of ten functional components organized into three
          vessels — Spirit, Soul, and Body — plus a tenth component where
          everything lands in lived experience. Each vessel contains three
          components arranged by a fundamental rhythm: one expands, one
          contracts, one transforms. This triplet — expand, contract, transform
          — is the minimum functional unit of the architecture. It operates at
          every scale.
        </p>

        <div className="space-y-6">
          {/* Spirit Vessel */}
          <div className="p-6 rounded-xl border border-violet-400/20 bg-violet-400/5">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest">
                Spirit Vessel
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  name: "Awareness",
                  role: "expands",
                  desc: "Pure undifferentiated consciousness, the ground of being",
                },
                {
                  name: "Purpose",
                  role: "contracts",
                  desc: "The first creative impulse, life direction, calling",
                },
                {
                  name: "Intuition",
                  role: "transforms",
                  desc: "Direct knowing, inner authority, pattern recognition without thought",
                },
              ].map(({ name, role, desc }) => (
                <div
                  key={name}
                  className="p-4 rounded-lg border border-violet-400/10 bg-[var(--card)]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-serif font-semibold text-violet-400 text-sm">
                      {name}
                    </span>
                    <span className="text-xs font-mono text-[var(--muted-foreground)] border border-[var(--border)] px-1.5 py-0.5 rounded">
                      {role}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Soul Vessel */}
          <div className="p-6 rounded-xl border border-blue-400/20 bg-blue-400/5">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                Soul Vessel
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  name: "Meaning",
                  role: "expands",
                  desc: "Organizing intelligence, worldview, the drive to understand",
                },
                {
                  name: "Discernment",
                  role: "contracts",
                  desc: "Discriminating strength, boundaries, protective intelligence",
                },
                {
                  name: "The Heart",
                  role: "transforms",
                  desc: "The integrating center where upper and lower meet",
                },
              ].map(({ name, role, desc }) => (
                <div
                  key={name}
                  className="p-4 rounded-lg border border-blue-400/10 bg-[var(--card)]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-serif font-semibold text-blue-400 text-sm">
                      {name}
                    </span>
                    <span className="text-xs font-mono text-[var(--muted-foreground)] border border-[var(--border)] px-1.5 py-0.5 rounded">
                      {role}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Body Vessel */}
          <div className="p-6 rounded-xl border border-emerald-400/20 bg-emerald-400/5">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                Body Vessel
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  name: "Feeling",
                  role: "expands",
                  desc: "Somatic sensation, instinct, desire, emotional range",
                },
                {
                  name: "Thought",
                  role: "contracts",
                  desc: "Analysis, narrative, mental clarity, honest speech",
                },
                {
                  name: "Energy",
                  role: "transforms",
                  desc: "Vitality, biofield, life force, energetic boundaries",
                },
              ].map(({ name, role, desc }) => (
                <div
                  key={name}
                  className="p-4 rounded-lg border border-emerald-400/10 bg-[var(--card)]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-serif font-semibold text-emerald-400 text-sm">
                      {name}
                    </span>
                    <span className="text-xs font-mono text-[var(--muted-foreground)] border border-[var(--border)] px-1.5 py-0.5 rounded">
                      {role}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* The Tenth Component */}
          <div className="p-6 rounded-xl border border-crimson/20 bg-crimson/5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-bold text-crimson uppercase tracking-widest">
                The Tenth Component
              </span>
            </div>
            <div className="flex items-start gap-4">
              <div>
                <span className="font-serif font-semibold text-crimson text-sm">
                  Experience
                </span>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mt-1 max-w-2xl">
                  Where all three vessels converge in actual life. Relationships,
                  work, health, daily reality. Not a passive endpoint but a
                  dynamic mirror — the living diagnostic readout of whether the
                  other nine components are coherent or fragmented.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eight Operations */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)] mb-4">
          Eight Operations at Three Densities
        </h2>
        <p className="text-[var(--muted-foreground)] leading-relaxed mb-8 text-sm max-w-3xl">
          The system runs eight fundamental operations. Each operation expresses
          at all three densities — body, soul, and spirit — not as metaphor but
          as structural homology. The same operation that processes light at the
          retina processes meaning at the soul and processes awareness at the
          spirit level.
        </p>

        <div className="space-y-4">
          {[
            {
              name: "Reception",
              body: "Sensory intake at the biological level",
              soul: "Registering that something matters",
              spirit: "Consciousness receiving without intermediary",
            },
            {
              name: "Transduction",
              body: "Mechanical-to-electrical signal conversion",
              soul: "Raw impression becoming structured understanding",
              spirit: "Direct knowing becoming communicable insight",
            },
            {
              name: "Conduction",
              body: "Neural pathways and endocrine cascades",
              soul: "One insight connecting to another",
              spirit: "Spiritual realization propagating through the whole system",
            },
            {
              name: "Regulation",
              body: "Homeostatic feedback loops",
              soul: "Discernment governing what enters the worldview",
              spirit: "The discipline of sustained attention",
            },
            {
              name: "Synthesis",
              body: "Protein synthesis and tissue repair",
              soul: "Integrating fragments into new understanding",
              spirit: "Creative origination from stillness",
            },
            {
              name: "Defense",
              body: "Immune barriers and inflammation",
              soul: "Protecting core identity from corrosive narratives",
              spirit: "Discernment against inflation and bypassing",
            },
            {
              name: "Restoration",
              body: "Sleep and regeneration",
              soul: "Grief and rebuilding after loss",
              spirit: "Spiritual fallow periods and necessary emptiness",
            },
            {
              name: "Elimination",
              body: "Detoxification and apoptosis",
              soul: "Releasing beliefs and identities that no longer serve",
              spirit: "Ego death and surrender of the known",
            },
          ].map(({ name, body, soul, spirit }) => (
            <div
              key={name}
              className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)]"
            >
              <h3 className="font-serif text-base font-semibold text-[var(--foreground)] mb-3">
                {name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { density: "Body", color: "text-emerald-400", text: body },
                  { density: "Soul", color: "text-blue-400", text: soul },
                  { density: "Spirit", color: "text-violet-400", text: spirit },
                ].map(({ density, color, text }) => (
                  <div key={density} className="flex items-start gap-2">
                    <span
                      className={`text-xs font-mono font-bold ${color} shrink-0 mt-0.5`}
                    >
                      {density}
                    </span>
                    <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Encoding vs Installation */}
      <section className="mb-16 p-8 rounded-xl border border-[var(--border)] bg-[var(--card)]">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)] mb-4">
          Encoding vs. Installation
        </h2>
        <p className="text-[var(--muted-foreground)] leading-relaxed mb-6 text-sm">
          This is the central diagnostic question: is this pattern coherent with
          the person&apos;s original design, or was it installed by circumstance?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-sans font-semibold text-[var(--foreground)] text-sm mb-2">
              Encoding
            </h3>
            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
              What you arrived with. Your genetic blueprint, metabolic
              tendencies, neurotransmitter patterns, the cosmological imprint of
              when and where you were born. Fixed parameters with variable
              expression.
            </p>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-[var(--foreground)] text-sm mb-2">
              Installation
            </h3>
            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
              What got written on top. Ancestral trauma passed through lineage.
              Developmental patterns from the first seven years. Cultural
              programs absorbed without consent. Relational templates from the
              people who raised you. Coping strategies formed under pressure.
            </p>
          </div>
        </div>
        <p className="text-xs text-[var(--muted-foreground)] leading-relaxed border-t border-[var(--border)] pt-4">
          Not all installation is harmful. Some of it is useful adaptation. The
          diagnostic question is not &ldquo;is this installed?&rdquo; but
          &ldquo;does this serve the design or obstruct it?&rdquo; We identify
          eight encoding layers — from the cosmic pattern you arrived with,
          through the biological, ancestral, developmental, relational, cultural,
          and experiential layers, to the chosen layer where you begin to author
          your own code.
        </p>
      </section>

      {/* Twenty-Two Pathways */}
      <section className="mb-16 p-8 rounded-xl border border-[var(--border)] bg-[var(--muted)]">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)] mb-4">
          Twenty-Two Pathways
        </h2>
        <p className="text-[var(--muted-foreground)] leading-relaxed mb-6 text-sm">
          The ten components are connected by twenty-two pathways that carry
          signal between them. When a pathway is open, the components it connects
          function in dialogue. When blocked, the system compensates — often
          producing the patterns people seek therapy for without understanding
          why.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--card)]">
            <h3 className="font-sans font-semibold text-[var(--foreground)] text-sm mb-2">
              Descent
            </h3>
            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
              Consciousness becoming form. Spirit landing in soul, soul landing
              in body, body landing in life. When blocked: &ldquo;I know what I
              should do, but I can&apos;t make myself do it.&rdquo;
            </p>
          </div>
          <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--card)]">
            <h3 className="font-sans font-semibold text-[var(--foreground)] text-sm mb-2">
              Return
            </h3>
            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
              Experience becoming wisdom. Life feeding back into body, body into
              soul, soul into spirit. When blocked: &ldquo;This keeps happening
              to me.&rdquo;
            </p>
          </div>
        </div>
        <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mt-4">
          Every session, every diagnostic, every intervention maps to this
          architecture — which pathways are flowing, which are blocked, which are
          compensating by rerouting through an alternate path. The twenty-two
          pathways are the connective tissue of the whole system.
        </p>
      </section>

      {/* Epistemic Standards */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)] mb-4">
          How We Handle What We Know and Don&apos;t Know
        </h2>
        <div className="space-y-3">
          {[
            {
              badge: "FACT",
              color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
              desc: "Peer-reviewed, replicated, mechanistically explained. We cite the source. If we can't cite it, we don't call it fact.",
            },
            {
              badge: "INTERPRETATION",
              color: "text-blue-400 border-blue-400/30 bg-blue-400/5",
              desc: "A grounded reading of data through the Encoded Human framework. We show our reasoning.",
            },
            {
              badge: "HYPOTHESIS",
              color: "text-amber-400 border-amber-400/30 bg-amber-400/5",
              desc: "A testable proposition we haven't yet confirmed. We name what would prove or disprove it.",
            },
            {
              badge: "SPECULATION",
              color: "text-violet-400 border-violet-400/30 bg-violet-400/5",
              desc: "A creative or intuitive leap without direct evidence. Flagged clearly.",
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
        <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mt-6 max-w-3xl">
          When we cross from biology into consciousness — from body density to
          soul or spirit density — the epistemic mode drops automatically. A
          biological fact becomes, at best, an interpretation when read at the
          soul level. We track this transition explicitly. Intellectual honesty
          about what we know and don&apos;t know is the foundation everything
          else rests on.
        </p>
      </section>

      {/* Status */}
      <section className="mb-16 p-6 rounded-xl border border-dashed border-[var(--border)] text-center">
        <p className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider mb-2">
          Framework status
        </p>
        <p className="text-sm text-[var(--muted-foreground)]">
          This is a working model under active development. Detailed operational
          definitions, measurement tools, and clinical applications are in
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
