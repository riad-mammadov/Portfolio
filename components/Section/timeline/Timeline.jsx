"use client";

import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import { FileStack } from "lucide-react";
import { useRef } from "react";

const timelineItems = [
  {
    date: "01/2025 - Present",
    title: "Developer & Web Maintenance",
    description:
      "Maintain and enhance the company’s website, implementing design updates, new features, and content changes to improve performance and user engagement. Reduced third-party costs by 50% and streamlined client enquiries with integrated contact forms.",
    institution: "Tipentidy",
    type: "work",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Git",
      "Web Design",
      "SEO",
    ],
    achievements:
      "Cut website maintenance costs by ~50% and increased lead conversions by ~25% through UI and functionality improvements.",
  },
  {
    date: "09/2024 - Present",
    title: "Freelance Full-Stack Web Developer",
    description:
      "Built full-stack web applications and MVPs for small businesses, automating manual workflows and improving online visibility. Delivered responsive, SEO-optimised platforms that expanded client reach and reduced manual processes.",
    institution: "Self-Employed",
    type: "work",
    skills: [
      "Next.js",
      "React",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "TypeScript",
      "Git",
    ],
    achievements:
      "Developed client projects and migrated a social-media business to a web platform, reducing manual work by 40%.",
  },
  {
    date: "05/2022 - Present",
    title: "Technical Support Assistant",
    description:
      "Maintain and troubleshoot the shop’s point of sale systems, including barcode scanners, pricing software, and receipt printers, ensuring seamless daily operation and resolving technical failures with minimal downtime.",
    institution: "Local Retail Shop",
    type: "work",
    achievements:
      "Resolved technical issues swiftly and efficiently to minimise downtime, ensuring consistent operations and protecting the shop's core revenue stream.",
  },
  {
    date: "01/2021 - 01/2021",
    title: "Software Development Discovery Programme",
    description:
      "Gained hands-on exposure to KPMG’s software engineering processes, agile methodologies, and technology consulting practices during a competitive placement.",
    institution: "KPMG",
    type: "work",
    skills: ["Agile", "Software Engineering", "Team Collaboration"],
    achievements:
      "Selected for a competitive work experience placement exploring real-world software development practices.",
  },
  {
    date: "09/2021 - 01/2025",
    title: "BSc Honours Computer Science (2:1)",
    description:
      "Studied core computer science topics, including Java, C++, Functional Programming, and Cloud Computing. Completed multiple individual and team projects, graduating with a 2:1.",
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
    achievements:
      "Upper Second-Class Honours (2:1) • Relevant Coursework and Modules: Cloud Computing, Mathematics in Computing, Software Engineering, Algorithms & Data Structures",
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
                    className="text-lg sm:text-xl font-bold text-left text-white mb-2"
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
                    className="text-slate-400 text-left font-medium mb-3 sm:mb-4 text-sm"
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
