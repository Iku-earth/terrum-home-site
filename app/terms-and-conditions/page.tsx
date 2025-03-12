import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="bg-gradient-to-b from-[#071D2B] to-[#111111]">
      <div className="max-w-3xl mx-auto p-4 text-white">
        <h1 className="text-2xl font-semibold mb-4">Terms and Conditions</h1>
        <p className="mb-4">Last updated: 12-03-2025</p>

        <p className="mb-4">
          Welcome to <strong>Terrum</strong>! These Terms and Conditions govern
          your use of our website, services, and community engagement
          activities. By accessing or using Terrum, you agree to abide by these
          terms. If you do not agree, please refrain from using our services.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">1. Definitions</h2>
          <ul className="ml-4 list-disc pl-4">
            <li>
              <strong>&quot;Terrum&quot;</strong> refers to the website,
              platform, and services operated by us.
            </li>
            <li>
              <strong>&quot;User&quot;</strong>,{" "}
              <strong>&quot;You&quot;</strong>, or{" "}
              <strong>&quot;Your&quot;</strong> refers to any individual or
              entity using Terrum.
            </li>
            <li>
              <strong>&quot;Services&quot;</strong> include community events,
              volunteering opportunities, sustainable living resources, and
              other related activities.
            </li>
            <li>
              <strong>&quot;Content&quot;</strong> refers to text, images,
              videos, and any other materials available on the platform.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">2. User Eligibility</h2>
          <ul className="ml-4 list-disc pl-4">
            <li>
              You must be at least <strong>18 years old</strong> or have
              parental consent to participate.
            </li>
            <li>
              You are responsible for providing accurate and up-to-date
              information when signing up for our services.
            </li>
            <li>
              You agree not to use our platform for any unlawful or fraudulent
              activities.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            3. Community Guidelines
          </h2>
          <p className="ml-4">
            To maintain a positive experience for all users:
          </p>
          <ul className="ml-4 list-disc pl-4">
            <li>
              <strong>Respect Others</strong>: Engage with fellow users in a
              respectful and constructive manner.
            </li>
            <li>
              <strong>No Spam or Misuse</strong>: Avoid posting irrelevant,
              harmful, or misleading content.
            </li>
            <li>
              <strong>Event Participation</strong>: Users attending Terrum
              events must comply with the event-specific rules and respect local
              laws.
            </li>
            <li>
              <strong>No Unauthorized Promotions</strong>: Any personal
              endorsements or brand promotions by users do not reflect
              Terrum&apos;s official stance.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            4. Volunteer Engagement
          </h2>
          <ul className="ml-4 list-disc pl-4">
            <li>
              Volunteers agree to participate in activities in good faith and to
              the best of their abilities.
            </li>
            <li>
              Terrum is not responsible for disputes between volunteers and
              third-party organizations.
            </li>
            <li>
              Volunteers must adhere to any additional guidelines set by partner
              organizations.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            5. Intellectual Property
          </h2>
          <ul className="ml-4 list-disc pl-4">
            <li>
              All <strong>Terrum content</strong> (logos, text, graphics,
              images, etc.) is the property of Terrum and protected under
              copyright laws.
            </li>
            <li>
              Users <strong>may not</strong> copy, distribute, or modify
              Terrum&apos;s content without explicit permission.
            </li>
            <li>
              If you submit content (photos, testimonials, etc.), you grant
              Terrum a non-exclusive, royalty-free license to use it for
              promotional purposes.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            6. Event and Service Disclaimers
          </h2>
          <ul className="ml-4 list-disc pl-4">
            <li>
              Terrum <strong>does not guarantee</strong> the accuracy,
              effectiveness, or outcomes of any volunteering opportunities or
              sustainability initiatives.
            </li>
            <li>
              Participation in events and experiences is at{" "}
              <strong>your own risk</strong>. Terrum is not liable for personal
              injuries, loss, or damage arising from event participation.
            </li>
            <li>
              Any financial transactions with third-party sustainable brands are
              the <strong>responsibility of the user and vendor</strong>.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">7. Privacy Policy</h2>
          <ul className="ml-4 list-disc pl-4">
            <li>
              By using Terrum, you acknowledge our{" "}
              <Link
                href="/privacy/policy"
                className="text-blue-600 hover:underline"
              >
                <strong>Privacy Policy</strong>
              </Link>
              , which explains how we collect and use personal data.
            </li>
            <li>
              We do not share your personal information with third parties
              without consent, except as required by law.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            8. Termination and Suspension
          </h2>
          <ul className="ml-4 list-disc pl-4">
            <li>
              We reserve the right to <strong>suspend or terminate</strong> any
              account that violates these Terms & Conditions.
            </li>
            <li>
              Users engaging in{" "}
              <strong>harmful, fraudulent, or disruptive activities</strong> may
              be permanently banned from the platform.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">9. Changes to Terms</h2>
          <ul className="ml-4 list-disc pl-4">
            <li>
              We may update these Terms from time to time. Continued use of our
              platform after updates constitutes acceptance of the new Terms.
            </li>
            <li>
              It is your responsibility to review these Terms periodically.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
          <p className="ml-4">
            If you have any questions or concerns about these Terms, please
            contact us at:
          </p>
          <p className="ml-4">
            📧{" "}
            <a
              data-umami-event="Send mail"
              data-umami-event-mail-id="abhishek@terrum.in"
              className="text-blue-500"
              href="mailto:abhishek@terrum.in"
            >
              abhishek@terrum.in
            </a>
          </p>
          <p className="ml-4">
            Thank you for being part of Terrum&apos;s sustainable movement!
          </p>
        </section>
      </div>
    </div>
  );
}
