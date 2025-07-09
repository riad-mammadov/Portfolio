"use client";

import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import { FileStack } from "lucide-react";
import { useRef } from "react";

const timelineItems = [
  {
    date: "09/2024 - Present",
    title: "Freelance Full-Stack Web Developer",
    description:
      "Delivered responsive web applications and prototypes for clients, increasing their operational efficiency and user engagement. Specialised in JavaScript frameworks and collaborated directly with clients to translate their requirements into technical solutions.",
    institution: "Self-Employed",
    type: "work",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreDB",
      "Tailwind CSS",
      "Git",
      "Agile",
    ],
    achievements:
      "Consistently delivered projects on time while expanding my knowledge through hands-on learning",
  },
  {
    date: "09/2021 - 09/2024",
    title: "BSc Honours Computer Science (2:1)",
    description:
      "Graduated with Upper Second-Class Honours in Computer Science. My dissertation involved developing a full-stack ordering platform using JavaScript and PHP, showcasing strong problem-solving and technical proficiency.",
    institution: "City University of London",
    type: "education",
    skills: [
      "JavaScript",
      "C++",
      "Java",
      "SQL",
      "Software Engineering",
      "Database Design",
      "Data Structures & Algorithms",
    ],
    achievement:
      "Upper Second-Class Honours (2:1) • Relevant Coursework and Modules: Cloud Computing, Mathematics in Computing, Software Engineering, Algorithms & Data Structures",
  },
  {
    date: "01/2020",
    title: "Software Development Programme",
    description:
      "Selected for competitive Big Four technology programme as part of my work experience, gaining exposure to enterprise level software development practices. Developed understanding of Software engineering fundamentals, and enhanced professional communication skills through workshops.",
    institution: "KPMG",
    type: "work",
    skills: [
      "Professional Development",
      "Programming Methodologies",
      "Client Communication",
      "Team Collaboration",
    ],
    achievements:
      "Received positive feedback from mentors • Built professional network and contacts • Gained insight into the field through a big company",
  },
  {
    date: "09/2019 - 06/2021",
    title: "A-Levels in Technology and Computing",
    description:
      "Achieved an A* in Digital Game Development, with a B in Computer Science and a C in Graphics. This academic foundation showcases my strong technical proficiency, problem-solving capabilities, and a genuine drive to acquire new knowledge, making me well-prepared for university studies",
    institution: "Stoke Newington Sixth Form",
    type: "education",
    achievement:
      "A* in Digital Game Development • B in Computer Science • Consistent high achiever in STEM subjects",
    skills: [
      "Game Development",
      "Programming Fundamentals",
      "Programming",
      "Data Structures & Algorithms",
      "Computer Graphics",
      "Problem Solving",
    ],
  },
];

export default function Timeline() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative min-h-screen">
      <div className="container mx-auto px-4 py-16 space-y-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10">
              <FileStack className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl sm:text-5xl font-bold font-serif text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent  mb-2">
                Experience
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 md:-translate-x-1/2 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500" />

          {/* Timeline Items */}
          <ol className="relative">
            {timelineItems.map((item, index) => (
              <motion.li
                key={index}
                className={`mb-12 md:mb-16 relative md:w-1/2 ${
                  index % 2 === 0
                    ? "md:mr-auto md:pr-12 md:text-right"
                    : "md:ml-auto md:pl-12 md:text-left"
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.6 },
                  },
                }}
              >
                {/* Timeline Dot */}
                <motion.span
                  className={`absolute top-2 flex h-8 w-8 items-center justify-center rounded-full ${
                    item.type === "work"
                      ? "bg-cyan-500 ring-4 ring-cyan-500/20"
                      : "bg-purple-500 ring-4 ring-purple-500/20"
                  }
                  // New logic for dot positioning based on index and breakpoint
                  ${
                    index % 2 === 0
                      ? "left-[-16px] md:right-[-16px] md:left-auto"
                      : "left-[-16px] md:left-[-16px] md:right-auto"
                  }
                  shadow-lg`}
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.8 } },
                  }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${
                      item.type === "work" ? "bg-white" : "bg-white"
                    }`}
                  />
                </motion.span>

                {/* Content Card */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-3 sm:p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-slate-800/70 ml-6 sm:ml-8 md:ml-0">
                  {/* Type Badge */}
                  <motion.div
                    className={`inline-flex justify-center items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium mb-2 sm:mb-3 ${
                      item.type === "work"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                        : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    }`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { duration: 0.8 } },
                    }}
                  >
                    {item.type === "work" ? "💼 Experience" : "🎓 Education"}
                  </motion.div>

                  {/* Date */}
                  <motion.time
                    className="block text-xs sm:text-sm font-medium text-cyan-400 mb-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { duration: 0.8 } },
                    }}
                  >
                    {item.date}
                  </motion.time>

                  {/* Title */}
                  <motion.h3
                    className="text-lg sm:text-xl font-bold text-center text-white mb-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { duration: 0.8 } },
                    }}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Institution */}
                  <motion.p
                    className="text-slate-400 text-center font-medium mb-3 sm:mb-4 text-sm"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { duration: 0.8 } },
                    }}
                  >
                    {item.institution}
                  </motion.p>

                  {/* Description */}
                  <motion.p
                    className="text-slate-300 text-left leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { duration: 0.8 } },
                    }}
                  >
                    {item.description}
                  </motion.p>

                  {/* Achievement */}
                  {(item.achievement || item.achievements) && (
                    <motion.div
                      className="bg-green-500/10 border text-left border-green-500/20 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.8 } },
                      }}
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-green-400 text-sm">🏆</span>
                        <p className="text-green-300 text-xs sm:text-sm font-medium">
                          {item.achievement || item.achievements}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Skills */}
                  {item.skills && (
                    <motion.div
                      className="space-y-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.8 } },
                      }}
                    >
                      <p className="text-slate-400 text-left text-xs sm:text-sm font-medium">
                        Key Skills:
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-slate-700/50 border border-slate-600/50 text-slate-300 text-xs rounded-md hover:bg-slate-600/50 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
