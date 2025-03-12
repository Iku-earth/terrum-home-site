import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy | Terrum",
  description:
    "Learn about Terrum's shipping policy. As a digital platform focused on community engagement and sustainability initiatives, we do not ship physical products.",
  keywords: [
    "Shipping policy",
    "Digital services",
    "No physical products",
    "Event confirmation",
    "Digital delivery",
    "Terrum services",
    "Online platform",
    "Virtual offerings",
    "Event registration",
    "Third-party partners",
  ],
  icons: {
    icon: "/terrum_circle_64x64.ico",
    apple: "/terrum_circle_64x64.png",
  },
  openGraph: {
    title: "Shipping Policy | Terrum",
    locale: "en_US",
    description:
      "Terrum is a digital platform offering community engagement and sustainability initiatives without physical product shipping. Learn about our digital delivery methods.",
    url: "https://terrum.in/shipping-policy",
    type: "website",
    images: [
      {
        url: "https://terrum.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terrum Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@terrum_in",
    title: "Shipping Policy | Terrum",
    description:
      "Terrum focuses on digital services and in-person events without shipping physical products. Find out how we deliver our community and sustainability initiatives.",
    images: [
      "https://pbs.twimg.com/profile_images/1776445625254793216/19fhNGuT_400x400.jpg",
    ],
  },
};

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071D2B] to-[#111111]">
      <div className="max-w-3xl mx-auto p-4 text-white">
        <h1 className="text-2xl font-semibold mb-4">Shipping Policy</h1>
        <p className="mb-4">Last updated: 15-08-2023</p>

        <p className="mb-4">
          At <strong>Terrum</strong>, we currently do not sell or ship any
          physical products. Our services focus on community engagement,
          sustainability initiatives, volunteer programs, and events.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            1. No Physical Product Shipping
          </h2>
          <ul className="ml-4 list-disc pl-4">
            <li>
              Terrum does not offer physical products for sale, and therefore,
              we do not process shipments, deliveries, or logistics related to
              tangible goods.
            </li>
            <li>
              Any services, event registrations, or contributions made through
              our platform are <strong>delivered digitally</strong> or conducted
              in-person as part of our initiatives.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            2. Event and Service Confirmation
          </h2>
          <ul className="ml-4 list-disc pl-4">
            <li>
              Upon successful registration for an event, volunteer program, or
              service, you will receive a <strong>confirmation email</strong>{" "}
              with details regarding participation.
            </li>
            <li>
              No physical tickets, merchandise, or products will be shipped as
              part of any Terrum offerings.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">3. Contact Us</h2>
          <p className="ml-4">
            If you have any questions regarding our services or need
            clarification on any aspect of this policy, please reach out to us:
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
          <p className="ml-4 mt-2">
            Thank you for being part of{" "}
            <strong>Terrum&apos;s sustainable community!</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
