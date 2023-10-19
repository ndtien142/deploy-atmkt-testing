"use client";

import { PATH_AUTH, PATH_HOME } from "@/common/constants/path.constants";
import { Card, Typography, useTheme } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import RegisterForm from "./RegisterForm";
import { useEffect, useState } from "react";
const RegisterContainer = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const [triggerRender, setTriggerRender] = useState(false);

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
      <RegisterForm />
      <Typography variant="body2" align="left" sx={{ mt: 3 }}>
        {t("auth:register_term")}{" "}
        <Link
          href={PATH_HOME.policy.root}
          style={{ color: theme.palette.primary.main }}
        >
          {t("auth:terms_of_service")}
        </Link>{" "}
        {t("và")}{" "}
        <Link
          href={PATH_HOME.policy.term}
          style={{ color: theme.palette.primary.main }}
        >
          {t("auth:privacy_policy")}{" "}
        </Link>
        {t("auth:end_register_term")}
      </Typography>

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        {t("auth:already_have_account")}{" "}
        <Link
          href={PATH_AUTH.login}
          style={{ color: theme.palette.primary.main }}
        >
          {t("auth:login")}
        </Link>
      </Typography>
    </Card>
  );
};

export default RegisterContainer;
