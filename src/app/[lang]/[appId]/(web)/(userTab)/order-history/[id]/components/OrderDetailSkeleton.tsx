import { Box, Card, Divider, Paper, Skeleton, Stack } from "@mui/material";

export const OrderDetailSkeleton = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        background: "white",
        borderRadius: "24px",
        padding: 3,
      }}
    >
      <Skeleton
        variant="text"
        width="35%"
        animation="wave"
        sx={{ marginBottom: 3 }}
      />
      <Card sx={{ mb: 3, borderRadius: "16px", p: 2 }} elevation={5}>
        <Stack spacing="5">
          <Skeleton variant="text" width="40%" animation="wave" />
          <Skeleton variant="text" width="15%" animation="wave" />
          <Skeleton variant="text" width="25%" animation="wave" />
          <Skeleton variant="text" width="50%" animation="wave" />
        </Stack>
      </Card>

      <Skeleton
        variant="rectangular"
        width={"100%"}
        height="10vh"
        sx={{ borderRadius: 3 }}
      />

      <Card sx={{ mb: 3, mt: 3, p: 2 }} elevation={5}>
        <Skeleton
          variant="text"
          width="10%"
          animation="wave"
          sx={{ marginBottom: 3 }}
        />
        {Array(5)
          .fill(5)
          .map((index) => (
            <Stack direction="row" marginBottom={1} key={index}>
              <Box sx={{ width: "40%" }}>
                <Skeleton variant="text" width="40%" animation="wave" />
              </Box>
              <Box sx={{ width: "20%" }}>
                <Skeleton variant="text" width="40%" animation="wave" />
              </Box>
              <Box sx={{ width: "20%" }}>
                <Skeleton variant="text" width="40%" animation="wave" />
              </Box>
              <Box sx={{ width: "20%" }}>
                <Skeleton variant="text" width="40%" animation="wave" />
              </Box>
            </Stack>
          ))}
      </Card>

      <Card sx={{ mb: 3, borderRadius: "16px", p: 2 }} elevation={5}>
        <Stack spacing="3">
          <Skeleton
            variant="text"
            width="15%"
            animation="wave"
            sx={{ my: 1 }}
          />
          <Stack
            direction="row"
            justifyContent={"space-between"}
            sx={{ my: 1 }}
          >
            <Skeleton variant="text" width="12%" animation="wave" />
            <Skeleton variant="text" width="15%" animation="wave" />
          </Stack>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            sx={{ my: 1 }}
          >
            <Skeleton variant="text" width="13%" animation="wave" />
            <Skeleton variant="text" width="10%" animation="wave" />
          </Stack>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            sx={{ my: 1 }}
          >
            <Skeleton variant="text" width="16%" animation="wave" />
            <Skeleton variant="text" width="10%" animation="wave" />
          </Stack>
          <Divider />
          <Stack
            direction="row"
            justifyContent={"space-between"}
            sx={{ my: 1 }}
          >
            <Skeleton variant="text" width="14%" animation="wave" />
            <Skeleton variant="text" width="12%" animation="wave" />
          </Stack>
        </Stack>
      </Card>
      <Stack direction="row" justifyContent={"space-between"} sx={{ my: 1 }}>
        <Skeleton variant="text" width="14%" animation="wave" />
        <Skeleton variant="text" width="12%" animation="wave" />
      </Stack>
    </Paper>
  );
};
