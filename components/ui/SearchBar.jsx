"use client";

import { motion } from "framer-motion";
import { Search, Mic } from "lucide-react";
import splitString from "@/utils/split";
import { useRef } from "react";

export default function SearchBar({ isTyping, onComplete }) {
  const textChars = splitString("My Projects");

  const charVariants = {
    hidden: { opacity: 0, x: -5, borderRight: "1px solid white" },
    show: (i) => ({
      opacity: 1,
      x: 0,
      borderRight: "1px solid gray",
      transition: {
        delay: i * 0.09,
        duration: 0.08,
      },
      transitionEnd: {
        borderRight: "0px solid grey",
      },
    }),
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex mb-8 justify-center items-center">
        <img src="/google.svg" alt="Google" />
      </div>
      <div className="relative flex items-center">
        <div className="absolute left-4">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <div className="absolute right-4">
          <Mic className="w-5 h-5 text-gray-400" />
        </div>
        <motion.div className="w-full bg-slate-200 dark:bg-[#333] rounded-full shadow-lg px-12 py-3">
          <motion.p
            className="text-black font-serif font-semibold text-md"
            initial="hidden"
            animate="show"
          >
            {isTyping ? (
              textChars.map((char, index) => (
                // If isTyping is true (set from the project section) then start the typing animation on the search bar
                <motion.span
                  onAnimationComplete={
                    index === textChars.length - 1 ? onComplete : undefined
                    // If the current index is the same length as the full string length, trigger the onComplete function in project section
                  }
                  key={index}
                  custom={index}
                  variants={charVariants}
                >
                  {char}
                </motion.span>
              ))
            ) : (
              <span className="text-gray-400">Search or type URL</span>
            )}
          </motion.p>
        </motion.div>
      </div>
      <div className="flex items-center justify-center mt-5 space-x-4">
        <motion.button
          whileHover={{ boxShadow: "0 0 0 2px #626161" }}
          className="bg-[#303134] text-white text-sm py-3 px-4 rounded shadow transition duration-150 ease-in-out"
          type="button"
        >
          Google Search
        </motion.button>

        <motion.button
          whileHover={{ boxShadow: "0 0 0 2px #626161" }}
          className="bg-[#303134] text-white text-sm py-3 px-4 rounded shadow transition duration-150 ease-in-out"
          type="button"
        >
          Im Feeling Lucky
        </motion.button>
      </div>
    </div>
  );
}
