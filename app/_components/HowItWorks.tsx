"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, Lightbulb, Palette, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { fadeUp, staggerContainer } from "@/app/_lib/motion";

type Step = {
  n: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Discovery",
    description:
      "We pin down the real problem, users, and success metrics before touching code.",
    icon: Lightbulb,
  },
  {
    n: "02",
    title: "Design",
    description:
      "Clear flows, tactile prototypes, and visuals that match your brand.",
    icon: Palette,
  },
  {
    n: "03",
    title: "Build",
    description:
      "Two-week slices, QA on real devices and browsers, technical debt kept in check.",
    icon: Code2,
  },
  {
    n: "04",
    title: "Ship",
    description:
      "Store listings, staged rollouts, and monitoring from day one—web and mobile.",
    icon: Rocket,
  },
];

export function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="solutions"
      className="relative scroll-mt-24 py-24 sm:py-28"
      aria-labelledby="process-heading"
    >
      <div
        className="pointer-events-none absolute left-[-8%] right-[-8%] top-[14%] bottom-[10%] -skew-y-2 border-y border-[var(--border-subtle)] bg-[var(--surface)]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto max-w-6xl skew-y-2 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-bold uppercase tracking-widest text-[var(--highlight)]"
          >
            How we work
          </motion.p>
          <motion.h2
            id="process-heading"
            variants={fadeUp}
            className="font-display mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl"
          >
            From idea to live users—with traction.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-[var(--text-muted)]">
            A transparent process: fewer surprises, more signal. The line ties each
            phase together and draws on as you scroll.
          </motion.p>
        </motion.div>

        <div className="relative mt-16 hidden lg:block">
          <svg
            className="absolute left-0 right-0 top-[52px] h-[48px] w-full"
            viewBox="0 0 1000 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              <linearGradient
                id="process-line-desktop"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="var(--accent)" />
                <stop offset="100%" stopColor="var(--highlight-muted)" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 72 24 C 200 10 360 38 500 24 S 800 10 928 24"
              stroke="url(#process-line-desktop)"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              fill="none"
              initial={
                reduceMotion
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 0, opacity: 0.35 }
              }
              whileInView={
                reduceMotion ? undefined : { pathLength: 1, opacity: 1 }
              }
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.35, ease: "easeInOut" }}
            />
          </svg>

          <motion.ol
            className="relative grid grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <motion.li key={step.n} variants={fadeUp} className="relative pt-2">
                  <span
                    className="font-display pointer-events-none absolute -left-1 -top-10 text-[4.5rem] font-extrabold leading-none text-[var(--accent)]/[0.07]"
                    aria-hidden
                  >
                    {step.n}
                  </span>
                  <div
                    className="relative z-[1] flex size-12 items-center justify-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-base)]/90 text-[var(--accent)] shadow-glow"
                    aria-hidden
                  >
                    <Icon className="size-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display relative z-[1] mt-5 text-lg font-bold text-[var(--text-primary)]">
                    {step.title}
                  </h3>
                  <p className="relative z-[1] mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    {step.description}
                  </p>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>

        <div className="relative mt-14 lg:hidden">
          <svg
            className="absolute left-[1.35rem] top-10 h-[calc(100%-3rem)] w-4 md:left-6"
            viewBox="0 0 4 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              <linearGradient id="process-line-mobile" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--accent)" />
                <stop offset="100%" stopColor="var(--highlight-muted)" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 2 0 V 320"
              stroke="url(#process-line-mobile)"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              fill="none"
              initial={
                reduceMotion
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 0, opacity: 0.35 }
              }
              whileInView={
                reduceMotion ? undefined : { pathLength: 1, opacity: 1 }
              }
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </svg>

          <motion.ol
            className="relative space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.n}
                  variants={fadeUp}
                  className="relative pl-14 md:pl-16"
                >
                  <span
                    className="font-display absolute left-0 top-0 text-5xl font-extrabold leading-none text-[var(--accent)]/[0.12] md:text-6xl"
                    aria-hidden
                  >
                    {step.n}
                  </span>
                  <div
                    className="absolute left-[0.55rem] top-2 flex size-11 items-center justify-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--accent)] shadow-glow md:left-3"
                    aria-hidden
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    {step.description}
                  </p>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
