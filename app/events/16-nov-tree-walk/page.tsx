import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tree Walk - November 16, 2024",
  description:
    "Join us for an exciting, fun, and informative tree walk on Nov 16, 2024, at MN Krishna Rao Park. Connect with nature, learn about local flora, and make new friends in a kid-friendly, eco-conscious setting. Bring water, a notebook, and your enthusiasm!",
  keywords: [
    "Terrum",
    "Climate action",
    "Sustainability",
    "Community",
    "Environmental activism",
    "Volunteering",
    "Nature walks",
    "Eco-friendly initiatives",
    "Abhishek AN",
    "Renuka Pooja",
    "Tree Walk",
    "MN Krishna Rao Park",
    "Bengaluru events",
  ],
  icons: {
    icon: "/terrum_circle_64x64.ico",
    apple: "/terrum_circle_64x64.png",
  },
  openGraph: {
    title: "Tree Walk - November 16, 2024",
    locale: "en_US",
    description:
      "Join us on a Tree Walk at MN Krishna Rao Park in Bengaluru. Discover nature, meet eco-conscious individuals, and enjoy a morning of learning and connection!",
    url: "https://terrum.in/events/16-nov-tree-walk",
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
    title: "Terrum – Tree Walk Event on Nov 16, 2024",
    description:
      "Explore nature with Terrum's Tree Walk at MN Krishna Rao Park. Learn, connect, and join us for a meaningful morning in the heart of Bengaluru.",
    images: [
      "https://pbs.twimg.com/profile_images/1776445625254793216/19fhNGuT_400x400.jpg",
    ],
  },
};


const NovTreeWalk: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScbN1JKPXpVWq7qje8UazCHwIX0LnoYUo37prHQWIGv9SfSpw/viewform?embedded=true"
        className="w-full h-full border-0"
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default NovTreeWalk;
