import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
  title: "SocialMedia4Good Workshop - Instagram for Impact",
  description:
    "Join the SocialMedia4Good workshop on March 15, 2025, at the Samagata Foundation in Bengaluru. Learn how to use Instagram effectively for social change, build an engaged community, and explore content planning, growth hacks, and storytelling techniques. Limited spots available!",
  keywords: [
    "Instagram4Good",
    "Social media impact",
    "Brand building",
    "Community engagement",
    "Content strategy",
    "Storytelling",
    "Social enterprises",
    "Workshops",
    "Mentorship program",
    "Samagata Foundation",
    "Bengaluru events",
  ],
  icons: {
    icon: "/terrum_circle_64x64.ico",
    apple: "/terrum_circle_64x64.png",
  },
  openGraph: {
    title: "SocialMedia4Good Workshop - Instagram for Impact",
    locale: "en_US",
    description:
      "Learn how to leverage Instagram for social change at the SocialMedia4Good workshop in Bengaluru. Gain insights into content strategy, community engagement, and storytelling.",
    url: "https://terrum.in/events/15-mar-socialmedia4good",
    type: "website",
    images: [
      {
        url: "https://terrum.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "SocialMedia4Good Workshop Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@terrum_in",
    title: "SocialMedia4Good Workshop | Mar 15, 2025",
    description:
      "Learn Instagram strategies for social change at the SocialMedia4Good workshop. Build an engaged community, master storytelling, and explore a mentorship opportunity!",
    images: [
      "https://pbs.twimg.com/profile_images/1776445625254793216/19fhNGuT_400x400.jpg",
    ],
  },
};


const Instagram4GoodWorkshop: React.FC = () => {
    return (
      <div className="bg-gradient-to-b from-[#071D2B] to-[#111111]">
        <div className="flex justify-center items-center h-screen w-screen">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdJH9iNTj2qU-NcdJP1bazA60xRX6nZFoTRXPMciadZ7B9DRg/viewform?embedded=true"
            className="w-full h-full border-0"
            title="Google Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    );
};

export default Instagram4GoodWorkshop;