"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import MacWindow from "./MacWindow";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";

const projects = [
  {
    title: "Project One",
    description: "Full stack application with Next.js and TypeScript",
    image: "/javascript.svg",
    githubUrl: "https://github.com/username/project-one",
    detailsUrl: "/projects/project-one",
  },
  {
    title: "Project Two",
    description: "React Native mobile app with custom animations",
    image: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/username/project-two",
    detailsUrl: "/projects/project-two",
  },
  {
    title: "Project Three",
    description: "UI/UX design and frontend development, Using Next.js",
    image: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/username/project-three",
    detailsUrl: "/projects/project-three",
  },
  {
    title: "Project Four",
    description: "Machine learning model with Python and TensorFlow",
    image: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/username/project-four",
    detailsUrl: "/projects/project-four",
  },
  {
    title: "Project Five",
    description: "Blockchain application using Ethereum and Solidity",
    image: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/username/project-five",
    detailsUrl: "/projects/project-five",
  },
  {
    title: "Project Six",
    description: "IoT project with Raspberry Pi and Node.js",
    image: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/username/project-six",
    detailsUrl: "/projects/project-six",
  },
  {
    title: "Project Seven",
    description: "AR/VR experience built with Unity and C#",
    image: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/username/project-seven",
    detailsUrl: "/projects/project-seven",
  },
];

export default function ScrollableProjectSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <MacWindow className="max-w-4xl">
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white text-center mb-8"
        >
          Scrollable Project Showcase
        </motion.h2>
        <div
          ref={containerRef}
          className="h-[500px] overflow-y-auto pr-4 space-y-16 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300"
        >
          {projects.map((project, index) => (
            <ProjectCardWithAnimation
              key={project.title}
              project={project}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </MacWindow>
  );
}

function ProjectCardWithAnimation({ project, index, scrollYProgress }) {
  const cardRef = useRef(null);

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100 * (index + 1), -100 * (projects.length - index)]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex justify-center"
    >
      <ProjectCard {...project} index={index} />
    </motion.div>
  );
}
