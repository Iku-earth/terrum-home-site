import LandingHeader from "@/components/landing/header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Support Circle - Circular Economy",
  description:
    "Join the Support Circle on January 26, 2025, at the Samagata Foundation in Bengaluru. Explore pitches from founders of social enterprises in the circular economy space, engage in meaningful discussions, and find volunteering or freelancing opportunities. Submitting the form does not guarantee registration as participants will be shortlisted based on their skills and commitment.",
  keywords: [
    "Terrum",
    "Circular economy",
    "Sustainability",
    "Social enterprises",
    "Community events",
    "Environmental initiatives",
    "Volunteering",
    "Internships",
    "Freelancing",
    "Support Circle",
    "Samagata Foundation",
    "Church Street Bengaluru",
    "Abhishek AN",
    "Renuka Pooja",
    "Bengaluru events",
  ],
  icons: {
    icon: "/terrum_circle_64x64.ico",
    apple: "/terrum_circle_64x64.png",
  },
  openGraph: {
    title: "Support Circle - Circular Economy",
    locale: "en_US",
    description:
      "Discover social enterprises focused on the circular economy at the Support Circle in Bengaluru. Gain insights, network, and explore opportunities to contribute your skills.",
    url: "https://terrum.in/events/26-jan-support-circle",
    type: "website",
    images: [
      {
        url: "https://terrum.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terrum Support Circle Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@terrum_in",
    title: "Support Circle - Circular Economy | Jan 26, 2025",
    description:
      "Engage with social enterprise founders, explore the circular economy, and find impactful opportunities at the Support Circle in Bengaluru.",
    images: [
      "https://pbs.twimg.com/profile_images/1776445625254793216/19fhNGuT_400x400.jpg",
    ],
  },
};

const JanSupportCircle: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#071D2B] to-[#111111]">
      <LandingHeader />
      <div className="flex justify-center items-center h-screen w-screen">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeRhNPp2H7Dxb7vEH_rQj3tPWOlzmmeuifFjl9XpDYoHBVzvA/viewform?embedded=true"
          className="w-full h-full border-0"
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default JanSupportCircle;
