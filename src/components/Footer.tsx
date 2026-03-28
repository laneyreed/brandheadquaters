import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/learn", label: "Learn" },
  { href: "/systems", label: "Systems" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "#",
    label: "YouTube",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2-.9C16.3 5 12 5 12 5s-4.3 0-7 .1c-.3.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.9C6.8 19 12 19 12 19s4.3 0 7-.2c.3-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.75 14.5V9.5l5.5 2.5-5.5 2.5z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Twitter / X",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Instagram",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "TikTok",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-2.7V14a5.5 5.5 0 11-5.5-5.5c.19 0 .37.01.55.03V12.1a2.5 2.5 0 10-.55 4.9 2.5 2.5 0 002.5-2.5V2h3c.31 1.88 1.72 3.41 3.77 3.69v2z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "GitHub",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013-.405 11.5 11.5 0 013 .405c2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="w-full border-t"
      style={{ borderColor: "var(--border-subtle)", background: "var(--color-base)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
        {/* 3-column top zone */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">

          {/* Zone 1 — Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="footer-link">
              <span
                className="text-sm font-bold uppercase tracking-widest text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Build With Shannon
              </span>
            </Link>
            <p
              className="type-caption"
              style={{ maxWidth: "220px" }}
            >
              Builder, teacher, and systems-focused creator working with AI.
            </p>
          </div>

          {/* Zone 2 — Nav */}
          <nav className="flex flex-col gap-3" aria-label="Footer navigation">
            <p className="type-meta" style={{ marginBottom: "4px" }}>Explore</p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="footer-link type-caption"
                style={{ color: "var(--text-muted)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Zone 3 — Social */}
          <div className="flex flex-col gap-4">
            <p className="type-meta">Connect</p>
            <div className="flex items-center gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="social-link"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(139,128,249,0.3) 30%, rgba(251,146,60,0.3) 70%, transparent)",
          }}
          aria-hidden="true"
        />

        {/* Bottom bar */}
        <p className="type-meta text-center" style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Build With Shannon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
