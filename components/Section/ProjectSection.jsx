"use client";

import { motion, useInView, useScroll } from "framer-motion";
import MacWindow from "../MacWindow";
import ProjectCard from "../ui/ProjectCard";
import SearchBar from "../ui/SearchBar";
import { useRef, useState } from "react";
import splitString from "@/utils/split";

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
    image: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/username/project-two",
    detailsUrl: "/projects/project-two",
  },
  {
    title: "Project Three",
    description: "UI/UX design and frontend development, Using nextjs",
    image: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/username/project-three",
    detailsUrl: "/projects/project-three",
  },
  {
    title: "Project 4",
    description: "UI/UX design and frontend development, Using nextjs",
    image: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/username/project-three",
    detailsUrl: "/projects/project-three",
  },
  {
    title: "Project 5",
    description: "UI/UX design and frontend development, Using nextjs",
    image: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/username/project-three",
    detailsUrl: "/projects/project-three",
  },
  {
    title: "Project 6",
    description: "UI/UX design and frontend development, Using nextjs",
    image: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/username/project-three",
    detailsUrl: "/projects/project-three",
  },
  {
    title: "Project 7",
    description: "UI/UX design and frontend development, Using nextjs",
    image: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/username/project-three",
    detailsUrl: "/projects/project-three",
  },
];

export default function ProjectSection() {
  const [isTyping, setIsTyping] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  function handleSetTyping() {
    setTimeout(() => {
      setIsTyping(true);
    }, 1000);
  }
  function handleSearchComplete() {
    setTimeout(() => {
      setShowProjects(true);
    }, 500);
  }
  return (
    <MacWindow>
      <motion.div whileInView={() => handleSetTyping} className="space-y-8">
        {!showProjects ? (
          <motion.div
            className="flex justify-center items-center min-h-[400px]"
            exit={{ opacity: 0, y: -20 }}
          >
            <SearchBar isTyping={isTyping} onComplete={handleSearchComplete} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div transition={{ ease: "linear" }} />
            <div className="overflow-x-auto pb-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-5 px-4"
              >
                {projects.map((project, index) => (
                  <ProjectCard key={project.title} {...project} index={index} />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </MacWindow>
  );
}
