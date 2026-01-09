# AGENTS.md

This repository is a Next.js 13 (pages router) marketing site with TypeScript and Tailwind CSS. Use these notes when making changes.

## Project basics
- Stack: Next.js 13 (pages), React, TypeScript, Tailwind CSS, next-seo.
- Static export: `next export` is used; keep pages compatible with static output.
- Path alias: `~/*` maps to repo root.

## Local setup
- Install: `npm install`
- Env: create `.env.local` (see `README.md` for required `NEXT_PUBLIC_*` values).
- Run: `npm run dev`
- Lint: `npm run lint`
- Build/export: `npm run build` / `npm run export`

## Content and routing
- Marketing copy lives in `content/*`; prefer editing content files over component JSX.
- Reuse route constants from `content/Routes.tsx` (avoid hardcoded paths).
- Avoid putting reusable UI in `pages/`; keep components in `components/`.

## UI conventions
- Use Tailwind utility classes; avoid ad-hoc inline styles unless necessary.
- Images should come from `src/assets` and use `ResponsiveImage` where possible.
- Keep typography consistent with existing `h1`–`h5` utility classes.

## Forms and flows
- Forms use `react-hook-form`; prefer typed values and avoid `any` in new code.
- Multi-step flows use `components/Stepper.tsx` + `components/StepSection.tsx`.

## SEO and analytics
- Pages typically set SEO via `NextSeo` in `getLayout` with `MainLayout`.
- Canonical URLs are handled in `pages/_app.tsx`; do not hardcode canonicals.
