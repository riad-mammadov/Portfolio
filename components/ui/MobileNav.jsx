"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/shadcn/Button";
import { navBars } from "@/utils/links";
import { AnimatePresence, motion } from "framer-motion";

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
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 right-0 z-50 w-full`}>
      <div className="container mx-auto px-4 py-4 flex justify-end items-center bg-transparent">
        <Button
          variant="ghost"
          size="icon"
          className="text-white z-50"
          onClick={toggleMenu}
        >
          {!isOpen ? <Menu size={24} /> : <X size={24} />}
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-40"
          >
            <div className="flex flex-col items-center justify-center gap-6">
              {navBars.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    to={item.title}
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                    onClick={handleMenuClick}
                    className="text-white text-2xl font-roboto font-semibold hover:text-cyan-500 transition-colors cursor-pointer"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default MobileNavbar;
