import React from "react";
import ModeToggle from "./ui/modetoggle";
import DrawerNav from "./drawer-nav";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="mb-4 fixed w-full z-50">
      <div className="hidden md:flex justify-between items-center max-w-[65rem] bg-slate-400 p-4 rounded-full bg-opacity-25 backdrop-blur-3xl">
        <Link href="#home">
          <h1 className="text-3xl px-2 font-extrabold tracking-tight font-caveat">
            Shubham Asati
          </h1>
        </Link>
        <div className="flex space-x-10 items-center">
          <Link href="#about">
            <p className="text-lg font-medium">About</p>
          </Link>
          <Link href="#projects">
            <p className="text-lg font-medium">Projects</p>
          </Link>
          <Link href="#contact">
            <p className="text-lg font-medium">Contact</p>
          </Link>
          <ModeToggle />
        </div>
      </div>
      <div className="md:hidden">
        <DrawerNav />
      </div>
    </div>
  );
};

export default Navbar;
