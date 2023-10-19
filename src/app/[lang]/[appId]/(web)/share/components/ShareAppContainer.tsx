"use client";
import React from "react";
import { Stack, Grid, Box } from "@mui/material";
import { useGetShareAppConfig } from "../hooks/useGetShareAppConfig";
import ShareAppBannerSlider from "./ShareAppBannerSlider";
import _ from "lodash";
import ShareAppInfo from "./ShareAppInfo";
import Breadcrumbs from "@/common/components/Breadcrumbs";
import VerticalShareAppBannerSlider from "./VerticalShareAppBannerSlider";

const ShareAppContainer = () => {
  const { dataShareAppConfig, isLoadingShareAppConfig } =
    useGetShareAppConfig();
  return (
    <>
      <Box
        px={{ xs: "15px", md: "75px", lg: "100px" }}
        pt={{ xs: "50px", md: "50px" }}
        pb={{ xs: "50px", md: "20px" }}
        bgcolor={"#F5F5F5"}
        alignItems={"left"}
      >
        <Breadcrumbs
          links={[
            {
              name: "Trang chủ",
              href: "/",
            },
            {
              name: "chia sẻ",
            },
          ]}
          activeLast
        />
      </Box>
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
          spacing={{ xs: 0, md: 2 }}
          justifyContent="center"
          alignItems="center"
          width={"100%"}
          px={{ xs: "16px", md: "75px", lg: "100px" }}
          pb={{ xs: "50px", md: "75px", lg: "100px" }}
          pt={{ xs: 0, md: "50px" }}
        >
          <Grid
            item
            xs={12}
            justifyContent={"flex-start"}
            alignItems={"center"}
            alignSelf={"flex-start"}
            maxHeight={"250px"}
            padding={"0px"}
            sx={{
              padding: "0 !important",
            }}
          >
            {!_.isEmpty(dataShareAppConfig?.sections[0]) ? (
              <ShareAppBannerSlider banner={dataShareAppConfig?.sections[0]} />
            ) : (
              <></>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            mt={{ xs: "16px", md: "24px" }}
            alignSelf={"flex-start"}
            sx={{
              padding: "0 !important",
            }}
          >
            <ShareAppInfo />
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            mt={{ xs: "16px", md: "24px" }}
            alignSelf={"flex-start"}
            sx={{
              padding: "0 !important",
            }}
          >
            {!_.isEmpty(dataShareAppConfig?.sections[1]) ? (
              <VerticalShareAppBannerSlider
                banner={dataShareAppConfig?.sections[1]}
              />
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default ShareAppContainer;
