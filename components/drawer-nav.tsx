import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { CircleUser, Contact2, Home, Menu, PencilRuler } from "lucide-react";
import Link from "next/link";

const DrawerNav = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <Menu size={36} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex justify-around items-center mt-4">
            <Link href="#home">
              <Home size={36} />
            </Link>
            <Link href="#about">
              <CircleUser size={36} />
            </Link>
            <Link href="#project">
              <PencilRuler size={36} />
            </Link>
            <Link href="#contact">
              <Contact2 size={36} />
            </Link>
          </div>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline" className="text-sm">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerNav;
