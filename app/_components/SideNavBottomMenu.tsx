import React from "react";
import {
  ArchiveIcon,
  FlagIcon,
  Github,
  LayoutDashboard,
  LucideLock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const SideNavBottomMenu = () => {
  const menuList = [
    {
      id: 1,
      name: "Getting Started",
      icon: FlagIcon,
      link: "/dashboard/getting-started",
    },
    {
      id: 2,
      name: "Github Sync",
      icon: Github,
      link: "/dashboard",
    },
    {
      id: 3,
      name: "Private Files",
      icon: LucideLock,
      link: "/dashboard",
    },
    {
      id: 4,
      name: "Archive",
      icon: ArchiveIcon,
      link: "/dashboard",
    },
  ];
  return (
    <div>
      {menuList.map((item) => (
        <div
          key={item.id}
          className="flex space-x-2 text-neutral-300 cursor-pointer items-center justify-start hover:bg-neutral-800 text-sm  px-2 font-semibold py-1 rounded-lg mx-3"
        >
          <item.icon size={14} className="mr-2" />
          {item.name}
        </div>
      ))}
      <Button className="bg-blue-500 w-full mt-8 mb-4 justify-start text-neutral-300 font-medium hover:bg-blue-600 hover:text-white">
        New File
      </Button>
      <Progress value={0} className="bg-neutral-700" />
      <div className="text-xs mt-2">
        <span className="font-bold">0</span> out of{" "}
        <span className="font-bold">5</span> files used.
      </div>
      <div className="text-xs mt-1 mb-2">
        <span className="font-semibold cursor-pointer underline">Upgrade</span>{" "}
        your plan for unlimited access.
      </div>
    </div>
  );
};

export default SideNavBottomMenu;
