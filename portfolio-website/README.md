# Dev Saxena | Portfolio

Personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4, shadcn/ui (Base UI) and Framer Motion.
Live site: https://dev-saxena.vercel.app

## What is in it

- Single-page layout: hero, about, skills, education, projects (with case-study dialogs), GitHub repos, certifications, contact.
- Contact form posted to [Web3Forms](https://web3forms.com) (client-side, with a honeypot field for spam bots).
- Command palette (`Ctrl+K` / `Cmd+K`) for jumping to sections, the resume and social links.
- Canvas starfield background (static when the visitor prefers reduced motion).
- Dark theme only.
- Vercel Analytics and Speed Insights.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Editing content

- Projects and case studies: `src/components/projects-section.tsx` (`live` is optional; add it only after checking the URL loads).
- Certifications: `src/components/certifications-section.tsx`.
- Resume: replace `public/resume.pdf`.
- Share image used for link previews: `public/og.png` (1200x630).

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · cmdk · lucide-react
