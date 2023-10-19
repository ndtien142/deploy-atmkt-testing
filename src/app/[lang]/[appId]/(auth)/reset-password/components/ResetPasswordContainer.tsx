"use client";

import { Card } from "@mui/material";
import ResetPasswordForm from "./ResetPasswordForm";
import { RulePassword } from "@/app/[lang]/[appId]/(auth)/create-information/components/RulePassword";
import { useEffect, useState } from "react";
const InformationContainer = () => {
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
      <ResetPasswordForm />
      <RulePassword />
    </Card>
  );
};

export default InformationContainer;
