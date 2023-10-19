import Iconify from "@/common/components/Iconify";
import { DEFAULT_MAIN_COLOR } from "@/common/constants/color.constants";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

type Props = {
  srcImg?: string;
  name?: string;
  position?: string;
  content?: string;
  onClick?: VoidFunction;
};

export const ReviewsItem = (props: Props) => {
  const { srcImg, onClick, name, position, content } = props;
  return (
    <Box
      //   spacing={2}
      sx={{
        display: "flex",
        // border: "1px solid black",
        alignItems: "center",
        justifyContent: "space-between",
        align: "center",
        cursor: "pointer",
        // width: "400px",
        // height: "400px",
        // height: "480px",
        paddingX: "20px",
        pt: "20px",
        pb: "20px",
        borderRadius: "16px",
        border: "1px solid var(--grey-2, #FAFAFA)",
        boxShadow: "0px 12px 40px 0px rgba(0, 0, 0, 0.04)",
        position: "relative",
        marginBottom: "50px",
      }}
      onClick={onClick}
    >
      <Iconify
        icon={"mdi:comma-circle"}
        height={40}
        width={40}
        color={"primary.main"}
        sx={{ position: "absolute", top: "-20px", right: "30px" }}
      />
      <Stack
        sx={{
          width: "100%",
          alignSelf: "flex-start",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
        spacing={5}
      >
        <Box
          sx={{
            width: "40%",
            aspectRatio: "1/1",
            borderRadius: "100%",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${srcImg})`,
            top: "-20px",
            right: "30px",
            height: "20%",
          }}
        />
        <Typography
          sx={{
            alignSelf: "center",
            textAlign: "justify",
            maxWidth: "100%",
            color: "black",
            height: "60%",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "22px",
            // textOverflow: "ellipsis",
            overflow: "hidden",
            minHeight: { xs: "unset", sm: "200px" },
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 10,
          }}
        >
          {content}
        </Typography>
        <Stack
          spacing={"12px"}
          sx={{
            width: "100%",
            height: "20%",
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              width: "100%",
              height: "100%",
              alignSelf: "center",
              alignItems: "center",
            }}
            spacing={"2px"}
          >
            <Typography
              sx={{
                alignSelf: "center",
                textAlign: "center",
                maxWidth: "100%",
                color: "black",
                //   maxHeight: "100%",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "24px",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                alignSelf: "center",
                textAlign: "center",
                maxWidth: "100%",
                color: "black",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "16px",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {position}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
