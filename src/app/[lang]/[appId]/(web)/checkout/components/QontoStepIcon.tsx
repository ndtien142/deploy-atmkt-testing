"use client";
import { Box } from "@mui/material";
import Iconify from "@/common/components/Iconify";
import { useTheme } from "@mui/material";

export default function QontoStepIcon({
  active,
  completed,
}: {
  active: boolean;
  completed: boolean;
}) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        zIndex: 9,
        width: 24,
        height: 24,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: active ? theme.palette.primary.main : "text.disabled",
      }}
    >
      {completed ? (
        <Iconify
          icon={"eva:checkmark-fill"}
          sx={{ zIndex: 1, width: 20, height: 20 }}
          color="primary.main"
        />
      ) : (
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "currentColor",
          }}
        />
      )}
    </Box>
  );
}
