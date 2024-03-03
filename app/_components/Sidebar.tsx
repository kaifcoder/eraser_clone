"use client";

import React, { useContext, useEffect, useState } from "react";
import SidebarTopButton, { Team } from "./SidebarTopButton";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";
import SideNavBottomMenu from "./SideNavBottomMenu";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { FileListContext } from "../_context/FileListContext";
const Sidebar = () => {
  const { user } = useKindeBrowserClient();
  const createFile = useMutation(api.files.createNewFile);

  const [activeTeam, setActiveTeam] = useState<Team | any>();
  const [totalFiles, setTotalFiles] = useState<Number>();
  const [totalArchivedFiles, setTotalArchivedFiles] = useState<Number>();

  const { fileList, setFileList } = useContext(FileListContext);

  const onFileCreate = (fileName: string) => {
    try {
      console.log(
        "payload" + JSON.stringify({ fileName, team: activeTeam.teamName })
      );
      createFile({
        fileName,
        teamId: activeTeam?._id,
        createdBy: user?.email!,
        archieved: false,
        document: "",
        whiteboard: "",
      }).then(
        (res) => {
          toast.success("File created successfully");
          getFiles();
          console.log(res);
        },
        (error) => {
          toast.error("Error creating file");
          console.log(error);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (activeTeam) {
      getFiles();
    }
  }, [activeTeam]);
  const convex = useConvex();

  const getFiles = async () => {
    const result = await convex.query(api.files.getFiles, {
      teamId: activeTeam?._id,
    });

    setFileList(result);
    setTotalFiles(result?.length);
    setTotalArchivedFiles(result?.filter((file: any) => file.archieved).length);
  };

  return (
    <div className="text-white h-screen hidden sm:fixed max-w-64 py-4 px-4 sm:flex border-r border-neutral-800 flex-col">
      <div className="flex-1">
        <SidebarTopButton
          user={user}
          setActiveTeamInfo={(activeTeam: Team) => setActiveTeam(activeTeam)}
        />
        <Button
          variant={"outline"}
          className="bg-gradient-to-r from-neutral-600 backdrop:blur-md to-neutral-700 border-neutral-800 w-full mt-10 text-left justify-start hover:bg-neutral-600 hover:border-neutral-700 hover:from-neutral-600 hover:to-neutral-700 hover:text-white"
        >
          <LayoutDashboard size={16} className="mr-2" />
          All files
        </Button>
      </div>

      {/* bottom layout */}
      <SideNavBottomMenu onFileCreate={onFileCreate} length={totalFiles} />
    </div>
  );
};

export default Sidebar;
