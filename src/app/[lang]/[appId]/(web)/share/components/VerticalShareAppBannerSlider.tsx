import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";
import { TypeRoute } from "../share.interface";
import _ from "lodash";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "@/common/components/Image";

const VerticalShareAppBannerSlider = ({ banner }: any) => {
  const router = useRouter();
  const handleNavigate = (item: any) => {
    const type = item?.typeRoute;
    const link = item?.link;
    if (type !== TypeRoute.DEEP_LINK) {
      router.push(link as never);
    } else {
      window.open(link, "_blank");
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
      }}
      ml={{ xs: 0, md: "20px" }}
      overflow={"hidden"}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        style={{
          width: "100%",
          height: "100%",
        }}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {banner?.data?.map((item: any, index: number) => (
          <SwiperSlide
            style={{
              width: "100%",
              height: "100%",
            }}
            key={index}
          >
            <Box
              onClick={() => handleNavigate(item)}
              sx={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Image
                src={item?.image}
                alt="Banner"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default VerticalShareAppBannerSlider;
