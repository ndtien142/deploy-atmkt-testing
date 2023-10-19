import { useTheme } from "@mui/material";
import { Box, Typography, Divider, Stack } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ISubjectNewItem } from "../interface";
import SubjectSlideItem from "./SubjectSlideItem";
import "./css/subject.css";

type Props = {
  data: ISubjectNewItem[];
};

export default function SubjectSlider({ data }: Props) {
  const theme = useTheme();
  const { t } = useTranslation("common");
  return (
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
          {t("news.titleMoreSubject")}
        </Typography>
      </Stack>
      <Divider color="primary.main" />
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        modules={[Navigation, Pagination]}
        style={{ width: "100%", justifyContent: "space-between" }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <SubjectSlideItem dataItem={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
}
