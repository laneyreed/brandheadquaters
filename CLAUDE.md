@AGENTS.md

---

# Build With Shannon — Handover Summary

Last updated: 2026-03-27

---

## What This Project Is

**Build With Shannon** is a premium personal brand website for Shannon — a builder, teacher, and AI-systems creator. It is a brand headquarters, not a portfolio. Visitors follow one of three paths: learn, explore, or work together.

**Stack:** Next.js 16 (App Router) · React · TypeScript · Tailwind CSS v4

---

## What Has Been Built

### Sprint 1 — Foundation (complete)

| File | What it does |
|---|---|
| `src/app/globals.css` | All design tokens (colors, spacing, radius, shadows, motion), button classes, type scale classes, base body styles |
| `src/app/layout.tsx` | Root layout — loads 3 Google Fonts, sets metadata, wraps every page in Header + Footer |
| `src/components/Header.tsx` | Sticky nav — SVG logo mark + brand name left, nav links + CTA right, hamburger mobile menu |
| `src/components/Footer.tsx` | 3-zone footer — brand/tagline, nav links, social icons (YouTube, X, Instagram, TikTok, GitHub), copyright bar |

### Sprint 2 — Homepage (complete)

All homepage sections live in `src/components/sections/`:

| File | Description |
|---|---|
| `Hero.tsx` | 74vh, placeholder bg + overlay, 3-line heading (varying weight/color), 2 CTA buttons |
| `IntroStrip.tsx` | Thin banner — brand name left, 3 pillars (Tutorials, Guides, YouTube) with dividers |
| `FeaturedWork.tsx` | 2-col — text left, 2×2 image card grid right with title overlays |
| `LearnSection.tsx` | Full-width — header block + 3-col card grid with thumbnails |
| `WorkWithMe.tsx` | 2-col — text left, 4 stacked service blocks right |
| `Resources.tsx` | Full-width — header + gradient rule + 3-col tall card grid |
| `AboutPreview.tsx` | 2-col bordered — 288×320 portrait placeholder left, headline + desc + CTA right |
| `FinalCTA.tsx` | Centered narrow column — gradient rule, headline, desc, 2 buttons |

`src/app/page.tsx` — imports and renders all 8 sections in order.

---

## Key Decisions Made

### Tailwind v4 — CSS-based config, no `tailwind.config.js`
This project uses **Tailwind CSS v4**, which is a breaking change from v3. There is no `tailwind.config.js`. All configuration lives in `globals.css` via `@theme {}` blocks. Tokens defined in `@theme` automatically generate Tailwind utility classes (e.g. `--color-brand` → `bg-brand`, `text-brand`). The `:root` block holds the same values as raw CSS variables for direct CSS usage.

### Design tokens in `globals.css` — sourced from `brandsystem.html`
All colors, radius, shadows, motion, and font variables were pulled directly from `brandsystem.html` (the brand system reference file in the project root). **Do not invent values** — always reference this file for any token not already defined.

### Fonts via `next/font/google`
Three fonts are loaded in `layout.tsx`: Orbitron (display), Share Tech Mono (mono), DM Sans (body). Each uses the `variable` option to inject a CSS variable (`--font-display`, `--font-mono`, `--font-body`) onto the `<html>` element. These variables are what `globals.css` and all components reference. Fonts are self-hosted by Next.js at build time — no Google requests at runtime.

### Type scale as CSS classes
Seven reusable type classes are defined in `globals.css`: `.type-hero`, `.type-section`, `.type-heading`, `.type-label`, `.type-meta`, `.type-body`, `.type-caption`. These encode font-family, size, weight, line-height, letter-spacing, and color in one class. Always use these instead of repeating typography properties inline.

### Button styles as CSS classes
`.btn-primary` (brand gradient + glow) and `.btn-secondary` (outlined, brand border) are defined in `globals.css`. Use these for all CTAs — do not write custom button styles inline.

### `"use client"` only where needed
`Header.tsx` is a Client Component because it uses `useState` for the mobile menu toggle. `Footer.tsx` is a Server Component — hover effects are handled via CSS classes (`.footer-link`, `.social-link`) to avoid unnecessary client JS. Keep Server Components where possible.

### Layout container pattern
Every section uses the same container pattern:
```
mx-auto max-w-7xl px-6 lg:px-12
```
Two-column sections use `grid grid-cols-1 lg:grid-cols-2 gap-16`. Three-column grids use `grid grid-cols-1 md:grid-cols-3 gap-6`. Do not deviate from this pattern — it matches the brand system's 1280px max-width and spacing tokens.

### Placeholder images
All images are currently placeholder `<div>` elements with `background: var(--color-surface)` and a dimension label. When real images are added, swap these divs for Next.js `<Image>` components. Do not use `<img>` tags.

---

## Current State of the Code

- **Build status:** Clean — `npm run build` passes with 0 errors, 0 warnings
- **Route count:** 1 page (`/`) + `/_not-found`
- **All inner pages:** Not yet built — links exist in Header/Footer but routes do not exist yet
- **All images:** Placeholder divs — no real images have been integrated
- **Social links:** All `href="#"` — placeholder, no real URLs set
- **Contact/booking:** Not wired — no form or external service connected
- **Metadata:** Only root metadata set in `layout.tsx` — individual page metadata not configured yet

---

## What's Left to Do — Sprint 3

Six inner pages need to be built:

- `/about` — Full biography, values, and story
- `/learn` — Tutorial/guide listing with filters
- `/systems` — Featured projects and build showcases
- `/work-with-me` — Full services detail and contact pathway
- `/resources` — Full resource library listing
- `/contact` — Contact form and booking pathway

Each page needs its own `src/app/[slug]/page.tsx` and individual metadata export.

---

## Bugs & Gotchas Encountered

### `create-next-app` blocked by existing files
Running `create-next-app` into a directory that already contains any file (including `README.md`) will fail with a conflict error. The directory must be empty except for `.git` before scaffolding.

### Footer `"use client"` error at build time
The original Footer used `onMouseEnter`/`onMouseLeave` inline handlers. Next.js throws a prerender error if event handlers are passed as props to Server Component children. Fixed by moving hover behavior to CSS classes (`.footer-link`, `.social-link`) and removing the `"use client"` directive entirely.

### Tailwind v4 — no `tailwind.config.js`
If a future agent or developer looks for `tailwind.config.js` or `tailwind.config.ts`, it does not exist and is not needed. This is intentional. All Tailwind configuration is in `globals.css`. Do not create a config file.

### `next/font` variable names must match CSS
The `variable` option in `next/font/google` (e.g. `variable: "--font-display"`) must exactly match what `globals.css` references in `var(--font-display)`. If a font is renamed or the variable changes, both files must be updated together.

### `npm run build` uses Turbopack in this version
Despite passing `--no-turbopack` during scaffolding, Next.js 16 uses Turbopack for production builds by default. This is expected — do not treat the `▲ Next.js 16.2.1 (Turbopack)` output as an error.

---

## File Structure Reference

```
src/
  app/
    globals.css          ← ALL tokens, button styles, type scale, base styles
    layout.tsx           ← Root layout — fonts, metadata, Header, Footer
    page.tsx             ← Homepage — imports all 8 section components
  components/
    Header.tsx           ← "use client" — sticky nav with mobile menu
    Footer.tsx           ← Server Component — 3-zone layout with social icons
    sections/
      Hero.tsx
      IntroStrip.tsx
      FeaturedWork.tsx
      LearnSection.tsx
      WorkWithMe.tsx
      Resources.tsx
      AboutPreview.tsx
      FinalCTA.tsx
brandsystem.html         ← Brand system reference — source of truth for all tokens
Website/
  Sprint1Foundation.md  ← Sprint 1 notes
  Sprint2Homepage.md    ← Sprint 2 notes
README.md               ← Sprint checklists
```
