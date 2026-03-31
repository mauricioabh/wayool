import type { Metadata } from "next";
import { ContentPage } from "@/app/_components/ContentPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Wayool",
  description: "How Wayool collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Privacy policy"
      description="Last updated: March 30, 2026. Plain language summary first; details below."
    >
      <p>
        <strong>Summary.</strong> We collect only what we need to run our site, respond to you,
        and improve our products. We do not sell your personal data. You can contact us anytime
        about your information.
      </p>
      <h2>Who we are</h2>
      <p>
        Wayool (&quot;we&quot;, &quot;us&quot;) operates this website and related products. For
        privacy questions: <a href="mailto:privacy@wayool.com">privacy@wayool.com</a>.
      </p>
      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Contact and waitlist.</strong> If you join our waitlist or email us, we store
          your address and message so we can respond.
        </li>
        <li>
          <strong>Usage data.</strong> We may use cookies or similar technologies to understand
          aggregate traffic (see our <a href="/legal/cookies">Cookie policy</a>).
        </li>
        <li>
          <strong>Product telemetry.</strong> In our apps, we may collect limited, ethical usage
          data described in each product—the goal is reliability and improvement, not surveillance.
        </li>
      </ul>
      <h2>How we use data</h2>
      <p>
        We use information to operate the site, communicate with you, improve our services, comply
        with law, and keep accounts secure. We do not sell personal data to third parties.
      </p>
      <h2>Retention</h2>
      <p>
        We keep data only as long as needed for the purposes above or as required by law, then
        delete or anonymize it where possible.
      </p>
      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, delete, or restrict
        processing of your personal data. Contact{" "}
        <a href="mailto:privacy@wayool.com">privacy@wayool.com</a> and we will handle verified
        requests in a reasonable timeframe.
      </p>
      <h2>Changes</h2>
      <p>
        We may update this policy when our practices change. We will note the new date at the top
        and, when appropriate, notify you by email or in-product message.
      </p>
    </ContentPage>
  );
}
