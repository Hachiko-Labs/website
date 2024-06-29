"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useMemo, useState } from "react";
import { buttonVariants } from "./ui/button";
import { Terminal } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = useMemo(
    () => [
      {
        name: "Services",
        href: "/",
      },
      {
        name: "Projects",
        href: "/",
      },
      {
        name: "About",
        href: "/",
      },
      {
        name: "Work with us",
        href: "/",
        className: buttonVariants({ variant: "outline", size: "lg" }),
        underline: false,
      },
    ],
    []
  );

  return (
    <nav className="w-full h-20 sticky top-0 flex justify-center items-center backdrop-blur-xl bg-white sm:bg-white/80 z-40">
      <div className="w-10/12 h-full flex items-center justify-between relative">
        <a className="flex items-center gap-2" href="/" aria-label="Home">
          <div className="text-neutral font-bold flex gap-1">
            <Terminal size={24} />
            <div className="text-xl">Hachiko Labs</div>
          </div>
        </a>
        <div className="hidden sm:flex gap-12">
          {navItems.map(({ underline = true, ...navItem }) => (
            <div key={navItem.name} className="group relative">
              <Link
                className={cn(
                  "relative flex items-center py-2 h-full text-lg",
                  navItem.className
                )}
                href={navItem.href}
              >
                {navItem.name}
              </Link>
              {underline && (
                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-white z-50 w-full 
      items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10
      "
        >
          {navItems.map(({ label, href, ariaLabel }) => (
            <Link
              key={label}
              className="navbar-link"
              href={href}
              onClick={() => setIsOpen(false)}
              aria-label={ariaLabel}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
