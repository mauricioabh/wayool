"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { FormEvent } from "react";
import { useId, useState } from "react";
import { GlowButton } from "@/app/_components/ui/GlowButton";
import { SectionWrapper } from "@/app/_components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/app/_lib/motion";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const inputId = useId();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setSuccess(true);
  }

  return (
    <SectionWrapper
      id="contact"
      className="relative z-[1] scroll-mt-24 py-20 sm:py-24"
      aria-labelledby="waitlist-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel overflow-hidden rounded-[1.75rem] border border-[var(--border-subtle)] bg-gradient-to-br from-[var(--surface)] via-[#121214] to-[var(--bg-base)] p-8 shadow-card sm:p-12 lg:p-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mx-auto max-w-xl text-center"
          >
            <motion.h2
              id="waitlist-heading"
              variants={fadeUp}
              className="font-display text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl md:text-4xl"
            >
              Be first in line when we open the roster for new web and mobile
              work.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-[var(--text-muted)]">
              Early access · Product updates only · No spam
            </motion.p>

            {!success ? (
              <motion.form
                variants={fadeUp}
                className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-stretch"
                onSubmit={handleSubmit}
              >
                <div className="relative flex-1 text-left">
                  <motion.label
                    htmlFor={inputId}
                    className="pointer-events-none absolute left-4 top-1/2 z-[1] origin-left -translate-y-1/2 text-sm text-[var(--text-muted)] transition-all"
                    animate={
                      email.length > 0
                        ? {
                            top: "0.55rem",
                            scale: 0.85,
                            y: 0,
                            x: -2,
                            color: "var(--highlight)",
                          }
                        : {
                            top: "50%",
                            scale: 1,
                            y: "-50%",
                            x: 0,
                            color: "var(--text-muted)",
                          }
                    }
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  >
                    Email
                  </motion.label>
                  <input
                    id={inputId}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="peer min-h-[52px] w-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-4 pb-3 pt-7 text-[var(--text-primary)] shadow-inner outline-none transition-colors placeholder:text-transparent focus:border-[var(--highlight)] focus:ring-2 focus:ring-[var(--highlight)]/25"
                    placeholder="you@example.com"
                  />
                </div>
                <GlowButton type="submit" className="sm:shrink-0 sm:self-stretch">
                  Join the list
                </GlowButton>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="mt-10 flex flex-col items-center gap-3"
                role="status"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.05, stiffness: 400, damping: 18 }}
                >
                  <CheckCircle2
                    className="size-14 text-[var(--accent)]"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </motion.div>
                <p className="text-lg font-semibold text-[var(--text-primary)]">
                  You are on the list. Watch your inbox.
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  If nothing shows up, check promotions or spam.
                </p>
              </motion.div>
            )}

            <motion.p
              variants={fadeUp}
              className="mt-6 text-xs leading-relaxed text-[var(--text-muted)]"
            >
              We respect your inbox. No spam—ever.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
