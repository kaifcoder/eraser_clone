"use client";

import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Plus, Settings } from "lucide-react";
import path from "path";
import { useRouter } from "next/navigation";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";

export interface Team {
  _id: string;
  teamName: string;
  createdBy: string;
}

const SidebarTopButton = () => {
  const router = useRouter();
  const convex = useConvex();
  const menu = [
    {
      id: 1,
      name: "create team",
      path: "/team/create",
      icon: <Plus size={16} className="mr-2" />,
    },
    {
      id: 2,
      name: "settings",
      path: "/settings",
      icon: <Settings size={16} className="mr-2" />,
    },
  ];
  const { user } = useKindeBrowserClient();
  const getTeamList = async () => {
    const result = await convex.query(api.teams.getTeams, {
      email: user?.email!,
    });
    console.log(result);
    setTeamList(result as Team[]);
    setSelectedTeam(result[0].teamName);
    return result;
  };

  useEffect(() => {
    if (user) {
      getTeamList();
    }
  }, [user]);

  let [teamList, setTeamList] = useState([] as Team[]);
  const [selectedTeam, setSelectedTeam] = useState(
    "Select Team" as string | undefined
  );
  let [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <div
          className={cn(
            "flex items-center w-fit hover:bg-neutral-600 gap-2 cursor-pointer rounded-md px-2 mt-4 ml-2",
            { "bg-neutral-600": isOpen }
          )}
        >
          <img src="/logo.svg" alt="logo" className="w-8 h-8" />
          <h2 className="text-sm font-semibold">{selectedTeam}</h2>
          <ChevronDown size={16} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-neutral-950 gap-1 rounded-lg text-white border-neutral-700 w-60 ml-4 mt-2">
        {teamList &&
          teamList.map((team) => (
            <DropdownMenuItem
              key={team.teamName}
              onClick={() => setSelectedTeam(team.teamName)}
              className={cn(
                "cursor-pointer focus:bg-neutral-700 focus:text-white",
                {
                  "bg-blue-500 text-white": selectedTeam === team.teamName,
                }
              )}
            >
              {team.teamName}
            </DropdownMenuItem>
          ))}

        <DropdownMenuSeparator className="bg-neutral-800" />
        {menu.map((item) => (
          <DropdownMenuItem
            key={item.id}
            onClick={() => {
              router.push(item.path);
            }}
            className="cursor-pointer focus:bg-neutral-700 focus:text-white"
          >
            {item.icon}
            {item.name}
          </DropdownMenuItem>
        ))}

        <DropdownMenuItem className="cursor-pointer focus:bg-neutral-700 focus:text-white">
          <LogOut size={16} className="mr-2" />
          <LogoutLink>Logout</LogoutLink>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-neutral-800" />
        <div className="flex items-center space-x-2 p-2 rounded-lg">
          <div>
            <img
              src={
                user?.picture ??
                "https://img.freepik.com/free-vector/graphic-designer-man_78370-159.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709251200&semt=ais"
              }
              alt="user picture"
              className="rounded-full h-8 w-8 object-cover"
            />
          </div>
          <div className="-space-y-1">
            <p className="text-sm font-semibold">
              {user?.given_name + " " + user?.family_name}{" "}
            </p>
            <p className="text-xs font-light">{user?.email}</p>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SidebarTopButton;
