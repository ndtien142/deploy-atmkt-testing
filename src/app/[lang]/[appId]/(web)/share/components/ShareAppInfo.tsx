import React from "react";
import { Card, Stack, Typography, TextField, Box } from "@mui/material";
import Image from "@/common/components/Image";

const ShareAppInfo = () => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        padding: { xs: "16px", md: "24px", lg: "36px" },
        textAlign: "center",
        boxShadow:
          "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.2)",
        borderRadius: "0px",
      }}
    >
      <Stack
        width={"100%"}
        justifyContent={"space-between"}
        pb={{ xs: "24px", md: "36px" }}
        mb={{ xs: "24px", md: "36px" }}
        borderBottom={"1px dashed #919EAB3D"}
        direction={"row"}
        spacing={"20px"}
      >
        <Stack spacing={"22px"} width={"70%"}>
          <Stack spacing={{ xs: "16px", md: "24px" }}>
            <Typography
              fontSize={{ xs: "16px", md: "24px" }}
              color={"#000"}
              fontWeight={{ xs: 600, md: 700 }}
              textAlign={"left"}
            >
              Link tải ứng dụng
            </Typography>
            <TextField
              value={"https://onelink.to/xndhjq"}
              sx={{
                width: "100%",
                borderColor: "#919EAB52",
              }}
              InputProps={{
                endAdornment: (
                  <Image
                    style={{
                      position: "relative",
                      width: "16px",
                      height: "18px",
                      overflow: "hidden",
                      flexShrink: "0",
                      marginRight: "5px",
                    }}
                    alt=""
                    src="/assets/icons/ic_copy.svg"
                  />
                ),
              }}
            />
          </Stack>
          <Stack spacing={{ xs: "16px", md: "24px" }}>
            <Typography
              fontSize={{ xs: "16px", md: "24px" }}
              color={"#000"}
              fontWeight={{ xs: 600, md: 700 }}
              textAlign={"left"}
            >
              Mã người giới thiệu
            </Typography>
            <TextField
              value={"https://onelink.to/xndhjq"}
              sx={{
                width: "100%",
              }}
              InputProps={{
                endAdornment: (
                  <Image
                    style={{
                      position: "relative",
                      width: "16px",
                      height: "18px",
                      overflow: "hidden",
                      flexShrink: "0",
                      marginRight: "5px",
                    }}
                    alt=""
                    src="/assets/icons/ic_copy.svg"
                  />
                ),
              }}
            />
          </Stack>
        </Stack>
        <Stack spacing={{ xs: "16px", md: "24px" }}>
          <Typography
            fontSize={{ xs: "16px", md: "24px" }}
            color={"#000"}
            fontWeight={{ xs: 600, md: 700 }}
            textAlign={"center"}
          >
            Quét mã QR
          </Typography>
          <Box
            sx={{
              width: { xs: "110px", md: "168px" },
              height: { xs: "110px", md: "168px" },
            }}
          >
            <Image
              src="/assets/icons/qr_code.png"
              width={'100%'}
              height={'100%'}
              style={{
                objectFit: "cover",
              }}
              alt="qr code"
            />
          </Box>
        </Stack>
      </Stack>
      <Stack spacing={{ xs: "16px", md: "24px" }}>
        <Typography
          fontSize={"24px"}
          color={"#000"}
          fontWeight={700}
          textAlign={"left"}
        >
          Hướng dẫn chia sẻ app
        </Typography>
        <Stack
          width={"100%"}
          padding={{ xs: "16px", md: "24px" }}
          border={"1px solid #919EAB"}
          borderRadius={"24px"}
          spacing={"24px"}
        >
          <Stack
            direction={"row"}
            spacing={{ xs: "5px", md: "14px" }}
            alignItems={"center"}
          >
            <Image
              src="/assets/icons/check_icon.svg"
              mr={{ xs: "25px", sm: "0px" }}
              style={{
                width: "20px",
                height: "20px",
              }}
              alt="check_icon"
            />
            <Typography fontSize={"16px"} color={"#667085"} fontWeight={400}>
              Bước 1: Chia sẻ sản phẩm hoặc đánh giá tâm đắc với bạn bè.
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={{ xs: "5px", md: "14px" }}
            alignItems={"center"}
          >
            <Image
              src="/assets/icons/check_icon.svg"
              mr={{ xs: "25px", sm: "0px" }}
              style={{
                width: "20px",
                height: "20px",
              }}
              alt="check_icon"
            />
            <Typography fontSize={"16px"} color={"#667085"} fontWeight={400}>
              Bước 2: Chia sẻ sản phẩm hoặc đánh giá tâm đắc với bạn bè.
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={{ xs: "5px", md: "14px" }}
            alignItems={"center"}
          >
            <Image
              src="/assets/icons/check_icon.svg"
              mr={{ xs: "25px", sm: "0px" }}
              style={{
                width: "20px",
                height: "20px",
              }}
              alt="check_icon"
            />
            <Typography fontSize={"16px"} color={"#667085"} fontWeight={400}>
              Bước 3: Chia sẻ sản phẩm hoặc đánh giá tâm đắc với bạn bè.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ShareAppInfo;
