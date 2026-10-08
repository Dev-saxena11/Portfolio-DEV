# Portfolio fixes (functional, design-neutral)

HOW TO APPLY
1. Copy every file in this folder into your project root (portfolio-website/), keeping the paths. Overwrite when asked.
2. Delete these unused template files: public/next.svg, public/vercel.svg, public/file.svg, public/globe.svg, public/window.svg
3. Delete the stray file `.vade-report` from the repo root of portfolio-website.
4. npm run lint && npm run build, then deploy.

WHAT CHANGED
- Hero: "View Portfolio" scrolled to the hero itself (did nothing). It is now "View Projects" -> #projects. Added a Resume button.
  Hero heading and intro paragraph no longer start at opacity 0 (this was delaying the largest paint on phones).
- Navbar: desktop links (About, Skills, Projects, Contact) + Resume button. Phones got a working menu (before: only the "Dev." logo,
  no navigation and no way to reach the resume). Search hint shows Ctrl on Windows and Cmd on Mac.
- Command palette: now lists every section, the resume, GitHub, LinkedIn, LeetCode and email.
- Project cards: the three dead "#" links are gone. A live-demo icon/button only renders when a project has a `live` URL
  (add one in projects-section.tsx once you have checked it loads). Icon links got accessible names.
- Contact form: labels are tied to inputs, honeypot added for spam bots, status message is announced to screen readers,
  "Sending..." is no longer red, email/handle no longer cut off with "...".
  The Web3Forms key in the code is unchanged.
- GitHub section: removed hard-coded star/fork counters (they did not match GitHub and showed zeros).
- Certifications: the issuer (NPTEL | IIT Madras, Kaggle, ...) was in the data but never rendered. It is shown now.
- Skills and Education card titles: removed `italic` (Geist has no italic, the browser was faking the slant).
- Footer: "Skills" link pointed to #about, now #skills.
- Sharing: Open Graph + Twitter tags, metadataBase, a 1200x630 public/og.png (LinkedIn/WhatsApp previews).
- Smooth scrolling with a header offset; anchors no longer land under the fixed header.
- Phones: horizontal overflow on first load is clipped (page cannot be scrolled sideways).
- Motion: honours "reduce motion" (framer-motion + starfield); starfield pauses in hidden tabs and is capped at 600 stars.
- Code quality: ESLint went from 14 errors + 10 warnings to 0 + 0; TypeScript clean.
- README rewritten to match the real project (old one said Next 15, MERN, "AI assistant", live GitHub API, missing LICENSE).

MEASURED (local production build, Lighthouse)
- Mobile: Performance 78 -> 92, Accessibility 91 -> 100, LCP 4.2s -> 3.1s, TBT 350ms -> 150ms
- Desktop: Performance 100, Accessibility 91 -> 100

NOT CHANGED ON PURPOSE (needs your decision)
- Visual redesign (accent colours, starfield, glow, rainbow skill cards, layout), copy and tagline, which projects are featured.
- Favicon (src/app/favicon.ico is still the default Next.js one).
- The floating robot is still a static "Open to Work" card, not an AI assistant.
