import {
  Stack,
  Box,
  Typography,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "src/common/styles/css/homeStyle.css";
import "swiper/css";
import "swiper/css/pagination";
import Iconify from "@/common/components/Iconify";
import { useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";
import { DEFAULT_MAIN_COLOR } from "@/common/constants/color.constants";
import { SliderNewsItem } from "./SlideNewsItem";
import { SliderNewsPrimaryItem } from "./SlideNewsPrimaryItem";

type Props = {
  dataMenu: any;
};

export const NewsSection = (props: Props) => {
  const router = useRouter();
  const matches = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const { dataMenu } = props;

  // const sliderRef = useRef<any>(null);

  // const handleClickPrev = useCallback(() => {
  //   if (!sliderRef.current) return;
  //   sliderRef.current.swiper.slidePrev();
  // }, []);

  // const handleClickNext = useCallback(() => {
  //   if (!sliderRef.current) return;
  //   sliderRef.current.swiper.slideNext();
  // }, []);

  return (
    <Stack
      spacing={3}
      sx={{
        width: "100%",
        "--swiper-pagination-bullet-color": theme.palette.primary.main,
        paddingX: { lg: "100px", md: "75px", sm: "50px", xs: "25px" },

        justifyContent: "space-between",
        // border: "1px solid black",
      }}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
        // sx={{ border: "1px solid black" }}
      >
        <Stack direction={"row"} spacing={"17px"}>
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
              fontSize: "32px",
              lineHeight: "36px",
              fontWeight: 700,
              textTransform: "capitalize",
            }}
          >
            {dataMenu?.title}
          </Typography>
        </Stack>
      </Stack>
      {matches && (
        <Box>
          <Swiper
            // ref={sliderRef}
            className="swiperNews"
            pagination={true}
            modules={[Pagination]}
            style={{
              width: "90%",
              height: matches ? "468px" : "unset",
              // border: "1px solid black",
            }}
            spaceBetween={"20px"}
            breakpoints={{
              0: {
                navigation: true,
              },
              400: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 1,
              },
              800: {
                slidesPerView: 1,
                lazyPreloadPrevNext: 1,
              },
              1000: {
                slidesPerView: 1,
                navigation: false,
              },
            }}
          >
            {/* {MOCK_DATA_PRODUCT?.map((item, index) => (
            <SwiperSlide key={index}>
              <SliderMenuItem
                srcImg={item?.srcImg}
                title="welcome to valhalla saaaaaaaaaasss"
              />
            </SwiperSlide>
          ))} */}
            {dataMenu?.data?.news?.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <SliderNewsPrimaryItem
                  srcImg={item?.thumbnail?.url}
                  description={item?.newsDetails[0]?.description}
                  title={item?.title}
                  date={item?.createdAt}
                  onClick={() =>
                    router.push(PATH_HOME.news.detail.replace(":id", item?.id))
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      )}
      <Box>
        <Swiper
          // ref={sliderRef}
          className="swiperNews"
          // pagination={true}
          modules={[Pagination]}
          style={{
            width: "90%",
            paddingBottom: "3vh",
          }}
          spaceBetween={"20px"}
          breakpoints={{
            0: {
              navigation: true,
            },
            400: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 3,
              lazyPreloadPrevNext: 1,
            },
            1000: {
              slidesPerView: 4,
              navigation: false,
            },
          }}
        >
          {/* {MOCK_DATA_PRODUCT?.map((item, index) => (
            <SwiperSlide key={index}>
              <SliderMenuItem
                srcImg={item?.srcImg}
                title="welcome to valhalla saaaaaaaaaasss"
              />
            </SwiperSlide>
          ))} */}
          {dataMenu?.data?.news?.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <SliderNewsItem
                srcImg={item?.thumbnail?.url}
                description={item?.newsDetails[0]?.description}
                title={item?.title}
                date={item?.createdAt}
                onClick={() =>
                  router.push(PATH_HOME.news.detail.replace(":id", item?.id))
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Stack
        sx={{ width: "100%" }}
        justifyContent={"center"}
        flexDirection={"row"}
      >
        <Button
          component="span"
          variant="contained"
          sx={{
            // background: "linear-gradient(90deg, #66BA7A , #00A55D, #1F8A70)",
            background: theme.palette.primary.main,
            borderRadius: "60px",
            width: "fit-content",
            padding: "16px 24px 16px 24px",
            minHeight: "56px",
            textTransform: "none",
          }}
          endIcon={<Iconify icon={"solar:arrow-right-outline"} />}
          onClick={() => {
            router.push(PATH_HOME.news.root);
          }}
        >
          Xem tất cả
        </Button>
      </Stack>
    </Stack>
  );
};
