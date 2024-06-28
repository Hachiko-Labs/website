
"use client";

import { useMemo, useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = useMemo(
        () => [
            {
                name: "Services",
                href: "/"
            },
            {
                name: "Projects",
                href: "/"
            },
            {
                name: "About",
                href: "/"
            },
            {
                name: "Work with us",
                href: "/",
                className: "border rounded-full border-black"
            },
        ], []
    );

    return (
        <nav className="w-full h-20 fixed flex justify-center items-center backdrop-blur-xl bg-white sm:bg-white/80 z-40">
            <div className="w-10/12 h-full flex items-center justify-between relative">
                <a className="flex items-center gap-2" href="/" aria-label="Home">
                    <div className="text-neutral font-bold flex gap-1">
                        <div className="text-xl">Hachiko</div>
                        <div className="text-primary text-xl">Labs</div>
                    </div>
                </a>
                <div className="hidden lg:flex">
                    {navItems.map((navItem) => (
                        <a
                            key={navItem.name}
                            className={`flex items-center py-2 px-6 h-full ${navItem.className}`}
                            href={navItem.href}
                        >
                            {navItem.name}
                        </a>
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

export default Navbar;
