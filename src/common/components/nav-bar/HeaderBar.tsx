"use client";

import { Button, InputBase, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { functionList } from "./constants";
import { useRouter } from "next/navigation";

export const HeaderBar = () => {
  const { push } = useRouter();
  return (
    <Stack
      sx={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        // backgroundColor: '#000000',
        height: "119.58px",
      }}
    >
      <Image
        src="/clevertube-logo.png"
        alt=""
        width={160}
        height={103.58}
        // quality={100}
        style={{ objectFit: "cover" }}
      />
      <InputBase
        sx={{
          height: "48px",
          backgroundColor: "#F3F9FB",
          width: "339px",
          color: "#666666",
          padding: "10px",
          borderRadius: "15px",
        }}
        placeholder="Tìm kiếm"
        startAdornment={
          <Image
            src="/blue-search.png"
            width={14.07}
            height={14.42}
            style={{ marginRight: "10px" }}
            alt=""
          />
        }
      />
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {functionList?.map((item, index) => (
          <Typography
            onClick={() => push(item.navigateTo)}
            sx={{
              mr: "30px",
              color: "#216BCD",
              cursor: "pointer",
              fontWeight: 400,
              fontSize: "14px",
            }}
            key={index}
          >
            {item.name}
          </Typography>
        ))}

        <Button
          sx={{
            backgroundColor: "#216BCD",
            height: "48px",
            borderRadius: "60px",
            color: "#FFF",
            padding: "20px",
            ml: "18px",
          }}
        >
          Đăng ký thành viên
        </Button>
      </Stack>
    </Stack>
  );
};
