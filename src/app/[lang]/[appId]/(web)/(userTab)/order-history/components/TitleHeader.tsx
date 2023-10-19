import React from "react";
import { Typography } from "@mui/material";
import useTranslation from "next-translate/useTranslation";

type Props = {
  title: string;
};

export const TitleHeader = ({ title }: Props) => {
  const { t } = useTranslation("common");
  return (
    <Typography
      sx={{
        color: "#1A1A1A",
        fontSize: "24px",
        fontWeight: "700",
        fontFamily: "Plus Jakarta Sans",
        mb: "20px",
      }}
    >
      {/* {t("myorder.titleHeading")} */}
      {title}
    </Typography>
  );
};
