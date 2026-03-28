"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/learn", label: "Learn" },
  { href: "/systems", label: "Systems" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/resources", label: "Resources" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="w-full border-b"
      style={{
        background: "rgba(13, 11, 34, 0.92)",
        backdropFilter: "blur(12px)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between px-6 py-4"
        style={{ maxWidth: "1280px" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <svg
            width="36"
            height="36"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="64" height="64" rx="12" fill="#1A1744" />
            <line x1="0" y1="16" x2="64" y2="16" stroke="#FB923C" strokeWidth="0.5" opacity="0.22" />
            <line x1="0" y1="32" x2="64" y2="32" stroke="#FB923C" strokeWidth="0.5" opacity="0.22" />
            <line x1="0" y1="48" x2="64" y2="48" stroke="#FB923C" strokeWidth="0.5" opacity="0.22" />
            <line x1="16" y1="0" x2="16" y2="64" stroke="#FB923C" strokeWidth="0.5" opacity="0.22" />
            <line x1="32" y1="0" x2="32" y2="64" stroke="#FB923C" strokeWidth="0.5" opacity="0.22" />
            <line x1="48" y1="0" x2="48" y2="64" stroke="#FB923C" strokeWidth="0.5" opacity="0.22" />
            <rect x="1" y="1" width="7" height="1.5" rx="1" fill="#FB923C" opacity="0.5" />
            <rect x="1" y="1" width="1.5" height="7" rx="1" fill="#FB923C" opacity="0.5" />
            <rect x="56" y="1" width="7" height="1.5" rx="1" fill="#FB923C" opacity="0.5" />
            <rect x="61.5" y="1" width="1.5" height="7" rx="1" fill="#FB923C" opacity="0.5" />
            <rect x="1" y="61.5" width="7" height="1.5" rx="1" fill="#FB923C" opacity="0.5" />
            <rect x="1" y="56" width="1.5" height="7" rx="1" fill="#FB923C" opacity="0.5" />
            <rect x="56" y="61.5" width="7" height="1.5" rx="1" fill="#FB923C" opacity="0.5" />
            <rect x="61.5" y="56" width="1.5" height="7" rx="1" fill="#FB923C" opacity="0.5" />
            <path
              d="M46,19 C46,11 16,11 16,25 C16,35 48,35 48,45 C48,57 18,57 18,50"
              fill="none"
              stroke="#8B80F9"
              strokeWidth="7.5"
              strokeLinecap="round"
            />
            <circle cx="49" cy="13" r="5.5" fill="#FB923C" />
          </svg>
          <div className="flex flex-col">
            <span
              className="text-sm font-bold uppercase tracking-widest text-white leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Build With Shannon
            </span>
            <span
              className="text-xs leading-none mt-1"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--text-muted)",
                letterSpacing: "0.2em",
              }}
            >
              // brand headquarters
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
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
          <Link
            href="/contact"
            className="text-xs uppercase tracking-widest px-4 py-2 border transition-all"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-accent)",
              borderColor: "rgba(251, 146, 60, 0.4)",
              borderRadius: "var(--radius-md)",
              transitionDuration: "var(--duration-base)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(251, 146, 60, 0.1)";
              e.currentTarget.style.borderColor = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(251, 146, 60, 0.4)";
            }}
          >
            Let&apos;s Work
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className="block w-5 h-px transition-transform"
            style={{
              background: "var(--color-brand-light)",
              transform: menuOpen ? "translateY(4px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-px"
            style={{
              background: "var(--color-brand-light)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-transform"
            style={{
              background: "var(--color-brand-light)",
              transform: menuOpen ? "translateY(-4px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{ borderColor: "var(--border-subtle)" }}
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--text-secondary)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-xs uppercase tracking-widest self-start px-4 py-2 border"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-accent)",
              borderColor: "rgba(251, 146, 60, 0.4)",
              borderRadius: "var(--radius-md)",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s Work
          </Link>
        </nav>
      )}
    </header>
  );
}
