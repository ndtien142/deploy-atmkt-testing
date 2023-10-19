"use client";

import { Box, Stack, Typography } from "@mui/material";
import useTranslation from "next-translate/useTranslation";

type Props = {
  isOpen: boolean;
};

export default function NoDataNoti({ isOpen }: Props) {
  const { t } = useTranslation("common");

  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      display={isOpen ? "flex" : "none"}
    >
      <Stack spacing={3}>
        <Box
          sx={{
            width: "234px",
            height: "230px",
            backgroundImage: "url(/assets/icons/core/empty-noti.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <Typography
          sx={{
            fontFamily: " Plus Jakarta Sans",
            fontWeight: 700,
            fontSize: { xs: "18px", md: "21.83px" },
            color: "rgba(102, 110, 128, 1)",
          }}
          component="span"
        >
          {t("notify.empty_text")}
        </Typography>
      </Stack>
    </Stack>
  );
}
