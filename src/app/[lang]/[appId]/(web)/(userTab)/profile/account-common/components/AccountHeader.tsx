import React from "react";
import { Box, Typography } from "@mui/material";
import { IAccountHeaderProps } from "../interfaces/customer-profile.interface";
import useTranslation from "next-translate/useTranslation";

const AccountHeader = ({ title }: IAccountHeaderProps) => {
  const { t } = useTranslation("common");
  return (
    <Box mb={"24px"}>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "28px",
          letterSpacing: "0em",
          textAlign: "left",
        }}
      >
        {t(title)}
      </Typography>
    </Box>
  );
};

export default AccountHeader;
