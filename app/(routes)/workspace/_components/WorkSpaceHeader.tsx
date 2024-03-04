"use client";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Archive,
  Github,
  Info,
  LayoutDashboard,
  Link2,
  MoreHorizontal,
  Save,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const WorkSpaceHeader = ({
  Tabs,
  setActiveTab,
  activeTab,
  onSave,
  file,
}: any) => {
  return (
    <div className="border-b  border-neutral-800 h-12 flex items-center px-4 w-full">
      {/* file name portion */}
      <div className="flex space-x-2 items-center justify-start w-full">
        <Link href="/dashboard" className="flex space-x-2 items-center  ">
          <img src="/logo.svg" alt="logo" className="w-8 h-8" />
          <div>
            <h1 className="text-sm font-medium">
              {file ? file.fileName : "Untitled"}
            </h1>
          </div>
        </Link>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-sm hover:bg-neutral-700 outline-none hover:text-white cursor-pointer p-1">
              <MoreHorizontal size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-neutral-800 ml-8 text-white  border-neutral-600">
              <DropdownMenuItem className="cursor-pointer text-xs focus:bg-neutral-700 focus:text-white">
                <Archive size={16} className="mr-2" />
                Move to Archive
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer focus:bg-neutral-700 focus:text-white">
                <Link className="flex items-center text-xs" href="/dashboard">
                  <LayoutDashboard size={16} className="mr-2" />
                  Go To Dashboard
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* tabs */}
      <div>
        <div className="border border-neutral-600 rounded">
          <div className="flex w-full items-center">
            {
              // tabs
              Tabs.map((tab: any) => (
                <div
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={cn(
                    " cursor-pointer w-24 text-sm text-center hover:bg-neutral-700 px-2 py-1",
                    {
                      "bg-neutral-700 text-white": tab.name === activeTab,
                    },
                    {
                      "border-r border-neutral-500":
                        tab.name !== Tabs[Tabs.length - 1].name,
                    }
                  )}
                >
                  <h1 className="text-sm font-medium">{tab.name}</h1>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {/* right most */}
      <div className="w-full space-x-4  flex items-center  justify-end">
        <a
          href="https://github.com/kaifcoder/eraser_clone"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="rounded-sm flex text-sm items-center border border-neutral-700 hover:border-neutral-500 transition-all hover:bg-neutral-800 hover:text-white cursor-pointer px-2 py-1">
            Give Star on GitHub
            <Github size={16} className="ml-2" />
          </div>
        </a>
        <div
          onClick={() => onSave()}
          className="rounded-sm flex text-sm items-center bg-blue-700 hover:bg-blue-800 hover:text-white cursor-pointer px-2 py-1"
        >
          <Save size={20} />
        </div>
        <div
          onClick={() => {
            navigator.clipboard.writeText(
              `${window.location.origin}/workspace/${file._id}`
            );
            toast.success("Link Copied");
          }}
          className="rounded-sm flex text-sm items-center bg-blue-700 hover:bg-blue-800 hover:text-white cursor-pointer px-2 py-1"
        >
          Share
          <Link2 size={16} className="ml-2" />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <div className="rounded-sm hover:bg-neutral-700 hover:text-white cursor-pointer p-1">
              <Info size={16} />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-80 bg-neutral-800 text-white border-neutral-700">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h1 className="text-sm font-semibold">Info</h1>
                <p className="text-xs text-neutral-400">
                  This is just a clone of eraser, made with nextjs and
                  tailwindcss
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default WorkSpaceHeader;
