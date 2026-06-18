# Oasis

The Oasis is a React + Vite frontend for a World of Warcraft charter neighborhood experience on the Moon Guard server. The app showcases shopping, roleplay venues, lore chronicles, and community spaces such as Razorwind Pines Lodge, The Crooked Key, The Arcanist's Ballroom, and Karuma Sedei.

## What this project includes

- React 19 with Vite for fast development and optimized builds
- React Router v7 for client-side routing
- MUI + Emotion for design components and styling
- Lazy-loaded pages for improved performance
- Playwright end-to-end tests
- Cloudflare Pages deployment using `wrangler` and a static `dist` asset directory
- Sitemap generation before builds via `scripts/generate-sitemap.js`

## Local development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run start
```

Open the app at `http://localhost:5173`.

## Build

Build the production site:

```bash
npm run build
```

This also runs the prebuild sitemap generation step.

## Deploy

Deploy the built site to Cloudflare Pages:

```bash
npm run deploy
```

## Testing

Install Playwright browsers, then run tests:

```bash
npm run playwright:install
npm run test:e2e
```

For headed mode:

```bash
npm run test:e2e:headed
```

## Project structure

- `src/` — application source
- `src/pages/` — route pages and content sections
- `src/components/` — shared UI components
- `src/context/` — theme/provider logic
- `src/hooks/` — custom React hooks
- `src/styles/` — theme definitions and fonts
- `public/` — static assets and Open Graph images
- `scripts/` — build helpers such as sitemap generation

## Notes

- The site is configured to deploy from `./dist` via Cloudflare Pages using `wrangler.jsonc`
- Routes include `/`, `/map`, `/crookedkey`, `/arcanistballroom`, `/razorwindpines`, `/karumasedei`, `/about`, `/contact`, and `/chronicles/*`
- The main app entry point is `src/main.jsx`

## Available npm scripts

- `npm run start` — start Vite dev server
- `npm run build` — build production site
- `npm run deploy` — build and deploy with Wrangler
- `npm run lint` — run ESLint
- `npm run generate-sitemap` — regenerate sitemap
- `npm run test:e2e` — run Playwright tests
- `npm run test:e2e:headed` — run Playwright tests in headed mode
- `npm run playwright:install` — install Playwright dependencies
