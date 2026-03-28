
## Sprint 2 — Homepage

- [x] Build Hero section — headline, subheading, CTA buttons
- [x] Build Intro Strip — short brand statement / value proposition
- [x] Build Featured Work section — project/system cards
- [x] Build Learning section — tutorials and guides preview
- [x] Build Services section — ways to work together
- [x] Build Resources section — tools, links, downloads
- [x] Build Homepage CTA section — newsletter or contact prompt
- [x] Wire all sections into `src/app/page.tsx`

---

## What Was Built — Sprint 2

### `globals.css` — additions
- **Button classes** — `.btn-primary` (brand purple gradient + glow shadow) and `.btn-secondary` (outlined, brand border). Defined once and reused across every section.
- **Interaction helpers** — `.footer-link` and `.social-link` hover states written in CSS so the Footer stays a Server Component with no client-side JavaScript.

---

### Footer — rebuilt
Replaced the previous single-column footer with a 3-zone layout:
- **Zone 1** — Brand name + tagline
- **Zone 2** — Vertical nav link list with "Explore" label
- **Zone 3** — "Connect" label + inline SVG social icons for YouTube, Twitter/X, Instagram, TikTok, and GitHub
- **Bottom bar** — Centered copyright line
- Gradient divider (purple → orange) separates the zones from the copyright bar

---

### Section Files — `src/components/sections/`

**`Hero.tsx`**
- Full-width, 74vh tall with a `minHeight` of 520px
- Dark surface placeholder box behind a left-to-right gradient overlay
- 3-line stacked heading with varying font weights and colors (secondary/white/brand purple)
- Subheading paragraph and a row of 2 CTA buttons (`btn-primary` + `btn-secondary`)

**`IntroStrip.tsx`**
- Thin full-width banner on a deep indigo background
- Desktop: brand name on the left, 3 icon + label pairs (Tutorials, Guides, YouTube) on the right separated by vertical dividers
- Mobile: stacked and centered

**`FeaturedWork.tsx`**
- Two-column grid with `gap-16`
- Left: eyebrow label → section heading → description → single CTA button
- Right: 2×2 card grid — each card is a fixed 200px tall placeholder image with a gradient overlay and title + tag at the bottom

**`LearnSection.tsx`**
- Full-width section on deep indigo background
- Header block: eyebrow → section heading → description paragraph (max-width 600px)
- 3-column card grid — each card has a 180px thumbnail placeholder, eyebrow tag, title, and description
- "Browse All Tutorials" secondary CTA below the grid

**`WorkWithMe.tsx`**
- Two-column grid with `gap-16`
- Left: eyebrow → section heading → description → CTA button
- Right: 4 vertically stacked service blocks — each with a title and description, separated by top borders

**`Resources.tsx`**
- Full-width section on deep indigo background
- Header block: eyebrow → section heading
- Decorative 80px gradient rule (brand purple → accent orange) below the heading
- 3-column card grid — each card has a taller 220px cover image placeholder, eyebrow tag, title, and description
- "All Resources" secondary CTA below the grid

**`AboutPreview.tsx`**
- Two-column grid with `gap-16`, full-width top and bottom borders
- Left: 288×320px portrait placeholder centered on mobile, left-aligned on desktop
- Right: section heading → 2 description paragraphs → outlined secondary CTA button

**`FinalCTA.tsx`**
- Full-width, `py-28` vertical padding
- Single centered narrow column (`max-w-3xl`)
- 48px decorative gradient rule at the top
- Section heading → description paragraph → row of 2 centered wrapping buttons

---

### `page.tsx` — rebuilt
Replaced the default Next.js boilerplate. Imports and renders all 8 sections in order:
`Hero → IntroStrip → FeaturedWork → LearnSection → WorkWithMe → Resources → AboutPreview → FinalCTA`

All sections share `max-w-7xl` containers with `px-6` mobile and `px-12` desktop padding. Two-column sections use `gap-16` between columns.
