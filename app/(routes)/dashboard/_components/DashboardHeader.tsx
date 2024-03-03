import { cn } from "@/lib/utils";
import { Search, Send, Share } from "lucide-react";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DashboardHeader = ({ user }: any) => {
  const menu = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Recent",
    },
    {
      id: 3,
      name: "Created By Me",
    },
  ];

  const [selected, setSelected] = useState(1);
  return (
    <div className="w-full">
      <div className="pl-16 py-6 pr-10 mt-4   flex items-center gap-2">
        <div className="flex flex-1 space-x-2 font-semibold text-sm w-fit">
          {menu.map((item, index) => (
            <div
              onClick={() => setSelected(item.id)}
              className={cn(
                "cursor-pointer  rounded-lg px-3 py-1 text-neutral-400 hover:text-white  ",
                selected === item.id &&
                  "bg-neutral-800 border border-neutral-600 text-white"
              )}
              key={index}
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* search user and share */}
        <div className="flex items-center space-x-4">
          <div className="bg-neutral-800 rounded-lg flex items-center border border-white/30 space-x-2 py-1 ">
            <Search size={16} className="ml-2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-neutral-800   text-white p-0 text-sm outline-none border-none focus:ring-0"
            />
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div>
                  <img
                    src={
                      user?.picture ??
                      "https://img.freepik.com/free-vector/graphic-designer-man_78370-159.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709251200&semt=ais"
                    }
                    alt="logo"
                    className="w-8 h-8 rounded-full object-cover cursor-pointer"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent className="p-1 bg-neutral-600 outline-none border-none">
                <div className="text-white  ">
                  {user?.given_name! + " " + user?.family_name!}
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div>
            <div className="bg-blue-700 hover:bg-blue-800 cursor-pointer text-white text-sm rounded-sm flex items-center px-4 py-1">
              <Send size={16} className="mr-1" />
              Invite
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
