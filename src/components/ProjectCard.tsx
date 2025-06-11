"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const cardContent = (
    <>
      <div className="relative w-full h-64">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold mb-2 text-white">
          {project.title}
        </h3>
        <p className="text-sm text-gray-300">{project.subtitle}</p>
      </div>
    </>
  );

  if (project.link) {
    return (
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02, y: -5, rotate: 0.5 }}
        whileTap={{ scale: 0.98 }}
        className="block bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5, rotate: 0.5 }}
      whileTap={{ scale: 0.98 }}
      className="bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
    >
      {cardContent}
    </motion.div>
  );
}
