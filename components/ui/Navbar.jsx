"use client";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  easeInOut,
} from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
import { slideInFromTop } from "@/utils/motion";

const navBars = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

function Navigation() {
  const { scrollY } = useScroll();

  const [handleMenu, setHandleMenu] = useState(false);

  const [hidden, setHidden] = useState(false);

  const [currentTab, setCurrentTab] = useState("Home");

  function handleTabSelect(tab) {
    setCurrentTab(tab);
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    console.log(prev, latest);
    if (latest > prev && latest > 50) {
      setHidden(true);
    } else if (prev > latest + 4) {
      setHidden(false);
    }
  });

  function handleToggleMenu() {
    setHandleMenu((prevHandleMenu) => !prevHandleMenu);
  }

  const selectedCss =
    "underline underline-offset-4 text-blue-500 font-semibold";

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className=" md:flex-row md:h-20 min-h-20 bg-transparent sticky flex top-0 z-50  md:w-full justify-end md:justify-center md:items-center md:my-1 md:px-10"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop(6.9)}
          className="hidden md:flex justify-center items-center px-6 py-2 h-fit border-2 border-white/10 md:bg-white/10 bg-opacity-10 md:backdrop-blur-md md:rounded-full"
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <motion.ul
                  className="hidden md:flex gap-8 items-center justify-center"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        delay: 7,
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
                    className="font-sans font-bold"
                  >
                    <a>
                      <img
                        src="linkedin.png"
                        className="bg-white rounded-sm w-5 h-5"
                      ></img>
                    </a>
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
                    <a>
                      <img className="h-5 w-5" src="github-dark.svg"></img>
                    </a>
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
                      onClick={() => handleTabSelect(item.title)}
                      className="font-sans font-bold"
                    >
                      <span>
                        <motion.span
                          animate={{
                            color:
                              currentTab === item.title ? "#ffffff" : "#a0aec0",
                            fontSize:
                              currentTab === item.title ? "16px" : "14px",
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="text-white text-sm hover:cursor-pointer"
                        >
                          {item.title}
                        </motion.span>
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </motion.div>
        <motion.button
          initial="hidden"
          animate="visible"
          variants={slideInFromTop(2)}
          onClick={handleToggleMenu}
        >
          <HiOutlineMenuAlt4
            className="md:hidden my-6 mx-5 text-2xl flex items-center justify-center"
            color="white"
          />
        </motion.button>
      </motion.nav>

      {handleMenu && <div className="text-white">Hello!</div>}
    </>
  );
}

export default Navigation;
