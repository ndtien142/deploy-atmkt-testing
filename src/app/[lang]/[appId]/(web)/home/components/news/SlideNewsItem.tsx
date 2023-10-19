import Iconify from "@/common/components/Iconify";
import ATypographyEllipsis from "@/common/components/customComponent/ATyporgraphyEllipsis";
import { DEFAULT_MAIN_COLOR } from "@/common/constants/color.constants";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { formatDate } from "../../../../../../../common/utils/common.utils";

type Props = {
  srcImg?: string;
  title?: string;
  description?: string;
  date?: string;
  onClick?: VoidFunction;
};

export const SliderNewsItem = (props: Props) => {
  const { srcImg, onClick, title, description, date } = props;
  return (
    <Stack
      sx={{
        // background: "rgba(31, 138, 112, 0.1)",
        alignItems: "center",
        justifyContent: "space-between",
        // width: "295px",
        // height: "333px",
        borderRadius: "24px 24px 0px 0px",
        border: "1px solid var(--grey-2, #FAFAFA)",
        boxShadow: "3px 4px 13px 0px rgba(0, 0, 0, 0.04)",
        cursor: "pointer",
      }}
      spacing={"16px"}
      onClick={onClick}
    >
      <Box
        sx={{
          borderRadius: "24px 24px 0px 0px",
          width: "100%",
          height: "70%",
          minHeight: "180px",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${srcImg})`,
        }}
      />
      <Stack
        boxSizing={"border-box"}
        width={"100%"}
        height={"36%"}
        sx={{
          paddingX: "24px",
        }}
        pb="24px"
        alignItems={"flex-start"}
      >
        <ATypographyEllipsis
          sx={{
            maxWidth: "90%",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "24px",
          }}
        >
          {title}
        </ATypographyEllipsis>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            color: "primary.main",
          }}
        >
          {formatDate(date || "")}
        </Typography>
        <Typography
          sx={{
            WebkitLineClamp: 3,
            color: "var(--black-opacity-30, #616161)",
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "16px",
            maxHeight: "48px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};
