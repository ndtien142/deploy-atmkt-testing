"use client";
import { useDispatch } from "@/common/redux/store";
import { Typography, Stack, Button, Box } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { setIsOpenCreateForm } from "../../address-common/slice";
import Iconify from "@/common/components/Iconify";

export default function AddressHeader() {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const handleOpenCreateForm = () => {
    dispatch(setIsOpenCreateForm(true));
  };

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      mb={"10px"}
      px={{ xs: "16px", sm: "32px" }}
    >
      <Typography
        sx={{
          color: "#1A1A1A",
          fontSize: { xs: "20px", md: "24px" },
          fontWeight: "700",
          fontFamily: "Plus Jakarta Sans",
          mb: "10px",
        }}
      >
        {t("address.heading")}
      </Typography>
      <Button
        variant="text"
        sx={{ px: "12px", justifyContent: { xs: "flex-end" } }}
        onClick={handleOpenCreateForm}
      >
        <Iconify
          icon={"material-symbols:add"}
          color={"primary.main"}
          sx={{
            width: { xs: "30px", sm: "20px" },
            height: { xs: "30px", sm: "20px" },
            mr: { xs: 0, sm: "6px" },
          }}
        />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            fontFamily: "Plus Jakarta Sans",
            color: "primary.main",
            display: { xs: "none", sm: "flex" },
          }}
        >
          {t("address.add_btn")}
        </Typography>
      </Button>
    </Stack>
  );
}
