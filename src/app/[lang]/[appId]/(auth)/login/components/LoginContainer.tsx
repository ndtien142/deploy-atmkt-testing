"use client";

import React, { useEffect, useState } from "react";
import { Card, Divider, Typography } from "@mui/material";
import LoginForm from "./LoginForm";
import useTranslation from "next-translate/useTranslation";
import { PATH_AUTH } from "@/common/constants/path.constants";
import { TLink } from "@/common/components/TLink";
import SocialLogin from "./SocialLogin";
import { useTheme } from "@mui/material";
const LoginContainer = () => {
  const { t } = useTranslation("auth");
  const [triggerRender, setTriggerRender] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setTriggerRender(true);
  }, [triggerRender]);
  return (
    <Card
      sx={{
        width: "30vw",
        p: 3,
        minWidth: "350px",
        mx: "auto",
      }}
    >
      <LoginForm />
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        {t("dont_have_account")}{" "}
        <TLink
          href={PATH_AUTH.register}
          style={{ color: theme.palette.primary.main }}
        >
          {t("get_started")}
        </TLink>
      </Typography>
      <Divider
        sx={{
          my: 3,
        }}
      >
        {t("auth:or")}
      </Divider>

      <SocialLogin />
    </Card>
  );
};

export default LoginContainer;
