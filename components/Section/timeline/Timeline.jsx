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
    <section id="experience" data-section="experience">
      <div className="p-4 sm:px-4 md:px-32 lg:px-44">
        <h2 className="mb-6 flex items-center justify-center gap-x-3 pt-12 text-3xl font-semibold text-black/80 dark:text-white">
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
          <p className="text-white">Experience</p>
        </h2>
        <ol className="relative ml-3 border-l border-gray-200">
          {timelineItems.map((item, index) => (
            <li className="ml-4 pb-8" key={index}>
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-700 ring-4 ring-gunmetal-blue"></span>
              <time className="mb-1 ml-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.date}
              </time>
              <h3 className="text-lg font-semibold italic text-white">
                {item.title}
              </h3>
              <p className="mb-4 p-4 text-base font-normal text-white">
                {item.description}
              </p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  Company site
                  <svg
                    className="ml-2 h-3 w-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    ></path>
                  </svg>
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
