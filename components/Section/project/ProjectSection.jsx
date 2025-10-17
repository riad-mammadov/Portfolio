"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Grid3X3, List } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/utils/projects";

function ProjectSection() {
  const [viewMode, setViewMode] = useState("grid");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const getProjectsToShow = () => {
    if (showAllProjects) {
      return projects;
    }
    return projects;
  };

  const projectsToShow = getProjectsToShow();
  const hasMoreProjects = !showAllProjects && projects.length > 4;

  return (
    <section className="w-full max-w-7xl mx-auto ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="inline-flex items-center space-x-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10">
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
          </div>
          <h2 className="text-2xl sm:text-5xl font-bold font-serif text-white">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>
        <p className="text-gray-300 text-md sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-0 leading-relaxed">
          A collection of projects and certifications showcasing my skills in
          various programming languages.
        </p>
      </motion.div>

      <motion.div className="hidden sm:flex flex-col sm:flex-row justify-end items-center mb-8 gap-4">
        <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-xl transition-all duration-300 ${
              viewMode === "grid"
                ? "bg-white/20 text-white"
                : "text-gray-400 hover:text-white hover:bg-white/10"
            }`}
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-xl transition-all duration-300 ${
              viewMode === "list"
                ? "bg-white/20 text-white"
                : "text-gray-400 hover:text-white hover:bg-white/10"
            }`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      <motion.div
        className={`${
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "flex flex-col space-y-6"
        }`}
      >
        {projectsToShow.map((project, index) => {
          const shouldShow = showAllProjects || index < 6;

          return (
            <motion.div
              key={project.title}
              className={`${shouldShow ? "block" : "hidden"}`}
            >
              <ProjectCard {...project} viewMode={viewMode} index={index} />
            </motion.div>
          );
        })}
      </motion.div>

      {hasMoreProjects && (
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => setShowAllProjects(true)}
            className="px-6 py-3 bg-gradient-to-r text-sm from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-2xl text-white font-medium hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
          >
            Show All ({projects.length - 6} more)
          </button>
        </motion.div>
      )}
    </section>
  );
}

export default ProjectSection;
