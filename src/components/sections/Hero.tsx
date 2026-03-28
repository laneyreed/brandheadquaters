import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "74vh", minHeight: "520px" }}
      aria-label="Hero"
    >
      {/* Background placeholder */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: "var(--color-surface)" }}
      >
        <span className="type-meta" style={{ opacity: 0.2 }}>
          Hero Background Image — 1440 × 74vh
        </span>
      </div>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(13,11,34,0.95) 45%, rgba(13,11,34,0.55) 75%, rgba(13,11,34,0.2) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 h-full flex items-center">
        <div className="flex flex-col gap-8" style={{ maxWidth: "600px" }}>

          {/* Eyebrow */}
          <p className="type-label">// build with shannon</p>

          {/* 3-line heading with varying weights */}
          <h1 className="flex flex-col gap-1">
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 500,
                lineHeight: 1.1,
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                letterSpacing: "2px",
              }}
            >
              Every Day
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(44px, 7vw, 72px)",
                fontWeight: 900,
                lineHeight: 1.05,
                textTransform: "uppercase",
                color: "var(--text-primary)",
                letterSpacing: "2px",
              }}
            >
              I Build
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(44px, 7vw, 72px)",
                fontWeight: 900,
                lineHeight: 1.05,
                textTransform: "uppercase",
                color: "var(--color-brand)",
                letterSpacing: "2px",
              }}
            >
              With AI
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="type-body"
            style={{ maxWidth: "480px", color: "var(--text-secondary)" }}
          >
            No gatekeeping, no hype — just real builds, real systems, and everything
            I learn along the way.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-3">
            <Link href="/systems" className="btn-primary">
              Explore My Work
            </Link>
            <Link href="/learn" className="btn-secondary">
              Watch Tutorials
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
