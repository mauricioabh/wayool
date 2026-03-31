import type { Metadata } from "next";
import { ContentPage } from "@/app/_components/ContentPage";

export const metadata: Metadata = {
  title: "Help Center — Wayool",
  description: "Get help with Wayool products and your account.",
};

export default function HelpCenterPage() {
  return (
    <ContentPage
      eyebrow="Support"
      title="Help center"
      description="We are a small team, but we answer every request we can."
    >
      <h2>Contact us</h2>
      <p>
        For product issues, billing questions, or anything else:{" "}
        <a href="mailto:support@wayool.com">support@wayool.com</a>. Please include your app name,
        platform (web or mobile), and steps to reproduce if you are reporting a bug.
      </p>
      <h2>Response times</h2>
      <p>
        We aim to reply within a few business days. Critical outages get priority when we are
        aware of them—follow our status page when we publish one, or email with &quot;URGENT&quot;
        in the subject for production-down situations.
      </p>
      <h2>Security</h2>
      <p>
        Found a vulnerability? Email <a href="mailto:security@wayool.com">security@wayool.com</a>{" "}
        with details. Please do not publicly disclose until we have had time to respond.
      </p>
      <p>
        Looking for quick answers? Check the <a href="/support/faq">FAQ</a> first.
      </p>
    </ContentPage>
  );
}
