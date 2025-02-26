import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Lalbagh Tree Walk - Explore Nature with SeasonWatch",
  description:
    "Join us for an exciting, fun, and informative tree walk at Lalbagh on March 2, 2025, from 10:30 AM to 11:30 AM. Learn about trees, citizen science, and connect with nature. Don't forget to carry cash for entry, wear comfortable clothing, and bring water!",
  keywords: [
    "Lalbagh Tree Walk",
    "SeasonWatch",
    "Citizen Science",
    "Nature Walk",
    "Tree Identification",
    "Eco Walk",
    "Biodiversity",
    "Environmental Awareness",
    "Bengaluru Events",
    "Sustainability",
  ],
  icons: {
    icon: "/terrum_circle_64x64.ico",
    apple: "/terrum_circle_64x64.png",
  },
  openGraph: {
    title: "Lalbagh Tree Walk - Explore Nature with SeasonWatch",
    locale: "en_US",
    description:
      "Join us for an engaging tree walk at Lalbagh on March 2, 2025. Learn about trees, biodiversity, and contribute to citizen science with SeasonWatch.",
    url: "https://terrum.in/events/2-mar-lalbagh-treewalk",
    type: "website",
    images: [
      {
        url: "https://terrum.in/og-image-treewalk.png",
        width: 1200,
        height: 630,
        alt: "Lalbagh Tree Walk Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@terrum_in",
    title: "Lalbagh Tree Walk | Mar 2, 2025",
    description:
      "Discover the trees of Lalbagh in this fun and informative walk. Join the SeasonWatch citizen science project and explore Bengaluru's biodiversity.",
    images: [
      "https://pbs.twimg.com/profile_images/1776445625254793216/19fhNGuT_400x400.jpg",
    ],
  },
};


const TreeWalkSpringEdition: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#071D2B] to-[#111111]">
      <div className="flex justify-center items-center h-screen w-screen">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdaYtiQHjFIqGSNvrY1elI1Lo7XMmqE-zzK6GDHWgWIg9nY_A/viewform?embedded=true"
          className="w-full h-full border-0"
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default TreeWalkSpringEdition;