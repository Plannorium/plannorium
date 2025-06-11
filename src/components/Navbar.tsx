"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-800 shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          {/* Logo text consistently white/light */}
          <span className="text-xl font-bold text-white">Plannorium</span>
        </Link>
        <div className="space-x-6">
          <Link
            href="/#portfolio"
            className={`font-medium transition-colors duration-200 ${
              scrolled
                ? "text-gray-300 hover:text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Portfolio
          </Link>
          <Link
            href="/#about"
            className={`font-medium transition-colors duration-200 ${
              scrolled
                ? "text-gray-300 hover:text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            About
          </Link>
          <Link
            href="/#contact-section"
            className={`font-medium transition-colors duration-200 ${
              scrolled
                ? "text-gray-300 hover:text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
