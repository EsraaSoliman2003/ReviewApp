"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const t = useTranslations();
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 text-white">
        
        {/* Logo */}
        <div className="text-xl font-bold">
          MyLogo
        </div>

        {/* Links */}
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