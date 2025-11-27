## Safety Check Website

Portfolio-friendly marketing site for safety inspections of installations (electrical, gas, smoke alarms). Includes offers for different customer segments, FAQ modules, and multi-step lead forms.

## Highlights
- Service and persona pages sourced from `content/*`, rendered via reusable components (`ServiceSelector`, `SolutionSelector`, FAQ blocks).
- Forms: contact, tenant details, subscription opt-out, and “Work with us” with CV upload; the compliance booking form is currently disabled in code.
- SEO and analytics: `next-seo`, canonical URLs, GTM loaded only in production.
- Cookie consent: `react-cookie-consent` banner storing preferences (analytics/marketing) in cookie `pi_cookie_consent`.
- FAQ chatbot powered by Fuse.js; success/error notifications via `react-toastify`.

## Tech stack
- Next.js 13 (pages router), TypeScript, Tailwind CSS, path alias `~/*`.
- Apollo Client for GraphQL mutations, React Hook Form + MUI Stepper for multi-step flows.
- Stripe SetupIntent (used when the compliance booking form is re-enabled), react-dropzone for CV uploads.
- Next SEO, Google Tag Manager (production only), react-cookie-consent, Fuse.js.

## Local setup
1) Install dependencies:
```bash
npm install
```
2) Add `.env.local` (sample values):
```
NEXT_PUBLIC_API_ENDPOINT=https://example.com
NEXT_PUBLIC_TEL_LINK=+48123123123
NEXT_PUBLIC_EMAIL_LINK=kontakt@example.com
# Optional: Stripe and booking
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_BASE_URL=http://localhost:3000/
NEXT_PUBLIC_CIN_DIRECT_API_ENDPOINT=https://example.com
```
3) Run dev server:
```bash
npm run dev
```
Visit `http://localhost:3000`.

## Build and static export
- `npm run build` – production build.
- `npm run export` – build + `next export` (outputs to `out/`, ready for static/CDN hosting).
- `npm run lint` – lint.
- `npm run analyze` – bundle analysis with `ANALYZE=true`.

## Architecture
See `docs/SDD.md` for the full design summary (stack, data flows, integrations, constraints).
