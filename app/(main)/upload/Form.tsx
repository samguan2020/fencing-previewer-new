'use client'

import { Button, IconButton, OutlinedInput, Snackbar, Stack } from "@mui/material";
import Upload from './Upload'
import { UploadFile as UploadFileIcon } from "@mui/icons-material";
import { useState } from "react";
import { createVideo, updateFile } from "~/sanity/queries";
import React from "react";
import { Close as CloseIcon } from "@mui/icons-material";

export default function UploadForm({ authId }: { authId: string }) {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const [videoUrl, setVideoUrl] = useState<string>('')

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('')

  const handleFileUpload = async (file: File) => {
    const result = await updateFile(file)

    setVideoUrl(result.url)
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


  const handleCrateVideo = async () => {
    setOpen(true);

    const video: any = {
      _type: 'video',
      title: title,
      description: description,
      videoUrl: videoUrl,
      authId: authId
    }

    if (!title || !description || !videoUrl) {
      setMessage('Please fill all the fields')
      return
    }

    await createVideo(video)

    setMessage('Video Uploaded Successfully')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-8">

      <div className="w-full">
        <h2 className="font-semibold text-xl" >Upload Video</h2>

        {/* <div className="mt-2">
          <p className="text-gray-500">Add YouTube URL Directly Here</p>
          <Stack direction="row" spacing={2}>
            <OutlinedInput
              size="small"
              fullWidth
            />
            <Button variant="contained">Add</Button>
          </Stack>
        </div>

        <h3 className="mt-4 font-semibold">OR</h3> */}
        <div className="mt-2">
          <p className="text-gray-500">Upload Your Videos Here</p>

          <div className="mt-4">
            <p className="text-gray-500">Title</p>
            <OutlinedInput
              size="small"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <p className="text-gray-500">Description</p>
            <OutlinedInput
              size="small"
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-4">

            <Upload onFileUpload={handleFileUpload}></Upload>
          </div>
        </div>
        <Button variant="contained" fullWidth startIcon={<UploadFileIcon />} onClick={() => handleCrateVideo()}>
          Create Video
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={message}
          action={action}
        />
      </div>
    </main>
  );
}