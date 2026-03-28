import Link from "next/link";

const services = [
  {
    title: "1:1 AI Build Coaching",
    description:
      "Work directly with me to build your idea using AI tools. We scope it, build it, and ship it together in focused sessions.",
  },
  {
    title: "Done-For-You AI Systems",
    description:
      "I design and build custom AI workflows and automations for your business — from prompt pipelines to full internal tools.",
  },
  {
    title: "Consulting & Strategy",
    description:
      "Not sure where AI fits in your work? I'll audit your current workflow and map out a clear, actionable integration plan.",
  },
  {
    title: "Team Workshops",
    description:
      "Hands-on workshops that get your team building with AI tools confidently — tailored to your stack and your goals.",
  },
];

function ServiceBlock({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="flex flex-col gap-2 py-5"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      <h3
        className="text-sm font-bold uppercase tracking-wide"
        style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
      >
        {title}
      </h3>
      <p className="type-body" style={{ fontSize: "14px" }}>
        {description}
      </p>
    </div>
  );
}

export default function WorkWithMe() {
  return (
    <section className="w-full py-24" aria-label="Work With Me">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left column — text */}
          <div className="flex flex-col gap-6">
            <p className="type-label">// work with me</p>
            <h2 className="type-section">Let&apos;s Build Together</h2>
            <p className="type-body">
              Whether you need someone to build with you, build for you, or show your
              team how to build — I&apos;ve got a path for you. All work is rooted in
              real AI systems that actually ship.
            </p>
            <div>
              <Link href="/work-with-me" className="btn-primary">
                See How We Can Work
              </Link>
            </div>
          </div>

          {/* Right column — service blocks */}
          <div className="flex flex-col">
            {services.map((s) => (
              <ServiceBlock key={s.title} {...s} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
