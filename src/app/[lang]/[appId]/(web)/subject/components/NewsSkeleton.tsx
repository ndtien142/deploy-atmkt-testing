import { Skeleton, Stack } from "@mui/material";

export const NewsSkeleton = () => {
  return (
    <Stack direction={"column"} spacing={5}>
      {Array(5)
        .fill(5)
        .map((_, index) => (
          <Stack
            direction="row"
            spacing={3}
            sx={{ cursor: "pointer" }}
            key={index}
          >
            <Skeleton variant="rounded" width={"40%"} height={200} />
            <Stack direction="column" spacing={1} width={"60%"}>
              <Skeleton variant="text" sx={{ fontSize: "16px" }} />
              <Skeleton variant="text" sx={{ fontSize: "13px" }} />
            </Stack>
          </Stack>
        ))}
    </Stack>
  );
};
