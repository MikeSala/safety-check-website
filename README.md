This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Contribution

Use [semantic commit](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) messages, specifying a scope as needed

The standard flow is (`dev` -> `staging` -> `master`)

### Dev

- If you are making small changes, commit directly to `dev`
  - A small change would generally be classified as something that doesn't need review from another dev
- If you are making large changes, create a feature branch and merge into `dev` with a pull request
  - A large change should generally be reviewed by at least one other dev

### staging and master
- Do not commit directly to staging or master. I would have setup branch protection rules, but you need to pay for github to gain access to those features
- Merge `dev` into `staging` or `master` via a pull request
- When merging into master, reference the issue number inside of your PR description, so the issue automatically closes upon merging

### hotfix
- Follow the traditional flow if possible (`dev` -> `staging` -> `master`)
- If not possible:
  - create a feature branch for your hotfix
  - merge into `dev` and `staging` via a pull request
  - if that looks good, merge your feature branch into `master`
