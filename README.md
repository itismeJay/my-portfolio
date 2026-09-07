# My Portfolio

Personal portfolio site built with **Next.js** (App Router), React, TypeScript,
Tailwind CSS and shadcn/ui.

## Scripts

```bash
npm run dev      # start the dev server on http://localhost:3000
npm run build    # production build
npm start        # serve the production build on http://localhost:3000
npm run clean    # remove the .next / out build output
npm run lint     # next lint
npm test         # run the vitest suite
```

> `npm start` needs a completed `npm run build` first, and `next dev` and
> `next start` share the `.next` directory — don't run both against it at once.
> If `next start` throws `Cannot find a production build` or a chunk/500 error,
> run `npm run clean && npm run build` and start again.

## Structure

- `app/` – Next.js App Router entry points (`layout.tsx`, route `page.tsx` files,
  `not-found.tsx`, `providers.tsx`, `globals.css`).
- `src/views/` – top-level page components rendered by the routes in `app/`.
- `src/components/` – UI and section components (`src/components/ui/` is shadcn/ui).
- `src/hooks/`, `src/lib/` – shared hooks and utilities.
- `public/assets/` – static images.
