# Avery

A Kyoto-inspired personal portfolio and editorial site built with Astro. It includes responsive light and dark themes, openable blog posts, a detailed case study, accessible navigation, and Cloudflare Workers deployment support.

## Local development

Requires Node.js 20.18.1 or newer.

```bash
npm install
npm run dev
```

## Commands

- `npm run build` — type-check and build the static site into `dist/`
- `npm run preview` — preview the Astro production build
- `npm run test:ui` — run Playwright UI tests
- `npm run preview:cloudflare` — build and preview with Wrangler
- `npm run deploy` — build and deploy to Cloudflare

Blog content lives in `src/data/posts.ts`; the homepage and case study are under `src/pages/`.
