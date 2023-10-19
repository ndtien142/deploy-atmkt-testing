"use client";

import { Stack, Typography, useTheme, Grid, Pagination } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { useParams, useRouter } from "next/navigation";
import { useGetListNews } from "../../../hooks/useGetListNews";
import { useDispatch, useSelector } from "@/common/redux/store";
import { IParamsListNews } from "../../../interface";
import { Divider } from "@mui/material";
import { Box } from "@mui/material";
import FirstItem from "./FirstItem";
import NewsColumnItem from "./NewsColumnItem";
import { setCurrPage } from "../../../slice";
import { useEffect, useMemo, useState } from "react";
import { PATH_HOME } from "@/common/constants/path.constants";
import SubjectSlider from "../../../components/SubjectSlider";
import { useGetListSubjectAndNews } from "../../../hooks/useGetListSubjectAndNews";
import { defaultParamSubjectNews } from "../../../constant";

export default function NewsBySubjectIdContainer() {
  const { t } = useTranslation("common");
  const { id } = useParams();
  const [currPage, setCurrPage] = useState<number>(1);
  const theme = useTheme();
  const dispatch = useDispatch();
  const router = useRouter();

  const searchParams: IParamsListNews = {
    subjectIds: [Number(id)],
    page: currPage,
    limit: 9,
  };

  const { dataSubjectNews } = useGetListSubjectAndNews(defaultParamSubjectNews);
  const listSubjectNews =
    dataSubjectNews?.pages?.map((item) => item?.items).flat() || [];
  const listSubjectHasNews = listSubjectNews.filter(
    (item) => !!item?.newsToSubject?.length
  );
  const RemainingElementOfListSubject = listSubjectHasNews.filter(
    (item) => item?.id !== Number(id)
  );

  const { data, isLoading } = useGetListNews(searchParams);

  const listNews = data?.items || [];
  const totalPage = data?.meta?.totalPages || 0;

  const firstData = listNews[0];
  const dataNotFirst = listNews.slice(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrPage(value);
  };

  const handleClickNewsDetail = (id: number) => {
    router.push(PATH_HOME.news.detail.replace(":id", id.toString()));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [currPage]);

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
          {t("news.titleBanner")}
        </Typography>
      </Stack>
      <Stack
        minHeight={"1000px"}
        sx={{ paddingX: { lg: "100px", md: "75px", sm: "50px", xs: "25px" } }}
        pt={"50px"}
        pb={{ md: "100px", xs: "50px" }}
        spacing={4}
      >
        {!isLoading ? (
          <Stack spacing={3}>
            <Stack direction="row" spacing={2}>
              <Box
                sx={{
                  minWidth: "21px",
                  borderRadius: "4px",
                  background: theme.palette.primary.main,
                }}
              />
              <Typography
                sx={{
                  fontSize: "28px",
                  lineHeight: "36px",
                  fontWeight: 700,
                }}
              >
                {firstData?.subject?.[0]?.subjectDetails?.[0]?.name}
              </Typography>
            </Stack>
            <Divider color="primary.main" />
            <Stack>
              <FirstItem
                data={firstData}
                onDetail={() => handleClickNewsDetail(firstData?.id)}
              />
              {dataNotFirst?.length > 1 ? (
                <Grid
                  container
                  rowSpacing={{ xs: 3, sm: 5 }}
                  pt={{ xs: 3, sm: 5 }}
                  columnSpacing={2}
                >
                  {dataNotFirst?.map((item) => (
                    <NewsColumnItem
                      key={item?.id}
                      data={item}
                      onDetail={() => handleClickNewsDetail(item?.id)}
                    />
                  ))}
                </Grid>
              ) : (
                <>
                  {dataNotFirst?.map((item) => (
                    <Stack key={item?.id} mt={{ xs: 3, sm: 5 }}>
                      <FirstItem
                        data={item}
                        onDetail={() => handleClickNewsDetail(item?.id)}
                      />
                    </Stack>
                  ))}
                </>
              )}
            </Stack>
            <Pagination
              count={totalPage}
              page={currPage}
              onChange={handleChange}
              color="primary"
              sx={{ mt: "48px !important" }}
            />
            <SubjectSlider data={RemainingElementOfListSubject} />
          </Stack>
        ) : (
          <></>
        )}
      </Stack>
    </>
  );
}
