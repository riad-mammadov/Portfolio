"use client";
import splitString from "@/utils/split";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MdOutlinePushPin } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { contacts } from "@/utils/contacts";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function ContactSection({ heading }) {
  const headingChars = splitString(heading);

  const headingCharVariants = {
    hidden: { opacity: 0, x: -100 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 6.2,
        duration: 0.5,
      },
    }),
  };

  const charVariants = {
    hidden: { opacity: 0, x: -10 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: headingChars.length * 0.4 + i * 0.07,
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="flex  flex-col justify-center items-start mt-6">
      <motion.h1 initial="hidden" animate="show">
        {headingChars.map((char, index) => (
          <motion.span
            className="text-blue-400 text-md tracking-wider font-terminal"
            key={index}
            variants={headingCharVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.ul
        className="flex flex-wrap gap-2 h-full text-white justify-center mt-2"
        initial="hidden"
        animate="show"
      >
        {contacts.map((contact, index) => (
          <motion.li key={index} custom={index} variants={charVariants}>
            <section className="px-2 py-1 flex flex-row gap-2 font-rubik text-sm">
              <div className="pl-1 space-y-4 font-mono">
                <div className="flex items-center space-x-2 text-muted/80">
                  <span role="img" aria-label="location" className="font-emoji">
                    📍
                  </span>
                  <span className="">{contact.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted/80 ">
                  <span role="img" aria-label="email" className="font-emoji">
                    ✉️
                  </span>
                  <span className="underline-offset-4">{contact.email}</span>
                </div>
                <div className="flex pl-[0.1rem] items-center space-x-3 text-muted/80 ">
                  <span role="img" aria-label="github" className="font-emoji">
                    <FaGithub />
                  </span>
                  <a
                    href={contact.github}
                    className="underline underline-offset-4"
                  >
                    {contact.github}
                  </a>
                </div>
              </div>
            </section>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default ContactSection;
