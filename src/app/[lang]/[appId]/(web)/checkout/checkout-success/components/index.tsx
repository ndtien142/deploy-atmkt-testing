"use client";

import React from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";

export default function CheckoutSuccessContainer() {
  const router = useRouter();
  return (
    <Container maxWidth="lg" sx={{ paddingX: 3, paddingY: 10 }}>
      <Stack width={"80%"} marginX={"auto"} spacing={5}>
        <Typography
          sx={{
            fontSize: "24px",
            color: "#666E80",
            fontWeight: 700,
            textAlign: "center",
            paddingBottom: 5,
          }}
        >
          Wow, đơn hàng của bạn đã được đặt thành công !
        </Typography>

        <Image
          src="/assets/checkout-success.svg"
          alt="checkout-success"
          width={250}
          height={250}
          style={{ margin: "0 auto" }}
        />

        <Stack
          direction={"row"}
          spacing={2}
          marginTop={3}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: { xs: "30px", md: "60px" },
              padding: { xs: "8px 8px", md: "8px 16px", lg: "16px 24px" },
            }}
            onClick={() => router.push(PATH_HOME.eVoucher.list)}
          >
            <Typography fontWeight={500}>E-Voucher của tôi</Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: { xs: "30px", md: "60px" },
              padding: { xs: "8px 8px", md: "8px 16px", lg: "16px 24px" },
              fontWeight: 500,
            }}
            onClick={() => {
              router.push(PATH_HOME.order_history.list);
            }}
          >
            <Typography fontWeight={500}>Tình trạng đơn hàng</Typography>
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
