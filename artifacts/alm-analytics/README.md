# ALM Analytics Presentation Website

This is a complete, static presentation website for ALM Analytics, built with React, Vite, and Tailwind CSS.

## Overview
ALM Analytics is a data science, analytics, and AI/ML consulting practice. The site is presentation-first and stores project data locally in `src/data/projects.ts`. The contact form uses a Cloudflare Pages Function at `/api/contact` to send email through Resend.

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
  - `RESEND_API_KEY`: Resend API key used by the Pages Function.
  - `CONTACT_TO_EMAIL`: Destination inbox for contact form notifications, for example `howdy@almanalytics.net`.
  - `CONTACT_FROM_EMAIL`: Verified Resend sender, for example `ALM Analytics <contact@almanalytics.net>`.
  - `VITE_CONTACT_ENDPOINT`: Optional browser-side override for the contact endpoint. Defaults to `/api/contact`.

The Pages project root must be `artifacts/alm-analytics` for Cloudflare to discover `functions/api/contact.ts`.

## Editing Content
- **Projects**: Edit `src/data/projects.ts` to add or modify project case studies and demos.
- **Pages**: Content for Services, Past Performance, About, and Contact is located in `src/pages/`.
