/* eslint-disable @next/next/no-img-element */
"use client";

import { Workflow } from "lucide-react";
import { motion } from "framer-motion";

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

export default function OurProcess() {
  const steps = [
    {
      step: "1",
      title: "Discovery & Strategic Alignment",
      desc: "We begin by deeply understanding your vision, goals, and challenges. This collaborative discovery ensures our proposed solution is perfectly tailored to your unique business needs and objectives.",
    },
    {
      step: "2",
      title: "Solution Design & Prototyping",
      desc: "Our experts craft a comprehensive solution architecture, focusing on user experience and technical excellence. We often create interactive prototypes to visualize the end-product and refine the strategy.",
    },
    {
      step: "3",
      title: "Agile Development & Delivery",
      desc: "We build your solution using agile methodologies, ensuring flexibility and transparency. Regular updates and iterative feedback loops keep you involved as we bring your digital product to life.",
    },
    {
      step: "4",
      title: "Launch, Support & Growth",
      desc: "Following rigorous quality assurance, we launch your solution. Our commitment extends beyond deployment, offering ongoing support and strategic insights to help your business scale and thrive.",
    },
  ];

  return (
    <motion.section
      className="py-20 bg-gradient-to-r from-black to-zinc-800 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 opacity-30 animate-pulse" />
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center relative z-10">
        <motion.div className="space-y-6" variants={sectionVariants}>
          <motion.h2
            className="text-3xl font-bold text-left text-white"
            variants={itemVariants}
          >
            Our process. <br /> Simple, seamless, streamlined.
          </motion.h2>
          <motion.ul className="space-y-6" variants={itemVariants}>
            {steps.map((step, index) => (
              <motion.li
                key={index}
                className="relative pl-10"
                variants={itemVariants}
              >
                <div className="absolute left-0 top-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <h4 className="font-semibold text-lg text-white">
                  {step.title}
                </h4>
                <p className="text-gray-300 text-sm">{step.desc}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.a
            href="/contact"
            className="inline-block mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            variants={itemVariants}
          >
            Schedule a Call
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center p-6 md:p-0" // Center the icon
        >
          <Workflow
            className="w-48 h-48 md:w-64 md:h-64 text-blue-400" // Adjusted size and color
            strokeWidth={1.5} // Optional: adjust icon stroke thickness
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
