"use client";
import React from "react";
import { Stack, Box, Typography, IconButton } from "@mui/material";
import Markdown from "@/common/components/hook-form/Markdown";
import { DEFAULT_POLICY_WHEEL } from "../../common/wheel.constants";
import { Dialog } from "@mui/material";
import { useDispatch, useSelector } from "@/common/redux/store";
import { setIsOpenPolicy } from "../../wheel.slice";
import Iconify from "@/common/components/Iconify";

const WheelPolicy = ({ policy }: { policy?: string }) => {
  const dispatch = useDispatch();
  const { isOpenPolicy } = useSelector((state) => state.wheelReducer);
  const handleClose = () => {
    dispatch(setIsOpenPolicy(false));
  };

  return (
    <Dialog
      onClose={handleClose}
      open={isOpenPolicy}
      PaperProps={{
        sx: {
          minWidth: { xs: "100vw", md: "720px" },
        },
      }}
    >
      <Stack width={"100%"} spacing={"16px"}>
        <Stack
          width={"100%"}
          bgcolor={"#1F8A70"}
          direction={"row"}
          alignItems={"center"}
          sx={{
            // borderRadius: "24px 24px 0px 0px",
            py: "10px",
            px: "10px",
            position: "sticky",
            top: "0",
          }}
        >
          <Typography
            textAlign={"center"}
            fontSize={"20px"}
            color={"#FFF"}
            fontWeight={700}
            justifySelf={"center"}
            width={"100%"}
          >
            Thể lệ
          </Typography>
          <IconButton
            onClick={handleClose}
            sx={{ justifySelf: "flex-end", color: "#FFFFFF" }}
          >
            <Iconify icon={"carbon:close-outline"} width={30} height={30} />
          </IconButton>
        </Stack>
        <Box
          width={"100%"}
          padding={"24px 36px 24px 36px"}
          bgcolor={"#FFF"}
          borderRadius={"12px"}
        >
          <Markdown>{policy || ""}</Markdown>
        </Box>
      </Stack>
    </Dialog>
  );
};

export default WheelPolicy;
