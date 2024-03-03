"use client";
import React, { useEffect, useRef } from "react";
import EditorJs from "@editorjs/editorjs";
import Header from "@editorjs/header";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import checkList from "@editorjs/checklist";

const rawDocument = {};

const Editor = () => {
  const ref = useRef<EditorJs>();
  useEffect(() => {
    initEditor();
  }, []);

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
        },
        list: List,
        checklist: checkList,
      },
    });
    editor.isReady
      .then(() => {
        console.log("Editor.js is ready to work!");
      })
      .catch((reason) => {
        console.log(`Editor.js initialization failed because of ${reason}`);
      });
    ref.current = editor;
  };

  return (
    <div className="p-2">
      <h1 className="text-white text-lg font-medium">Editor</h1>
      <div
        className="text-white selection:text-black selection:bg-neutral-400 overflow-x-hidden overflow-y-auto w-full pr-4 pl-2 h-[85vh] mb-4"
        id="editorjs"
      ></div>
    </div>
  );
};

export default Editor;
