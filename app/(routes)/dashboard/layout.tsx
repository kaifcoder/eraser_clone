"use client";

import Sidebar from "@/app/_components/Sidebar";
import { FileListContext } from "@/app/_context/FileListContext";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useKindeBrowserClient();
  const convex = useConvex();
  const router = useRouter();

  const [fileList, setFileList] = useState([] as any[]);

  useEffect(() => {
    if (user) {
      checkTeam();
    }
  }, [user]);

  const checkTeam = async () => {
    const result = await convex.query(api.teams.getTeams, {
      email: user?.email!,
    });
    if (!result.length) {
      router.push("/team/create");
    }
  };

  return (
    <div className="h-screen overscroll-x-none" suppressHydrationWarning>
      <FileListContext.Provider
        value={{
          fileList,
          setFileList,
        }}
      >
        <div className="grid sm:grid-cols-5 ">
          <div className="sm:col-span-1">
            <Sidebar />
          </div>
          <div className="sm:col-span-4 h-screen overscroll-x-none overflow-y-auto w-full">
            {children}
          </div>
        </div>
      </FileListContext.Provider>
    </div>
  );
}
