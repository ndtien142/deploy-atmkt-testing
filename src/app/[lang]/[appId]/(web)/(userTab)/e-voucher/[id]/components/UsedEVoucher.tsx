"use client";
import Image from "@/common/components/Image";
import { Box, Divider, Stack, Typography, FormHelperText } from "@mui/material";
import React from "react";
import { IDetailEVoucherProps } from "../detailEVoucher.interface";
import CopiedTextField from "./CopiedTextField";
import Markdown from "@/common/components/hook-form/Markdown";
import { fDate, formatDate } from "@/common/utils/common.utils";

const UsedEVoucher = ({ voucher }: IDetailEVoucherProps) => {
  return (
    <Stack spacing={2}>
      <Stack
        padding={1}
        alignItems={"center"}
        boxShadow={"0px 3.216397762298584px 13.669690132141113px 0px #00000040"}
        spacing={1}
        width={"100%"}
        direction={{ xs: "column", sm: "row" }}
        overflow={"hidden"}
        bgcolor={"#FFF"}
        borderRadius={{ xs: "16px", sm: "16px" }}
      >
        <Stack width={"100%"}>
          <Stack
            width={"100%"}
            height={{ xs: "143px", md: "256px" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              src={voucher?.product?.thumbnail?.url}
              alt="used image"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "300px",
                objectFit: "contain",
              }}
            />
          </Stack>
          <Box width={"100%"} textAlign={"center"} position={"relative"}>
            <Typography
              color={"##1A1A1A"}
              fontWeight={600}
              fontSize={{ xs: "16px", md: "18px" }}
              mb={2}
            >
              {voucher?.product?.productDetails[0]?.name}
            </Typography>
            <Divider sx={{ borderStyle: "dashed", display: { sm: "none" } }} />
            <Box
              width={"45px"}
              height={"45px"}
              borderRadius={"100%"}
              bgcolor={"#F5F5F5"}
              position={"absolute"}
              top={"46%"}
              left={"-12%"}
              display={{ sm: "none" }}
            />
            <Box
              display={{ sm: "none" }}
              width={"45px"}
              height={"45px"}
              borderRadius={"100%"}
              bgcolor={"#F5F5F5"}
              position={"absolute"}
              top={"46%"}
              right={"-12%"}
            />
          </Box>
        </Stack>
        <Stack width={"100%"} alignItems={"center"}>
          {voucher?.usedInfo?.codeImageLink &&
            voucher?.evoucherInfo.type !== "TOPUP" && (
              <Box
                boxShadow={
                  "0px 3.216397762298584px 13.669690132141113px 0px #00000040"
                }
                width={"150px"}
                height={"150px"}
                padding={"8px"}
                mt={"8px"}
              >
                <Image
                  ratio="1/1"
                  src={voucher?.usedInfo?.code}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  alt="qr_code"
                />
              </Box>
            )}
          <CopiedTextField code={voucher?.usedInfo?.code} />
        </Stack>
      </Stack>
      <Stack
        padding={1}
        boxShadow={"0px 3.216397762298584px 13.669690132141113px 0px #00000040"}
        spacing={1}
        width={"100%"}
        overflow={"hidden"}
        bgcolor={"#FFF"}
        borderRadius={{ xs: "16px", sm: "16px" }}
        mb={"300px"}
        px={"11px"}
        pt={"24px"}
        pb={"40px"}
      >
        <Stack width={"100%"} alignItems={"center"}>
          {voucher?.usedInfo?.serial && (
            <Typography fontSize={"18px"}>
              Serial:{" "}
              <Typography fontWeight={600} color={"#1F8A70"} display={"inline"}>
                {voucher?.usedInfo?.serial}
              </Typography>
            </Typography>
          )}
          {voucher?.usedInfo?.pin && (
            <Typography fontSize={"18px"}>
              Pin:{" "}
              <Typography fontWeight={600} color={"#1F8A70"} display={"inline"}>
                {voucher?.usedInfo?.pin}
              </Typography>
            </Typography>
          )}
          <Typography
            fontSize={"16px"}
            fontWeight={400}
            color={"#000"}
            textAlign={"center"}
            px={"10px"}
          >
            Không cung cấp ảnh chụp màn hình cho nhân viên khi thanh toán
          </Typography>
          <Typography fontSize={"18px"}>
            Hiệu lực sử dụng:{" "}
            <Typography fontWeight={600} color={"#1F8A70"} display={"inline"}>
              {voucher?.usingExpiresAt
                ? formatDate(voucher?.usingExpiresAt)
                : ""}
            </Typography>
          </Typography>
          <FormHelperText sx={{ color: "red" }}>
            *Vui lòng sử dụng mã tại cửa hàng trước ngày{" "}
            {voucher?.usingExpiresAt ? formatDate(voucher?.usingExpiresAt) : ""}
          </FormHelperText>
        </Stack>
        <Stack mt={"20px"} spacing={"8px"} alignItems={"center"}>
          <Typography fontSize={"18px"} fontWeight={600} color={"#000"}>
            Điều kiện sử dụng
          </Typography>
          <Markdown>{voucher?.evoucherInfo.data.desc}</Markdown>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default UsedEVoucher;
