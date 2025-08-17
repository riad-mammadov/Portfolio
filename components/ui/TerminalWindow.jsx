"use client";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function TerminalWindow({ children }) {
  const ref = useRef();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="hidden md:flex flex-col w-[45%] max-w-[36rem] min-w-[25rem] min-h-[32rem] flex-shrink rounded-3xl p-6 bg-gray-900/40 border border-white/10 backdrop-blur-2xl relative group shadow-2xl"
      style={{
        boxShadow: "0 0 100px -20px rgba(168, 85, 247, 0.2)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl opacity-60"></div>

      <div className="absolute inset-0 opacity-20 rounded-3xl bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.4%22/%3E%3C/svg%3E')]"></div>

      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex gap-x-2 items-center">
          <div className="w-3 h-3 bg-red-400 rounded-full border border-red-600/50 shadow-lg shadow-red-500/30"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full border border-yellow-600/50 shadow-lg shadow-yellow-500/30"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full border border-green-600/50 shadow-lg shadow-green-500/30"></div>
        </div>
        <div className="text-xs text-gray-400 font-mono">
          terminal — riad@portfolio
        </div>
      </div>
      <div className="p-3 sm:p-6">{children}</div>
    </motion.div>
  );
}
