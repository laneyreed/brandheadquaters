"use client";

import Link from "next/link";

const footerLinks = [
  { href: "/learn", label: "Learn" },
  { href: "/systems", label: "Systems" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="w-full border-t mt-auto"
      style={{ borderColor: "var(--border-subtle)" }}
    >
      <div
        className="mx-auto px-6 py-12 flex flex-col gap-8"
        style={{ maxWidth: "1280px" }}
      >
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <span
              className="text-sm font-bold uppercase tracking-widest text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Build With Shannon
            </span>
            <span
              className="text-xs"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--text-muted)",
                letterSpacing: "0.15em",
              }}
            >
              // builder · teacher · systems creator
            </span>
          </div>

          {/* Nav links */}
          <nav
            className="flex flex-wrap gap-x-8 gap-y-3"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest transition-colors"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                  transitionDuration: "var(--duration-base)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-brand-light)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(139,128,249,0.3) 30%, rgba(251,146,60,0.3) 70%, transparent)",
          }}
          aria-hidden="true"
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p
            className="text-xs"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
            }}
          >
            © {new Date().getFullYear()} Build With Shannon. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
            }}
          >
            // built with AI · shipped with intention
          </p>
        </div>
      </div>
    </footer>
  );
}
