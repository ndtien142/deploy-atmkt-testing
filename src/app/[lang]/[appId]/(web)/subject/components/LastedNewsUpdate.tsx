import { Box, Stack, Typography } from "@mui/material";
import { useGetListNews } from "../hooks/useGetListNews";
import { NewSingleItem } from "../../news/components/NewSingleItem";

export const LastedNewsUpdate = () => {
  const defaultParam = {
    page: 1,
    limit: 5,
  };

  const { listNews, isLoading: isLoadingNews } = useGetListNews(defaultParam);

  return (
    <>
      <Stack direction="column" width="100%" spacing={3}>
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography
            sx={{
              color: "black",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Tin Mới
          </Typography>
        </Stack>
        <Box
          sx={{
            height: "2px",
            background: "#c9cccabf",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "0px",
              bottom: "0px",
              left: "0px",
              height: "100%",
              width: "25%",
              background: "#00AB55",
            }}
          />
        </Box>

        {listNews?.map((item, index) => (
          <NewSingleItem
            key={item?.id}
            srcImg={item?.thumbnail?.url}
            title={item?.title}
            date={item?.createdAt}
          />
        ))}
      </Stack>
    </>
  );
};
