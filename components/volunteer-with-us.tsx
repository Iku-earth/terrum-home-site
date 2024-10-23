"use client";

import React from "react";

const VolunteerWithUsSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#1E6375] to-[#071D2B] py-16 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Volunteer with Us
        </h2>
        <p className="text-lg text-white mb-8">
          Join our community and become a part of our mission to create a
          positive impact. Explore volunteer opportunities and find your perfect
          match.
        </p>
        <a
          href="https://forms.gle/BcsYz48YmuMmutPt8"
          target="_blank"
          data-umami-event="Open Volunteer With Us Form"
          className="bg-[#2a6083] text-white font-semibold py-3 px-6 rounded-lg shadow-md"
        >
          Sign Up to Volunteer
        </a>
      </div>
    </section>
  );
};

export default VolunteerWithUsSection;
