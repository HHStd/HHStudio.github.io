# HHStudio GitHub Pages

Static Astro landing page for Vaktio+.

## What it includes
- App Store style homepage
- Screenshot showcase
- Short feature grid
- TestFlight CTA
- Support and Privacy pages

## Project structure
- `src/data/site.js` - central app/site content
- `src/pages/index.astro` - homepage
- `src/pages/support.astro` - support page
- `src/pages/privacy.astro` - privacy page
- `public/assets/apps/vaktio-plus/` - website assets

## Local development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Preview
```bash
npm run preview
```

## Notes
- The site is fully static.
- `Vaktio+` is the only featured app for now.
- App Store and Google Play buttons are placeholders.
- Add new apps by extending `src/data/site.js`.
