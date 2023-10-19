"use client";

import {
  Box,
  Breadcrumbs,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NewSingleItem } from "../../../news/components/NewSingleItem";
import Iconify from "@/common/components/Iconify";
import { useParams } from "next/navigation";
import { useGetNewById } from "../hooks/useGetNewById";
import { fDate, formatDate } from "@/common/utils/common.utils";
import Image from "@/common/components/Image";
import Markdown from "@/common/components/hook-form/Markdown";
import { useGetListNews } from "../hooks/useGetListNews";
import { NewsSameSubject } from "./NewsSameSubject";
import { useGetListRelatedNews } from "../hooks/useGetListRelatedNews";
import "src/common/styles/css/newsDetailStyle.css";
import { PATH_HOME } from "@/common/constants/path.constants";

export const NewsDetailContainer = () => {
  const params = useParams();
  const idNew = params.id as string;
  const matches = useMediaQuery("(min-width:600px)");
  const theme = useTheme();

  const defaultParam = {
    page: 1,
    limit: 5,
  };

  const { newDetail, isLoading } = useGetNewById(idNew);
  const { listNews, isLoading: isLoadingNews } = useGetListNews(defaultParam);

  const defaultParamRelatedNew = {
    page: 1,
    limit: matches ? 6 : 4,
    subjectIds: newDetail?.subject?.map((item) => item.id) || [],
  };

  const { listRelatedNews, isLoading: loadingRelatedNews } =
    useGetListRelatedNews(defaultParamRelatedNew);

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href={PATH_HOME.root}>
      Trang chủ
    </Link>,
    <Link underline="hover" key="2" color="inherit" href={PATH_HOME.news.root}>
      Tin tức
    </Link>,
    <Typography key="2" color="primary">
      {newDetail?.title}
    </Typography>,
  ];

  return (
    <>
      <Stack
        sx={{
          width: "100%",
          position: "relative",
          height: { xs: "250px", sm: "450px", md: "555px" },
          background: `linear-gradient(0deg, rgba(41, 45, 50, 0.50) 0%, rgba(41, 45, 50, 0.50) 100%), url(${newDetail?.thumbnail?.url}), lightgray 50% `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: " local",
          justifyContent: "flex-end",
        }}
      >
        <Stack
          sx={{ paddingX: { lg: "100px", md: "75px", sm: "50px", xs: "25px" } }}
          pb={3}
          spacing={1}
        >
          <Typography
            variant="h3"
            color={"rgba(255, 255, 255, 1)"}
            fontSize={32}
          >
            {newDetail?.title}
          </Typography>
          <Typography color={"rgba(255, 255, 255, 1)"} fontSize={16}>
            {fDate(newDetail?.createdAt || "")}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        minHeight={"1000px"}
        sx={{ paddingX: { lg: "100px", md: "75px", sm: "25px", xs: "0" } }}
        pt={{ xs: "20px", sm: "50px" }}
        pb={{ md: "100px", xs: "50px" }}
        spacing={8}
      >
        {/* <Breadcrumbs
          separator="·"
          sx={{ fontWeight: "700 !important" }}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs> */}
        <Stack direction="row" justifyContent={"space-between"}>
          <Stack direction="column" width={{ sm: "68%", xs: "100%" }}>
            <Box sx={{ width: "100%" }}>
              <Markdown className="ql-editor">
                {newDetail?.newsDetails[0]?.content || ""}
              </Markdown>
            </Box>
          </Stack>
          {matches && (
            <Stack
              direction="column"
              width="28%"
              height={"fit-content"}
              spacing={3}
              pt={"12px"}
              pr={{ xs: 3, md: 0 }}
              position={"sticky"}
              top={68}
            >
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
                    background: theme.palette.primary.main,
                  }}
                />
              </Box>

              {listNews?.map((item, index) => (
                <NewSingleItem
                  key={item?.id}
                  srcImg={item?.thumbnail?.url}
                  title={item?.title}
                  date={item?.createdAt}
                  id={item?.id.toString()}
                />
              ))}
            </Stack>
          )}
        </Stack>

        <Stack px={3}>
          <NewsSameSubject data={listRelatedNews} />
        </Stack>
      </Stack>
    </>
  );
};
