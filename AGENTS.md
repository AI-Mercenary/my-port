# prof-port

Single-page portfolio for Sampath Varma Datla. React 19 + Vite 8 + Tailwind CSS v4 + TypeScript.

## Run

- `pnpm install`
- `pnpm dev` — dev server on http://localhost:8443

## Structure

- `src/App.tsx` - the whole page
- `src/index.css` - fonts, Tailwind import, theme tokens
- `src/main.tsx` - React entrypoint
- `index.html` - HTML shell
- `vite.config.ts` - Vite config (React, Tailwind, `@` alias for `src`)

## Code quality

- Use double quotes for strings containing apostrophes.
- Export components as default exports.
