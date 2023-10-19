'use client'
import { Stack } from "@mui/material";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <Stack>{children}</Stack>;
};

export default Layout;
