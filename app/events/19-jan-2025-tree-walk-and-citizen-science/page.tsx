import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tree Walk and Citizen Science - January 19, 2025",
  description:
    "Join us for an exciting, fun, and informative tree walk and citizen science session on Jan 19, 2025, at GKVK Campus. Discover local flora, contribute to citizen science, and connect with like-minded nature enthusiasts. Remember to install the SeasonWatch app and join our WhatsApp group for updates!",
  keywords: [
    "Terrum",
    "Climate action",
    "Sustainability",
    "Community",
    "Environmental activism",
    "Volunteering",
    "Nature walks",
    "Citizen science",
    "Eco-friendly initiatives",
    "SeasonWatch",
    "Abhishek AN",
    "Renuka Pooja",
    "Tree Walk",
    "GKVK Campus",
    "Bengaluru events",
  ],
  icons: {
    icon: "/terrum_circle_64x64.ico",
    apple: "/terrum_circle_64x64.png",
  },
  openGraph: {
    title: "Tree Walk and Citizen Science - January 19, 2025",
    locale: "en_US",
    description:
      "Participate in Terrum's Tree Walk and Citizen Science event at GKVK Campus in Bengaluru. Learn about local flora, contribute to citizen science, and connect with eco-conscious individuals.",
    url: "https://terrum.in/events/19-jan-2025-tree-walk-and-citizen-science",
    type: "website",
    images: [
      {
        url: "https://terrum.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terrum Banner for January Tree Walk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@terrum_in",
    title: "Terrum – Tree Walk and Citizen Science Event on Jan 19, 2025",
    description:
      "Discover nature and contribute to citizen science with Terrum's Tree Walk at GKVK Campus. Join us for an enriching experience in Bengaluru!",
    images: [
      "https://pbs.twimg.com/profile_images/1776445625254793216/19fhNGuT_400x400.jpg",
    ],
  },
};

const JanTreeWalk: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe06xMXwGMrILGl3I5-uiIZhjCJhAEx1gSQGetR-NtF3lkZxg/viewform?embedded=true"
        className="w-full h-full border-0"
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default JanTreeWalk;
