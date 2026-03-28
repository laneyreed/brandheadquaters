export default function IntroStrip() {
  const pillars = [
    {
      label: "Tutorials",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7L8 5z" />
        </svg>
      ),
    },
    {
      label: "Guides",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2-.9C16.3 5 12 5 12 5s-4.3 0-7 .1c-.3.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.9C6.8 19 12 19 12 19s4.3 0 7-.2c.3-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.75 14.5V9.5l5.5 2.5-5.5 2.5z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className="w-full border-y"
      style={{
        background: "var(--color-bg)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 text-center md:text-left">

          {/* Brand name */}
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Build With Shannon
          </span>

          {/* Pillar pairs */}
          <div className="flex flex-col md:flex-row items-center gap-0">
            {pillars.map((pillar, i) => (
              <div key={pillar.label} className="flex items-center">
                {/* Divider before each item on desktop (except first) */}
                {i > 0 && (
                  <span
                    className="hidden md:block mx-6 h-4 w-px"
                    style={{ background: "var(--border-default)" }}
                    aria-hidden="true"
                  />
                )}
                <div
                  className="flex items-center gap-2 py-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  <span style={{ color: "var(--color-accent)" }}>{pillar.icon}</span>
                  <span className="type-meta">{pillar.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
