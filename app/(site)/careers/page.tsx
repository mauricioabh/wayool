import type { Metadata } from "next";
import { ContentPage } from "@/app/_components/ContentPage";

export const metadata: Metadata = {
  title: "Careers — Wayool",
  description: "Join a compact studio building polished web and mobile products.",
};

export default function CareersPage() {
  return (
    <ContentPage
      eyebrow="Careers"
      title="Work with us."
      description="We are small by design: senior people, clear ownership, and respect for deep work."
    >
      <p>
        Wayool builds web apps and mobile experiences for teams who care how software feels. If you
        like short feedback loops, honest critique, and shipping work you are proud of, we would love
        to hear from you.
      </p>
      <h2>Open roles</h2>
      <p>
        We do not always hire on a schedule. When a seat opens, we post it here and on our
        newsletter first.
      </p>
      <ul>
        <li>
          <strong>Product engineer (full stack)</strong> — TypeScript, React, careful UI, solid API
          design. Mobile experience is a plus. <span className="text-[var(--text-muted)]">— No open reqs</span>
        </li>
        <li>
          <strong>Product designer</strong> — Systems thinking, interaction craft, accessibility
          instincts. <span className="text-[var(--text-muted)]">— No open reqs</span>
        </li>
      </ul>
      <h2>Spontaneous applications</h2>
      <p>
        Send your portfolio, GitHub, or a short note to{" "}
        <a href="mailto:careers@wayool.com">careers@wayool.com</a>. We read every message; we reply
        when there is a real fit.
      </p>
    </ContentPage>
  );
}
