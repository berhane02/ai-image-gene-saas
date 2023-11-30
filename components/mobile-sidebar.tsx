"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SheetContent, SheetTrigger, Sheet } from "./ui/sheet";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";

interface MobileSidebarProps {
  apiLimitCount: number;
}

const MobileSidebar = ({
  apiLimitCount
}: MobileSidebarProps) => {
    const [isMounted, setIsMounted]= useState(false);
    useEffect(() =>{
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
  return (
    <Sheet>
      <SheetTrigger>
        
          <Menu  />
        
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar apiLimitCount={apiLimitCount}/>
      </SheetContent>
    </Sheet>
  );
}
export default MobileSidebar;
