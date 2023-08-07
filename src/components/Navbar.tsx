import { Button } from "@hachiko-labs/ui-components";
import { useState } from "react";

export interface Props {
  navItems: {
    label: string;
    href: string;
    ariaLabel?: string;
  }[];
  hideCta?: boolean
}

const calendlyUrl = import.meta.env.PUBLIC_CALENDLY_URL;

export const Navbar = ({ navItems, hideCta }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-20 fixed flex justify-center items-center backdrop-blur-xl bg-white sm:bg-white/80 z-40">
      <div className="w-11/12 h-full flex items-center justify-between relative">
        <a className="flex items-center gap-2" href="/" aria-label="Home">
          <svg
            width="30"
            height="30"
            viewBox="0 0 181 148"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.642578"
              y="0.873047"
              width="179.381"
              height="42.433"
              rx="21.2165"
              fill="#3027D9"
            />
            <rect
              x="23.0649"
              y="52.3988"
              width="134.536"
              height="42.433"
              rx="21.2165"
              fill="#4A3AFF"
            />
            <rect
              x="52.9624"
              y="105.44"
              width="74.7423"
              height="42.433"
              rx="21.2165"
              fill="#7663FF"
            />
          </svg>
          <div className="text-neutral font-[Inter] font-bold flex gap-1">
            <div className="text-xl">Hachiko</div>
            <div className="text-primary text-xl">Labs</div>
          </div>
        </a>
        <div className="hidden lg:flex h-full pr-12">
          {navItems.map((navItem) => (
            <a
              key={navItem.label}
              className="flex items-center h-full px-4 text-neutral font-semibold"
              href={navItem.href}
              aria-label={navItem.ariaLabel}
            >
              {navItem.label}
            </a>
          ))}
        </div>
        <div className="flex gap-2">
          {!hideCta && (
            <a href={calendlyUrl} target="_blank">
              <Button type="primary">Schedule a call</Button>
            </a>
          )}
          <div
            className="xl:hidden lg:hidden md:flex sm:flex flex-col px-2 py-3 border-solid border border-neutral-500 rounded-lg cursor-pointer hover:bg-customDarkBg2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-500 "></div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-white z-50 w-full 
    items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10
    "
        >
          {navItems.map(({ label, href, ariaLabel }) => (
            <a
              key={label}
              className="navbar-link"
              href={href}
              onClick={() => setIsOpen(false)}
              aria-label={ariaLabel}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
