"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/shadcn/Button";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Home" },
  { title: "Portfolio" },
  { title: "Experience" },
  { title: "About" },
];

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  function handleMenuClick() {
    setIsOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-end items-center bg-none">
        <Button
          variant="ghost"
          className="text-white z-50"
          onClick={toggleMenu}
        >
          {!isOpen ? <Menu /> : <X />}
        </Button>
      </div>
      <div
        className={cn(
          "fixed inset-0 bg-pink-600 transition-transform duration-300 ease-in-out transform z-50",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 z-50">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.title}
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              onClick={handleMenuClick}
              className="text-3xl font-semibold hover:text-primary transition-colors cursor-pointer"
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
