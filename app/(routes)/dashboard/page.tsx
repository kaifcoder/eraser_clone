"use client";

import React, { useEffect } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { useConvex, useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
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
    <div className="text-white h-screen">
      DashBoard Page user Id : {user?.id}
      <div className="">
        <h2>
          Welcome to the dashboard {user?.given_name} {user?.family_name}. You
          can now access the protected route. showing data for team = {}
        </h2>
        <h3>You can also logout by clicking the logout button below.</h3>
      </div>
      <div className="mt-3 ml-3">
        <Button className="rounded-full p-4" variant={"destructive"}>
          <LogoutLink>Logout</LogoutLink>
        </Button>
      </div>
    </div>
  );
};

export default page;
