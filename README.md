# RedFort Security landing

Marketing site for RedFort Security's cyber due diligence services. Built with Vite, React, TypeScript, Tailwind CSS and shadcn/ui.

## Getting started

Prerequisites: Node.js 18+ and npm.

```sh
npm install
npm run dev
```

The app runs at http://localhost:5173 by default. Update `src` to adjust copy, sections, or UI components.

## Production build

```sh
npm run build
npm run preview
```

Static assets live in `public/` (including `og-image.svg` for social sharing). Vite output is emitted to `dist/`.

## Project structure

- `src/pages/Index.tsx`: Page layout composing all landing sections.
- `src/components/landing`: Section components (hero, problem, products, solution, clients, CTA, footer, navbar).
- `src/components/ui`: shadcn/ui primitives.
- `tailwind.config.ts`: Tailwind theme tokens and extensions.

## Contact

For updates or new content, reach out at info@redfort.security.
