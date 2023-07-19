import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Typography, Box } from '@mui/material';

interface UploadProps {
  onFileUpload: (file: File) => void;
  disable?: boolean;
}

const Upload: React.FC<UploadProps> = ({ onFileUpload, disable = false }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedFile(acceptedFiles[0]);
    onFileUpload(acceptedFiles[0]);
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        {...getRootProps()}
        mb={2}
        sx={{
          width: "100%",
          height: 300,
          border: '1px dashed grey',
        }}
      >
        <div className='h-full flex flex-col justify-center items-center'>
          <input {...getInputProps()} />
          <Button variant="contained" component="span" disabled={disable}>
            {isDragActive ? '放下文件' : '选择文件'}
          </Button>
          <p className='mt-2'>Or Drag It Here</p>
        </div>
      </Box>
      {selectedFile && (
        <Typography variant="body1">
          已选择文件: {selectedFile.name}
        </Typography>
      )}
    </Box>
  );
};

export default Upload;
