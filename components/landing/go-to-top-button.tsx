"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function GoToTopButton() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "events-and-experiences-section",
        "employee-engagement-section",
        "support-a-social-organisation-section",
        "open-source-database-section",
      ];

      const isVisible = sections.some((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= window.innerHeight && rect.bottom >= 0;
        }
        return false;
      });

      setShowTopButton(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showTopButton && (
        <div className="fixed bottom-8 right-8 group">
          <button
            onClick={scrollToTop}
            className="bg-[#FFB703] hover:bg-yellow-500 text-black font-bold rounded-full p-4 shadow-lg transition-colors"
          >
            <ArrowUp className="text-white" size={24} />
          </button>
          <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            Go to Top
          </span>
        </div>
      )}
    </>
  );
}
