"use client";
import Image from "@/common/components/Image";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import React from "react";
import { WHEEL_IMAGE } from "../../common/wheel.constants";
import { UserWon } from "../../common/wheel.interface";

interface Props {
  userWon: UserWon;
}

const GiftReceivedItem = ({ userWon }: Props) => {
  return (
    <Box width={"100%"} paddingY={"16px"}>
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
          <Image alt="gift" src={WHEEL_IMAGE.gift_wheel} ratio="1/1" />
        </Box>
        <Stack spacing={"5px"}>
          <Typography color={"#1F8A70"} fontSize={"16px"} fontWeight={600}>
            {userWon.userName}
          </Typography>
          <Typography color={"#98A1B3"} fontSize={"14px"} fontWeight={400}>
            {userWon.giftName}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default GiftReceivedItem;
