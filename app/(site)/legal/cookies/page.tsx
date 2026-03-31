import type { Metadata } from "next";
import { ContentPage } from "@/app/_components/ContentPage";

export const metadata: Metadata = {
  title: "Cookie Policy — Wayool",
  description: "How Wayool uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Cookie policy"
      description="Last updated: March 30, 2026."
    >
      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a site. They help the
        site remember preferences, measure traffic, or keep sessions secure.
      </p>
      <h2>How we use them</h2>
      <ul>
        <li>
          <strong>Essential.</strong> Required for basic site function, security, or load
          balancing.
        </li>
        <li>
          <strong>Analytics & performance.</strong> Optional data about how pages perform and how
          visitors use the site—in aggregate where possible.
        </li>
        <li>
          <strong>Preferences.</strong> Remember choices like language or cookie consent when we
          offer a banner.
        </li>
      </ul>
      <h2>Your choices</h2>
      <p>
        You can control cookies through your browser settings (block, delete, or alert). Blocking
        essential cookies may affect how the site works.
      </p>
      <p>
        For more on how we handle personal data, see our{" "}
        <a href="/legal/privacy">Privacy policy</a>.
      </p>
      <h2>Contact</h2>
      <p>
        Cookie questions: <a href="mailto:privacy@wayool.com">privacy@wayool.com</a>.
      </p>
    </ContentPage>
  );
}
