import {
  Box,
  Typography,
  Paper,
  Skeleton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export const NotiSkeleton = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <Stack
            key={index}
            direction={"row"}
            alignItems={"center"}
            position={"relative"}
            py={"16px"}
            px={{ xs: "16px", sm: "32px" }}
            gap={"16px"}
            justifyContent={"space-between"}
          >
            <Skeleton
              sx={{
                width: 76,
                height: 76,
              }}
              variant="rectangular"
            />
            <Stack
              spacing={1.5}
              maxWidth={{ xs: "70%", sm: "86%", lg: "90%" }}
              flex={1}
            >
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
              >
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: "16px",
                    width: "100%",
                  }}
                />
              </Stack>
              <Stack spacing={0.5} width={"100%"}>
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: "16px",
                    width: "100%",
                  }}
                />
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: "16px",
                    width: "50%",
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        ))}
    </>
  );
};
