"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { slideInFromTop } from "@/utils/motion";
import { Link as ScrollLink } from "react-scroll";
import MobileNavbar from "./MobileNav";
import { navBars } from "@/utils/links";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

function Navigation() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-130%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 z-50 w-full flex justify-center items-center py-4 px-4"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop(0)}
          className="hidden sm:flex items-center justify-center px-6 py-3 bg-black/20 backdrop-blur-md border border-white/10 rounded-full shadow-lg"
        >
          <div className="flex items-center space-x-8">
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="http://www.linkedin.com/in/riadmammadov"
                  target="_blank"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="https://github.com/riad-mammadov"
                  target="_blank"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>

            {/* Separator */}
            <div className="h-6 w-px bg-white/20"></div>

            {/* Navigation Links */}
            <motion.ul
              className="flex items-center space-x-8"
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    delay: 0.1,
                    staggerChildren: 0.1,
                    when: "beforeChildren",
                  },
                },
              }}
            >
              {navBars.map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    show: { y: 0, opacity: 1 },
                  }}
                  whileHover={{
                    transition: { duration: 0.2 },
                  }}
                >
                  <ScrollLink
                    to={item.title}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-white/80 hover:text-white text-sm font-medium cursor-pointer transition-colors relative group"
                  >
                    {item.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </ScrollLink>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </motion.nav>

      <div className="sm:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}

export default Navigation;
