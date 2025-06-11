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

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </motion.h1>

        <motion.section className="space-y-8" variants={itemVariants}>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              1. Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to Plannorium. We are committed to protecting your
              personal information and your right to privacy. If you have any
              questions or concerns about this privacy notice, or our practices
              with regards to your personal information, please contact us at
              hello@plannorium.com.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              2. Information We Collect
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We collect personal information that you voluntarily provide to us
              when you express an interest in obtaining information about us or
              our products and services, when you participate in activities on
              the Website or otherwise when you contact us. The personal
              information that we collect depends on the context of your
              interactions with us and the Website, the choices you make and the
              products and features you use.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We use personal information collected via our Website for a
              variety of business purposes described below. We process your
              personal information for these purposes in reliance on our
              legitimate business interests, in order to enter into or perform a
              contract with you, with your consent, and/or for compliance with
              our legal obligations.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              4. Will Your Information Be Shared With Anyone?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We only share information with your consent, to comply with laws,
              to provide you with services, to protect your rights, or to
              fulfill business obligations.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              5. How Long Do We Keep Your Information?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We keep your information for as long as necessary to fulfill the
              purposes outlined in this privacy notice unless otherwise required
              by law.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              6. How Do We Keep Your Information Safe?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We aim to protect your personal information through a system of
              organizational and technical security measures.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              7. What Are Your Privacy Rights?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              In some regions, such as the European Economic Area (EEA) and UK,
              you have rights that allow you greater access to and control over
              your personal information. You may review, change, or terminate
              your account at any time.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              8. Updates To This Notice
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this privacy notice from time to time. The updated
              version will be indicated by an updated &apos;Revised&apos; date
              and the updated version will be effective as soon as it is
              accessible.
            </p>
            <p className="text-gray-400 text-sm mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              9. How Can You Contact Us About This Notice?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions or comments about this notice, you may email
              us at hello@plannorium.com.
            </p>
          </div>
        </motion.section>
      </div>
    </motion.main>
  );
}
