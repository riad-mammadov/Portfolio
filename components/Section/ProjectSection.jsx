"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MacWindow from "../MacWindow";
import ProjectCard from "../ui/ProjectCard";
import SearchBar from "../ui/SearchBar";

const projects = [
  {
    title: "Project One",
    description: "Full stack application with Next.js",
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
    description: "UI/UX design and frontend development, Using Next.js",
    image: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/username/project-three",
    detailsUrl: "/projects/project-three",
  },
  {
    title: "Project 4",
    description: "UI/UX design and frontend development, Using Next.js",
    image: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/username/project-four",
    detailsUrl: "/projects/project-four",
  },
  {
    title: "Project 5",
    description: "UI/UX design and frontend development, Using Next.js",
    image: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/username/project-five",
    detailsUrl: "/projects/project-five",
  },
  {
    title: "Project 6",
    description: "UI/UX design and frontend development, Using Next.js",
    image: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/username/project-six",
    detailsUrl: "/projects/project-six",
  },
  {
    title: "Project 7",
    description: "UI/UX design and frontend development, Using Next.js",
    image: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/username/project-seven",
    detailsUrl: "/projects/project-seven",
  },
];

export default function ProjectSection() {
  const [isTyping, setIsTyping] = useState(false);
  /* State to track when the typing animation begins */

  const [showProjects, setShowProjects] = useState(false);
  /* State to track when the projects should be displayed */

  const scrollRef = useRef(null);
  /* Container ref for viewport */

  function handleSetTyping() {
    /* When the viewport is in view, begins typing animation after 1 second */

    setTimeout(() => {
      setIsTyping(true);
    }, 1000);
  }

  function handleSearchComplete() {
    /* When the typing animation completes, set showProjects to true and display after 0.6 seconds */

    setTimeout(() => {
      setShowProjects(true);
    }, 600);
  }

  const handleScroll = (direction) => {
    /* Function for the scroll left/right buttons */

    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const targetScroll =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      /* If scroll direction is left, subtract the scroll amount, otherwise increase it */

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <MacWindow>
      <motion.div ref={scrollRef} className="space-y-8 z-50">
        {!showProjects ? (
          // If the showProjects state is false, display the SearchBar and its animation
          <motion.div
            className="flex justify-center items-center min-h-[400px]"
            viewport={{ root: scrollRef, amount: 0.7, once: true }}
            // Use the container ref as the viewport root, make it visible when 70% of the div is in the viewport, and animate once
            whileInView={() => handleSetTyping()}
            // Begin the animation when in viewport
            exit={{ opacity: 0, y: -20 }}
          >
            <SearchBar isTyping={isTyping} onComplete={handleSearchComplete} />
            {/* Mount the SearchBar Component */}
          </motion.div>
        ) : (
          // If showProjects state is true, then display the projects
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 className="text-center mb-6 text-xl sm:text-2xl text-stone-300 font-mono font-semibold">
              My Projects
            </motion.h1>
            <div className="relative">
              <button
                onClick={() => handleScroll("left")}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-70 p-1 rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <div className="overflow-x-auto pb-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.5, delayChildren: 0.5 }}
                  className="flex gap-5 px-4"
                >
                  {projects.map((project, index) => (
                    // For each item in projects array, create a Project Card
                    <ProjectCard
                      key={project.title}
                      {...project}
                      index={index}
                      custom={index * 0.2}
                    />
                  ))}
                </motion.div>
              </div>
              <button
                onClick={() => handleScroll("right")}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500  bg-opacity-70 p-1 rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </MacWindow>
  );
}
