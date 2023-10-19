"use client";

import { Grid, Stack } from "@mui/material";
import React from "react";
import SideBarUser from "../layoutApp/components/side-bar";

const LayoutAppWithUserTab = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        minWidth: "100vw",
        justifyContent: "space-between",
        bgcolor: "#F5F5F5",
      }}
      alignItems={"center"}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        width={"100%"}
        px={{ xs: 0, md: "75px", lg: "100px" }}
        pb={{ xs: 0, md: "75px", lg: "100px" }}
        pt={{ xs: 0, md: "50px" }}
        sx={{
          ml: { xs: 0, md: "-16px" },
        }}
      >
        <Grid
          item
          xs={0}
          md={3}
          minHeight={{ xs: "auto", md: "492px" }}
          justifyContent={"flex-start"}
          alignItems={{ xs: "flex-start", md: "center" }}
          alignSelf={"flex-start"}
          display="flex"
          sx={{
            width: { xs: "100%", md: "auto" },
            backgroundColor: { xs: "#FFFFFF", md: "inherit" },
            padding: "0 !important",
            pl: { md: "16px !important" },
            pt: { md: "16px !important" },
          }}
        >
          <SideBarUser />
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          mt={{ xs: "0", md: "80px" }}
          alignSelf={"flex-start"}
          sx={{
            padding: "0 !important",
            pl: { md: "16px !important" },
            pt: { md: "16px !important" },
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default LayoutAppWithUserTab;
