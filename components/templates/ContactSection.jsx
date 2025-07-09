import splitString from "@/utils/split";
import { motion } from "framer-motion";
import { contacts } from "@/utils/contacts";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

function ContactSection({ heading }) {
  const headingChars = splitString(heading);

  const headingCharVariants = {
    hidden: { opacity: 0, x: -10 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 5.8,
        duration: 0.5,
      },
    }),
  };

  const charVariants = {
    hidden: { opacity: 0, x: 0 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: headingChars.length * 0.4 + i * 0.09,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="flex  flex-col justify-center items-start mt-6">
      <motion.h1 initial="hidden" animate="show">
        {headingChars.map((char, index) => (
          <motion.span
            className="text-blue-400 text-md font-terminal tracking-wider"
            key={index}
            variants={headingCharVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.ul
        className="flex flex-wrap gap-2 h-full text-black justify-center mt-2"
        initial="hidden"
        animate="show"
      >
        {contacts.map((contact, index) => (
          <motion.li key={index} custom={index} variants={charVariants}>
            {/* maps each item in the contacts array to its logo */}
            <section className="px-2 py-1 flex flex-row gap-2 font-roboto font-semibold text-sm">
              <div className="pl-1 space-y-4">
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
                  <Link
                    target="_blank"
                    href={contact.github}
                    className="underline underline-offset-4"
                  >
                    {contact.github}
                  </Link>
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
