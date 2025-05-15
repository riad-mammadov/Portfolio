"use client";

import { delay, motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, FolderOpenDot } from "lucide-react";
import MacWindow from "@/components/ui/MacWindow";
import ProjectCard from "@/components/ui/ProjectCard";
import SearchBar from "@/components/ui/SearchBar";
import { projects } from "@/utils/projects";

function ProjectSection() {
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

  const scrollContainerRef = useRef();

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
    <>
      <MacWindow>
        <motion.div ref={scrollRef} className="space-y-8 z-10 sm:h-[350px]">
          {!showProjects ? (
            // If the showProjects state is false, display the SearchBar and its animation
            <motion.div
              className="flex  justify-center items-center min-h-[350px]"
              viewport={{ root: scrollRef, amount: 0.7, once: true }}
              // Use the container ref as the viewport root, make it visible when 70% of the div is in the viewport, and animate once
              whileInView={() => handleSetTyping()}
              // Begin the animation when in viewport
              exit={{ opacity: 0, y: -20 }}
            >
              <SearchBar
                isTyping={isTyping}
                onComplete={handleSearchComplete}
              />
              {/* Mount the SearchBar Component */}
            </motion.div>
          ) : (
            // If showProjects state is true, then display the projects
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="h-[350px] space-y-4"
            >
              <motion.span className="flex flex-row items-center justify-center gap-2">
                <span>
                  <FolderOpenDot className="animate-bounce text-cyan-700" />
                </span>
                <motion.h1 className="text-center font-serif sm:text-2xl text-xl text-white font-semibold">
                  Projects & Courses
                </motion.h1>
              </motion.span>
              <div className="relative">
                <button
                  onClick={() => handleScroll("left")}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-70 p-1 rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <div ref={scrollContainerRef} className="overflow-x-auto pb-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.5, delayChildren: 0.5 }}
                    className="flex gap-5 px-4 "
                  >
                    {projects.map((project, index) => (
                      // For each item in projects array, creates a Project Card
                      <motion.span
                        key={project.title}
                        transition={{ type: "tween", duration: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <ProjectCard
                          {...project}
                          techStack={project.techStack}
                          index={index}
                          custom={index * 0.2}
                        />
                      </motion.span>
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
    </>
  );
}

export default ProjectSection;
