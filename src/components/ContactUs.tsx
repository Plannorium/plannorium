"use client";

import { motion } from "framer-motion";
import {
  Mail,
  //   Linkedin,
  //   Instagram,
  //   Twitter,
  CalendarDays,
} from "lucide-react";
import Link from "next/link";
import WhatsAppIcon from "./icons/WhatsAppIcon";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const contactMethods = [
  {
    name: "Email Us",
    value: "hello@plannorium.com",
    href: "mailto:hello@plannorium.com",
    icon: Mail,
  },
  {
    name: "WhatsApp",
    value: "+2348068926547",
    href: "https://wa.me/+2348068926547",
    icon: WhatsAppIcon, // Use the new WhatsAppIcon
  },
];

// const socialLinks = [
//   {
//     name: "LinkedIn",
//     href: "https://linkedin.com/company/plannorium",
//     icon: Linkedin,
//   },
//   {
//     name: "Instagram",
//     href: "https://instagram.com/plannorium",
//     icon: Instagram,
//   },
//   {
//     name: "Twitter / X",
//     href: "https://x.com/plannorium",
//     icon: Twitter,
//   },
// ];

export default function ContactUs() {
  return (
    <motion.section
      id="contact-section"
      className="py-20 bg-gradient-to-r from-black to-zinc-800 text-white relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 opacity-30 animate-pulse" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 className="text-4xl font-bold mb-4" variants={itemVariants}>
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          We&apos;re excited to hear about your project or answer any questions
          you may have. Reach out through your preferred channel below.
        </motion.p>

        {/* Direct Contact Methods */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={itemVariants}
        >
          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center transform hover:scale-105"
            >
              <method.icon className="w-10 h-10 text-blue-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-1">
                {method.name}
              </h3>
              <p className="text-gray-400 text-sm">{method.value}</p>
            </a>
          ))}
        </motion.div>

        {/* Social Media Links */}
        {/* <motion.div className="mb-12" variants={itemVariants}>
          <h3 className="text-2xl font-semibold text-white mb-6">
            Connect With Us
          </h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              >
                <social.icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </motion.div> */}

        {/* Book a Call */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Ready to Discuss Your Project?
          </h3>
          <Link
            href="https://calendly.com/plannorium-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-lg shadow-lg"
          >
            <CalendarDays className="w-5 h-5 mr-2" />
            Book a Call
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
