"use client";
import { motion } from "framer-motion";
import AboutMe from "./templates/AboutMe";
import SkillSection from "./templates/SkillSection";
import { Button } from "@/components/ui/button";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

import ParticlesComponent from "./animations/particles";
import ContactSection from "./templates/ContactSection";
import Link from "next/link";

function MainSection() {
  return (
    <>
      <ParticlesComponent id="particles" className="-z-20" />
      <div className="flex flex-row h-lvh justify-center items-start pt-10 md:px-4">
        <motion.div className="text-white flex flex-col justify-start items-start space-y-4 p-8 w-full max-w-2xl">
          <motion.div
            initial={"hidden"}
            animate={"visible"}
            variants={slideInFromLeft(8)}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm text-stone-300 font-medium text-accent">
              Available for new projects
            </span>
          </motion.div>
          <motion.h1
            initial={"hidden"}
            animate={"visible"}
            variants={slideInFromTop(0.5)}
            className="text-5xl font-bold font-serif z-10"
          >
            Hi, I'm Riad 👋
          </motion.h1>

          <motion.p
            initial={"hidden"}
            animate={"visible"}
            variants={slideInFromLeft(1.2)}
            className="text-xl font-sans font-semibold text-gray-300 z-10"
          >
            Software Engineer & Computer Science Graduate
          </motion.p>

          <motion.p
            initial={"hidden"}
            animate={"visible"}
            variants={slideInFromLeft(1.5)}
            className="text-gray-300 text-md md:text-md font-sans z-10 "
          >
            A passionate developer dedicated to creating unique applications and
            digital experiences. With a strong track record of client
            satisfaction, I am eager to advance my career in the field of
            Software Development.
          </motion.p>

          <motion.div
            variants={slideInFromLeft(1.6)}
            initial={"hidden"}
            animate={"visible"}
            className="flex flex-row gap-4 justify-center items-center z-10"
          >
            <Link
              href="/projects"
              className="group relative min-w-[12rem] justify-center px-8 py-4 bg-blue-600 overflow-hidden rounded-xl inline-flex items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-800/50 transition-transform duration-300 group-hover:translate-x-0 -translate-x-full"></div>
              <span className="relative z-10 text-white font-sans font-semibold">
                Explore Projects
              </span>
            </Link>
            <Link
              href="/contact"
              className="group px-8 min-w-40 py-4 rounded-xl bg-stone-600 border border-foreground/10 inline-flex items-center justify-center overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-stone-800/40 transition-transform duration-300 group-hover:translate-x-0 translate-x-full"></div>
              <span className="relative text-white z-10 font-sans tracking-wide font-semibold">
                Contact Me
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideInFromRight(2.4)}
          initial={"hidden"}
          animate={"visible"}
          className="hidden min-w-[23rem] min-h-56 flex-shrink border-gray-900 rounded-3xl py-4 px-4 bg-white/10 md:flex flex-col w-[45%] gap-x-4 backdrop-blur-xl bright-glow"
        >
          <div className="flex gap-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full border border-red-700" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full border border-yellow-700" />
            <div className="w-3 h-3 bg-green-400 rounded-full border border-green-700" />
            <p className="text-sm font-medium text-muted-foreground "></p>
          </div>
          <div className="mt-4 rounded-xl h-full">
            <AboutMe
              text="Riad Mammadov - Aspiring Software Engineer & Tech Enthusiast"
              heading="$ whoami"
            />

            <SkillSection heading="$ skills --list" />

            <ContactSection heading="$ contact --info" />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default MainSection;
