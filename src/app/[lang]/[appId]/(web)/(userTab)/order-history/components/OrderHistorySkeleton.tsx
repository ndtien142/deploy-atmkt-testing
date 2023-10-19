import {
  Divider,
  Paper,
  Skeleton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export const OrderHistorySkeleton = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Stack spacing={3}>
        {Array(3)
          .fill(3)
          .map((_, index) => (
            <Paper elevation={5} sx={{ paddingY: 2, paddingX: 3 }} key={index}>
              <Stack direction="column" spacing={1} width={"100%"}>
                <Skeleton width={"30%"} animation="wave" />

                <Divider sx={{ borderStyle: "dashed" }} />

                <Stack
                  direction={matches ? "row" : "column"}
                  width="100%"
                  sx={{ paddingY: "15px!important" }}
                  spacing={matches ? 0 : 3}
                >
                  <Stack
                    direction="row"
                    width={matches ? "70%" : "100%"}
                    justifyContent={"flex-start"}
                  >
                    <Skeleton
                      variant="rectangular"
                      width={100}
                      height={100}
                      sx={{ marginRight: 3 }}
                    />
                    <Stack spacing={0.5} width={"100%"} minHeight={"100%"}>
                      <Skeleton width={"30%"} animation="wave" />
                      <Skeleton width={"15%"} animation="wave" />
                      <Skeleton width={"17%"} animation="wave" />
                    </Stack>
                  </Stack>
                  <Stack
                    width={matches ? "30%" : "100%"}
                    minHeight="100%"
                    alignItems={matches ? "flex-end" : "center"}
                    justifyContent={"center"}
                  >
                    <Skeleton width={"40%"} animation="wave" />
                  </Stack>
                </Stack>

                <Divider sx={{ borderStyle: "dashed" }} />

                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  paddingY={1}
                >
                  <Skeleton width={"15%"} animation="wave" />
                  <Skeleton width={"15%"} animation="wave" />
                </Stack>
              </Stack>
            </Paper>
          ))}
      </Stack>
    </>
  );
};
