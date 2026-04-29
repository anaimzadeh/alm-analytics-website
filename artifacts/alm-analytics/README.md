# ALM Analytics Presentation Website

This is a complete, static presentation website for ALM Analytics, built with React, Vite, and Tailwind CSS.

## Overview
ALM Analytics is a data science, analytics, and AI/ML consulting practice. The site is presentation-first, with no backend API hooks required. All project data is stored locally in `src/data/projects.ts`.

## Development

1. Install dependencies (if not already installed):
   ```bash
   pnpm install
   ```

2. Run the local development server:
   ```bash
   pnpm --filter @workspace/alm-analytics run dev
   ```

## Build for Production

To create an optimized production build:

```bash
pnpm --filter @workspace/alm-analytics run build
```
The output will be placed in the `dist/public` directory.

## Deploy to Cloudflare Pages

This site is fully static and ready to be hosted on Cloudflare Pages (or similar providers like Vercel, Netlify).

**Settings for Cloudflare Pages:**
- **Framework Preset**: None / Create React App / Vite
- **Build Command**: `npm run build` (or `pnpm build` if configured)
- **Build Output Directory**: `dist/public`
- **Environment Variables**:
  - Set `VITE_CONTACT_ENDPOINT` if you wire up a contact form submission service in the future.

## Editing Content
- **Projects**: Edit `src/data/projects.ts` to add or modify project case studies and demos.
- **Pages**: Content for Services, Past Performance, About, and Contact is located in `src/pages/`.
