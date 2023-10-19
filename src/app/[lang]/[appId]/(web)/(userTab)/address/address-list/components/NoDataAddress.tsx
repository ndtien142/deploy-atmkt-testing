"use client";

import { Box, Stack, Typography } from "@mui/material";
import useTranslation from "next-translate/useTranslation";

type Props = {
  isOpen: boolean;
};

export default function NoDataAddress({ isOpen = false }: Props) {
  const { t } = useTranslation("common");
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      display={isOpen ? "flex" : "none"}
    >
      <Stack spacing={3} alignItems={"center"}>
        <Box
          sx={{
            width: "294px",
            height: "292px",
            backgroundImage: "url(/assets/icons/core/empty-address.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <Typography
          sx={{
            fontFamily: "Plus Jakarta Sans",
            fontSize: { xs: "18px", md: "21.83px" },
            fontWeight: "700",
            color: "#666E80",
          }}
        >
          {t("address.empty_text")}
        </Typography>
      </Stack>
    </Stack>
  );
}
