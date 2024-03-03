"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { toast } from "sonner";

const page = () => {
  const [teamName, setTeamName] = useState("" as string);
  const { user } = useKindeBrowserClient();
  const createTeam = useMutation(api.teams.createTeam);
  const router = useRouter();
  const handleCreateTeam = async () => {
    await createTeam({
      teamName,
      createdBy: user?.email!,
    }).then((res) => {
      console.log(res);
      if (res) {
        router.push("/dashboard");
        toast.success("Team created successfully");
      }
    });
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute  top-8 left-8 flex items-center space-x-2">
        <img src="/logo.svg" alt="logo" className="w-10 h-10" />
        <h1 className="text-white font-bold">eraser</h1>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="text-center w-full">
          <h1 className="font-bold text-4xl mb-4">
            What should we call your team?
          </h1>

          <h3 className="text-neutral-400">
            You can always change this later from settings.
          </h3>
        </div>
        <div className="grid w-full max-w-lg items-center gap-1.5 mt-16 mb-16">
          <Label htmlFor="team_name">Team Name</Label>
          <Input
            className="bg-neutral-800 m-1"
            type="text"
            id="team_name"
            placeholder="Team Name"
            onChange={(e) => setTeamName(e.target.value)}
            onSubmit={(e) => {
              e.preventDefault();
              handleCreateTeam();
            }}
          />
        </div>

        <Button
          onClick={handleCreateTeam}
          disabled={!(teamName && teamName.length > 0)}
          className="bg-blue-500 text-white w-full max-w-[300px] hover:bg-blue-600"
        >
          Create team
        </Button>
      </div>
    </div>
  );
};

export default page;
