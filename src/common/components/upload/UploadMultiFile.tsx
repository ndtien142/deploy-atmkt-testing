import { useDropzone } from "react-dropzone";
// @mui
import { Box, Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
// type
import { UploadMultiFileProps } from "./type";
//
import BlockContent from "./BlockContent";
import RejectionFiles from "./RejectionFiles";

// ----------------------------------------------------------------------

const DropZoneStyle = styled("div")(({ theme }) => ({
  outline: "none",
  padding: theme.spacing(5, 1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.neutral,
  border: `1px dashed ${theme.palette.grey[500]}`,
  "&:hover": { opacity: 0.72, cursor: "pointer" },
}));

// ----------------------------------------------------------------------

export default function UploadMultiFile({
  error,
  showPreview = false,
  files,
  onUpload,
  onRemove,
  onRemoveAll,
  helperText,
  sx,
  contentRemoveAllFiles = "Remove all",
  contentSaveAllFiles = "Upload files",
  ...other
}: UploadMultiFileProps) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    ...other,
  });

  return (
    <Box
      sx={{
        width: "100%",
        ...sx,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // height: '50%',
      }}
    >
      <DropZoneStyle
        {...getRootProps()}
        sx={{
          ...(isDragActive && { opacity: 0.72 }),
          ...((isDragReject || error) && {
            color: "error.main",
            borderColor: "error.light",
            bgcolor: "error.lighter",
          }),
        }}
      >
        <input {...getInputProps()} id="uploaded-image" />

        <BlockContent />
      </DropZoneStyle>

      {fileRejections.length > 0 && (
        <RejectionFiles fileRejections={fileRejections} />
      )}

      {/* <MultiFilePreview files={files} showPreview={showPreview} onRemove={onRemove} /> */}

      {files.length > 0 && (
        <Stack
          direction="row"
          justifyContent="flex-end"
          spacing={1.5}
          marginTop={5}
        >
          <Button color="inherit" size="small" onClick={onRemoveAll}>
            {contentRemoveAllFiles}
          </Button>
          <Button size="small" variant="contained" onClick={onUpload}>
            {contentSaveAllFiles}
          </Button>
        </Stack>
      )}

      {helperText && helperText}
    </Box>
  );
}
