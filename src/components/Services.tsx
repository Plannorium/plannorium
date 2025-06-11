"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers } from "lucide-react"; // Import Layers icon

const servicesData = [
  {
    title: "Custom Software Development",
    desc: "End-to-end solutions for web and mobile.",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform apps for Android and iOS.",
  },
  {
    title: "UX/UI Design",
    desc: "Modern, user-centered, pixel-perfect designs.",
  },
  {
    title: "AI Integration",
    desc: "Embed smart features using ML & AI models.",
  },
  { title: "Automation", desc: "Workflows and process automation." },
  {
    title: "Platform & Infrastructure",
    desc: "Robust cloud and infrastructure solutions.",
  },
];

const techStackData = [
  "Python",
  "Golang",
  "Vue.js",
  "C#",
  "C++",
  "Rails",
  "JavaScript",
  "Node.js",
  "Swift",
  "Java",
  "Angular",
  "PHP",
  "React",
  "Android",
  ".NET",
  "iOS",
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const listContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const Services = () => {
  return (
    <>
      <motion.section
        className="py-20 bg-gradient-to-r from-black to-zinc-800 relative overflow-hidden" // Removed text-center
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 opacity-30 animate-pulse" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {" "}
          {/* Content wrapper */}
          {/* Title/Icon Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12 text-center md:text-left">
            <motion.div
              className="md:text-left text-center" // Alignment for content within this column
              variants={listContainerVariants} // Stagger children (currently only H2)
            >
              <motion.h2
                className="text-4xl font-bold text-white" // mb-10 removed
                variants={listItemVariants}
              >
                From Concept to Completion: Our Full-Stack Expertise
              </motion.h2>
              {/* Optional: Add a descriptive paragraph here, it will be staggered */}
            </motion.div>
            <motion.div
              className="flex justify-center items-center" // Icon column
              variants={listItemVariants}
            >
              <Layers
                className="w-48 h-48 md:w-64 md:h-64 text-blue-400"
                strokeWidth={1.5}
              />
            </motion.div>
          </div>
          {/* Existing Services Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" // max-w-6xl mx-auto px-4 removed
            variants={listContainerVariants}
          >
            {servicesData.map((item, i) => (
              <motion.div
                key={i}
                className="bg-gray-900 p-6 rounded-3xl shadow-lg text-left hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                variants={listItemVariants}
                whileHover={{ rotate: 1, scale: 1.02 }} // Subtle rotation and scale on hover
              >
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-gradient-to-r from-black to-zinc-800 text-center relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 opacity-30 animate-pulse" />
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto px-4 relative z-10"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <motion.div
              className="space-y-4 md:text-left text-center" // Text left on md, center on sm
              variants={listContainerVariants} // Stagger children
            >
              <motion.h2
                className="text-3xl font-bold text-white"
                variants={listItemVariants}
              >
                Yes, We Cover Your Tech Stack.
              </motion.h2>
              <motion.p
                className="text-gray-300 max-w-2xl md:mx-0 mx-auto" // Adjust margin for alignment
                variants={listItemVariants}
              >
                Our expert team works with all major technologies and
                frameworks.
              </motion.p>
            </motion.div>
            <motion.div
              className="flex justify-center items-center p-6 md:p-0"
              variants={listItemVariants}
            >
              <Cpu
                className="w-48 h-48 md:w-64 md:h-64 text-blue-400"
                strokeWidth={1.5}
              />
            </motion.div>
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 font-semibold text-lg max-w-4xl mx-auto px-4"
            variants={listContainerVariants}
          >
            {techStackData.map((tech, i) => (
              <motion.span
                key={i}
                className="bg-gray-700 px-4 py-2 rounded-full shadow-md text-gray-100"
                variants={listItemVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Services;
