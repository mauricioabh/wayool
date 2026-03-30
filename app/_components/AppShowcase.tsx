"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { HeartPulse, Landmark, Sparkles, Smartphone } from "lucide-react";
import { SectionWrapper } from "@/app/_components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/app/_lib/motion";

type AppShowcaseItem = {
  name: string;
  category: string;
  icon: LucideIcon;
  benefit: string;
  version: string;
  status: string;
  featured?: boolean;
};

const APPS: AppShowcaseItem[] = [
  {
    name: "Lumina",
    category: "Productivity",
    icon: Sparkles,
    benefit:
      "Cut through the noise and reclaim focus: your day gets structure back without the burnout of constant context switching.",
    version: "v0.8.4",
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

function PlaySoonBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
      <Smartphone className="size-3.5 shrink-0" aria-hidden />
      Coming soon · Web &amp; mobile
    </span>
  );
}

export function AppShowcase() {
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
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:grid-rows-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          aria-label="Wayool apps"
        >
          {APPS.map((app, index) => {
            const Icon = app.icon;
            const isFeatured = Boolean(app.featured);
            const smallPlacement =
              index === 1
                ? "lg:col-start-3 lg:row-start-1"
                : index === 2
                  ? "lg:col-start-3 lg:row-start-2"
                  : "";
            return (
              <motion.li
                key={app.name}
                variants={fadeUp}
                className={`${
                  isFeatured
                    ? "md:col-span-2 lg:col-span-2 lg:row-span-2"
                    : "md:col-span-1"
                } ${smallPlacement}`}
              >
                <motion.article
                  className={`glass-panel flex h-full flex-col rounded-2xl p-6 shadow-card transition-colors sm:p-8 ${
                    isFeatured ? "min-h-[320px] lg:min-h-[420px]" : ""
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
                    <PlaySoonBadge />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                    {app.category}
                  </p>
                  <h3 className="font-display mt-1 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
                    {app.name}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
                    {app.benefit}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[var(--border-subtle)] pt-5 text-xs text-[var(--text-muted)]">
                    <span className="rounded-md bg-[var(--surface)] px-2 py-1 font-mono text-[11px] text-[var(--highlight-muted)]">
                      {app.version}
                    </span>
                    <span className="text-[var(--text-muted)]">·</span>
                    <span>{app.status}</span>
                  </div>
                </motion.article>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </SectionWrapper>
  );
}
