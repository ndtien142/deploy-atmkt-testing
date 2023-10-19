"use client";
import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import _ from "lodash";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "@/common/components/Image";
import { IUnUsedEVoucherProps } from "../detailEVoucher.interface";

const UnUsedEVoucherSlider = ({ data }: IUnUsedEVoucherProps) => {
  const slide: string[] = [];
  if (data && data?.productToVariants?.length > 0) {
    data?.productToVariants?.map((item) => {
      item?.productVariant?.images?.map((itemImg) => {
        slide.push(itemImg?.url);
      });
    });
  }
  return (
    <Box
      sx={{
        width: "100%",
      }}
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
        {slide?.map((item: any, index: number) => (
          <SwiperSlide
            style={{
              width: "100%",
              height: "100%",
            }}
            key={index}
          >
            <Box
              sx={{
                cursor: "pointer",
                borderRadius: "16px",
                overflow: "hidden",
                minWidth: "100px",
                minHeight: "100px",
              }}
              width={{ xs: "100%", md: "300px", lg: "350px" }}
              height={{ xs: "100%", md: "300px", lg: "350px" }}
              margin={"0 auto"}
            >
              <Image
                src={item}
                alt="Banner"
                ratio="1/1"
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

export default UnUsedEVoucherSlider;
