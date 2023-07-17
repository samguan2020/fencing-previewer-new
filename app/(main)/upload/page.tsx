'use client'

import { Button, OutlinedInput, Stack } from "@mui/material";
import Upload from './Upload'
import { UploadFile as UploadFileIcon } from "@mui/icons-material";

export default function UploadPage() {

  const handleFileUpload = (file: File) => {
    // TODO: 处理文件上传的逻辑
    console.log('Selected file:', file);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-8">

      <div className="w-full">
        <h2 className="font-semibold text-xl" >Upload Video</h2>

        <div className="mt-2">
          <p className="text-gray-500">Add YouTube URL Directly Here</p>
          <Stack direction="row" spacing={2}>
            <OutlinedInput
              size="small"
              fullWidth
            />
            <Button variant="contained">Add</Button>
          </Stack>
        </div>

        <h3 className="mt-4 font-semibold">OR</h3>
        <div className="mt-2">
          <p className="text-gray-500">Upload Your Videos Here</p>
          <Upload onFileUpload={handleFileUpload}></Upload>
        </div>
        <Button variant="contained" fullWidth startIcon={<UploadFileIcon />}>
          Upload Video
        </Button>
      </div>
    </main>
  );
}
