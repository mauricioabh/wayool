"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type GlowButtonVariant = "primary" | "outline";

export type GlowButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: GlowButtonVariant;
} & Omit<HTMLMotionProps<"button">, "children">;

export function GlowButton({
  children,
  className = "",
  variant = "primary",
  type = "button",
  ...rest
}: GlowButtonProps) {
  const base =
    "relative inline-flex min-h-[44px] items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

  const styles: Record<GlowButtonVariant, string> = {
    primary:
      "bg-[var(--accent)] text-zinc-950 shadow-glow hover:shadow-glow-lg",
    outline:
      "border border-[var(--border-subtle)] bg-transparent text-[var(--text-primary)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)]",
  };

  return (
    <motion.button
      type={type}
      className={`${base} ${styles[variant]} ${className}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
