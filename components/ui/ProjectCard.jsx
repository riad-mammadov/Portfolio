"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectCard({
  title,
  description,
  image,
  githubUrl,
  detailsUrl,
  custom,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: custom }}
      // Div for staggered animation effect
      className="flex-shrink-0 w-fit sm:w-[280px] md:w-[280px] lg:w-[280px] bg-gradient-to-br from-stone-600 to-stone-700 rounded-xl shadow-xl"
    >
      <motion.div className="relative h-[150px] sm:h-[200px] rounded-lg overflow-hidden">
        <Image
          src={image || "/javascript.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 ease-in-out transform rounded-xl"
        />
      </motion.div>
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-300 text-xs sm:text-sm">{description}</p>
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            asChild
            variant="outline"
            className="flex-1 text-xs sm:text-sm py-1 sm:py-2"
          >
            <Link href={githubUrl} className="flex items-center justify-center">
              <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              GitHub
            </Link>
          </Button>
          <Button asChild className="flex-1 text-xs sm:text-sm py-1 sm:py-2">
            <Link
              href={detailsUrl}
              className="flex items-center justify-center"
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Details
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
