"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/shadcn/Button";
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
  certification,
  custom,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: custom * 0.1 }}
      className="flex flex-col w-[260px] sm:w-[320px] h-full bg-stone-600 rounded-xl shadow-lg overflow-hidden"
    >
      {image && (
        <div className="relative h-[150px]">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-serif font-bold text-stone-200 text-center mb-2">
          {title}
        </h3>
        <p className="text-stone-300 font-serif text-sm mb-2 text-left flex-grow">
          {description}
        </p>
        <div
          className={`flex flex-nowrap
          } sm:justify-center items-center gap-2 mb-4`}
        >
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
        <div className="flex justify-center items-center gap-2">
          {githubUrl && (
            <Button
              asChild
              variant=""
              size=""
              className="bg-[#2b3137] hover:bg-[#2dba4e] transition duration-300 "
            >
              <Link href={githubUrl} target="_blank">
                <Github className="w-4 h-4 mr-2 " />
                GitHub
              </Link>
            </Button>
          )}
          {certification && (
            <Button asChild size="icon" variant="secondary">
              <Link href={certification} target="_blank">
                <ExternalLink className="w-4 h-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
