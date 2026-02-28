"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Typing animation state
  const [placeholder, setPlaceholder] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // List of placeholder texts to cycle through
  const placeholders = [
    "Search...",
    "Find products...",
    "Explore...",
    "Type here..."
  ];

  // Ref to store timeout
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Typing effect logic
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % placeholders.length;
      const fullText = placeholders[i];

      setPlaceholder(prev => {
        if (isDeleting) {
          // Deleting: remove last character
          return fullText.substring(0, prev.length - 1);
        } else {
          // Typing: add next character
          return fullText.substring(0, prev.length + 1);
        }
      });

      // Adjust speed and handle transitions
      let nextSpeed = isDeleting ? 100 : 150;

      if (!isDeleting && placeholder === fullText) {
        // Finished typing, pause then start deleting
        nextSpeed = 2000; // wait 2 seconds
        setIsDeleting(true);
      } else if (isDeleting && placeholder === "") {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        nextSpeed = 500; // slight pause before typing next
      }

      timeoutRef.current = setTimeout(handleTyping, nextSpeed);
    };

    timeoutRef.current = setTimeout(handleTyping, typingSpeed);

    // Cleanup timeout on unmount or when dependencies change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [placeholder, isDeleting, loopNum, placeholders, typingSpeed]);

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= window.innerHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-main shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 text-white">
        {/* Logo */}
        <div className="text-xl font-bold">MyLogo</div>

        {/* Search Bar with Typing Placeholder */}
        <div className="ml-4 hidden md:block">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={placeholder}
            className="px-4 py-2 rounded-full bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 w-48 md:w-90 lg:md:w-120 transition-all"
            aria-label="Search"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 font-medium">
          <Link href="/" className="hover:text-gray-300 transition">
            {t("Home")}
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition">
            {t("About")}
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition">
            {t("Contact")}
          </Link>
        </div>

      </div>
    </nav>
  );
}