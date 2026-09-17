# Flowbridge Landing Page

A Next.js (App Router) landing page for Flowbridge, an automation & AI studio.

## Structure

```
app/
  layout.js       # root layout: fonts, theme init script, icon sprite, AOS init
  page.js         # composes the page from section components
  globals.css     # Tailwind directives + theme CSS variables (light/dark)
components/
  Navbar.jsx      # sticky nav, mobile menu (client)
  ThemeToggle.jsx # light/dark toggle (client)
  Hero.jsx        # hero headline + floating mockup cards
  Solutions.jsx   # "solve your bottlenecks" section + dashboard mockup
  Bento.jsx       # 2x2 feature card grid
  BentoCard.jsx   # shared card shell for the bento grid
  Toolkit.jsx     # full 12-service grid (data-driven)
  Process.jsx     # 4-step build process (data-driven)
  CTA.jsx         # closing call-to-action band
  Footer.jsx      # link-directory footer
  Icon.jsx        # <svg><use/></svg> wrapper for the icon sprite
  IconSprite.jsx  # all icon glyphs, defined once
  Pill.jsx        # small pill/badge used across sections
  AosInit.jsx     # initializes the AOS scroll-reveal library (client)
data/
  toolkit.js      # the 12 services shown in the Toolkit section
  steps.js        # the 4 steps shown in the Process section
  footer.js       # footer link columns
```

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS** — utility classes mapped to CSS variables in `globals.css`, so the whole palette swaps with one `dark` class on `<html>`
- **AOS** — scroll-reveal animations

## Editing content

- Services: edit `data/toolkit.js`
- Build process steps: edit `data/steps.js`
- Footer links: edit `data/footer.js`
- Brand name / email / colors: search for `Flowbridge` and `hello@flowbridge.studio`, and the CSS variables at the top of `app/globals.css`
