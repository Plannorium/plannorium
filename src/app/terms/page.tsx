"use client";

import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TermsOfServicePage() {
  return (
    <motion.main
      className="min-h-screen py-20 bg-gradient-to-r from-black to-zinc-800 text-white relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 opacity-30 animate-pulse" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h1
          className="text-4xl font-bold mb-10 text-center text-blue-400"
          variants={itemVariants}
        >
          Terms of Service
        </motion.h1>

        <motion.section className="space-y-8" variants={itemVariants}>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              1. Agreement to Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using our services, you agree to be bound by these
              Terms of Service. If you disagree with any part of the terms, then
              you may not access the service. These Terms apply to all visitors,
              users, and others who wish to access or use the Service.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              2. Use of Our Services
            </h2>
            <p className="text-gray-300 leading-relaxed">
              You may use our services only if you can form a binding contract
              with Plannorium, and only in compliance with these Terms and all
              applicable local, state, national, and international laws, rules,
              and regulations.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              3. Intellectual Property
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The Service and its original content (excluding Content provided
              by users), features, and functionality are and will remain the
              exclusive property of Plannorium and its licensors. Our trademarks
              and trade dress may not be used in connection with any product or
              service without the prior written consent of Plannorium.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              4. User Content
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our Service may allow you to post, link, store, share and
              otherwise make available certain information, text, graphics,
              videos, or other material (&apos;Content&apos;). You are
              responsible for the Content that you post on or through the
              Service, including its legality, reliability, and appropriateness.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              5. Limitation Of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              In no event shall Plannorium, nor its directors, employees,
              partners, agents, suppliers, or affiliates, be liable for any
              indirect, incidental, special, consequential or punitive damages,
              including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses, resulting from your access
              to or use of or inability to access or use the Service.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              6. Disclaimer
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Your use of the Service is at your sole risk. The Service is
              provided on an &apos;AS IS&apos; and &apos;AS AVAILABLE&apos;
              basis. The Service is provided without warranties of any kind,
              whether express or implied, including, but not limited to, implied
              warranties of merchantability, fitness for a particular purpose,
              non-infringement or course of performance.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              7. Governing Law
            </h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed and construed in accordance with the
              laws of our operating jurisdiction, without regard to its conflict
              of law provisions.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              8. Changes To Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material we will provide
              at least 30 days&apos; notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
            </p>
            <p className="text-gray-400 text-sm mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              9. Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms, please contact us at
              hello@plannorium.com.
            </p>
          </div>
        </motion.section>
      </div>
    </motion.main>
  );
}
