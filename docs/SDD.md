# Safety Check Website — Software Design Document

## 1. Purpose and scope
- Public marketing and lead-gen site for safety inspections of installations (electrical, gas, smoke alarms) aimed at property managers and owners.
- Covers offer presentation, FAQ/CTAs, and multiple forms (contact, tenant details, careers with CV upload, subscription opt-out).
- Statical export (`next export`) suitable for CDN hosting; content and forms run client-side with external integrations.

## 2. Architecture and structure
- **Framework**: Next.js 13 (pages router) with TypeScript and Tailwind CSS; source in `pages`, `components`, `content`, `styles`, `utils`.
- **Composition**: `_app.tsx` wraps the app with `ApolloProvider`, `ViewportProvider`, `DefaultSeo`, GTM (production only), `ToastContainer`, `Chatbot`, and `CookieBanner`; most pages use `MainLayout`.
- **Routing**: static pages for services and customer personas (`/uslugi`, `/rozwiazania`, dedicated landings in `pages/*`), policy/FAQ pages, technical paths `/opt-out`, `/checkout-result`, `/tenant-information-request`, `/praca-z-nami`.
- **Content**: imported from `content/*` modules (e.g., `content/homePageContent.ts`, `content/.../content.pl.ts`) via alias `~/*` (see `tsconfig.json`).
- **UI**: shared components (`ServiceSelector`, `SolutionSelector`, `ResponsiveImage`, `Faq`, `Header/Footer`) and layout helpers (`MarginLayout`, `StepLayout`, `ModalLayout`).
- **Global state**: `ViewportProvider` calculates `isMobile` from window width and exposes it via context for responsive logic.

## 3. Data flows and forms
- **GraphQL (Apollo Client)**: `lib/apollo.ts` targets `NEXT_PUBLIC_API_ENDPOINT` (`/graphql`).
- **Lead forms** (React Hook Form):
  - `components/ContactForm.tsx` → mutation `submitContactForm`.
  - `components/TenantForm.tsx` → mutation `submitTenantRequestForm` (adds `request` from query string).
  - `pages/praca-z-nami/index.tsx` + `components/WorkWithUs/*` → mutation `submitWorkApplication`; CV upload via `StyledDropzone` (file converted to base64 in `utils/blob.ts`).
  - `pages/opt-out/index.tsx` → mutation `optOutCustomer` using token `t` from query.
- **Multi-step flows**: `components/Stepper.tsx` (MUI) + sections `components/WorkWithUs/FormSections/*`. Per-step validation with `trigger` using a field list; Next button blocked on errors.
- **Notifications**: form successes/errors surfaced via `react-toastify` (`utils/toast.ts`).

## 4. Integrations and key libraries
- **UI/UX**: Tailwind CSS with extended `primary` palette, fonts via `@next/font` (Inter), utility heading classes h1–h5 in `tailwind.config.cjs`; MUI components (Stepper, Card).
- **Analytics**: Google Tag Manager (`lib/gtag.ts`, `pages/_document.tsx`) loaded only in production; `pageview` events on `routeChangeComplete`; GTM ID overridable via `NEXT_PUBLIC_GTM_ID` (defaults to `GTM-PJBDLC2`).
- **SEO**: `next-seo` (`DEFAULT_SEO` in `next-seo.config.ts`) + dynamic `canonical` in `_app.tsx`.
- **Cookie Consent**: `react-cookie-consent` in `components/CookieBanner.tsx`, storing preferences in cookie `pi_cookie_consent` (sameSite Lax, 180 days); toggles for analytics and marketing.
- **FAQ search**: `components/Faq/ChatBot.tsx` uses Fuse.js to match questions/answers from `FaqContent`.
- **Files**: `react-dropzone` for CV upload; files converted to base64 and sent in GraphQL payloads.
- **Media**: images from `src/assets` + `next/image` with `unoptimized` (required by `next export`); remote domain allowlist includes `lirp.cdn-website.com`.

## 5. Build, run, deployment
- Scripts (`package.json`): `dev`, `build`, `start`, `export` (build + `next export`), `lint`, `analyze` (bundle analyzer with `ANALYZE=true`).
- `next.config.js`: `output: "export"`, `trailingSlash: true`, `reactStrictMode: true`, `productionBrowserSourceMaps: true`, ESLint errors ignored during build.
- Required public env vars:  
  `NEXT_PUBLIC_API_ENDPOINT`, `NEXT_PUBLIC_TEL_LINK`, `NEXT_PUBLIC_EMAIL_LINK`; optional `NEXT_PUBLIC_BASE_URL`, `NEXT_PUBLIC_GTM_ID` (analytics), other entries used in content (`content/polityka-prywatnosci`).
- Aliases and TS: `baseUrl` set to repo root; alias `~/*` for relative imports.

## 6. Security and privacy
- **PII**: forms send personal data (name, email, phone, CV) without extra client-side encryption; relies on HTTPS transport to `NEXT_PUBLIC_API_ENDPOINT`. CV files converted to base64 in-browser.
- **Cookies**: preference cookie `pi_cookie_consent` limited to user choices; `sameSite="Lax"`, path `/`, expiry 180 days. GTM load is controlled only by `NODE_ENV === "production"` (not by consent) in current code.
- **Limitations**: no client-side CSRF/rate limits; basic validation (email regex, required fields), no client-side sanitization for free-text fields.

## 7. Observability and error handling
- Mutation errors and exceptions logged to console and/or shown in toasts (`errorToast`); no central logger or error reporting.
- No automated tests; manual testing required for key paths (forms, navigation, static export).

## 8. Known gaps and future work
- No client-side file size limits for CV upload (depends on `react-dropzone` and backend enforcement).
- Missing E2E/unit tests and CI; adding basic scenarios (page render, form submissions with mocked API) would reduce regression risk for public release.
