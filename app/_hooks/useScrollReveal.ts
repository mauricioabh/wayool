"use client";

import { fadeUp, scrollViewport, staggerContainer } from "@/app/_lib/motion";

export function useScrollReveal() {
  return {
    fadeUp,
    staggerContainer,
    viewport: scrollViewport,
  };
}
