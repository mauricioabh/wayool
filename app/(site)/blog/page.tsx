import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/app/_components/ContentPage";

export const metadata: Metadata = {
  title: "Blog — Wayool",
  description: "Notes on shipping web and mobile products: process, UX, and engineering judgment.",
};

export default function BlogPage() {
  return (
    <ContentPage
      eyebrow="Blog"
      title="Ideas in public."
      description="Short posts on how we design, build, and launch products—no fluff, no growth hacks."
    >
      <p>
        We publish when we have something concrete to share: a lesson from a release, a pattern
        that saved weeks, or a UX detail worth the extra polish.
      </p>
      <h2>Latest</h2>
      <ul>
        <li>
          <strong>Shipping both surfaces.</strong> Why we treat web and mobile as one product
          narrative, not two backlogs. <span className="text-[var(--text-muted)]">— Coming soon</span>
        </li>
        <li>
          <strong>Telemetry without creepiness.</strong> What we measure, what we avoid, and how
          we talk about it with users. <span className="text-[var(--text-muted)]">— Coming soon</span>
        </li>
      </ul>
      <p>
        Want early posts in your inbox?{" "}
        <Link href="/#contact" className="font-semibold text-[var(--accent)] underline-offset-2 hover:underline">
          Join the waitlist
        </Link>{" "}
        and we will keep updates rare and useful.
      </p>
    </ContentPage>
  );
}
