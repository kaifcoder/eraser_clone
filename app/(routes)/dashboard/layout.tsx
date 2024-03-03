"use client";

import Sidebar from "@/app/_components/Sidebar";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useKindeBrowserClient();
  const convex = useConvex();
  const router = useRouter();

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
    <div className="h-screen">
      <div className="grid grid-cols-5">
        <div>
          <Sidebar />
        </div>
        <div className="grid-cols-4 pl-4 border-l border-neutral-800 w-[80vw]">
          {children}
        </div>
      </div>
    </div>
  );
}
