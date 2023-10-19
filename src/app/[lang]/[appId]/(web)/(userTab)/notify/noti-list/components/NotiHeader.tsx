import { Typography } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import React from "react";

export default function NotiHeader() {
  const { t } = useTranslation("common");
  return (
    <Typography
      sx={{
        color: "#1A1A1A",
        fontSize: { xs: "20px", md: "24px" },
        fontWeight: "700",
        fontFamily: "Plus Jakarta Sans",
        mb: "10px",
        px: { xs: "16px", sm: "32px" },
      }}
      component="span"
    >
      {t("notify.headingList")}
    </Typography>
  );
}
