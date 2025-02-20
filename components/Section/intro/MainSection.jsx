"use client";

import { motion } from "framer-motion";
import AboutMe from "../../templates/AboutMe";
import SkillSection from "../../templates/SkillSection";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import ParticlesComponent from "../../animations/particles";
import ContactSection from "../../templates/ContactSection";
import Link from "next/link";

import TextBlink from "../../templates/TextBlink";
function MainSection() {
  return (
    <>
      <ParticlesComponent id="particles" />
      {/* Particle Background Component */}
      <div className="relative flex flex-row min-h-screen sm:h-lvh justify-center items-start sm:px-4 overflow-hidden">
        {/* Introduction section + animations */}
        <motion.div
          className="text-white flex flex-col justify-start items-start space-y-6 p-8 w-full max-w-2xl"
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={slideInFromTop(0.5)}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm hover:bg-accent/20 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm text-stone-300 font-medium text-accent">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            variants={slideInFromTop(0.5)}
            className="text-5xl sm:text-6xl font-bold font-serif z-10"
          >
            Hi, I'm Riad 👋
          </motion.h1>

          <motion.p
            variants={slideInFromLeft(1.2)}
            className="text-xl sm:text-2xl font-sans font-semibold text-gray-300 z-10"
          >
            Software Engineer & Computer Science Graduate
          </motion.p>

          <motion.p
            variants={slideInFromLeft(1.5)}
            className="text-gray-300 text-md md:text-lg font-sans z-10 leading-relaxed"
          >
            A recently-graduated, passionate developer dedicated to creating
            unique applications and digital experiences. Feel free to explore my
            projects and don't hesitate to ask my chatbot any questions you
            might have!
          </motion.p>

          {/* Buttons below introduction section */}

          <motion.div
            variants={slideInFromLeft(1.6)}
            className="flex flex-col sm:flex-row gap-4 md:justify-start items-start z-10 pt-4"
          >
            <Link
              href="/projects"
              className="group relative md:min-w-[12rem] justify-center px-8 py-4 bg-blue-600 overflow-hidden rounded-xl inline-flex items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-800/50 transition-transform duration-500 group-hover:translate-x-0 -translate-x-full"></div>
              <span className="relative z-10 text-white font-sans font-semibold">
                Explore Projects
              </span>
            </Link>
            <Link
              href="/contact"
              className="group px-8 min-w-40 py-4 rounded-xl bg-stone-600/20 border border-foreground/10 inline-flex items-center justify-center overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-stone-800/40 transition-transform duration-500 group-hover:translate-x-0 translate-x-full"></div>
              <span className="relative text-white z-10 font-sans tracking-wide font-semibold">
                Contact Me
              </span>
            </Link>
          </motion.div>
        </motion.div>
        {/* Terminal section on the right - to appear after the introduction animation is finished */}
        <motion.div
          variants={slideInFromRight(2.4)}
          initial="hidden"
          animate="visible"
          className="hidden md:flex flex-col w-[45%] max-w-[32rem] min-w-[23rem] min-h-56 flex-shrink rounded-3xl py-6 px-6 bg-white/5 border border-white/10 backdrop-blur-xl relative group"
          style={{
            boxShadow: "0 0 80px -20px rgba(168, 85, 247, 0.25)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/20 to-accent/20 rounded-3xl opacity-50" />

          {/* Window display  */}
          <div className="flex gap-x-2 items-center">
            <div className="w-3 h-3 bg-red-400 rounded-full border border-red-700/50 shadow-lg shadow-red-500/20" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full border border-yellow-700/50 shadow-lg shadow-yellow-500/20" />
            <div className="w-3 h-3 bg-green-400 rounded-full border border-green-700/50 shadow-lg shadow-green-500/20" />
          </div>

          <div className="mt-6 rounded-xl z-50 h-full space-y-6">
            {/* Sections to be displayed inside the terminal with the relevant props */}
            <AboutMe
              text="Riad Mammadov - Aspiring Software Engineer & Tech Enthusiast"
              heading="$ whoami"
            />

            <SkillSection heading="$ skills --list" />

            <ContactSection heading="$ contact --info" />

            <TextBlink />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default MainSection;
