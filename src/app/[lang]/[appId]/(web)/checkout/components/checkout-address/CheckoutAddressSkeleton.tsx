import { Box, Card, FormControlLabel, Radio, Skeleton } from "@mui/material";

export const CheckoutAddressSkeleton = () => {
  return (
    <>
      {Array(7)
        .fill(7)
        .map((_, index) => (
          <Card
            sx={{ p: 3, mb: 3, position: "relative " }}
            elevation={5}
            key={index}
          >
            <Skeleton variant="text" width={"20%"} />
            <Skeleton variant="text" width={"25%"} />
            <Skeleton variant="text" width={"40%"} />
            <Box
              sx={{
                mt: 3,
                display: "flex",
                position: { sm: "absolute" },
                right: { sm: 24 },
                bottom: { sm: 40 },
              }}
            >
              <FormControlLabel
                value={""}
                control={<Radio />}
                label=""
                disabled
              />
            </Box>
          </Card>
        ))}
    </>
  );
};
