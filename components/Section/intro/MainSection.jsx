"use client";

import { motion } from "framer-motion";
import AboutMe from "../../templates/AboutMe";
import SkillSection from "../../templates/SkillSection";
import { appear, slideInFromRight } from "@/utils/motion";
import ContactSection from "../../templates/ContactSection";
import { Link } from "react-scroll";
import TextBlink from "../../templates/TextBlink";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import TerminalWindow from "@/components/ui/TerminalWindow";

function MainSection() {
  return (
    <div className="relative flex sm:flex-row justify-center items-start sm:px-8 overflow-hidden">
      <motion.div
        className="text-white flex flex-col justify-center items-start space-y-4 px-4 w-full max-w-3xl lg:w-[55%]"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={appear(0.2)}
          className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm hover:bg-emerald-500/20 "
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50"></span>
          <span className="text-sm text-emerald-300 font-medium">
            Available for opportunities
          </span>
        </motion.div>

        <div className="space-y-4">
          <motion.h1
            variants={appear(0.4)}
            className="text-5xl sm:text-6xl font-bold font-serif z-10 leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Riad
            </span>{" "}
            👋
          </motion.h1>

          <motion.div variants={appear(0.6)} className="space-y-2">
            <h2 className="text-3xl sm:text-3xl lg:text-3xl font-sans font-semibold text-gray-200 z-10">
              Technologist & Computer Science Graduate
            </h2>
          </motion.div>
        </div>

        <motion.p
          variants={appear(0.8)}
          className="text-gray-300 text-lg md:text-xl font-sans z-10 leading-relaxed max-w-2xl"
        >
          As a curious and driven graduate with a background in computer
          science, I’m passionate about building, learning, and contributing to
          meaningful work - whether it’s in{" "}
          <span className="text-blue-400 font-semibold"> technology</span> or{" "}
          <span className="text-purple-400 font-semibold">
            collaborating across disciplines
          </span>
          , I thrive when ideas meet execution. Feel free to explore my work,
          reach out, or even chat with my{" "}
          <span className="text-blue-400 font-semibold">AI Assistant</span> to
          learn more about me!
        </motion.p>

        <motion.div
          variants={appear(0.9)}
          className="flex flex-col sm:flex-row gap-4 md:justify-start items-start z-10 pt-4"
        >
          <Link
            key="Projects"
            to="Projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="group relative md:min-w-[12rem] hover:cursor-pointer justify-center px-8 py-4 bg-gradient-to-r from-blue-800 to-purple-800  overflow-hidden rounded-2xl inline-flex items-center transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent  to-white/20 transition-transform duration-500 group-hover:translate-x-0 -translate-x-full opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 text-white font-sans font-semibold flex items-center space-x-2">
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0 transition-transform duration-300" />
            </span>
          </Link>

          <Link
            key="Contact"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="group px-8 min-w-40 py-4 rounded-2xl hover:cursor-pointer bg-slate-900/20 backdrop-blur-sm inline-flex items-center justify-center overflow-hidden relative transition-all duration-300 "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700/30 via-slate-600/40 to-slate-800/30 transition-transform duration-500 group-hover:translate-x-0 translate-x-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative text-slate-200 group-hover:text-white z-10 font-sans tracking-wide font-semibold flex items-center space-x-2 transition-colors duration-300">
              <span>Contact Me</span>
              <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </Link>
        </motion.div>
      </motion.div>

      <TerminalWindow>
        <div className="flex-1 rounded-2xl z-10 space-y-6 overflow-hidden">
          <AboutMe
            text="Riad Mammadov — Exploring Technology with Curiosity, Creativity, and Purpose."
            heading="$ whoami"
          />
          <SkillSection heading="$ skills --list" />
          <ContactSection heading="$ contact --info" />
          <TextBlink />
        </div>
      </TerminalWindow>
    </div>
  );
}

export default MainSection;
