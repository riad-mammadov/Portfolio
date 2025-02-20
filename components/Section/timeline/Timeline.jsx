"use client";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import { useRef } from "react";

const timelineItems = [
  {
    date: "09/2023 - Present",
    title: "Web Development",
    description:
      "Developed responsive web applications that enhanced user satisfaction and streamlined business operations for clients, focusing on delivering high functionality and a seamless user experiences.",
    institution: "Freelance",
    type: "work",
  },
  {
    date: "09/2021 - 09/2024",
    title: "BSc Honours in Computer Science",
    description:
      "Graduated with an Upper Second-Class Honors (2:1) from City University of London.",
    institution: "City University of London",
    type: "education",
  },
  {
    date: "01/2020 - 01-2020",
    title: "Software Development Programme",
    description:
      "Gained valuable insights into the daily operations of a Big Four firm through a voluntary work experience program during my sixth form studies",
    institution: "KPMG",
    type: "work",
  },
  {
    date: "09/2019 - 06/2021",
    title: "A-Levels",
    description:
      "Completed my A-levels, achieving an A*,B,C in Digital Game Development, Computer Science and Graphics",
    institution: "Stoke Newington Sixth Form",
    type: "education",
  },

  {
    date: "09/2014 - 06/2019",
    title: "GCSE's",
    description: "Achieved all GCSE's, ranging from grades 9-5",
    institution: "Stoke Newington School",
    type: "education",
  },
];

export default function Timeline() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative">
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={slideInFromRight(0)}
          className="mb-12 flex items-center justify-center gap-x-3 sm:text-3xl text-xl font-semibold text-black/80 dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-layers3 animate-bounce text-cyan-700"
          >
            <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
            <path d="M6.08 9.5l-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
            <path d="M6.08 14.5l-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
          </svg>
          <p className="text-white font-serif">Experience & Education</p>
        </motion.h2>
        <div className="relative">
          <div className="absolute left-0 sm:left-1/2 top-0 h-full w-0.5 sm:-translate-x-1/2 bg-gray-200" />
          <ol className="relative">
            {timelineItems.map((item, index) => (
              <motion.li
                key={index}
                className={`mb-12 sm:w-1/2 relative ${
                  index % 2 === 0
                    ? "sm:mr-auto sm:pr-8 sm:text-right"
                    : "sm:ml-auto sm:pl-8 sm:text-left"
                } pl-8 text-left`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 1 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, delay: 0.3 },
                  },
                }}
              >
                <motion.span
                  className={`absolute top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-700 ring-4 ring-gunmetal-blue -left-3 ${
                    index % 2 === 0 ? "sm:-right-3 sm:left-auto" : "sm:-left-3"
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInFromTop(0)}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                />
                <motion.time
                  className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  variants={
                    index % 2 === 0 ? slideInFromRight(0) : slideInFromLeft(0)
                  }
                >
                  {item.date}
                </motion.time>
                <motion.h3
                  className="mb-2 text-lg font-semibold italic text-white"
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  variants={
                    index % 2 === 0 ? slideInFromRight(0) : slideInFromLeft(0)
                  }
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="mb-4 text-base font-normal text-white"
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  variants={
                    index % 2 === 0 ? slideInFromRight(0) : slideInFromLeft(0)
                  }
                >
                  {item.description}
                </motion.p>
                {item.link && (
                  <motion.a
                    href={item.link}
                    className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    variants={
                      index % 2 === 0 ? slideInFromRight(0) : slideInFromLeft(0)
                    }
                  >
                    Learn more{" "}
                    <svg
                      className="ml-2 h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </motion.a>
                )}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
