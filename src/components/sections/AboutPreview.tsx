import Link from "next/link";

export default function AboutPreview() {
  return (
    <section
      className="w-full py-24 border-y"
      style={{ borderColor: "var(--border-subtle)" }}
      aria-label="About Shannon"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left column — portrait placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: "288px",
                height: "320px",
                background: "var(--color-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-xl)",
              }}
            >
              <span className="type-meta" style={{ opacity: 0.3 }}>
                Portrait — 288 × 320
              </span>
            </div>
          </div>

          {/* Right column — text */}
          <div className="flex flex-col gap-6">
            <h2 className="type-section">
              Hi, I&apos;m Shannon
            </h2>
            <p className="type-body">
              I&apos;m a builder, teacher, and systems-focused creator. Every day I use AI
              to build something new — and I document the entire process so you can learn
              from it. No gatekeeping, no hype. Just real work, shipped publicly.
            </p>
            <p className="type-body">
              My goal is to show that anyone with a clear system and the right tools can
              build at a level that used to require a full team.
            </p>
            <div>
              <Link href="/about" className="btn-secondary">
                More About Me
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
