"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BookMarked,
  Bus,
  ExternalLink,
  Smartphone,
  Sun,
  Timer,
  TrendingUp,
  Tv,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "@/app/_components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/app/_lib/motion";

type AppShowcaseItem = {
  name: string;
  category: string;
  icon: LucideIcon;
  benefit: string;
  playSoonLabel?: string;
  apkDownloadHref?: string;
  privacyHref?: string;
  visitHref?: string;
  version: string;
  status: string;
};

const APPS: AppShowcaseItem[] = [
  {
    name: "Luz Parroquial — Prayer",
    category: "Prayer",
    icon: Sun,
    benefit:
      "Catholic prayer and devotion in Spanish—classic prayers, novenas, the rosary, and guided audio for when you want to pray without staring at the screen. Create an account to keep favorites and progress in sync across devices.",
    apkDownloadHref: "/api/downloads/luz-parroquial",
    privacyHref: "/legal/privacy/luz-parroquial",
    visitHref: "https://luzparroquial-prayer.wayool.com",
    version: "v0.1.0",
    status: "Live",
  },
  {
    name: "Live Countdown: for Fortnite Fans",
    category: "Fortnite",
    icon: Timer,
    benefit:
      "Live countdowns for Fortnite seasons, events, and shop resets—timed consistently from event schedules so you never miss a drop. Browse the shop and jam tracks, star favorites, and keep history in sync when you sign in.",
    playSoonLabel: "Coming soon · Google Play",
    privacyHref: "/legal/privacy/live-countdown-fortnite",
    visitHref: "https://livecountdown.wayool.com",
    version: "v1.0.0",
    status: "Live",
  },
  {
    name: "Watchily",
    category: "TV & streaming",
    icon: Tv,
    benefit:
      "Track what you watch across shows and seasons—pick up where you left off without the spreadsheet chaos.",
    visitHref: "https://watchily-ho.vercel.app",
    version: "v1.0.0",
    status: "Live",
  },
  {
    name: "MangaTrack",
    category: "Manga & reading",
    icon: BookMarked,
    benefit:
      "Follow manga series and reading progress in one place—know what’s next without losing your place.",
    visitHref: "https://mangatrack.wayool.com",
    version: "v1.0.0",
    status: "Live",
  },
  {
    name: "Health Erino",
    category: "Health & wellness",
    icon: Activity,
    benefit:
      "Track habits, routines, and wellness goals in one calm dashboard—small daily wins without the overwhelm.",
    visitHref: "https://health-erino.vercel.app",
    version: "v1.0.0",
    status: "Live",
  },
  {
    name: "CRT Líneas",
    category: "Public transit",
    icon: Bus,
    benefit:
      "Browse Costa Rica bus routes and lines—find the right connection faster when you need to move.",
    visitHref: "https://crt-lineas.vercel.app",
    version: "v1.0.0",
    status: "Live",
  },
  {
    name: "ArbPulse",
    category: "Markets & arbitrage",
    icon: TrendingUp,
    benefit:
      "Spot arbitrage opportunities at a glance—live signals that surface price gaps before they close.",
    visitHref: "https://arbpulse.wayool.com",
    version: "v1.0.0",
    status: "Live",
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

function GooglePlayDownloadButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      download="luz-parroquial.apk"
      className="inline-flex min-h-11 shrink-0 items-center rounded-lg p-0.5 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:min-h-12 md:min-h-14"
      aria-label="Download Luz Parroquial APK for Android"
    >
      <Image
        src="/google-play-badge.png"
        alt="Get it on Google Play"
        width={646}
        height={250}
        sizes="(max-width: 639px) 132px, (max-width: 1023px) 150px, 168px"
        className="h-11 w-auto sm:h-12 md:h-14"
        priority={false}
      />
    </a>
  );
}

function VisitSiteButton({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-4 py-2 text-xs font-semibold text-[var(--accent)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      aria-label={`Open ${name} website`}
    >
      Visit site
      <ExternalLink className="size-3.5 shrink-0" aria-hidden />
    </a>
  );
}

function AppCard({ app }: { app: AppShowcaseItem }) {
  const Icon = app.icon;
  return (
    <motion.article
      className="glass-panel flex h-full flex-col rounded-2xl p-6 shadow-card transition-colors sm:p-7"
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 32px 96px -28px rgba(0,0,0,0.9), 0 0 48px -12px rgba(34,211,238,0.35)",
      }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)]"
          aria-hidden
        >
          <Icon className="size-6" strokeWidth={1.75} />
        </div>
        <div className="flex flex-wrap items-center justify-end gap-2">
          {app.visitHref ? (
            <VisitSiteButton href={app.visitHref} name={app.name} />
          ) : null}
          {app.apkDownloadHref ? (
            <GooglePlayDownloadButton href={app.apkDownloadHref} />
          ) : app.playSoonLabel ? (
            <PlaySoonBadge label={app.playSoonLabel} />
          ) : null}
        </div>
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
            Products built for daily rituals.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-[var(--text-muted)]">
            Each one is built for responsive web and mobile: smooth flows, clear
            trust signals, and time back for the people who use them.
          </motion.p>
        </motion.div>

        <motion.ul
          className="mt-12 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          aria-label="Wayool apps"
        >
          {APPS.map((app) => (
            <motion.li key={app.name} variants={fadeUp} className="m-0 min-w-0">
              <AppCard app={app} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </SectionWrapper>
  );
}
