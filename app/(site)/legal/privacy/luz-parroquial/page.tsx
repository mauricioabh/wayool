import type { Metadata } from "next";
import { ContentPage } from "@/app/_components/ContentPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Luz Parroquial (Mobile App) | Wayool",
  description:
    "Privacy policy for the Luz Parroquial mobile app from Wayool (Mexico): what we collect, how we use and share data, retention, security, your rights, and how to contact us. Effective April 16, 2026.",
};

export default function LuzParroquialPrivacyPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Privacy Policy — Luz Parroquial (Mobile App)"
      description={
        <>
          <p className="m-0">
            <strong className="text-[var(--text-primary)]">Effective date:</strong> April 16, 2026
          </p>
          <p className="m-0">
            <strong className="text-[var(--text-primary)]">Controller:</strong> Wayool, located in
            Mexico
          </p>
          <p className="m-0">
            <strong className="text-[var(--text-primary)]">Contact:</strong>{" "}
            <a href="mailto:support@wayool.com">support@wayool.com</a>
          </p>
          <p className="m-0">
            <strong className="text-[var(--text-primary)]">Website:</strong>{" "}
            <a href="https://wayool.com" rel="noopener noreferrer">
              https://wayool.com
            </a>
          </p>
        </>
      }
    >
      <p>
        This Privacy Policy explains how Wayool (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
        collects, uses, and shares personal information when you use the Luz Parroquial mobile
        application (the &quot;App&quot;).
      </p>
      <p>
        The current version of this Privacy Policy is available at:{" "}
        <a href="https://wayool.com/legal/privacy/luz-parroquial">
          https://wayool.com/legal/privacy/luz-parroquial
        </a>
      </p>
      <p>
        By using the App, you agree to this Privacy Policy. If you do not agree, please do not use
        the App.
      </p>

      <h2>1. Information we collect</h2>

      <h3>Account and authentication information</h3>
      <p>
        If you create an account or sign in, we process information needed to authenticate you,
        such as your email address and credentials, through our authentication services. If you use
        sign-in through a third party (for example Google or Facebook) where available in your build,
        that provider may process information according to its own policies during sign-in.
      </p>

      <h3>Information generated when you use the App</h3>
      <p>
        We process information linked to your account to provide App features, including favorites,
        recently viewed content, and progress for multi-day devotions (such as novenas and similar
        sequences).
      </p>

      <h3>Content and audio</h3>
      <p>
        We process information needed to deliver prayer text, structured steps, and audio
        playback, including streaming audio from our systems where available.
      </p>

      <h3>Device and technical information</h3>
      <p>
        When you use the App, certain technical information is processed automatically as part of
        operating the service (for example IP address and related technical logs through our
        hosting and security providers).
      </p>

      <h3>Text-to-speech</h3>
      <p>
        If you use device text-to-speech features in the App, prayer text may be processed on your
        device using your operating system&apos;s speech services, which are governed by your
        device provider&apos;s terms and settings.
      </p>

      <h2>2. How we use information</h2>
      <p>We use personal information to:</p>
      <ul>
        <li>Provide, operate, and maintain the App and your account</li>
        <li>Enable features such as favorites, history, and saved progress</li>
        <li>Deliver content and audio playback</li>
        <li>Maintain security, troubleshoot issues, and protect against abuse</li>
        <li>Comply with legal obligations and enforce our terms</li>
      </ul>

      <h2>3. Legal bases (EEA, UK, and similar jurisdictions)</h2>
      <p>Where applicable law requires a legal basis, we rely on one or more of the following:</p>
      <ul>
        <li>Performance of a contract (providing the App you requested)</li>
        <li>
          Legitimate interests (securing the service, maintaining reliability, preventing misuse),
          balanced against your rights
        </li>
        <li>Consent (where we specifically ask for it for optional processing that requires consent)</li>
        <li>Legal obligation (where we must process information to comply with the law)</li>
      </ul>

      <h2>4. How we share information</h2>

      <h3>Service providers</h3>
      <p>
        We use service providers to host the App&apos;s infrastructure, authenticate users,
        operate databases, store content, and deliver the service. Those providers process personal
        information on our behalf, under contractual terms and only as needed to provide their
        services.
      </p>

      <h3>Sign-in providers</h3>
      <p>
        If you use third-party sign-in, that provider processes information as part of
        authentication under its own policies.
      </p>

      <h3>Legal and safety</h3>
      <p>
        We may disclose information if we believe in good faith that disclosure is required by
        law, legal process, or to protect the rights, safety, and security of users, us, or others.
      </p>

      <p>We do not sell your personal information.</p>

      <h2>5. Retention</h2>
      <p>
        We retain personal information for as long as your account is active and as needed to
        provide the App, unless a longer retention period is required or permitted by law. You may
        request deletion as described below.
      </p>

      <h2>6. Security</h2>
      <p>
        We use reasonable technical and organizational measures designed to protect personal
        information. No method of transmission or storage is completely secure.
      </p>

      <h2>7. Your rights and choices</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, delete, restrict, or
        object to certain processing, and to data portability. You may also have the right to lodge
        a complaint with a supervisory authority.
      </p>
      <p>
        To exercise your rights, contact us at{" "}
        <a href="mailto:support@wayool.com">support@wayool.com</a>. We may need to verify your
        request.
      </p>
      <p>
        <strong>Account deletion:</strong> To request deletion of your account and associated
        personal data, email{" "}
        <a href="mailto:support@wayool.com">support@wayool.com</a> from your registered email
        address. We will verify your request and respond within a reasonable period, subject to
        applicable law.
      </p>

      <h2>8. Children&apos;s privacy</h2>
      <p>
        The App is a general prayer and devotional companion and is not directed to children under
        13. We do not knowingly collect personal information from children under 13. If you are a
        parent or guardian and believe a child under 13 has provided us personal information,
        contact us at <a href="mailto:support@wayool.com">support@wayool.com</a> and we will take
        appropriate steps.
      </p>

      <h2>9. International transfers</h2>
      <p>
        We may process and store information in countries other than your country of residence.
        Where required by applicable law, we use appropriate safeguards for international transfers
        of personal data.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The current version is always the one
        posted at{" "}
        <a href="https://wayool.com/legal/privacy/luz-parroquial">
          https://wayool.com/legal/privacy/luz-parroquial
        </a>
        , with the Effective date shown at the top. If changes are material, we will provide
        additional notice where required by law.
      </p>

      <h2>11. Contact us</h2>
      <p>
        <strong>Wayool</strong>
        <br />
        Email: <a href="mailto:support@wayool.com">support@wayool.com</a>
        <br />
        Website:{" "}
        <a href="https://wayool.com" rel="noopener noreferrer">
          https://wayool.com
        </a>
      </p>
    </ContentPage>
  );
}
