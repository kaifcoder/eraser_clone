"use client";
import React, { useEffect, useRef, useState } from "react";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { FILE } from "../../dashboard/_components/DashboardTable";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const Canvas = ({
  onSaveTrigger,
  fileId,
  fileData,
}: {
  onSaveTrigger: any;
  fileId: any;
  fileData: FILE;
}) => {
  const [whiteBoard, setWhiteBoard] = useState<any>();

  useEffect(() => {
    whiteBoard && saveWhiteboard();
  }, [onSaveTrigger]);

  const updateWhiteBoard = useMutation(api.files.updateWhiteboard);

  const saveWhiteboard = () => {
    updateWhiteBoard({
      _id: fileId,
      whiteboard: JSON.stringify(whiteBoard),
    })
      .then(() => {
        toast.success("Canvas saved");
      })
      .catch((e) => {
        toast.error("Error saving canvas");
      });
  };

  return (
    <>
      <div className="h-full w-full">
        {fileData && fileData.whiteboard ? (
          <Excalidraw
            theme="dark"
            initialData={{
              elements: fileData && JSON.parse(fileData?.whiteboard),
            }}
            UIOptions={{
              canvasActions: {
                export: false,
                loadScene: false,
                saveAsImage: false,
              },
            }}
            onChange={(excaliDrawElements, appState, files) => {
              setWhiteBoard(excaliDrawElements);
            }}
          >
            <MainMenu>
              <MainMenu.DefaultItems.ClearCanvas />
              <MainMenu.DefaultItems.Help />
              <MainMenu.DefaultItems.ChangeCanvasBackground />
            </MainMenu>
            <WelcomeScreen>
              <WelcomeScreen.Hints.MenuHint />
              <WelcomeScreen.Hints.ToolbarHint />
              <WelcomeScreen.Hints.HelpHint />
            </WelcomeScreen>
          </Excalidraw>
        ) : (
          <Excalidraw
            theme="dark"
            UIOptions={{
              canvasActions: {
                export: false,
                loadScene: false,
                saveAsImage: false,
              },
            }}
            onChange={(excaliDrawElements, appState, files) => {
              setWhiteBoard(excaliDrawElements);
            }}
          >
            <MainMenu>
              <MainMenu.DefaultItems.ClearCanvas />
              <MainMenu.DefaultItems.Help />
              <MainMenu.DefaultItems.ChangeCanvasBackground />
            </MainMenu>
            <WelcomeScreen>
              <WelcomeScreen.Hints.MenuHint />
              <WelcomeScreen.Hints.ToolbarHint />
              <WelcomeScreen.Hints.HelpHint />
            </WelcomeScreen>
          </Excalidraw>
        )}
      </div>
    </>
  );
};

export default Canvas;
