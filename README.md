# Flowbridge Landing Page

A Next.js (App Router) + Tailwind landing page for Flowbridge, an automation & AI studio.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure

- `app/` : root layout, page composition, global styles
- `components/` : one file per section (Hero, Systems, Flow, Dashboards, Industries, StackBuilder, Process, Why, Faq, CTA, Footer) plus `mockups.jsx` (illustrative product screens)
- `data/content.js` : all page copy (systems, FAQ, process, industries, etc.)

Append `?static` to the URL to disable scroll animations (useful for screenshots).

## Deploy

Import the repository in Vercel. No environment variables are required; the framework preset is detected automatically.
