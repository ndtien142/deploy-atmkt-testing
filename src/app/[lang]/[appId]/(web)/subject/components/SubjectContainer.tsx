"use client";

import {
  Breadcrumbs,
  Button,
  Link,
  Pagination,
  Stack,
  SwipeableDrawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { LastedNewsUpdate } from "./LastedNewsUpdate";
import { useGetListNewsBySubject } from "../hooks/useGetNewsBySubject";
import { useDispatch, useSelector } from "@/common/redux/store";
import { NewsItem } from "./NewsItem";
import { NewFilter } from "./NewFilter";
import { useGetListSubjectAndNews } from "../../news/hooks/useGetListSubjectAndNews";
import { defaultParamSubjectNews } from "../../news/constant";
import { useEffect, useState } from "react";
import _ from "lodash";
import {
  setCurrentPage,
  setCurrentSubject,
  setDataSubject,
} from "../common/slice";
import { NewsSkeleton } from "./NewsSkeleton";
import { useRouter } from "next/navigation";
import Iconify from "@/common/components/Iconify";
import { currentSubjectNewsSelector } from "../../(userTab)/profile/account-common/reducers/customer-profile.slice";
import BreadCrumbs from "@/common/components/customComponent/BreadCrumbs";
import { PATH_HOME } from "@/common/constants/path.constants";

export const SubjectContainer = () => {
  const dispatch = useDispatch();
  const matches = useMediaQuery("(min-width:600px)");
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const { currentSubject, titleCurrentSubject, searchText, currentPage } =
    useSelector((state) => state.subject);

  const currentSubjectNews = useSelector(currentSubjectNewsSelector);

  const {
    dataSubjectNews,
    isLoadingSubjectNews,
    fetchNextPageSubject,
    isFetchingNextPageSubject,
    hasNextPageSubject,
  } = useGetListSubjectAndNews(defaultParamSubjectNews);
  const listSubjectNews =
    dataSubjectNews?.pages?.map((item) => item?.items).flat() || [];

  const newsParamsSearch = {
    page: currentPage,
    limit: 9,
    subjectIds: currentSubject,
    title: searchText,
  };
  useEffect(() => {
    if (!_.isEmpty(listSubjectNews)) {
      const formatArray: any = [];
      listSubjectNews?.map((item) => {
        formatArray.push({
          label: item?.subjectDetails[0]?.name,
          value: item?.subjectDetails[0]?.id,
        });
      });
      dispatch(setDataSubject(formatArray));
    }
  }, [listSubjectNews.length]);

  const { data, isLoading } = useGetListNewsBySubject(newsParamsSearch);

  const listNews = data?.items || [];

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPage(value));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    dispatch(setCurrentSubject([]));
    if (currentSubjectNews) {
      dispatch(setCurrentSubject([parseInt(currentSubjectNews)]));
    }
  }, [currentSubjectNews]);

  const breadCumbs = [
    { name: "Trang chủ", href: PATH_HOME.root },
    { name: "Tin tức", href: PATH_HOME.news.root },
  ];

  return (
    <>
      <Stack
        sx={{
          width: "100%",
          position: "relative",
          height: matches ? "268px" : "200px",
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
            fontSize: matches ? "3rem" : "26px",
            fontWeight: 700,
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          TIN TỨC VÀ BLOG
        </Typography>
      </Stack>
      <Stack
        minHeight={"1000px"}
        sx={{ paddingX: { lg: "100px", md: "75px", sm: "50px", xs: "25px" } }}
        pt={"50px"}
        pb={{ md: "100px", xs: "50px" }}
        spacing={4}
      >
        <Stack direction="row" spacing={3} justifyContent={"space-between"}>
          {matches && (
            <Stack width={"20%"} paddingRight={5}>
              <NewFilter
                onFetchNextPageSubject={fetchNextPageSubject}
                isLoadingFetch={isFetchingNextPageSubject}
                hasNextPage={hasNextPageSubject}
              />
            </Stack>
          )}
          <Stack width={matches ? "77%" : "100%"} spacing={5}>
            <BreadCrumbs links={breadCumbs} />
            {!matches && (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"flex-end"}
              >
                <Button
                  sx={{ padding: 0, minWidth: "unset" }}
                  onClick={toggleDrawer(true)}
                >
                  <Iconify icon="mi:filter" fontSize={"2rem"} />
                </Button>
              </Stack>
            )}

            {isLoading ? (
              <NewsSkeleton />
            ) : (
              <Stack direction={"row"} flexWrap={"wrap"}>
                {listNews?.map((item, index) => (
                  <NewsItem
                    date={item?.createdAt}
                    srcImg={item?.thumbnail?.url}
                    title={item?.title}
                    description={item?.newsDetails[0]?.description}
                    id={item?.id.toString()}
                    key={index}
                  />
                ))}
              </Stack>
            )}
            <Stack spacing={2} alignItems={"center"}>
              <Pagination
                count={data?.meta?.totalPages}
                page={currentPage}
                onChange={handleChange}
                color="primary"
              />
            </Stack>
          </Stack>
          {/* <Stack width={"25%"}>
            <LastedNewsUpdate />
          </Stack> */}
        </Stack>
      </Stack>

      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={{ width: "100%" }}
      >
        <Button
          sx={{ position: "absolute", top: 0, right: 0 }}
          onClick={toggleDrawer(false)}
        >
          <Iconify icon="ph:x" fontSize={16} />
        </Button>
        <Stack width="250px" padding={3} alignItems={"center"} spacing={5}>
          <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
            Bộ lọc
          </Typography>
          <NewFilter
            onFetchNextPageSubject={fetchNextPageSubject}
            isLoadingFetch={isFetchingNextPageSubject}
            hasNextPage={hasNextPageSubject}
          />
        </Stack>
      </SwipeableDrawer>
    </>
  );
};
