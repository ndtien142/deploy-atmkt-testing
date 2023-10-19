"use client";
import React from "react";
import { Stack, Typography } from "@mui/material";
import Image from "@/common/components/Image";

export const EmptyEVoucher = () => {
  return (
    <Stack
      spacing={5}
      sx={{ padding: 3, width: "100%" }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Image src="/assets/empty-history-order.svg" alt="empty-order" />
      <Typography
        sx={{
          color: "#666E80",
          textAlign: "center",
          fontWeight: 700,
          fontSize: "22px",
        }}
      >
        Bạn chưa có E-Voucher nào đã sử dụng/ hết hạn
      </Typography>
    </Stack>
  );
};
