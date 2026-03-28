import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="w-full py-28" aria-label="Get Started">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div
          className="mx-auto flex flex-col items-center text-center gap-6"
          style={{ maxWidth: "48rem" }}
        >
          {/* Decorative rule */}
          <div
            style={{
              height: "2px",
              width: "48px",
              background: "linear-gradient(90deg, var(--color-brand), var(--color-accent))",
              borderRadius: "2px",
            }}
            aria-hidden="true"
          />

          {/* Headline */}
          <h2 className="type-section">
            Ready to Build Something?
          </h2>

          {/* Description */}
          <p className="type-body" style={{ maxWidth: "520px" }}>
            Whether you want to learn, collaborate, or hand off a build entirely —
            there&apos;s a path here for you. Let&apos;s make something real.
          </p>

          {/* Button row */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/work-with-me" className="btn-primary">
              Work With Me
            </Link>
            <Link href="/learn" className="btn-secondary">
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
