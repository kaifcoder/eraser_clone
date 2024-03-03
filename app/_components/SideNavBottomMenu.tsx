import React, { useState } from "react";
import {
  ArchiveIcon,
  FlagIcon,
  Github,
  LayoutDashboard,
  LucideLock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const SideNavBottomMenu = ({ onFileCreate, length }: any) => {
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

  const [fileName, setFileName] = useState("Untitled File");

  const router = useRouter();

  return (
    <div>
      {menuList.map((item) => (
        <div
          key={item.id}
          onClick={() => router.push(item.link)}
          className="flex space-x-2 text-neutral-300 cursor-pointer items-center justify-start hover:bg-neutral-800 text-sm  px-2 font-semibold py-1 rounded-lg mx-3"
        >
          <item.icon size={14} className="mr-2" />
          {item.name}
        </div>
      ))}

      {/* add new file btn */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-blue-500 w-full mt-8 mb-4 justify-start text-neutral-300 font-medium hover:bg-blue-600 hover:text-white">
            New File
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-neutral-800 outline-none border-none text-white">
          <DialogHeader>
            <DialogTitle className="text-neutral-50">
              Create New File
            </DialogTitle>
            <DialogDescription>
              Create a new file to start working with your team.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center justify-start gap-4">
              <Label htmlFor="name" className="text-center">
                File Name
              </Label>
              <Input
                id="name"
                defaultValue={fileName}
                className="col-span-3 bg-transparent focus:border-none"
                onChange={(e) => setFileName(e.target.value)}
                onSubmit={() => console.log("submit")}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                onClick={() => onFileCreate(fileName)}
                disabled={!fileName}
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-neutral-300 hover:text-white"
              >
                Create
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* progress */}
      <Progress value={length * 20} className="bg-neutral-700" />
      <div className="text-xs mt-2">
        <span className="font-bold">{length}</span> out of{" "}
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
