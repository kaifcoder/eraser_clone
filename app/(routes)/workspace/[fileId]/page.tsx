"use client";
import React, { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import WorkSpaceHeader from "../_components/WorkSpaceHeader";
import dynamic from "next/dynamic";

export const Editor = dynamic(() => import("../_components/Editor"), {
  ssr: false,
});

export const Canvas = dynamic(() => import("../_components/Canvas"), {
  ssr: false,
});

const Workspace = () => {
  const Tabs = [
    {
      name: "Document",
    },
    {
      name: "Both",
    },
    {
      name: "Canvas",
    },
  ];

  const [activeTab, setActiveTab] = useState(Tabs[1].name);

  return (
    <div className="overflow-hidden w-full">
      <WorkSpaceHeader
        Tabs={Tabs}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      {activeTab === "Document" ? (
        <div
          style={{
            height: "calc(100vh - 3rem)",
          }}
        >
          <Editor />
        </div>
      ) : activeTab === "Both" ? (
        <ResizablePanelGroup
          style={{
            height: "calc(100vh - 3rem)",
          }}
          direction="horizontal"
        >
          <ResizablePanel defaultSize={100} minSize={40} collapsible={false}>
            <Editor />
          </ResizablePanel>
          <ResizableHandle className=" bg-neutral-600" />
          <ResizablePanel defaultSize={100} minSize={45}>
            <Canvas />
          </ResizablePanel>
        </ResizablePanelGroup>
      ) : activeTab === "Canvas" ? (
        <div
          style={{
            height: "calc(100vh - 3rem)",
          }}
        >
          <Canvas />
        </div>
      ) : null}
    </div>
  );
};

export default Workspace;
