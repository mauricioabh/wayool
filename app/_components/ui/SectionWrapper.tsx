"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, scrollViewport } from "@/app/_lib/motion";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  /** When true, children should use motion + fadeUp for stagger */
  variants?: typeof fadeUp;
};

export function SectionWrapper({
  children,
  className = "",
  id,
  variants = fadeUp,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}
