"use client";

import { Linkedin, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-3">Plannorium</h3>
        <p className="text-sm text-gray-400 mb-8 max-w-xl mx-auto">
          Transforming business ideas into reality with creativity,
          professionalism, and human-centered design.
        </p>
        <div className="mb-8 space-x-4 sm:space-x-6">
          <a
            href="/privacy"
            className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
          >
            Terms of Service
          </a>
          <a
            href="/contact"
            className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://linkedin.com/company/plannorium" // Replace with your actual LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/plannorium" // Replace with your actual Instagram URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/plannorium" // Replace with your actual X (Twitter) URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>
        <a
          href="mailto:hello@plannorium.com"
          className="text-sm text-gray-300 hover:text-white mb-8 block transition-colors duration-200"
        >
          <Mail className="w-4 h-4 inline mr-2" />
          hello@plannorium.com
        </a>
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Plannorium. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
