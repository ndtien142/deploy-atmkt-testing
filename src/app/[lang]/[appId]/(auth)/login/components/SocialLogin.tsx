"use client";

import Iconify from "@/common/components/Iconify";
import { Box, IconButton, Stack } from "@mui/material";
import React from "react";
import LoginWithFacebook from "./LoginWithFB";
import LoginWithGoogle from "./LoginWithGoogle";

const SocialLogin = () => {

  return (
    <Stack
      direction={"column"}
      spacing={2}
      justifyContent={"space-between"}
    >
      <LoginWithFacebook />
      <LoginWithGoogle />
    </Stack>
  );
};

export default SocialLogin;

