"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";

const skills = [
  {
    name: "JavaScript",
    description:
      "I have a great knowledge with JavaScript, particularly ES6+ features. In order to gain a deep understanding of JS, I focus on what is happening under the hood.",
    icon: "/javascript.svg",
    gradient: "from-yellow-500/5 to-yellow-500/10",
    color: "yellow",
  },
  {
    name: "React.js",
    description:
      "I'm experienced with React, which I have used for many projects. I'm familiar with common concepts of React. My principle is to write clean and maintainable code.",
    icon: "/javascript.svg",
    gradient: "from-blue-500/5 to-blue-500/10",
    color: "blue",
  },
  {
    name: "TypeScript",
    description:
      '"Fix Bugs in Development instead of Production". This is my reason why I should use TypeScript. TypeScript is my main language to start a new project.',
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-16%20at%2016.54.58-XTaRXG0tienpHsRtmsHCAZyJZa475C.png#x=858,y=290,w=40,h=40",
    gradient: "from-blue-600/5 to-blue-600/10",
    color: "blue",
  },
  {
    name: "Next.js",
    description:
      "I used Next.js for most of my client's projects. Useful especialy for its SSR properties and ease of routes. Amazing framework ",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-16%20at%2016.54.58-XTaRXG0tienpHsRtmsHCAZyJZa475C.png#x=426,y=494,w=40,h=40",
    gradient: "from-gray-500/5 to-gray-500/10",
    color: "gray",
  },
  {
    name: "Node.js",
    description:
      "I use Node.js for building scalable network applications and APIs.",
    icon: "/nodejs.svg",
    gradient: "from-green-500/5 to-green-500/10",
    color: "green",
  },
  {
    name: "PostgreSQL",
    description:
      "Python is my go-to language for data analysis and machine learning projects.",
    icon: "/postgresql.svg",
    gradient: "from-blue-300/5 to-blue-300/10",
    color: "blue",
  },
  {
    name: "Tailwind CSS",
    description:
      "I leverage GraphQL for efficient data fetching in complex applications.",
    icon: "/tailwindcss.svg",
    gradient: "from-pink-500/5 to-pink-500/10",
    color: "pink",
  },
  {
    name: "Redux",
    description:
      "I use Docker for creating, deploying, and running applications in containers.",
    icon: "/redux.svg",
    gradient: "from-blue-400/5 to-blue-400/10",
    color: "blue",
  },
];

export default function SecondSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? skills : skills.slice(0, 4);
  const ref = useRef();
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className="bg-gray-800 rounded-xl w-screen mt-20 container mx-auto px-4"
    >
      <motion.h1
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideInFromTop(0)}
        className="text-3xl font-semibold text-center text-stone-300 font-mono mb-12"
      >
        My Skills
      </motion.h1>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideInFromLeft(0.5)}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto relative"
      >
        <AnimatePresence initial={false}>
          {visibleSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
              transition={{
                duration: 0.3,
                delay: showAll ? index * 0.1 : 0,
                ease: "easeOut",
              }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence mode="wait">
        {showAll ? (
          <motion.div
            key="hide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center mt-12"
          >
            <HideAllButton onClick={() => setShowAll(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="show"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center mt-12"
          >
            <ViewAllButton onClick={() => setShowAll(true)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SkillCard({ skill }) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start(isHovered ? "hover" : "rest");
  }, [isHovered, controls]);

  return (
    <div className="relative pt-6 pr-6">
      <motion.div
        className="absolute -top-3 -right-3 w-12 h-12 rounded-lg bg-gray-900/80 p-2.5 z-20"
        animate={controls}
        variants={{
          rest: { rotate: 0 },
          hover: { rotate: 10 },
        }}
        transition={{ type: "just", stiffness: 300 }}
      >
        <img
          src={skill.icon || "/placeholder.svg"}
          alt={`${skill.name} icon`}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card
          className="relative h-[200px] overflow-hidden bg-[#1f2937] border-gray-800 p-5 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at top right, ${skill.color}, transparent 70%)`,
            }}
          />
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 0.05 },
            }}
            transition={{ duration: 0.3 }}
            style={{
              background: `linear-gradient(45deg, ${skill.color}22, transparent)`,
            }}
          />
          <div className="relative z-10 h-full flex flex-col">
            <h3 className="text-xl font-semibold text-gray-100 mb-4">
              {skill.name}
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              {skill.description}
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

function ViewAllButton({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      View All Skills
    </motion.button>
  );
}

function HideAllButton({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Hide Skills
    </motion.button>
  );
}
