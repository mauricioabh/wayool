"use client";

import { motion } from "framer-motion";
import { Cpu, HeartHandshake, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionWrapper } from "@/app/_components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/app/_lib/motion";

type Pillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const PILLARS: Pillar[] = [
  {
    title: "Performance that holds up",
    description:
      "Fast loads, lean bundles, and real-device testing across browsers and phones—what feels great in a demo is what you keep in production.",
    icon: Cpu,
  },
  {
    title: "UX with intent",
    description:
      "Purposeful micro-interactions, clear hierarchy, and accessibility from sprint one—software that feels bespoke, not pasted from a template.",
    icon: HeartHandshake,
  },
  {
    title: "Continuous improvement",
    description:
      "Ethical telemetry, sensible experiments, and gradual rollouts—your product evolves without jarring the people who already trust it.",
    icon: TrendingUp,
  },
];

export function ValueProps() {
  return (
    <SectionWrapper
      id="about"
      className="relative z-[1] scroll-mt-24 py-20 sm:py-24"
      aria-labelledby="value-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-bold uppercase tracking-widest text-[var(--highlight)]"
          >
            Why Wayool?
          </motion.p>
          <motion.h2
            id="value-heading"
            variants={fadeUp}
            className="font-display mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl"
          >
            Engineering with product judgment.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-[var(--text-muted)]"
          >
            We are a compact studio: we talk in outcomes, not endless tickets,
            and every line of code has to earn its place with the people using
            it.
          </motion.p>
        </motion.div>

        <motion.ul
          className="mt-14 grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.li
                key={pillar.title}
                variants={fadeUp}
                className={`relative flex flex-col border-b border-[var(--border-subtle)] py-8 last:border-b-0 md:border-b-0 md:py-0 ${
                  index > 0 ? "md:border-l md:border-[var(--border-subtle)] md:pl-8" : ""
                }`}
              >
                <div
                  className="mb-5 flex size-14 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--highlight-glow),transparent_65%)] text-[var(--highlight)] ring-1 ring-[var(--highlight)]/30"
                  aria-hidden
                >
                  <Icon className="size-7" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
                  {pillar.description}
                </p>
                <div
                  className="mt-8 h-px w-full bg-gradient-to-r from-[var(--highlight)]/40 via-[var(--border-subtle)] to-transparent md:hidden"
                  aria-hidden
                />
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </SectionWrapper>
  );
}
