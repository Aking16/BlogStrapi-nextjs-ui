"use client";

import Lock from "@mui/icons-material/Lock";
import LockOpen from "@mui/icons-material/LockOpen";
import TextFields from "@mui/icons-material/TextFields";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { EditorOptions } from "@tiptap/core";
import {
  LinkBubbleMenu,
  MenuButton,
  RichTextEditor,
  RichTextReadOnly,
  TableBubbleMenu,
  insertImages,
  type RichTextEditorRef,
} from "mui-tiptap";
import { useCallback, useRef, useState } from "react";
import EditorMenuControls from "./EditorMenuControls";
import useExtensions from "./useExtensions";

function fileListToImageFiles(fileList: FileList): File[] {
  return Array.from(fileList).filter((file) => {
    const mimeType = (file.type || "").toLowerCase();
    return mimeType.startsWith("image/");
  });
}

export default function Editor() {
  const extensions = useExtensions({
    placeholder: "Tell your story...",
  });
  const rteRef = useRef<RichTextEditorRef>(null);
  const [isEditable, setIsEditable] = useState(true);
  const [showMenuBar, setShowMenuBar] = useState(true);

  const handleNewImageFiles = useCallback(
    (files: File[], insertPosition?: number): void => {
      if (!rteRef.current?.editor) {
        return;
      }

      // For the sake of a demo, we don't have a server to upload the files to,
      // so we'll instead convert each one to a local "temporary" object URL.
      // This will not persist properly in a production setting. You should
      // instead upload the image files to your server, or perhaps convert the
      // images to bas64 if you would like to encode the image data directly
      // into the editor content, though that can make the editor content very
      // large. You will probably want to use the same upload function here as
      // for the MenuButtonImageUpload `onUploadFiles` prop.
      const attributesForImageFiles = files.map((file) => ({
        src: URL.createObjectURL(file),
        alt: file.name,
      }));

      insertImages({
        images: attributesForImageFiles,
        editor: rteRef.current.editor,
        position: insertPosition,
      });
    },
    []
  );

  // Allow for dropping images into the editor
  const handleDrop: NonNullable<EditorOptions["editorProps"]["handleDrop"]> =
    useCallback(
      (view, event) => {
        if (!(event instanceof DragEvent) || !event.dataTransfer) {
          return false;
        }

        const imageFiles = fileListToImageFiles(event.dataTransfer.files);
        if (imageFiles.length > 0) {
          const insertPosition = view.posAtCoords({
            left: event.clientX,
            top: event.clientY,
          })?.pos;

          handleNewImageFiles(imageFiles, insertPosition);

          // Return true to treat the event as handled. We call preventDefault
          // ourselves for good measure.
          event.preventDefault();
          return true;
        }

        return false;
      },
      [handleNewImageFiles]
    );

  // Allow for pasting images
  const handlePaste: NonNullable<EditorOptions["editorProps"]["handlePaste"]> =
    useCallback(
      (_view, event) => {
        if (!event.clipboardData) {
          return false;
        }

        const pastedImageFiles = fileListToImageFiles(
          event.clipboardData.files
        );
        if (pastedImageFiles.length > 0) {
          handleNewImageFiles(pastedImageFiles);
          // Return true to mark the paste event as handled. This can for
          // instance prevent redundant copies of the same image showing up,
          // like if you right-click and copy an image from within the editor
          // (in which case it will be added to the clipboard both as a file and
          // as HTML, which Tiptap would otherwise separately parse.)
          return true;
        }

        // We return false here to allow the standard paste-handler to run.
        return false;
      },
      [handleNewImageFiles]
    );

  const [submittedContent, setSubmittedContent] = useState("");

  return (
    <Box>
      <RichTextEditor
        ref={rteRef}
        extensions={extensions}
        editable={isEditable}
        editorProps={{
          handleDrop: handleDrop,
          handlePaste: handlePaste,
        }}
        immediatelyRender={false}
        renderControls={() => <EditorMenuControls />}
        RichTextFieldProps={{
          variant: "standard",
          MenuBarProps: {
            hide: !showMenuBar,
          },
          footer: (
            <Stack
              direction="row"
              spacing={2}
              sx={{
                borderTopStyle: "solid",
                borderTopWidth: 1,
                borderTopColor: (theme) => theme.palette.divider,
                py: 1,
                px: 1.5,
              }}
            >
              <MenuButton
                value="formatting"
                tooltipLabel={
                  showMenuBar ? "Hide formatting" : "Show formatting"
                }
                size="small"
                onClick={() => {
                  setShowMenuBar((currentState) => !currentState);
                }}
                selected={showMenuBar}
                IconComponent={TextFields}
              />

              <MenuButton
                value="formatting"
                tooltipLabel={
                  isEditable
                    ? "Prevent edits (use read-only mode)"
                    : "Allow edits"
                }
                size="small"
                onClick={() => {
                  setIsEditable((currentState) => !currentState);
                }}
                selected={!isEditable}
                IconComponent={isEditable ? Lock : LockOpen}
                sx={{ flexGrow: 1 }}
              />

              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  setSubmittedContent(rteRef.current?.editor?.getHTML() ?? "");
                }}
              >
                Publish
              </Button>
            </Stack>
          ),
        }}
        sx={{
          "& .MuiTiptap-RichTextContent-root": {
            minHeight: "10rem",
          },
          "& .ProseMirror": {
            "& h1, & h2, & h3, & h4, & h5, & h6": {
              scrollMarginTop: showMenuBar ? 50 : 0,
            },
          },
        }}
      >
        {() => (
          <>
            <LinkBubbleMenu />
            <TableBubbleMenu />
          </>
        )}
      </RichTextEditor>

      {submittedContent && (
        <>
          <Typography variant="h5" sx={{ mt: 5 }}>
            Preview:
          </Typography>

          <Box>
            <RichTextReadOnly
              immediatelyRender={false}
              content={submittedContent}
              extensions={extensions}
            />
          </Box>
        </>
      )}
    </Box>
  );
}
