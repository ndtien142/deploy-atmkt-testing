import Iconify from "@/common/components/Iconify";
import ATypographyEllipsis from "@/common/components/customComponent/ATyporgraphyEllipsis";
import { Box, Stack, Typography, Button, useMediaQuery } from "@mui/material";
import React from "react";
import { formatDate } from "@/common/utils/common.utils";

type Props = {
  srcImg?: string;
  title?: string;
  description?: string;
  date?: string;
  onClick?: VoidFunction;
};

export const SliderNewsPrimaryItem = (props: Props) => {
  const { srcImg, onClick, title, description, date } = props;
  return (
    <Stack
      sx={{
        // background: "rgba(31, 138, 112, 0.1)",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        aspectRatio: "16/6",
        borderRadius: "24px 24px 24px 24px",
        border: "1px solid var(--grey-2, #FAFAFA)",
        boxShadow: "0px 12px 40px 0px rgba(0, 0, 0, 0.04)",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(0deg, rgba(41, 45, 50, 0.50) 0%, rgba(41, 45, 50, 0.50) 100%), url(${srcImg}), lightgray 50% `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        objectFit: "contain",
      }}
      spacing={"16px"}
      onClick={onClick}
    >
      <Stack
        boxSizing={"border-box"}
        width={"100%"}
        height={"100%"}
        sx={{
          paddingX: "24px",
        }}
        pb="24px"
        alignItems={"center"}
        justifyContent={"center"}
        spacing={3}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#FFF",
            letterSpacing: "3px",
          }}
        >
          {formatDate(date || "", "DD/MM/YYYY")}
        </Typography>
        <ATypographyEllipsis
          sx={{
            maxWidth: "90%",
            fontSize: "32px",
            fontWeight: 700,
            color: "#FFF",
            letterSpacing: "1px",
          }}
        >
          {title}
        </ATypographyEllipsis>

        <Typography
          sx={{
            WebkitLineClamp: 3,
            color: "#E5E5E5",
            fontSize: "20px",
            fontWeight: 700,
            maxHeight: "48px",
            overflow: "hidden",
            letterSpacing: "1px",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};
