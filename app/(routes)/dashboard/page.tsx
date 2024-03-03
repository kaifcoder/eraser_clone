"use client";

import React, { useEffect } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { useConvex, useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import DashboardHeader from "./_components/DashboardHeader";
import DashboardTable from "./_components/DashboardTable";

const page = () => {
  const { user } = useKindeBrowserClient();
  const convex = useConvex();
  const router = useRouter();
  const createUser = useMutation(api.user.createUser);

  useEffect(() => {
    if (user) {
      checkUser();
    }
  }, [user]);

  const checkUser = async () => {
    const result = await convex.query(api.user.getUser, {
      email: user?.email!,
    });
    if (!result.length) {
      createUser({
        name: user?.given_name! + " " + user?.family_name!,
        email: user?.email!,
        image:
          user?.picture ??
          "https://img.freepik.com/free-vector/graphic-designer-man_78370-159.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709251200&semt=ais",
      }).then((res) => {
        console.log(res);
      });
    }
  };
  return (
    <div className="text-white">
      <DashboardHeader user={user} />
      <DashboardTable />
    </div>
  );
};

export default page;
