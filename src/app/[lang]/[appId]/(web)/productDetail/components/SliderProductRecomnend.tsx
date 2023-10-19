import {
  Stack,
  Box,
  Breadcrumbs,
  Typography,
  Link,
  Grid,
  alpha,
  IconButton,
  useTheme,
  Divider,
  Button,
  Card,
  Tab,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "src/common/styles/css/homeStyle.css";
import "swiper/css";
import "swiper/css/pagination";
import { useRef, useState } from "react";
import Iconify from "@/common/components/Iconify";
import Image from "@/common/components/Image";
import { ProductItemDefault } from "@/common/components/product/ProductItem";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";
import useTranslation from "next-translate/useTranslation";

type Props = {
  dataProductRelated?: any;
};

export const SliderProductRecomnend = (props: Props) => {
  const { dataProductRelated } = props;
  const swiperRef = useRef<any>(null);
  const route = useRouter();
  const theme = useTheme();

  const { t } = useTranslation("common");
  const [buttonSlider, setButtonSlider] = useState({
    currentIndex: 0,
    totalSlides: 0,
  });
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const { activeIndex, slides } = swiperRef.current.swiper;
      const totalSlides = slides.length;
      setButtonSlider({ currentIndex: activeIndex, totalSlides });
    }
  };
  return (
    <Stack spacing={3} width={"100%"}>
      <Stack
        display={"flex"}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Stack display={"flex"} direction={"row"} spacing={3}>
          <Box
            width={{ xs: "11px", sm: "22px" }}
            borderRadius={0.5}
            sx={{ background: theme.palette.primary.main }}
          />
          <Typography
            fontWeight={700}
            lineHeight={"50px"}
            fontSize={{ xs: 15, sm: 26 }}
          >
            {t("product.productRecommend")}
          </Typography>
        </Stack>
        <Stack
          display={"flex"}
          alignItems={"center"}
          direction={"row"}
          spacing={1}
        >
          <Button
            onClick={goPrev}
            sx={{
              height: { xs: 38, sm: 48 },
              background:
                buttonSlider?.currentIndex === 0
                  ? theme.palette.primary.main
                  : "#E1E2E6",
              borderRadius: "100px",
              minWidth: { xs: 40, sm: 48 },
              color: buttonSlider?.currentIndex === 0 ? "white" : "black",
              ":hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            <Iconify height={24} width={24} icon={"ic:round-arrow-back"} />
          </Button>
          <Button
            onClick={goNext}
            sx={{
              height: { xs: 38, sm: 48 },
              background:
                buttonSlider?.currentIndex === buttonSlider?.totalSlides - 4
                  ? theme.palette.primary.main
                  : "#E1E2E6",
              borderRadius: "100px",
              minWidth: { xs: 40, sm: 48 },
              color:
                buttonSlider?.currentIndex === buttonSlider?.totalSlides - 4
                  ? "white"
                  : "black",
              ":hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            <Iconify height={24} width={24} icon={"ic:round-arrow-forward"} />
          </Button>
        </Stack>
      </Stack>

      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        style={{
          width: "100%",
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        // className="mySwiper"
        onSlideChange={handleSlideChange}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 2,
            lazyPreloadPrevNext: 1,
          },
          1000: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
      >
        {dataProductRelated?.items?.map((itemProd: any, index: number) => (
          <SwiperSlide key={index}>
            <ProductItemDefault
              title={itemProd?.productDetails[0]?.name}
              srcImg={itemProd?.thumbnail?.url}
              property="1KG"
              price={itemProd?.price?.normalPrice}
              onClick={() => route.push(PATH_HOME.product.detail(itemProd?.id))}
              isOutOfStock={itemProd?.isOutOfStock}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};
