import Link from "next/link";

const cards = [
  {
    tag: "// tutorial",
    title: "Build a SaaS in 2 Hours",
    description:
      "Full-stack AI-assisted build from zero to deployed. No shortcuts skipped.",
  },
  {
    tag: "// guide",
    title: "My AI Workflow Stack",
    description:
      "The exact tools and systems I use every day to build faster with AI.",
  },
  {
    tag: "// breakdown",
    title: "Prompt Engineering 101",
    description:
      "How to write prompts that actually work — with real examples from my builds.",
  },
];

function LearnCard({
  tag,
  title,
  description,
}: {
  tag: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{
        background: "var(--color-bg)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
      }}
    >
      {/* Thumbnail placeholder */}
      <div
        className="w-full flex items-center justify-center"
        style={{
          height: "180px",
          background: "var(--color-surface)",
          borderBottom: "1px solid var(--border-subtle)",
          flexShrink: 0,
        }}
      >
        <span className="type-meta" style={{ opacity: 0.25 }}>
          Thumbnail — 420 × 180
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3 p-5">
        <p className="type-meta" style={{ color: "var(--color-accent)" }}>
          {tag}
        </p>
        <h3 className="type-heading" style={{ fontSize: "17px" }}>
          {title}
        </h3>
        <p className="type-body" style={{ fontSize: "14px" }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function LearnSection() {
  return (
    <section
      className="w-full py-24"
      style={{ background: "var(--color-bg)" }}
      aria-label="Learn"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header block */}
        <div className="flex flex-col gap-4 mb-14" style={{ maxWidth: "600px" }}>
          <p className="type-label">// learn</p>
          <h2 className="type-section">Tutorials &amp; Guides</h2>
          <p className="type-body">
            Step-by-step tutorials, deep-dive guides, and breakdowns of everything
            I build — designed to help you learn by doing.
          </p>
        </div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card) => (
            <LearnCard key={card.title} {...card} />
          ))}
        </div>

        {/* CTA */}
        <div>
          <Link href="/learn" className="btn-secondary">
            Browse All Tutorials
          </Link>
        </div>
      </div>
    </section>
  );
}
