"use client";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function MacWindow({ children }) {
  const ref = useRef();

  return (
    <motion.div ref={ref} className="w-full max-w-7xl mx-auto p-2 sm:p-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInFromLeft(0)}
        viewport={{ once: true, root: ref, amount: 0.6 }}
        className="rounded-lg bg-[#2f2f2f] bg-opacity-80 overflow-hidden border border-gray-800"
      >
        <div className="h-8 sm:h-12 bg-[#2D2D2D] flex items-center px-2 sm:px-4 gap-1 sm:gap-2">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#27C93F]" />
          </div>
        </div>
        <div className="p-3 sm:p-6">{children}</div>
      </motion.div>
    </motion.div>
  );
}
