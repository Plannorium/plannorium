"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="w-full px-6 bg-gradient-to-r from-black to-zinc-800">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 opacity-30 ani@mate-pulse" />
      <section className="flex flex-col items-center justify-center min-h-[70vh] text-center max-w-4xl mx-auto relative overflow-hidden">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Pioneering Digital Excellence
        </motion.h1>
        <motion.p
          className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We design and develop modern websites, digital platforms, and
          interactive experiences for visionary brands.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            href="/contact"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
