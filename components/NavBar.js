"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
// import { Terminal } from "lucide-react";
import Logo from "./icons/logo";
import config from "@/config";
import triggerScheduleCall from "@/lib/capi";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const navItems = useMemo(
    () => [
      {
        name: "How it works",
        href: "#how-it-works",
      },
      {
        name: "Work",
        href: "#work",
      },
      {
        name: "About",
        href: "/",
      },
      {
        name: "Book a call",
        href: config.scheduleLink,
        className: buttonVariants({ variant: "outline", size: "lg" }),
        underline: false,
        onClick: async () => {
          try {
            setLoading(true);
            await triggerScheduleCall();
          } catch (error) {
            console.error("Error:", error);
            window.open(config.scheduleLink, "_blank");
          } finally {
            setLoading(false);
          }
        },
      },
    ],
    []
  );

  return (
    <nav className="w-full h-20 sticky top-0 flex justify-center items-center backdrop-blur-xl bg-white sm:bg-white/80 z-40">
      <div className="w-10/12 h-full flex items-center justify-center sm:justify-between relative">
        <Link className="flex items-center gap-2" href="/" aria-label="Home">
          <div className="text-neutral font-bold flex items-center gap-1">
            <Logo size={24} />
            <div className="text-2xl sm:text-xl">Hachiko Labs</div>
          </div>
        </Link>
        <div className="hidden md:flex gap-12">
          {navItems.map(({ underline = true, ...navItem }) => (
            <div key={navItem.name} className="group relative">
              {navItem.onClick ? (
                <Button
                  className="gap-2"
                  onClick={navItem.onClick}
                  disabled={loading}
                >
                  {navItem.name}
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                </Button>
              ) : (
                <Link
                  className={cn(
                    "relative flex items-center py-2 h-full text-lg",
                    navItem.className
                  )}
                  href={navItem.href}
                  onClick={navItem.onClick}
                  target={navItem.target}
                >
                  {navItem.name}
                </Link>
              )}
              {underline && (
                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
