"use client";
import Navlist from "./navlist";
import "@/app/globals.css";
import { Button } from "@/Components/ui/button";
import { useOpenHamburgerMenu } from "@/store/openHamburger";
import MobileNav from "./mobileNav";
import ThemeToggle from "@/app/theme-toggle";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
// import

const Navbar = () => {
  // open menu bar
  const { isToggled, toggle } = useOpenHamburgerMenu();

  return (
    <nav
      className="w-full h-16 flex items-center px-4 py-2 md:px-8
      justify-between border-b border-gray-300 
      bg-white dark:dark:bg-[#0E1116] transition-all duration-300"
    >
      {/* Logo */}
      <div>
        <Link
          href={"/"}
          className="text-2xl md:text-xl font-bold text-transparent bg-clip-text 
         bg-linear-to-r from-[#974FD7] via-[#D73D91] to-[#F07135] hover:cursor-pointer"
        >
          Damsloop
        </Link>
      </div>

      {/* navlist */}
      <div
        className="hidden md:flex md:flex-row 
       justify-between text-gray-500"
      >
        <Navlist />
      </div>

      {/* buttton */}
      <div className=" hidden md:flex md:flex-row gap-2.5">
        <div>
          <ThemeToggle />
        </div>

        <Button className="bgColor text-white text-base scale">
          Apply Now
        </Button>
      </div>

      {/* hamburger button */}
      <div className=" flex flex-row gap-3 md:hidden pt-3.5 items-center">
        <ThemeToggle />

        <CiMenuBurger className="h-7 w-7" onClick={toggle} />
      </div>

      {/* Dropdown menu */}
      {isToggled && (
        <div
          className="fixed top-0 pt-8 bottom-0
           h-svh bg-white dark:bg-[#0E1116]
           left-0 right-0 p-4 shadow-lg z-40 overflow-hidden"
        >
          {isToggled && <MobileNav />}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
