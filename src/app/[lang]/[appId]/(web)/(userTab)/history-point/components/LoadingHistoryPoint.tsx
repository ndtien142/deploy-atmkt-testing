import React from "react";
import { Box, Skeleton, Stack } from "@mui/material";

export default function LoadingHistoryPoint() {
  return (
    <>
      {Array(3)
        .fill(3)
        .map((_, index) => (
          <Stack direction={"row"} marginTop={"40px"} key={index} width="100%">
            <Skeleton variant="rectangular" width={100} height={100} />
            <Box
              paddingLeft={"10px"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              width="100%"
            >
              <Skeleton
                variant="text"
                sx={{ fontSize: "18px" }}
                animation="wave"
                width="100%"
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "18px" }}
                animation="wave"
                width="100%"
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "18px" }}
                animation="wave"
                width="100%"
              />
            </Box>
          </Stack>
        ))}
    </>
  );
}
