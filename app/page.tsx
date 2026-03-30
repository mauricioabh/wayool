/*
 * Creative direction (Wayool)
 *
 * 1) Aesthetic: "Dark precision workshop" — near-black base, glass surfaces, cyan primary with a
 *    warm amber highlight for selective emphasis. Reads as serious product engineering without
 *    generic "AI startup" purple gradients.
 *
 * 2) Type: Plus Jakarta Sans (display / headlines) + Source Sans 3 (body / UI) — clear, modern,
 *    readable; avoids ultra-wide geometric display styles.
 *
 * 3) Palette: --bg-base, --text-primary / --text-muted, --accent + glow (cyan), --highlight
 *    (amber) for eyebrows, badges, and accents; --surface surfaces; --border-subtle separation.
 *
 * 4) Signature: skewed process band + oversized 01–04 step numerals + SVG path draw on scroll.
 */

import { AppShowcase } from "@/app/_components/AppShowcase";
import { Footer } from "@/app/_components/Footer";
import { Hero } from "@/app/_components/Hero";
import { HowItWorks } from "@/app/_components/HowItWorks";
import { Navbar } from "@/app/_components/Navbar";
import { ValueProps } from "@/app/_components/ValueProps";
import { Waitlist } from "@/app/_components/Waitlist";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" aria-label="Main content">
        <Hero />
        <AppShowcase />
        <ValueProps />
        <HowItWorks />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
