"use client";
import React, { useEffect } from "react";
import {
  Button,
  Box,
  Typography,
  Menu,
  MenuItem,
  Stack,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { useGetCustomerInfo } from "@/common/hooks/useGetCustomerInfo";
import { RootState, useDispatch, useSelector } from "@/common/redux/store";
import { resetHeaderState, setOpenUserMenu } from "../header.slice";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";
import useTranslation from "next-translate/useTranslation";
import { useQueryClient } from "react-query";
import axiosClient from "@/common/utils/axios";
import { API_USER_LOGOUT } from "@/common/constants/api.constants";
import {
  resetToken,
  setIsLoggedIn,
} from "@/app/[lang]/[appId]/(auth)/login/reducers/auth.slice";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { setCustomerInfo } from "../../../../(userTab)/profile/account-common/reducers/customer-profile.slice";
import {
  formatCurrencyPoint,
  formatNumberToCurrency,
} from "@/common/utils/common.utils";
import { useGetCountNotifyUnread } from "../../../../home/hooks/useGetCountNotifyUnread";
import Iconify from "@/common/components/Iconify";

const UserWithLogin = () => {
  const dispatch = useDispatch();
  const anchorRef = React.useRef(null);
  const router = useRouter();
  const { t } = useTranslation("common");
  const queryClient = useQueryClient();
  const { countNotifyUnread } = useSelector(
    (state: RootState) => state.webReducer
  );
  const { dataCountNotifyUnread, refetchCountNotifyUnread } =
    useGetCountNotifyUnread();
  const matches = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    return () => {
      dispatch(resetHeaderState());
    };
  }, []);

  const isOpenUserMenu = useSelector(
    (state) => state.headerSlice.isOpenUserMenu
  );

  const handleClick = () => {
    dispatch(setOpenUserMenu(!isOpenUserMenu));
  };

  const handleClose = () => {
    dispatch(setOpenUserMenu(false));
  };

  const handleLogout = async () => {
    try {
      await axiosClient.post(API_USER_LOGOUT, { deviceTokens: [] });
    } catch {}
    dispatch(resetToken());
    dispatch(setIsLoggedIn(false));
    dispatch(setCustomerInfo({}));
    queryClient.removeQueries([QUERY_KEYS.CUSTOMER_PROFILE]);
    router.push(PATH_HOME.root);
  };

  const { data } = useGetCustomerInfo();

  return (
    <>
      <Button
        component="span"
        sx={{
          color: "#666666",
          display: { xs: "none", sm: "flex" },
        }}
        startIcon={
          <Box sx={{ position: "relative", pt: 1 }}>
            <Iconify
              icon={"basil:notification-outline"}
              height={24}
              width={24}
              color={"primary.main"}
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
                  top: -2,
                  right: -6,
                }}
              >
                <span>{dataCountNotifyUnread}</span>
              </Stack>
            ) : (
              <></>
            )}
          </Box>
        }
        onClick={() => router.push(PATH_HOME.notify)}
      >
        <Typography display={{ xs: "none", md: "flex" }}>
          {t("notify.root")}
        </Typography>
      </Button>
      <Button
        component="span"
        ref={anchorRef}
        sx={{
          color: "#666666",
        }}
        startIcon={
          <Iconify
            icon={"tabler:user"}
            height={24}
            width={24}
            color={"primary.main"}
          />
        }
        onClick={handleClick}
      >
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <Typography
            display={{ xs: "none", md: "flex" }}
            sx={{
              width: "90px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: { xs: "none", sm: "-webkit-box" },
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
            }}
          >
            {data?.name ?? ""}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography display={"flex"}>
            {formatCurrencyPoint(data?.userPoint?.totalPoints)}{" "}
            {matches ? t("point") : ""}
          </Typography>
          <Box
            sx={{
              backgroundImage: "url(/assets/icons/coin.png)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              width: "24px",
              height: "24px",
              display: "flex",
            }}
          />
        </Stack>
      </Button>
      <Menu
        anchorEl={anchorRef.current}
        id="account-menu"
        open={isOpenUserMenu}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            padding: "16px 24px",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "& .MuiMenuItem-root": {
              padding: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Stack spacing={"16px"}>
          <MenuItem onClick={() => router.push(PATH_HOME.profile)}>
            {t("information_account")}
          </MenuItem>
          <MenuItem onClick={() => router.push(PATH_HOME.order_history.list)}>
            {t("my_order")}
          </MenuItem>
          <MenuItem onClick={handleLogout}>{t("logout")}</MenuItem>
        </Stack>
      </Menu>
    </>
  );
};

export default UserWithLogin;
