"use client";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { DEFAULT_AVATAR, ICON_EDIT } from "../constants";
import Image from "@/common/components/Image";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";
import useTranslation from "next-translate/useTranslation";
import { useDispatch } from "@/common/redux/store";
import {
  setShowUserTabMobile,
  showUserTabMobile,
} from "@/app/[lang]/[appId]/(web)/(userTab)/slice";
import { useSelector } from "react-redux";
import { TLink } from "@/common/components/TLink";

interface Props {
  name: string;
  url: string;
}

const SideBarHeader = ({ name, url }: Props) => {
  const { t, lang } = useTranslation("common");
  const router = useRouter();
  const dispatch = useDispatch();
  const showUserTabXs = useSelector(showUserTabMobile);

  return (
    <Stack
      direction={"row"}
      mt={{ xs: "0", md: "50px" }}
      spacing={2}
      alignItems={"center"}
      alignSelf={{ xs: "center", md: "unset" }}
    >
      <Avatar
        src={url.length !== 0 ? url : DEFAULT_AVATAR}
        sx={{
          bgcolor: "#1F8A70",
          width: { xs: "30px", md: "60px" },
          height: { xs: "30px", md: "60px" },
        }}
        alt="avatar"
        onClick={() => dispatch(setShowUserTabMobile(!showUserTabXs))}
      />
      <Stack spacing={"5px"} display={{ xs: "none", md: "flex" }}>
        <Typography
          color={"#1A1A1A"}
          fontSize={"16px"}
          fontWeight={600}
          component="span"
        >
          {name ?? ""}
        </Typography>
        {/* <TLink href={"/profile"}>
          <Button sx={{ pl: 0 }} onClick={() => router.push(PATH_HOME.profile)}>
            <Stack direction={"row"} spacing={"8px"}>
              <Image
                src={ICON_EDIT}
                alt="icon edit"
                sx={{ width: "18px", height: "18px" }}
              />
              <Typography
                color={"#666E80"}
                fontSize={"14px"}
                fontWeight={400}
                component="span"
              >
                {t("edit_profile")}
              </Typography>
            </Stack>
          </Button>
        </TLink> */}
      </Stack>
    </Stack>
  );
};

export default SideBarHeader;
