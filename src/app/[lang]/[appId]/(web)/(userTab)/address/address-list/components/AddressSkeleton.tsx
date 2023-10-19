import {
  Box,
  Typography,
  Paper,
  Skeleton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export const AddressSkeleton = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Stack spacing={4} px={{ xs: "16px", sm: "32px" }}>
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <Paper
            key={index}
            sx={{
              padding: { xs: "10px", md: "24px" },
              borderRadius: "16px",
              width: "100%",
              boxShadow: "0 12px 24px -4px rgba(145, 158, 171, 0.12)",
            }}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack spacing={1} width={"80%"}>
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    width: "50%",
                  }}
                />
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: "16px",
                    width: "30%",
                  }}
                />
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    width: "100%",
                  }}
                />
              </Stack>
              <Skeleton
                variant="circular"
                sx={{
                  height: "20px",
                  width: "20px",
                  alignSelf: "flex-start",
                }}
              />
            </Stack>
          </Paper>
        ))}
    </Stack>
  );
};
