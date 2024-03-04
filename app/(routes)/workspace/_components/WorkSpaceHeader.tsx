"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Github, Info, Link, MoreHorizontal, Save } from "lucide-react";
import React from "react";

const WorkSpaceHeader = ({
  Tabs,
  setActiveTab,
  activeTab,
  onSave,
  file,
}: any) => {
  return (
    <div className="border-b border-neutral-800 h-12 flex items-center px-4 w-full">
      {/* file name portion */}
      <div className="flex space-x-2 items-center justify-start w-full">
        <img src="/logo.svg" alt="logo" className="w-8 h-8" />
        <div>
          <h1 className="text-sm font-medium">
            {file ? file.fileName : "Untitled"}
          </h1>
        </div>
        <div className="rounded-sm hover:bg-neutral-700 hover:text-white cursor-pointer p-1">
          <MoreHorizontal size={16} />
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
        <div className="rounded-sm flex text-sm items-center border border-neutral-700 hover:border-neutral-500 transition-all hover:bg-neutral-800 hover:text-white cursor-pointer px-2 py-1">
          Give Star on GitHub
          <Github size={16} className="ml-2" />
        </div>
        <div
          onClick={() => onSave()}
          className="rounded-sm flex text-sm items-center bg-blue-700 hover:bg-blue-800 hover:text-white cursor-pointer px-2 py-1"
        >
          <Save size={20} />
        </div>
        <div className="rounded-sm flex text-sm items-center bg-blue-700 hover:bg-blue-800 hover:text-white cursor-pointer px-2 py-1">
          Share
          <Link size={16} className="ml-2" />
        </div>
        <div className="rounded-sm hover:bg-neutral-700 hover:text-white cursor-pointer p-1">
          <Info size={16} />
        </div>
      </div>
    </div>
  );
};

export default WorkSpaceHeader;
