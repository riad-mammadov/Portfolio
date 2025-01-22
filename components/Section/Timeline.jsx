"use client";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { motion, useScroll } from "framer-motion";

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
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={slideInFromLeft(0)}
      viewport={{ once: true }}
      className="container mx-auto p-4 relative"
    >
      {/* Animate once */}
      <h1 className="text-center w-full mb-14 text-xl sm:text-3xl text-stone-300 font-mono font-semibold">
        Experience & Education
      </h1>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={"visible"}
        variants={slideInFromTop(0)}
        viewport={{ once: true, amount: 0.1 }}
        className="absolute right-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-500"
      />
      <div className="space-y-12">
        {timelineItems.map((item, index) => (
          // For each item in the array, creates a card, if index is divisible by 2, slides from left (for the left col), otherwise slides from right
          <motion.div
            key={index}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.6 }}
            // Animate in once 60% of the card is visible
            transition={{ duration: 0.5, delay: index * 0.2 }}
            variants={
              index % 2 === 0 ? slideInFromLeft(0) : slideInFromRight(0)
            }
            className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8"
          >
            <div
              className={`${
                index % 2 === 0
                  ? "sm:col-start-1 md:text-right "
                  : "sm:col-start-2 md:text-left"
              }`}
              // items placed in the array that are divisble by 2 go on the left, rest go on the right of the timeline
            >
              <motion.div
                whileInView={{ opacity: 0.9, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#2f2f2f]  p-6 rounded-lg shadow-lg bg-gradient-to-r from-purple-500/20 to-accent/20 opacity-50"
              >
                <div className="text-sm font-medium text-stone-200 mb-2">
                  {item.date}
                </div>
                <h3 className="text-xl text-stone-200  font-bold mb-2">
                  {item.title}
                </h3>
                <div className="text-base  text-stone-200 font-semibold mb-2">
                  {item.institution}
                </div>
                <div className="text-sm text-stone-200 mb-4">
                  {item.location}
                </div>
                <p className="text-sm text-stone-200 ">{item.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
