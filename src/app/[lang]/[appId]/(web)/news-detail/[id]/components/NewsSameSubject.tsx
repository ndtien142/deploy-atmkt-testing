import { Box, Pagination, Stack, Typography, useTheme } from "@mui/material";
import { DEFAULT_MAIN_COLOR } from "@/common/constants/color.constants";
import { INewItem } from "../interface";
import { RelatedNewItem } from "./RelatedNewItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination as PaginationSwiper } from "swiper";
import "../../../news/components/css/subject.css";

type Props = {
  data: INewItem[];
};

export const NewsSameSubject = ({ data }: Props) => {
  const theme = useTheme();
  return (
    <>
      <Stack direction="column" spacing={3}>
        <Stack direction="row" spacing={2}>
          <Box
            sx={{
              // height: "100%",
              minWidth: "21px",
              borderRadius: "4px",
              // background: "linear-gradient(90deg, #66BA7A , #00A55D, #1F8A70)",
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
            Tin tức liên quan
          </Typography>
        </Stack>

        <Swiper
          slidesPerView={1}
          spaceBetween={8}
          modules={[Navigation, PaginationSwiper]}
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
              <RelatedNewItem
                date={item?.createdAt}
                srcImg={item?.thumbnail?.url}
                title={item?.title}
                description={item?.newsDetails[0]?.description}
                id={item?.id?.toString()}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Stack
          direction={{ sm: "row", xs: "column" }}
          flexWrap={"wrap"}
          spacing={2}
        >
          {data?.map((item, index) => (
            <RelatedNewItem
              date={item?.createdAt}
              srcImg={item?.thumbnail?.url}
              title={item?.title}
              description={item?.newsDetails[0]?.description}
              id={item?.id?.toString()}
              key={index}
            />
          ))}
        </Stack> */}
      </Stack>
    </>
  );
};
