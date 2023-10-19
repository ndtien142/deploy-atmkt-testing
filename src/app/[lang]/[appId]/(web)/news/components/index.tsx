"use client";

import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { NewSubjectHeader } from "./NewSubjectHeader";
import { NewsMultiContainer } from "./NewsMultiContainer";
import { NewSingleItem } from "./NewSingleItem";
import { useGetListNews } from "../../news-detail/[id]/hooks/useGetListNews";
import { defaultParamNews, defaultParamSubjectNews } from "../constant";
import { useGetListSubjectAndNews } from "../hooks/useGetListSubjectAndNews";
import Image from "../../../../../../common/components/Image";
import ListNews from "./list-news/ListNews";
import SubjectSlider from "./SubjectSlider";

export const NewsPageContainer = () => {
  const { listNews, isLoading: isLoadingNews } =
    useGetListNews(defaultParamNews);

  const { dataSubjectNews, isLoadingSubjectNews } = useGetListSubjectAndNews(
    defaultParamSubjectNews
  );
  const listSubjectNews =
    dataSubjectNews?.pages?.map((item) => item?.items).flat() || [];
  const listSubjectHasNews = listSubjectNews.filter(
    (item) => !!item?.newsToSubject?.length
  );
  const threeElementsOfList = listSubjectHasNews.slice(0, 3);
  const RemainingElementOfList = listSubjectHasNews.slice(3);

  return (
    <>
      <Stack
        sx={{
          width: "100%",
          position: "relative",
          height: { xs: "170px", sm: "260px" },
          background: "url(/assets/news_banner.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: " local",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "26px", sm: "3rem" },
            fontWeight: 700,
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          TIN TỨC VÀ BLOG
        </Typography>
      </Stack>
      {!isLoadingSubjectNews && (
        <Stack
          minHeight={"1000px"}
          sx={{ paddingX: { lg: "100px", md: "75px", sm: "50px", xs: "25px" } }}
          pt={{ xs: "16px", sm: "50px" }}
          pb={{ md: "100px", xs: "50px" }}
          spacing={4}
        >
          <Stack direction="row" justifyContent={"space-between"}>
            <Stack direction="column" width="100%" spacing={{ xs: 6, sm: 15 }}>
              {threeElementsOfList?.map((item, index) => (
                <Stack
                  direction="column"
                  spacing={{ xs: 0, sm: 3 }}
                  key={index}
                >
                  <NewSubjectHeader
                    title={item?.subjectDetails[0]?.name}
                    idSubject={item?.id}
                  />
                  <ListNews data={item?.newsToSubject} />
                </Stack>
              ))}
              <SubjectSlider data={RemainingElementOfList} />
            </Stack>
          </Stack>
        </Stack>
      )}
    </>
  );
};
