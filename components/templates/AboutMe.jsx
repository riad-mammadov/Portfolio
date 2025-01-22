"use client";
import splitString from "@/utils/split";
import { motion } from "framer-motion";

function AboutMe({ heading, text }) {
  const headingChars = splitString(heading);
  const textChars = splitString(text);
  // pass the text into the splitString function

  const headingCharVariants = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 2 },
    },
  };

  // text to be animated as if its being typed
  const charVariants = {
    hidden: { opacity: 0, x: -5, borderRight: "0px solid white" },
    show: (i) => ({
      opacity: 1,
      x: 0,
      borderRight: "1px solid white",
      transition: {
        delay: headingChars.length * 0.4 + i * 0.03,
        duration: 0.05,
      },
      transitionEnd: { borderRight: "0px solid white" },
    }),
  };

  return (
    <div className="flex flex-col justify-center items-start">
      <motion.h1 initial="hidden" animate="show">
        {headingChars.map((char, index) => (
          <motion.span
            className="text-blue-400 font-terminal tracking-widest text-md"
            key={index}
            variants={headingCharVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="text-accent pl-3 font-roboto font-semibold text-sm mt-2"
        initial="hidden"
        animate="show"
      >
        {textChars.map((char, index) => (
          <motion.span key={index} custom={index} variants={charVariants}>
            {char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
}

export default AboutMe;
