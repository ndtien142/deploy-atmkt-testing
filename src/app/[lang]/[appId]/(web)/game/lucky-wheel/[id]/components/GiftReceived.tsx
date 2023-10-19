"use client";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import React from "react";
import { useGetWinningHistory } from "../hooks/useGetWinningHistory";
import { useParams } from "next/navigation";
import Slider, { Settings } from "react-slick";
import Image from "@/common/components/Image";
import { WHEEL_IMAGE } from "../../common/wheel.constants";
import { UserWon } from "../../common/wheel.interface";

interface Props {
  listUserWon: UserWon[];
}
const GiftReceived = ({ listUserWon }: Props) => {
  const settings: Settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <></>,
    nextArrow: <></>,
    appendDots: (dots: React.ReactNode) => (
      <ul style={{ display: "none" }}>{dots}</ul>
    ),
    customPaging: (i) => <span>{i + 1}</span>,
  };
  const handleBeforeChange = (currentSlide: number, nextSlide: number) => {};

  const handleAfterChange = (currentSlide: number) => {};

  return (
    <Stack width={"100%"} spacing={"16px"}>
      <Box
        width={"100%"}
        bgcolor={"#1F8A70"}
        sx={{
          borderRadius: "24px 24px 0px 0px",
          py: "10px",
        }}
      >
        <Typography
          textAlign={"center"}
          fontSize={"20px"}
          color={"#FFF"}
          fontWeight={700}
        >
          Quà đã nhận
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "330px",
        }}
        overflow={"hidden"}
      >
        <Slider
          {...settings}
          beforeChange={handleBeforeChange}
          afterChange={handleAfterChange}
        >
          {listUserWon?.map((item, index) => {
            return (
              <Box width={"100%"} paddingY={"16px"} key={index}>
                <Stack
                  flexDirection={"row"}
                  width={"100%"}
                  gap={"12px"}
                  padding={"10px"}
                  bgcolor={"#FFF"}
                  alignItems={"center"}
                  height={"80px"}
                  borderRadius={"12px"}
                >
                  <Box
                    sx={{
                      width: "57px",
                      height: "57px",
                    }}
                  >
                    <Image
                      alt="gift"
                      src={WHEEL_IMAGE.gift_wheel}
                      ratio="1/1"
                    />
                  </Box>
                  <Stack spacing={"5px"}>
                    <Typography
                      color={"#1F8A70"}
                      fontSize={"16px"}
                      fontWeight={600}
                    >
                      {item.userName}
                    </Typography>
                    <Typography
                      color={"#98A1B3"}
                      fontSize={"14px"}
                      fontWeight={400}
                    >
                      {item.giftName}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Stack>
  );
};

export default GiftReceived;
