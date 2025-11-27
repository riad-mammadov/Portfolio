"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/shadcn/Button";
import { navBars } from "@/utils/links";
import { AnimatePresence, motion } from "framer-motion";
import NextLink from "next/link";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function handleMenuClick() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/riad-mammadov",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "http://www.linkedin.com/in/riadmammadov",
    },
  ];

  return (
    <nav className={`fixed top-0 right-0 z-50 w-full`}>
      <div className="container mx-auto px-4 py-4 flex justify-end items-center bg-transparent">
        <Button
          variant="ghost"
          size="icon"
          className="text-white z-50 hover:bg-white/10 rounded-full transition-colors"
          onClick={toggleMenu}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {!isOpen ? <Menu size={24} /> : <X size={24} color="white" />}
          </motion.div>
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
              onClick={handleMenuClick}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 flex flex-col items-center justify-center z-40 pointer-events-none"
            >
              <div className="flex flex-col items-center justify-center gap-6 pointer-events-auto">
                {/* Navigation Links */}
                <motion.div
                  className="flex flex-col items-center gap-6 mb-8"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.1,
                      },
                    },
                  }}
                >
                  {navBars.map((item, index) => (
                    <motion.div
                      key={item.title}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={item.title}
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration={500}
                        onClick={handleMenuClick}
                        className="text-white text-2xl font-roboto font-semibold hover:text-blue-400 transition-colors cursor-pointer relative group"
                      >
                        {item.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Separator */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="h-px w-32 bg-white/20 mb-8"
                />

                {/* Social Links */}
                <motion.div
                  className="flex items-center gap-6"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.6,
                      },
                    },
                  }}
                >
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.div
                        key={social.name}
                        variants={{
                          hidden: { opacity: 0, scale: 0.5 },
                          show: { opacity: 1, scale: 1 },
                        }}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <NextLink
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group"
                          onClick={handleMenuClick}
                        >
                          <Icon className="h-5 w-5 text-white/80 group-hover:text-white transition-colors" />
                        </NextLink>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default MobileNavbar;
