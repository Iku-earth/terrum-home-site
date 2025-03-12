import Image from "next/image";
import ContactForm from "@/components/contact-form";
import LandingHeader from "@/components/landing/header";
import LandingFooter from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Terrum",
  description:
    "Get in touch with the Terrum team. Whether you have questions about our digital services, community initiatives, or events, we're here to help.",
  keywords: [
    "Contact Terrum",
    "Terrum support",
    "Get in touch",
    "Customer service",
    "Help center",
    "Terrum inquiries",
    "Community engagement",
    "Sustainability initiatives",
    "Support team",
    "Terrum contact details",
    "Abhishek",
    "Renuka"
  ],
  icons: {
    icon: "/terrum_circle_64x64.ico",
    apple: "/terrum_circle_64x64.png",
  },
  openGraph: {
    title: "Contact Us | Terrum",
    locale: "en_US",
    description:
      "Reach out to the Terrum team for any inquiries about our digital platform, community engagement, and sustainability projects.",
    url: "https://terrum.in/contact-us",
    type: "website",
    images: [
      {
        url: "https://terrum.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terrum Contact Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@terrum_in",
    title: "Contact Us | Terrum",
    description:
      "Need assistance? Contact Terrum for support regarding digital services, events, and sustainability initiatives.",
    images: [
      "https://pbs.twimg.com/profile_images/1776445625254793216/19fhNGuT_400x400.jpg",
    ],
  },
};

export default function ContactUsPage() {
  return (
    <>
      <div className="min-h-screen relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#3F3E3E", opacity: "0.5" }}
          />
        </div>

        {/* Navigation */}
        <LandingHeader />

        {/* Contact Us Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-4 py-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-5xl leading-tight">
            Contact Us
          </h1>
          <p className="text-white text-xl md:text-2xl leading-relaxed font-semibold mt-4 max-w-2xl mx-auto">
            We would love to hear from you! Whether you have a question about
            our platform, need assistance, or just want to share your thoughts,
            feel free to reach out.
          </p>

          <div className="mt-8 w-full max-w-lg bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-xl">
            <ContactForm />
          </div>
        </div>
      </div>
      <LandingFooter />
    </>
  );
}
