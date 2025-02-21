"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/shadcn/Button";
import { Badge } from "@/components/ui/shadcn/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/shadcn/tooltip";

export default function ProjectCard({
  title,
  description,
  image,
  githubUrl,
  liveUrl,
  techStack,
  custom,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: custom * 0.1 }}
      className="flex flex-col w-[250px] sm:w-[320px] h-full bg-stone-600 rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-stone-200 text-center mb-2">
          {title}
        </h3>
        <p className="text-stone-300 text-sm mb-4 text-left flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {techStack.map((tech) => (
            <TooltipProvider key={tech.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="h-6 w-6 sm:w-8 sm:h-8 rounded-full overflow-hidden transition-transform hover:scale-110 cursor-pointer">
                    <div className="relative h-full w-full">
                      <Image
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        fill
                        className="object-fit"
                      />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <Link href={githubUrl}>
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Link>
          </Button>

          {liveUrl && (
            <Button asChild size="icon" variant="secondary">
              <Link href={liveUrl}>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
