"use client";
import React from "react";
import {
  Users,
  Globe,
  Handshake,
  Lightbulb,
  Award,
  ShieldCheck,
  Briefcase,
  HeartHandshake,
} from "lucide-react";

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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const listContainerVariants = {
  hidden: { opacity: 1 }, // Parent is already handling opacity
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const coreValuesData = [
  { text: "Innovation", icon: Lightbulb },
  { text: "Client-Lens", icon: HeartHandshake },
  { text: "Excellence", icon: Award },
  { text: "Collaboration", icon: Users },
  { text: "Integrity", icon: ShieldCheck },
  { text: "Professionalism", icon: Briefcase },
];

const approachData = [
  {
    title: "Global Mindset",
    desc: "Leveraging diverse international perspectives to deliver solutions that resonate globally and locally.",
    icon: Globe,
  },
  {
    title: "Client-Centric Collaboration",
    desc: "Building strong partnerships through clear communication and a collaborative process from concept to delivery.",
    icon: Handshake,
  },
  {
    title: "Innovation at the Core",
    desc: "Integrating the latest technologies, including AI, to provide forward-thinking and growth-driving solutions.",
    icon: Lightbulb,
  },
];

export default function AboutSection() {
  return (
    <motion.section
      className="py-20 bg-gradient-to-r from-black to-zinc-800 text-white relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 opacity-30 animate-pulse" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Restructured Introductory Block with Icon */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center mb-16"
          variants={sectionVariants} // Use sectionVariants for initial animation of the block
        >
          <motion.div
            className="text-center md:text-left"
            variants={listContainerVariants} // Stagger children (h2 and p)
          >
            <motion.h2
              className="text-4xl font-bold mb-4"
              variants={itemVariants}
            >
              About Plannorium: Pioneering Your Digital Future
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 max-w-3xl md:mx-0 mx-auto"
              variants={itemVariants}
            >
              We are a dynamic team of strategists, designers, and developers
              passionate about transforming innovative ideas into impactful
              digital realities. We partner with businesses to navigate the
              complexities of the digital landscape and achieve lasting success.
            </motion.p>
          </motion.div>
          <motion.div
            className="flex justify-center items-center"
            variants={itemVariants}
          >
            <Users
              className="w-48 h-48 md:w-64 md:h-64 text-blue-400"
              strokeWidth={1.5}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-10 mb-16 items-stretch" // items-stretch for equal height cards
          variants={listContainerVariants} // Stagger children
        >
          <motion.div
            className="bg-gray-900 p-8 rounded-xl shadow-xl flex flex-col" // flex flex-col for content alignment
            variants={itemVariants}
          >
            <h3 className="text-3xl font-semibold text-blue-400 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-300 leading-relaxed flex-grow">
              To become a global leader in delivering premium, innovative
              digital solutions that empower businesses to thrive in the digital
              era.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-900 p-8 rounded-xl shadow-xl flex flex-col"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-semibold text-blue-400 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed flex-grow">
              To transform business ideas into reality by offering exceptional
              web design, development, and AI-powered solutions—delivered with
              creativity, professionalism, and human-centered design.
            </p>
          </motion.div>
        </motion.div>

        <motion.div className="mb-16" variants={itemVariants}>
          <h3 className="text-3xl font-semibold mb-8 text-center text-white">
            Our Approach
          </h3>
          {/* Approach Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
            variants={listContainerVariants}
          >
            {approachData.map((approach, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-md flex items-start" // Added flex for icon placement
                variants={itemVariants}
              >
                {/* Render Icon */}
                <div className="mr-4">
                  {React.createElement(approach.icon, {
                    className: "w-6 h-6 text-blue-400",
                  })}
                </div>
                {/* Text Content */}
                <div>
                  <h4 className="text-xl font-bold text-blue-400 mb-2">
                    {approach.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{approach.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center"
          variants={itemVariants} // Animate this block as a whole
        >
          <h3 className="text-3xl font-semibold mb-8">Our Core Values</h3>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto"
            variants={listContainerVariants} // Stagger children
          >
            {coreValuesData.map((item) => (
              <motion.div
                key={item.text}
                className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center" // Centering content
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.25)",
                }}
              >
                {/* Render Icon */}
                {React.createElement(item.icon, {
                  className: "w-8 h-8 text-blue-400 mb-2", // Icon styling
                })}
                <p className="text-sm font-medium text-gray-200">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
