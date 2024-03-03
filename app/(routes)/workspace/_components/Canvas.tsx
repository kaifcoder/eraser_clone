"use client";
import React from "react";
import { Excalidraw } from "@excalidraw/excalidraw";

const Canvas = () => {
  return (
    <>
      <div className="h-full w-full">
        <Excalidraw theme="dark" />
      </div>
    </>
  );
};

export default Canvas;
