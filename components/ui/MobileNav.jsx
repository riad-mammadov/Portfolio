"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/shadcn/Button";
import { navBars } from "@/utils/links";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  function handleMenuClick() {
    setIsOpen(false);
  }

  return (
    <nav className="fixed top-0 right-0 z-50">
      <div className="container mx-auto px-2 py-2 flex justify-end items-center bg-none">
        <Button
          variant="ghost"
          className="z-50 text-white px-2 py-2"
          onClick={toggleMenu}
        >
          {!isOpen ? <Menu /> : <X />}
        </Button>
      </div>
      <div
        className={`fixed inset-0 h-fit  bg-gradient-to-t from-black to-gray-400/40 transition-transform duration-300 ease-in-out transform z-50"
          ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex flex-row items-center justify-center mt-12 mb-4 gap-2 overflow-scroll z-50">
          {navBars.map((item) => (
            <Link
              key={item.title}
              to={item.title}
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              onClick={handleMenuClick}
              className="text-white text-sm font-roboto font-semibold hover:text-gray-400 transition-colors cursor-pointer"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default MobileNavbar;
