import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Child Safety Standards | Terrum",
  description:
    "Learn about Terrum's Child Safety Standards. We have zero tolerance for child sexual abuse and exploitation (CSAE), comply with child safety laws, and provide clear reporting mechanisms and a dedicated safety contact.",
  keywords: [
    "Child Safety Standards",
    "CSAE policy",
    "Child protection",
    "Online safety",
    "User reporting",
    "Community guidelines",
    "Child exploitation prevention",
    "CSAM reporting",
    "Terrum safety commitment",
    "Child protection officer",
  ],
  icons: {
    icon: "/terrum_circle_64x64.ico",
    apple: "/terrum_circle_64x64.png",
  },
  openGraph: {
    title: "Child Safety Standards | Terrum",
    locale: "en_US",
    description:
      "Terrum is committed to protecting children from exploitation and abuse. Read our Child Safety Standards including zero tolerance policies, reporting mechanisms, and compliance with global child protection laws.",
    url: "https://terrum.in/child-safety-standards",
    type: "website",
    images: [
      {
        url: "https://terrum.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terrum Child Safety Standards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@terrum_in",
    title: "Child Safety Standards | Terrum",
    description:
      "Terrum upholds strict Child Safety Standards, including zero tolerance for CSAE, compliance with child protection laws, and clear reporting mechanisms for users.",
    images: [
      "https://pbs.twimg.com/profile_images/1776445625254793216/19fhNGuT_400x400.jpg",
    ],
  },
};

export default function ChildSafetyStandards() {
  return (
    <div className="bg-gradient-to-b from-[#071D2B] to-[#111111]">
      <div className="max-w-3xl mx-auto p-4 text-white">
        <h1 className="text-2xl font-semibold mb-4">
          Terrum Child Safety Standards
        </h1>
        <p className="mb-4">Last updated: 12-03-2025</p>

        <p className="mb-4">
          At <strong>Terrum</strong>, we are committed to protecting children
          and preventing any form of child sexual abuse and exploitation (CSAE).
          Our platform and community initiatives are guided by strict safety
          standards, and we do not tolerate any activity that puts children at
          risk.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            1. Zero Tolerance for CSAE
          </h2>
          <ul className="ml-4 list-disc pl-4">
            <li>
              Terrum strictly prohibits the use, sharing, or promotion of child
              sexual abuse material (CSAM) in any form.
            </li>
            <li>
              Any account found engaging in CSAE-related activities will be{" "}
              <strong>immediately suspended and reported</strong> to the
              appropriate authorities.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            2. Compliance with Laws
          </h2>
          <ul className="ml-4 list-disc pl-4">
            <li>
              Terrum complies with all applicable{" "}
              <strong>child safety and data protection laws</strong>.
            </li>
            <li>
              We cooperate with law enforcement agencies in investigations
              related to online safety and CSAE.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">3. Reporting Mechanism</h2>
          <p className="ml-4">
            If you encounter any harmful or suspicious activity on Terrum:
          </p>
          <ul className="ml-4 list-disc pl-4">
            <li>Use the in-app reporting tools available to all users.</li>
            <li>
              You may also directly contact us via email to report concerns.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            4. User and Community Guidelines
          </h2>
          <ul className="ml-4 list-disc pl-4">
            <li>
              Users must <strong>never share, request, or distribute</strong>{" "}
              any sexual or exploitative content involving children.
            </li>
            <li>
              Violations will result in account termination and reporting to{" "}
              <strong>
                law enforcement and relevant child protection organizations
              </strong>
              .
            </li>
            <li>
              Users are encouraged to maintain a{" "}
              <strong>safe, respectful, and responsible</strong> community.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            5. Child Safety Contact
          </h2>
          <p className="ml-4">
            For questions, concerns, or to report potential CSAE activity,
            please contact our dedicated safety officer:
          </p>
          <p className="ml-4">
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
            We take every report seriously and will respond as quickly as
            possible.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">6. Ongoing Commitment</h2>
          <p className="ml-4">
            Terrum is committed to regularly reviewing and updating our child
            safety practices in line with global best practices and{" "}
            <a
              href="https://www.technologycoalition.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Tech Coalition guidelines
            </a>
            .
          </p>
        </section>

        <p className="mt-8">
          Thank you for helping us keep Terrum a{" "}
          <strong>safe and positive environment</strong> for everyone.
        </p>
      </div>
    </div>
  );
}
