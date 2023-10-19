"use client";
import React, { useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import { ICopiedTextFieldProps } from "../detailEVoucher.interface";
import Iconify from "@/common/components/Iconify";
import { useDispatch, useSelector } from "@/common/redux/store";
import { setCurrentCopyText } from "../detailEVoucherSlice";
import useTranslation from "next-translate/useTranslation";

const CopiedTextField = ({ code }: ICopiedTextFieldProps) => {
  const { currentCopyText } = useSelector((state) => state.detailEVoucher);
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const handleCopyText = () => {
    dispatch(setCurrentCopyText(code));
    navigator.clipboard.writeText(code);
  };
  useEffect(() => {
    return () => {
      dispatch(setCurrentCopyText(""));
    };
  }, []);
  return (
    <Stack
      mt={"30px"}
      alignItems={"center"}
      pb={"34px"}
      sx={{
        cursor: "pointer",
      }}
      onClick={handleCopyText}
    >
      <Stack spacing={"14px"} direction={"row"} alignItems={"center"}>
        <Iconify
          color="#1F8A70"
          icon={currentCopyText === code ? "typcn:tick" : "uil:copy"}
          key={currentCopyText}
          sx={{ width: "24px", height: "24px" }}
        />
        <Typography
          fontSize={{ xs: "16px", md: "24px" }}
          fontWeight={400}
          color={"#000"}
        >
          {t("e_voucher.click_to_copy_the_code")}
        </Typography>
      </Stack>
      <Typography
        fontSize={{ xs: "16px", sm: "18px", lg: "24px" }}
        fontWeight={600}
        color={"#1F8A70;"}
      >
        {code}
      </Typography>
    </Stack>
  );
};

export default CopiedTextField;
