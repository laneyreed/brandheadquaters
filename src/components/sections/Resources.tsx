import Link from "next/link";

const cards = [
  {
    tag: "// free download",
    title: "AI Prompt Cheat Sheet",
    description:
      "50+ prompts I use daily across Claude, ChatGPT, and Midjourney — categorized by use case.",
  },
  {
    tag: "// toolkit",
    title: "My Full Tool Stack",
    description:
      "Every tool I use to build, create, and ship — with notes on how I use each one and what it costs.",
  },
  {
    tag: "// template",
    title: "Build Log Template",
    description:
      "The exact Notion template I use to document every build — from idea to shipped product.",
  },
];

function ResourceCard({
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
      {/* Cover image placeholder — taller than Learn cards */}
      <div
        className="w-full flex items-center justify-center"
        style={{
          height: "220px",
          background: "var(--color-surface)",
          borderBottom: "1px solid var(--border-subtle)",
          flexShrink: 0,
        }}
      >
        <span className="type-meta" style={{ opacity: 0.25 }}>
          Cover Image — 420 × 220
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

export default function Resources() {
  return (
    <section
      className="w-full py-24"
      style={{ background: "var(--color-bg)" }}
      aria-label="Resources"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header block */}
        <div className="flex flex-col gap-4 mb-4" style={{ maxWidth: "480px" }}>
          <p className="type-label">// resources</p>
          <h2 className="type-section">Free Resources</h2>
        </div>

        {/* Decorative horizontal rule */}
        <div
          className="mb-14"
          style={{
            height: "1px",
            width: "80px",
            background: "linear-gradient(90deg, var(--color-brand), var(--color-accent))",
          }}
          aria-hidden="true"
        />

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card) => (
            <ResourceCard key={card.title} {...card} />
          ))}
        </div>

        {/* CTA */}
        <div>
          <Link href="/resources" className="btn-secondary">
            All Resources
          </Link>
        </div>
      </div>
    </section>
  );
}
