"use client";
import React, { useEffect, useRef, useState } from "react";
import EditorJs from "@editorjs/editorjs";
import Header from "@editorjs/header";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import checkList from "@editorjs/checklist";
import { Edu_QLD_Beginner } from "next/font/google";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { FILE } from "../../dashboard/_components/DashboardTable";

const rawDocument = {
  time: 1550476186479,
  blocks: [
    {
      id: "oUq2g_tl8y",
      type: "header",
      data: {
        text: "Untitled Document",
        level: 2,
      },
    },
  ],
  version: "2.8.1",
};

const Editor = ({
  onSaveTrigger,
  fileId,
  fileData,
}: {
  onSaveTrigger: any;
  fileId: any;
  fileData: FILE;
}) => {
  const ref = useRef<EditorJs>();
  const [document, setDocument] = useState(rawDocument);

  const updateDocument = useMutation(api.files.updateDocument);

  useEffect(() => {
    fileData && initEditor();
  }, [fileData]);

  useEffect(() => {
    console.log("triggered" + onSaveTrigger);
    onDocumentSave();
  }, [onSaveTrigger]);

  const initEditor = () => {
    const editor = new EditorJs({
      holder: "editorjs",
      placeholder: "Let`s write an awesome story!",
      tools: {
        header: {
          // @ts-ignore
          class: Header,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+H",
          placeholder: "Enter a heading",
        },
        list: List,
        checklist: checkList,
      },
      data: fileData.document ? JSON.parse(fileData.document) : document,
    });
    editor.isReady.then(() => {
      ref.current = editor;
    });
  };

  const onDocumentSave = async () => {
    if (ref.current) {
      const savedData = await ref.current.save();
      const resp = await updateDocument({
        _id: fileId,
        document: JSON.stringify(savedData),
      });

      toast.success("Document Saved");
    }
  };

  return (
    <div className="p-2">
      <div
        className="text-white selection:text-black selection:bg-neutral-400 overflow-x-hidden overflow-y-auto w-full pr-4 pl-2 h-[85vh] mb-4"
        id="editorjs"
        key={"editorjs"}
      ></div>
    </div>
  );
};

export default Editor;
