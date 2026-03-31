import type { Metadata } from "next";
import { ContentPage } from "@/app/_components/ContentPage";

export const metadata: Metadata = {
  title: "Terms of Use — Wayool",
  description: "Terms governing use of Wayool websites and services.",
};

export default function TermsPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Terms of use"
      description="Last updated: March 30, 2026. By using our site or services, you agree to these terms."
    >
      <h2>Agreement</h2>
      <p>
        These Terms of Use (&quot;Terms&quot;) govern your access to Wayool websites, apps, and
        related services (&quot;Services&quot;). If you disagree, do not use the Services.
      </p>
      <h2>Use of the Services</h2>
      <p>
        You agree to use the Services only in compliance with applicable law and these Terms. You
        may not misuse the Services (for example: probing, scraping, or attempting to breach
        security), interfere with other users, or reverse engineer except where law permits.
      </p>
      <h2>Intellectual property</h2>
      <p>
        Wayool and its licensors own the Services, including branding, design, text, and software.
        We grant you a limited, revocable license to access and use the Services for their intended
        purpose. No other rights are implied.
      </p>
      <h2>Third-party services</h2>
      <p>
        The Services may link to or integrate third parties. Their terms and privacy policies
        apply when you use them. We are not responsible for third-party content or practices.
      </p>
      <h2>Disclaimers</h2>
      <p>
        The Services are provided &quot;as is&quot; without warranties of any kind, to the fullest
        extent permitted by law. We do not guarantee uninterrupted or error-free operation.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Wayool is not liable for indirect, incidental,
        special, consequential, or punitive damages, or for loss of profits, data, or goodwill,
        arising from your use of the Services.
      </p>
      <h2>Changes</h2>
      <p>
        We may modify these Terms. We will post the updated version and update the date above.
        Continued use after changes means you accept the new Terms.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these Terms: <a href="mailto:legal@wayool.com">legal@wayool.com</a>.
      </p>
    </ContentPage>
  );
}
