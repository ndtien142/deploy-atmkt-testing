"use client";
import useTranslation from "next-translate/useTranslation";
import { Button, Stack, Typography } from "@mui/material";
import { SideBarItemProps } from "../interface";
import React from "react";
import Image from "@/common/components/Image";
import { TLink } from "@/common/components/TLink";
import { SIDE_BAR_ITEM } from "../constants";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/common/redux/store";
import { useGetCountNotifyUnread } from "../../../../home/hooks/useGetCountNotifyUnread";
import Iconify from "@/common/components/Iconify";

const SideBarItem = ({
  src,
  type,
  name,
  path,
  isActiveItem,
  icon,
}: SideBarItemProps) => {
  const { t } = useTranslation("common");
  const { countNotifyUnread } = useSelector(
    (state: RootState) => state.webReducer
  );
  const { dataCountNotifyUnread } = useGetCountNotifyUnread();
  return (
    <TLink href={path}>
      <Button
        sx={{
          bgcolor: isActiveItem ? "#F7F8FA" : "F5F5F5",
          borderRadius: { xs: "10px", md: "32px" },
          pr: { xs: 0, md: "80px" },
          pl: { xs: 0, md: "5px" },
          width: "100%",
        }}
        component="span"
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems="center"
          width={{ xs: "20vw", md: "100%" }}
        >
          {name === SIDE_BAR_ITEM[5].name ? (
            <>
              <Box sx={{ position: "relative" }}>
                {/* <Box
                  sx={{
                    backgroundImage: `url(${src})`,
                    width: "25px",
                    height: "25px",
                  }}
                /> */}
                <Iconify
                  icon={icon}
                  color={"primary.main"}
                  width={25}
                  height={25}
                />
                {dataCountNotifyUnread && dataCountNotifyUnread > 0 ? (
                  <Stack
                    sx={{
                      background: "red",
                      position: "absolute",
                      borderRadius: "50%",
                      width: "22px",
                      textAlign: "center",
                      color: "#FFFFFF",
                      padding: "1px",
                      fontSize: "12px",
                      top: -8,
                      right: -6,
                    }}
                  >
                    <span>{dataCountNotifyUnread}</span>
                  </Stack>
                ) : (
                  <></>
                )}
              </Box>
              <Typography
                fontSize="16px"
                fontWeight={isActiveItem ? 600 : 400}
                lineHeight="22px"
                color={isActiveItem ? "primary.main" : "#000000"}
                component="span"
              >
                {t(name)}
              </Typography>
            </>
          ) : (
            <>
              <Iconify
                icon={icon}
                color={"primary.main"}
                width={25}
                height={25}
              />
              <Typography
                fontSize="16px"
                fontWeight={isActiveItem ? 600 : 400}
                lineHeight="22px"
                color={isActiveItem ? "primary.main" : "#000000"}
                component="span"
              >
                {t(name)}
              </Typography>
            </>
          )}
        </Stack>
      </Button>
    </TLink>
  );
};

export default SideBarItem;
