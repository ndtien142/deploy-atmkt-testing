import Iconify from "@/common/components/Iconify";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

type Props = {
  srcImg?: string;
  title?: string;
  onClick?: VoidFunction;
};

export const SliderMenuItem = (props: Props) => {
  const { srcImg, onClick, title } = props;
  const theme = useTheme();
  return (
    <Box
      //   spacing={2}
      sx={{
        display: "flex",
        // border: "1px solid black",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
        align: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Stack
        onClick={onClick}
        className="box-menu-item"
        sx={{
          alignSelf: "center",
          borderRadius: "12px",
          background: "rgba(31, 138, 112, 0.1)",
          // opacity: '10%',
          ":hover": {
            // background:
            //   "linear-gradient(90deg, #66BA7A , #00A55D, #1F8A70)",
            background: theme.palette.primary.main,
          },
          // boxSizing: "border-box",
          width: "140px",
          minHeight: "166px",
          // border: "1px solid black",
          paddingX: "25px",
          paddingY: "8px",
          // boxShadow: 3,
          // overflow: 'hidden',
          alignItems: "center",
          justifyContent: "space-between",
        }}
        spacing={"12px"}
      >
        <Box
          sx={{
            width: "100%",
            height: "90px",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundImage: `url(${srcImg})`,
          }}
        />
        <Typography
          className="box-menu-item"
          sx={{
            alignSelf: "center",
            textAlign: "center",
            maxWidth: "100px",
            color: "black",
            //   maxHeight: "100%",
            height: "52px",
            fontSize: "18px",
            lineHeight: "26px",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {title}
        </Typography>
      </Stack>
    </Box>
  );
};
