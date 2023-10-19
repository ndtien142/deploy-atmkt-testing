import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";
import { DEFAULT_MAIN_COLOR } from "@/common/constants/color.constants";
import Iconify from "@/common/components/Iconify";
import { SliderNewsItem } from "./SlideNewsItem";
import { SliderNewsPrimaryItem } from "./SlideNewsPrimaryItem";
import { INewsToSubject } from "../interface";
import "src/common/styles/css/homeStyle.css";
import { useDispatch } from "@/common/redux/store";
import {
  setCurrentSubject,
  setTitleCurrentSubject,
} from "../../subject/common/slice";
import { setCurrentSubjectNews } from "../../(userTab)/profile/account-common/reducers/customer-profile.slice";

type Props = {
  data: INewsToSubject[];
  subjectId: number;
  titleSubject: string;
};

export const FirstMultiItem = ({ data, subjectId, titleSubject }: Props) => {
  const matches = useMediaQuery("(min-width:600px)");
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <Stack
        spacing={5}
        sx={{
          width: "100%",
        }}
      >
        {matches && (
          <Box>
            <Swiper
              // ref={sliderRef}
              className="swiperNews"
              pagination={true}
              modules={[Pagination]}
              style={{
                width: "100%",
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
              {data?.map((item: any, index: number) => (
                <SwiperSlide key={index}>
                  <SliderNewsPrimaryItem
                    srcImg={item?.news?.thumbnail?.url}
                    description={item?.news?.newsDetails[0]?.description}
                    title={item?.news?.title}
                    date={item?.news?.createdAt}
                    onClick={() =>
                      router.push(
                        PATH_HOME.news.detail.replace(":id", item?.news?.id)
                      )
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
              width: "100%",
              minHeight: "370px",
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
            {data?.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <SliderNewsItem
                  srcImg={item?.news?.thumbnail?.url}
                  description={item?.news?.newsDetails[0]?.description}
                  title={item?.news?.title}
                  date={item?.news?.createdAt}
                  onClick={() =>
                    router.push(
                      PATH_HOME.news.detail.replace(":id", item?.news?.id)
                    )
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Stack>
      <Stack
        sx={{ width: "100%" }}
        justifyContent={"center"}
        flexDirection={"row"}
        marginTop={"0!important"}
      >
        <Button
          variant="contained"
          sx={{
            // background: "linear-gradient(90deg, #66BA7A , #00A55D, #1F8A70)",
            background: DEFAULT_MAIN_COLOR,
            borderRadius: "60px",
            width: "fit-content",
            padding: "16px 24px 16px 24px",
            minHeight: "56px",
            textTransform: "none",
          }}
          endIcon={<Iconify icon={"solar:arrow-right-outline"} />}
          onClick={() => {
            dispatch(setCurrentSubjectNews(subjectId.toString()));
            dispatch(setTitleCurrentSubject(titleSubject));
            router.push(PATH_HOME.news.subject);
          }}
        >
          Xem tất cả
        </Button>
      </Stack>
    </>
  );
};
