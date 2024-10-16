// components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className=" text-gray-300 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        <div className="mb-5 lg:mb-0">
          <h2 className="text-xl font-bold text-white mb-2">Social Media</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://discord.gg/c4869U2JjK"
                className="hover:text-white"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/terrum.in/"
                className="hover:text-white"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/terrum-india/"
                className="hover:text-white"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com/terrum_in" className="hover:text-white">
                X
              </a>
            </li>
          </ul>
        </div>

        {/* New Section for App Links */}
        <div className="mb-5 lg:mb-0 lg:col-span-1 lg:ml-auto flex flex-col items-start">
          <h2 className="text-xl font-bold text-white mb-2">Get the App</h2>
          <a
            href="https://play.google.com/store/apps/details?id=com.iku&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2"
          >
            <img
              src="/btn-g-play.svg"
              alt="Get it on Google Play"
              className="w-36"
            />
          </a>
          <a>
            <img
              src="/btn-appstore-coming-soon.svg"
              alt="Download on the App Store"
              className="w-36 mb-4"
            />
          </a>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-700 mt-10 pt-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-5 md:mb-0 text-sm text-center">
            <span>&copy; 2024 Terrum. All rights reserved</span> |{" "}
            <a href="/privacy/policy" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
          <div className="flex space-x-5">Language: English (US)</div>
        </div>
      </div>
    </footer>
  );
}
