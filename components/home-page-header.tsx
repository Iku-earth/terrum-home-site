"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export const LandingHeader = () => {
  const [blurAmount, setBlurAmount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust this factor to control the speed and amount of blur
      const newBlur = Math.min(window.scrollY / 100, 10);
      setBlurAmount(newBlur);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 p-4 bg-opacity-80  transition-all duration-200`}
      style={{ backdropFilter: `blur(${blurAmount}px)` }}
    >
      <div className="relative flex items-center justify-between w-full">
        <Link href="/">
          <div className="flex items-center">
            {/* Replace 'logo.svg' with the path to your logo image */}
            <Image
              width={24}
              height={24}
              src="/terrum_circle.svg"
              alt="Logo"
              className="w-12 h-auto lg:ml-8"
            />
            <h1 className={`text-lg font-semibold ml-5 text-white`}>Terrum</h1>
          </div>
        </Link>

        {/* Show hamburger menu in mobile view */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-white focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className={`w-6 h-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
            <svg
              className={`w-6 h-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Regular navigation links */}
        <div className="hidden lg:flex items-center">
          {/* Add items-center to center the Support option */}
          <a
            href="https://resources.terrum.in"
            target="_blank"
            data-umami-event="Open Resources Dashboard"
            data-umami-event-device="Desktop"
            className="mr-4"
          >
            Resources
          </a>
          {/* Add the login button */}
          {/* <button
            onClick={() => {}}
            className="px-4 py-2 rounded-md bg-slate-200 text-black mr-5"
          >Login</button> */}
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`lg:hidden w-full bg-transparent z-40 p-4 absolute top-20 right-0 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "scale-y-100" : "scale-y-0"
        }`}
        style={{ transformOrigin: "top" }}
      >
        <div className="flex flex-col items-end space-y-4">
          <a
            href="https://resources.terrum.in"
            target="_blank"
            data-umami-event="Open Resources Dashboard"
            data-umami-event-device="Mobile"
            className="mr-4"
          >
            Resources
          </a>
        </div>
      </div>
    </header>
  );
};
