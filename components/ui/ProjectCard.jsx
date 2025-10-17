"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink, Link2 } from "lucide-react";
import { Button } from "@/components/ui/shadcn/Button";

export default function ProjectCard({
  title,
  description,
  image,
  githubUrl,
  liveUrl,
  techStack,
  certification,
  viewMode = "grid",
  date,
}) {
  if (viewMode === "list") {
    return (
      <motion.div className="group bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-300">
        <div className="flex flex-col lg:flex-row gap-6">
          {image && (
            <div className="relative w-full lg:w-80 h-48 lg:h-32 rounded-2xl overflow-hidden flex-shrink-0">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex-1 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack?.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="w-4 h-4 relative">
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="flex-1 items-center space-x-3">
              {githubUrl && (
                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="flex-1 bg-gray-400 hover:bg-[#2dba4e] transition duration-300"
                >
                  <Link href={githubUrl} target="_blank">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Link>
                </Button>
              )}
              {(liveUrl || certification) && (
                <Button
                  asChild
                  size="sm"
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white border-0 shadow-sm hover:shadow-md transition-all duration-300 ease-out font-medium"
                >
                  <Link href={liveUrl || certification} target="_blank">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    {liveUrl ? "Link" : "Certification"}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 h-full flex flex-col">
      {image && (
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
          <p className="text-gray-300 text-sm font-sans">{description}</p>
        </div>

        <div className="flex-1 mb-4">
          <div className="flex flex-wrap gap-2">
            {techStack?.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10 hover:border-white/20 transition-colors"
                title={tech.name}
              >
                <div className="w-3 h-3 relative">
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-auto">
          {githubUrl && (
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="flex-1 bg-gray-400 hover:bg-[#2dba4e] hover:text-white transition-all ease-in-out duration-300 font-medium"
            >
              <Link href={githubUrl} target="_blank">
                <Github className="w-4 h-4 mr-1" />
                Code
              </Link>
            </Button>
          )}
          {(liveUrl || certification) && (
            <Button
              asChild
              size="sm"
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-white border-0 shadow-sm hover:shadow-md transition-all duration-300 ease-out font-medium"
            >
              <Link href={liveUrl || certification} target="_blank">
                <ExternalLink className="w-4 h-4 mr-1 " />
                {liveUrl ? "Link" : "Certification"}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
