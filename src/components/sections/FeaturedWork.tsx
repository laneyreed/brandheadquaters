import Link from "next/link";

const cards = [
  { title: "AI SaaS Starter Kit", tag: "// system" },
  { title: "Prompt Engineering Toolkit", tag: "// resource" },
  { title: "Build Log: Day 47", tag: "// tutorial" },
  { title: "Claude vs Copilot", tag: "// breakdown" },
];

function WorkCard({ title, tag }: { title: string; tag: string }) {
  return (
    <div
      className="relative overflow-hidden flex flex-col justify-end"
      style={{
        height: "200px",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border-subtle)",
      }}
    >
      {/* Placeholder image */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: "var(--color-surface)" }}
      >
        <span className="type-meta" style={{ opacity: 0.25 }}>
          Image — 560 × 200
        </span>
      </div>

      {/* Bottom overlay + title */}
      <div
        className="relative z-10 px-4 pb-4 pt-10"
        style={{
          background:
            "linear-gradient(to top, rgba(13,11,34,0.95) 60%, transparent)",
        }}
      >
        <p className="type-meta" style={{ color: "var(--color-accent)", marginBottom: "4px" }}>
          {tag}
        </p>
        <p
          className="text-sm font-bold uppercase tracking-wide text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  return (
    <section className="w-full py-24" aria-label="Featured Work">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left column — text */}
          <div className="flex flex-col gap-6">
            <p className="type-label">// featured work</p>
            <h2 className="type-section">What I&apos;ve Built</h2>
            <p className="type-body">
              Real projects, real systems, shipped fast with AI. Each build comes
              with a breakdown of the process, the tools used, and what I&apos;d do
              differently next time.
            </p>
            <div>
              <Link href="/systems" className="btn-primary">
                View All Work
              </Link>
            </div>
          </div>

          {/* Right column — 2×2 card grid */}
          <div className="grid grid-cols-2 gap-4">
            {cards.map((card) => (
              <WorkCard key={card.title} {...card} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
