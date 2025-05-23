"use client";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/shadcn/navigation-menu";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { slideInFromTop } from "@/utils/motion";
import { Link as ScrollLink } from "react-scroll";
import MobileNavbar from "./MobileNav";
import { navBars } from "@/utils/links";
import Link from "next/link";

function Navigation() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false); // State to hide the navbar on scroll down

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Compares previous position on screen to latest position, if latest > prev then navbar is hidden
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
        animate={hidden ? "hidden" : "visible"} // If hidden state is true, then hide navbar
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="sm:flex-row min-h-20 bg-none fixed flex top-0 z-50 md:w-full justify-end sm:justify-center sm:items-center sm:my-1 sm:px-10"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop(0)}
          className="hidden sm:flex justify-center items-center px-6 py-2 z-50 h-fit border-2 border-white/10 sm:bg-white/10 bg-opacity-10 sm:backdrop-blur-md sm:rounded-full"
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <motion.ul
                  className="hidden sm:flex sm:flex-row space-x-6 items-center justify-center"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        delay: 0,
                        staggerChildren: 0.1,
                        when: "beforeChildren",
                      },
                    },
                  }}
                >
                  <motion.li
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      show: { y: 0, opacity: 1 },
                    }}
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.2 },
                    }}
                    className="font-sans font-bold "
                  >
                    <Link
                      href="http://www.linkedin.com/in/riadmammadov"
                      target="_blank"
                    >
                      <img
                        src="linkedin.png"
                        className="bg-white rounded-sm max-h-5 max-w-5 min-h-5 min-w-5"
                      ></img>
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      show: { y: 0, opacity: 1 },
                    }}
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.2 },
                    }}
                    className="font-sans font-bold mr-6"
                  >
                    <Link
                      href="https://github.com/riad-mammadov"
                      target="_blank"
                    >
                      <img
                        className="h-5 w-5 max-h-5 max-w-5 min-h-5 min-w-5"
                        src="github-dark.svg"
                      ></img>
                    </Link>
                  </motion.li>
                  {navBars.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={{
                        hidden: { y: 20, opacity: 0 },
                        show: { y: 0, opacity: 1 },
                      }}
                      whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.2 },
                      }}
                      className="font-sans font-bold"
                    >
                      <ScrollLink
                        key={item.title}
                        to={item.title}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className={`text-white text-sm hover:cursor-pointer
                      `}
                      >
                        {item.title}
                      </ScrollLink>
                    </motion.li>
                  ))}
                </motion.ul>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </motion.div>
      </motion.nav>
      <div className="sm:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}

export default Navigation;
