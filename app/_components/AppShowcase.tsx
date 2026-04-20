"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { HeartPulse, Landmark, Smartphone, Sun } from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "@/app/_components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/app/_lib/motion";

type AppShowcaseItem = {
  name: string;
  category: string;
  icon: LucideIcon;
  benefit: string;
  playSoonLabel?: string;
  privacyHref?: string;
  version: string;
  status: string;
  featured?: boolean;
};

const APPS: AppShowcaseItem[] = [
  {
    name: "Luz Parroquial — Prayer",
    category: "Prayer",
    icon: Sun,
    benefit:
      "Catholic prayer and devotion in Spanish—classic prayers, novenas, the rosary, and guided audio for when you want to pray without staring at the screen. Create an account to keep favorites and progress in sync across devices.",
    playSoonLabel: "Coming soon · Google Play",
    privacyHref: "/legal/privacy/luz-parroquial",
    version: "v0.1.0",
    status: "In development",
    featured: true,
  },
  {
    name: "Vaulto",
    category: "Personal finance",
    icon: Landmark,
    benefit:
      "See where money goes without spreadsheet fatigue—clearer monthly decisions with less friction.",
    version: "v1.1.0",
    status: "Private beta",
  },
  {
    name: "Pulseia",
    category: "Health & wellness",
    icon: HeartPulse,
    benefit:
      "Build habits that stick: lightweight nudges that adapt to how you actually live.",
    version: "v0.3.2",
    status: "Launch Q3 2026",
  },
];

function PlaySoonBadge({ label = "Coming soon · Web & mobile" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
      <Smartphone className="size-3.5 shrink-0" aria-hidden />
      {label}
    </span>
  );
}

function AppCard({ app, isFeatured = false }: { app: AppShowcaseItem; isFeatured?: boolean }) {
  const Icon = app.icon;
  return (
    <motion.article
      className={`glass-panel flex flex-col rounded-2xl p-6 shadow-card transition-colors sm:p-8 ${
        isFeatured ? "" : "min-h-0 h-full md:h-full lg:h-auto"
      }`}
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 32px 96px -28px rgba(0,0,0,0.9), 0 0 48px -12px rgba(34,211,238,0.35)",
      }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className="flex size-12 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)]"
          aria-hidden
        >
          <Icon className="size-6" strokeWidth={1.75} />
        </div>
        <PlaySoonBadge label={app.playSoonLabel} />
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
        {app.category}
      </p>
      <h3 className="font-display mt-1 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
        {app.name}
      </h3>
      <p
        className={`mt-4 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base ${
          isFeatured ? "max-w-xl" : "min-h-0 flex-1 lg:flex-none"
        }`}
      >
        {app.benefit}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-[var(--border-subtle)] pt-5 text-xs text-[var(--text-muted)]">
        <span className="rounded-md bg-[var(--surface)] px-2 py-1 font-mono text-[11px] text-[var(--highlight-muted)]">
          {app.version}
        </span>
        <span className="text-[var(--text-muted)]">·</span>
        <span>{app.status}</span>
        {app.privacyHref ? (
          <>
            <span className="text-[var(--text-muted)]">·</span>
            <Link
              href={app.privacyHref}
              className="font-semibold text-[var(--accent)] transition-colors hover:text-[var(--highlight)]"
            >
              Privacy policy
            </Link>
          </>
        ) : null}
      </div>
    </motion.article>
  );
}

export function AppShowcase() {
  const featuredApp = APPS.find((a) => a.featured);
  const otherApps = APPS.filter((a) => !a.featured);
  return (
    <SectionWrapper id="apps" className="relative z-[1] scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-bold uppercase tracking-widest text-[var(--accent)]"
          >
            Our apps
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl"
          >
            Three products, three promises.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-[var(--text-muted)]">
            Each one is built for responsive web and mobile: smooth flows, clear
            trust signals, and time back for the people who use them.
          </motion.p>
        </motion.div>

        <motion.ul
          className="mt-12 flex list-none flex-col gap-4 p-0 md:grid md:grid-cols-2 md:items-stretch lg:mt-14 lg:flex lg:flex-row lg:items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          aria-label="Wayool apps"
        >
          {featuredApp ? (
            <motion.li
              key={featuredApp.name}
              variants={fadeUp}
              className="m-0 min-w-0 md:col-span-2 lg:max-w-none lg:flex-1 lg:self-start"
            >
              <AppCard app={featuredApp} isFeatured />
            </motion.li>
          ) : null}
          <motion.li
            variants={fadeUp}
            className="m-0 flex min-w-0 flex-col gap-4 md:contents lg:flex lg:flex-col lg:gap-4 lg:w-[min(100%,22rem)] lg:shrink-0 lg:self-start"
          >
            {otherApps.map((app) => (
              <div key={app.name} className="min-h-0 md:h-full lg:h-auto">
                <AppCard app={app} />
              </div>
            ))}
          </motion.li>
        </motion.ul>
      </div>
    </SectionWrapper>
  );
}
