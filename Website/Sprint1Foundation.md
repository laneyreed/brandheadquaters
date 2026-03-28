# Sprint 1 — Foundation

- [x] Scaffold Next.js project with TypeScript, App Router, and Tailwind CSS
- [x] Confirm clean production build
- [x] Install and configure Tailwind CSS v4
- [x] Set up design token layer — colors, spacing, radius, and shadows in `globals.css`
- [x] Load brand fonts via `next/font/google` — Orbitron, Share Tech Mono, DM Sans
- [x] Define type scale — hero, section, heading, label, meta, body, caption
- [x] Build Header component — logo, nav links, mobile menu
- [x] Build Footer component — brand, nav links, gradient divider, copyright
- [x] Wire layout shell — Header + Footer into `layout.tsx` with metadata




## Step 1 Foundation: Scaffold a Next.js project with TypeScript, Tailwind, and ESLint

### 1. Cleare the directory
- if folder has a `README.md`, `create-next-app` treats it as a conflict
- only the `.git` folder is allowed to remain
---

### 2. Run the scaffold command

`npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack --yes`

- `npx create-next-app@latest .`
    - runs the official Next.js project scaffolding tool (latest version) and initializes the project in the current directory (.) rather than creating a new subfolder

**Flags:**
- `--typescript` : Sets up the project with TypeScript instead of plain JavaScript, giving you type safety out of the box.
- `--tailwind` : Installs and configures Tailwind CSS, including the config file and base styles.
- `--eslint` : Adds ESLint with a Next.js-recommended config for linting your code.
- `--app` : Uses the App Router (the modern Next.js routing system based on the app/ directory), as opposed to the older pages/ router.
- `--src-dir` : Places your code inside a src/ directory (e.g. src/app/) rather than at the project root, which keeps things cleaner.
- `--import-alias "@/*"` : Configures a path alias so you can write imports like import Foo from "@/components/Foo" instead of messy relative paths like ../../components/Foo.
- `--no-turbopack` : Opts out of Turbopack (Next.js's newer Rust-based bundler) and sticks with the stable Webpack-based dev server.
- `--yes` : Skips all interactive prompts and accepts defaults, allowing it to run non-interactively (important for automated tools like Claude Code).


---

### 3. Ran a production build to confirm it works

`npm run build`

This compiles TypeScript, checks types, and generates all static pages. If anything was broken in the scaffold, it would fail here. It passed cleanly — **0 errors, 0 warnings**.

---


## Step 2: Install and configure Tailwind CSS
- Styling needs to be ready before any pages or components are built. Doing this early prevents inconsistency
- set up the design token layer: colors, spacing, radius, and shadows matching the brand system
1. Read the brand system file to understand the design tokens and how they should be implemented in Tailwind
    - all design tokens are pulled out of brandsystem.html — colors, text colors, borders, radius, shadows, motion, and typography
2. Replace `globals.css` with the token layer
    - `globals.css` is the default global stylesheet created by `create-next-app`. It includes some basic styles and resets
    - its contents should be replaced with the design tokens and Tailwind directives
     This is the only file that needed to change. It has three parts:
        - `:root` block, raw CSS custom properties(for direct CSS use), usable anywhere you write plain CSS, like var(--color-brand) and every token from the brand system lives here
        - `@theme` block, Tailwind v4 specific, anything you put in `@theme`(for Tailwind utility classes) gets registered as a Tailwind utility class automatically. For example:
            - `--color-brand: #8B80F9` → you can now write `bg-brand`, `text-brand`, `border-brand` in your JSX
            - `--radius-lg: 10px` → you can write `rounded-lg`
            - `--shadow-md: ...` → you can write `shadow-md`
        - you need both `:root` and `@theme` blocks to have the tokens available in both plain CSS and Tailwind utilities, which is important for flexibility. Some styles may require custom CSS, while most can be done with Tailwind classes
        - base `body` styles, like font family and background color, are also set here to ensure the entire app has a consistent base style that matches the brand system
            - for example you can set the page background to Space Black (#0D0B22) and the default font to DM Sans. This replaces the default white Next.js background
            
#### No tailwind.config.js file
- because Tailwind v4's new `@theme` block in CSS handles all the configuration that used to be done in `tailwind.config.js`
- this means you can define your design tokens directly in your CSS file, and they will automatically become available as Tailwind utility classes without needing a separate config file
- so all the configuration is now done in `globals.css` instead of a separate config file, and this simplifies the setup and keeps all styling-related configuration in one place


---

## Step 3: Build the layout shell
**Every page you build after this will inherit the layout automatically. If you build pages first without a layout, you'd have to go back and retrofit it. The shell comes first.**
- the layout shell is the basic structure of the website that will be used across all pages
- it typically includes the header, footer, and any common elements like navigation or sidebars
- this is built before any specific pages or components to ensure a consistent structure and design across the entire site
- it serves as the foundation for all other content and allows for easier development of individual pages since they can focus on their unique content while inheriting the common layout
1. Set up Fonts : Fonts may need to be loaded from Google Fonts and wired into the app
    - for example, if the brand system specifies DM Sans as the primary font, you would load it from Google Fonts and then set it as the default font in your CSS (e.g. in `globals.css` body styles)

2. Build the Header `src/components/Header.tsx`, the top navigation bar. It includes:*
    - The brand logo SVG pulled directly from the brand system file
    - "Build With Shannon" name in Orbitron + // brand headquarters subtitle in Share Tech Mono
    - Desktop nav links: Learn, Systems, Work With Me, Resources + a "Let's Work" CTA button
    - A responsive mobile hamburger menu that toggles open/closed
    - Marked "use client" because it uses useState for the mobile menu toggle

3. Build the Footer `src/components/Footer.tsx`, the bottom of every page. It includes:
    - Brand name and tagline
    - All 6 nav links laid out in a responsive row
    - A branded gradient divider line (purple → orange) from the brand system
    - Copyright year (dynamically generated) + brand tagline
    - Marked "use client" because the nav links use onMouseEnter/onMouseLeave for hover color changes

4. Wire them into `layout.tsx`, so every page automatically gets the header and footer
    - Fonts are loaded via next/font/google (Orbitron, Share Tech Mono, DM Sans)
        - they're injected as CSS variables (`--font-display`, `--font-mono`, `--font-body`) on the `<html>` element
        - the font variables are referenced in `globals.css` to set the default font families for the body and any specific elements that need them
        - this ensures that the fonts are self-hosted by Next.js and no browser requests go to Google Fonts at runtime, improving performance and privacy
    - Metadata updated, title and description now reflect the actual brand instead of the Next.js default.
    - Shell wired together, `<Header />` sits above `<main>`, `<Footer />` sits below. Every page will automatically inherit this wrapper


## Step 4: Typography
*The fonts are available but you'd have to manually specify size, weight, and letter-spacing every time you use them. The type scale needs to be turned into actual reusable styles*
- The type scale from the brand system is implemented as Tailwind utilities using the `@theme` block in `globals.css`
- For example, if the brand system specifies a heading style with a certain font size, weight, and line height
- you would create a CSS custom property for it (e.g. `--heading-lg`) and then add it to the `@theme` block so you can use it as a Tailwind utility class (e.g. `text-heading-lg`)
- base styles need to be added to `globals.css`
- things like `.type-hero`, `.type-section`, `.type-label`, `.type-body`
- so every page uses consistent typography without repeating the same styles over and over again
- you can just apply the appropriate class (e.g. `type-hero`) to any element that needs that style
- and it will pull in all the correct font size, weight, line height, and letter spacing from the design tokens defined in the `:root` block
- this keeps your JSX clean and ensures typographic consistency across the entire site

What Was Done — Step by Step
Added a TYPE SCALE section to globals.css with 7 reusable classes, each mapped directly to the brand system spec:

| Class | Font | Size | Use |
| ----- | ----- | ----- | ----- |
| `.type-hero` | Orbitron 900 | 48px | Page hero headlines |
| `.type-section` | Orbitron 700 | 32px | Section headings |
| `.type-heading` | Orbitron 700 | 22px | Card titles, feature headings |
| `.type-label` | Share Tech Mono | 13px | Eyebrows above headings, e.g. `// learn` |
| `.type-meta` | Share Tech Mono | 11px | Tags, badges, nav items |
| `.type-body` | DM Sans 400 | 16px | All body copy and descriptions |
| `.type-caption` | DM Sans 400 | 13px | Supporting text, footnotes  |

Just add the class to any element in JSX to use them, for example:
`<p className="type-label">// featured work</p>`
`<h2 className="type-section">What I Build</h2>`
`<p className="type-body">Every day I build something new with AI...</p>`
No need to repeat font-family, size, weight, or letter-spacing anywhere, it's all in the class.

**Foundation is now fully set up with a consistent design system, reusable typography styles, and a layout shell that ensures every page has the same header and footer. The next steps will be to build out the individual pages and components using this solid foundation.**


### No Testt Yet
- Right now every file is either configuration (tokens, fonts, layout) or static UI (Header, Footer). 
- There's nothing with logic to test because there is no data fetching, no state transformations, no conditional behavior beyond the mobile menu toggle
- Writing tests at this stage would just be testing that HTML renders, which isn't valuable.

**The right time to introduce tests is when you have something that can actually break:**
- When pages have real data or dynamic content
- When you build forms (contact, newsletter)
- When you add any business logic