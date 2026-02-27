"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#070e3b] shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 text-white">

        <div className="text-xl font-bold">
          MyLogo
        </div>

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