import React from "react";
import SidebarTopButton from "./SidebarTopButton";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";
import SideNavBottomMenu from "./SideNavBottomMenu";

const Sidebar = () => {
  return (
    <div className="text-white h-screen fixed max-w-64 py-4 px-4 flex flex-col">
      <div className="flex-1">
        <SidebarTopButton />
        <Button
          variant={"outline"}
          className="bg-gradient-to-r from-neutral-600 backdrop:blur-md to-neutral-700 border-neutral-800 w-full mt-10 text-left justify-start hover:bg-neutral-600 hover:border-neutral-700 hover:from-neutral-600 hover:to-neutral-700 hover:text-white"
        >
          <LayoutDashboard size={16} className="mr-2" />
          All files
        </Button>
      </div>

      {/* bottom layout */}
      <SideNavBottomMenu />
    </div>
  );
};

export default Sidebar;
