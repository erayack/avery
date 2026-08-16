# Agent Guide

This is a static Astro 5 site using TypeScript, plain CSS, Playwright, and Wrangler.

## Conventions

- Keep the implementation dependency-light and follow existing Astro and CSS patterns.
- Add blog posts to `src/data/posts.ts`; `[slug].astro` owns their shared layout.
- Keep shared theme and responsive styles in `src/styles/global.css`.
- Preserve keyboard access, visible focus states, dark mode, and mobile layouts.
- Do not deploy or change external state without explicit approval.

## Verification

Run `npm run build` after changes. Run `npm run test:ui` for navigation, interaction, responsive, or content-route changes. Use `npx wrangler deploy --dry-run` when changing Cloudflare configuration.
