import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Typography, Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

interface UploadProps {
  onFileUpload: (file: File) => void;
  disable?: boolean;
}

const Upload: React.FC<UploadProps> = ({ onFileUpload, disable = false }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileSizeError, setFileSizeError] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    // Check if the file is a video format (you can modify this check based on your supported formats)
    const supportedFormats = ['video/mp4', 'video/quicktime', 'video/mov', 'video/webm'];
    const isVideoFormat = supportedFormats.includes(file.type);

    // if (file && file.size <= 128 * 1024 * 1024 && isVideoFormat) {
    //   setSelectedFile(file);
    //   onFileUpload(file);
    // } else {
    //   setFileSizeError(true);
    //   setDialogOpen(true);
    // }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setFileSizeError(false);
  };

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
            {isDragActive ? 'Drop File' : 'Select File'}
          </Button>
          <p className='mt-2'>Or Drag It Here</p>
          {selectedFile && (
            <Typography variant="body1">
              Selected File: {selectedFile.name}
            </Typography>
          )}
        </div>
      </Box>
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>File Size or Format Limit</DialogTitle>
        <DialogContent>
          {fileSizeError ? (
            <Typography variant="body1">The file size exceeds 100MB.</Typography>
          ) : (
            <Typography variant="body1">Only video files are supported.</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Upload;
