# Wayool

## What is Wayool?

Wayool is a **web and mobile product studio** that ships polished apps with performance-minded delivery — from landing pages and PWAs to full-stack products on Vercel.

**Live:** https://wayool.com

## Who is it for?

Founders and teams who need a compact engineering partner for production-ready web and mobile experiences.

## FAQ

### What does Wayool build?
Next.js web apps, React Native / Expo mobile apps, and studio sites with SEO, PWA, and deployment on Vercel.

### Where can I see shipped apps?
The homepage showcases Luz Parroquial, Live Countdown for Fortnite Fans, and other studio projects with live links.

### How do I contact Wayool?
Email support@wayool.com or use the site contact paths in the footer.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Production practices

- **Core Web Vitals (RUM):** `@sentry/nextjs` with `browserTracingIntegration` — set `SENTRY_DSN` in `.env.local` (see `.env.example`). View Web Vitals in Sentry Performance.
- **Lab:** Lighthouse CI on PRs (`.github/workflows/lighthouse.yml`).
- Dev probe: `GET /api/debug/sentry` (disabled when `VERCEL_ENV=production`).
