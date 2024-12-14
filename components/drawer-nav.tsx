"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import ModeToggle from "./ui/modetoggle";
import { motion } from "framer-motion";

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
}

interface DrawerNavProps {
  navItems: NavItem[];
}

const DrawerNav: React.FC<DrawerNavProps> = ({ navItems }) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-300 hover:text-white"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] bg-gray-900 text-white">
        <nav className="flex flex-col space-y-6 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              <motion.div
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-lg font-medium font-inter">
                  {item.label}
                </span>
              </motion.div>
            </Link>
          ))}
          <div className="pt-4">
            <ModeToggle />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default DrawerNav;
