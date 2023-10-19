"use client";

import { Stack, useTheme, useMediaQuery, Divider } from "@mui/material";
import React from "react";
import { SIDE_BAR_ITEM } from "./constants";
import SideBarItem from "./components/SideBarItem";
import { usePathname } from "next/navigation";
import useTranslation from "next-translate/useTranslation";
import Breadcrumbs from "@/common/components/Breadcrumbs";
import SideBarHeader from "./components/SideBarHeader";
import { useSelector } from "react-redux";
import { showUserTabMobile } from "../../../(userTab)/slice";
import { useGetCustomerInfo } from "@/common/hooks/useGetCustomerInfo";
import { convertRouteByMerchant } from "@/common/utils/route";

const SideBarUser = () => {
  const { t } = useTranslation("common");
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("md"));
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const showUserTabXs = useSelector(showUserTabMobile);
  const currentPath = usePathname();
  const { data } = useGetCustomerInfo();
  const indexCurrentPage = SIDE_BAR_ITEM.findIndex((item) =>
    currentPath.includes(item.path)
  );
  return (
    <Stack mt={{ xs: "32px", md: 0 }}>
      <Stack
        direction={{ xs: "row", md: "column" }}
        justifyContent={{ xs: "space-between", md: "unset" }}
        px={{ xs: "16px", sm: "32px", md: "unset" }}
        width={{ xs: "100vw", md: "100%" }}
      >
        <Breadcrumbs
          links={[
            {
              name: t("sidebar.home"),
              href: convertRouteByMerchant("/"),
            },
            {
              name: t(SIDE_BAR_ITEM[indexCurrentPage]?.name),
              href: convertRouteByMerchant(
                SIDE_BAR_ITEM[indexCurrentPage]?.path
              ),
            },
          ]}
          activeLast
        />
        <SideBarHeader name={data?.name || ""} url={data?.avatar?.url || ""} />
      </Stack>
      {(matchesMd || (matchesXs && showUserTabXs)) && (
        <Stack
          gap={"12px"}
          mt={{ xs: "16px", md: "42px" }}
          px={{ xs: "16px", md: 0 }}
          direction={{ xs: "row", md: "column" }}
          sx={{ maxWidth: "100%", flexWrap: "wrap" }}
          justifyContent={{ xs: "space-around", md: "unset" }}
        >
          {SIDE_BAR_ITEM.map((item, index) => (
            <SideBarItem
              name={item.name}
              src={item.src}
              type={item.type}
              key={index}
              path={convertRouteByMerchant(item.path)}
              isActiveItem={currentPath.includes(item.path)}
              icon={item.icon}
            />
          ))}
        </Stack>
      )}
      {matchesXs && (
        <Divider
          sx={{
            mt: "16px",
          }}
        />
      )}
    </Stack>
  );
};

export default SideBarUser;
