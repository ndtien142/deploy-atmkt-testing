"use client";

import Iconify from "@/common/components/Iconify";
import Image from "@/common/components/Image";
import { useDispatch, useSelector } from "@/common/redux/store";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import ModalGift from "./ModalGift";
import { useGetCountNotifyUnread } from "../../../../home/hooks/useGetCountNotifyUnread";
import { setCountNotifyUnread } from "../../../../web.slice";

const AddPointInfo = () => {
  const router = useRouter();
  const { data } = useSelector((state) => state.addPoint);
  const dispatch = useDispatch();
  const { dataCountNotifyUnread } = useGetCountNotifyUnread();

  useEffect(() => {
    dispatch(setCountNotifyUnread(dataCountNotifyUnread || 0));
  }, [dataCountNotifyUnread]);

  return (
    <Box
      sx={{
        width: {
          xs: "90vw",
          sm: "50vw",
          md: "30vw",
        },
        mr: "5vw",
        mt: "5%",
      }}
    >
      <ModalGift
        game={data?.addedGamePlayTimes}
        voucher={data?.addedLoyaltyCodeGiftProduct}
        point={data?.addPoint}
      />
      <Typography variant="h3">
        Cảm ơn bạn đã chọn sản phẩm của{" "}
        <span style={{ color: "#1F8A70" }}>ShopGrocery</span>
      </Typography>

      <Typography variant="h6" mt={2}>
        Bạn đã tích thành công{" "}
        <span style={{ color: "#1F8A70" }}>{data?.addPoint} xu</span>!
      </Typography>

      <Typography variant="body1">
        Bạn còn{" "}
        <span style={{ color: "#1F8A70" }}>{data?.lackRankPoint} xu</span> để
        thăng hạn <span style={{ color: "#1F8A70" }}>{data?.nextTierCode}</span>
      </Typography>

      <Image
        src={"/assets/point-rank.svg"}
        alt={"rank"}
        sx={{
          width: {
            xs: "90vw",
            sm: "50vw",
            md: "30vw",
          },
          zIndex: 2,
          position: "absolute",
          mt: 2,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          mt: {
            xs: "calc(4vw + 16px)",
            sm: "calc(2vw + 16px)",
            md: "calc(1.5vw + 16px)",
          },
          width: {
            xs: "calc(90vw - 20px)",
            sm: "calc(50vw - 20px)",
            md: "calc(30vw - 20px)",
          },
          left: "calc(5vw + 10px)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            height: "1vh",
            zIndex: 1,
            border: 1,
            borderColor: "#1F8A70",
            width: "100%",
            borderRadius: "24px",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: 1,
            backgroundColor: "#1F8A70",
            width: `${data?.percent}%`,
            height: "1vh",
            borderRadius: "24px",
          }}
        ></Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          borderRadius: "24px",
          paddingY: 1,
          boxShadow: 0.5,
          backgroundColor: "#1F8A70",
          mt: {
            xs: 10,
            sm: 13,
            md: 15,
          },
        }}
        onClick={() => router.back()}
        endIcon={
          <Iconify
            icon={"heroicons:arrow-right-20-solid"}
            sx={{ width: "24px" }}
          />
        }
      >
        Tích thêm xu
      </Button>
    </Box>
  );
};

export default AddPointInfo;
