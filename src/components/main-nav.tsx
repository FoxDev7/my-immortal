import { useState } from "react";
import { navItems } from "#/lib/config";
import { cn } from "#/lib/utils";
import { Button } from "./ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";

export default function MainNav() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        
      </DrawerTrigger>
    </Drawer>
  )
}