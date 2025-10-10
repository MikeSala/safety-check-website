## Safety Check Website

Safety Check is a marketing site showcasing compliance inspections and property safety services.  
It guides property managers, landlords, and homeowners through tailored solutions and a multi-step contact form so they can request audits quickly.

## Stack & Highlights

- Next.js with TypeScript and Tailwind CSS for fast, responsive UI.
- Component-driven architecture (`SolutionSelector`, `ServiceSelector`, custom form fields).
- Content sourced from typed `/content` modules and rendered in reusable layouts.
- `ViewportProvider` powers mobile-aware components without duplicating logic.

## Local Setup

Clone the repo, install dependencies, and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to explore the app.

## Contribution Workflow

- Use semantic commit messages with a scope (e.g. `Solution Selector: refine hover styling`).
- Work on `dev`; promote changes via PRs (`dev` → `staging` → `master`).
- For hotfixes, branch off, open PRs, and merge into all active branches once validated.
