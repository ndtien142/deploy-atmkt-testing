import { Stack, Typography, Skeleton, Button } from "@mui/material";
export default function SkeletonDetail() {
  return (
    <Stack
      px={3}
      py={2}
      spacing={3}
      width={{ xs: "unset", md: "700px" }}
      overflow={"hidden"}
    >
      <Stack alignItems={"center"} px={2}>
        <Skeleton variant="text" width="50%" />
        <Skeleton variant="text" width={"20%"} />
      </Stack>
      <Stack spacing={1}>
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <Skeleton variant="text" width={"100%"} key={index} />
          ))}
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={3}
        alignSelf={"flex-end"}
        m={"0 !important"}
        py={2}
      >
        <Skeleton variant="rounded" sx={{ width: 70, height: 30 }}>
          <Button variant="contained" color="inherit">
            back
          </Button>
        </Skeleton>
        <Skeleton variant="rounded" sx={{ width: 80, height: 30 }}>
          <Button variant="contained">forward</Button>
        </Skeleton>
      </Stack>
    </Stack>
  );
}
