import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/app/_components/ContentPage";

export const metadata: Metadata = {
  title: "FAQ — Wayool",
  description: "Frequently asked questions about Wayool products and services.",
};

export default function FaqPage() {
  return (
    <ContentPage
      eyebrow="Support"
      title="FAQ"
      description="Short answers to common questions."
    >
      <h2>What does Wayool build?</h2>
      <p>
        We design and ship web apps and mobile experiences with a product-minded engineering
        approach—performance, UX, and maintainability matter equally.
      </p>
      <h2>Do you take client work?</h2>
      <p>
        Sometimes. Capacity is limited; the best path is{" "}
        <Link href="/#contact" className="font-semibold text-[var(--accent)] underline-offset-2 hover:underline">
          the waitlist
        </Link>{" "}
        or a direct note to{" "}
        <a href="mailto:support@wayool.com">support@wayool.com</a> with scope and timeline.
      </p>
      <h2>Where are your apps available?</h2>
      <p>
        We announce store and web URLs per product on our homepage as each launch gets close.
        Sign up for updates if you want to be notified.
      </p>
      <h2>How do I delete my data?</h2>
      <p>
        Email <a href="mailto:privacy@wayool.com">privacy@wayool.com</a> with the product name
        and the email you used. We will verify and process requests per our{" "}
        <a href="/legal/privacy">Privacy policy</a>.
      </p>
      <h2>Need more help?</h2>
      <p>
        Visit the <a href="/support/help">Help center</a> for contact options and security
        reporting.
      </p>
    </ContentPage>
  );
}
