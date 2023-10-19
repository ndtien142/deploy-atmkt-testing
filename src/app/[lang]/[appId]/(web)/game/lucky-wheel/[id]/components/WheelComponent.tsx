import { useDispatch, useSelector } from "@/common/redux/store";
import { Box, Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import Image from "@/common/components/Image";
import { useGetWheelPrize } from "../hooks/useGetWheelPrize";
import {
  setIsNoPlayTime,
  setIsOpenPolicy,
  setNoPrizePopup,
  setNumberPopupFeedback,
  setOpenPopup,
  setPlayTime,
  setSpinValue,
  setSpinning,
  setWinningGift,
} from "../../wheel.slice";
import { IWheelDetailProps } from "../../common/wheel.interface";
import useShowSnackbar from "@/common/hooks/useShowSnackbar";
import CongratsPopUp from "./CongratsPopUp";
import NoTicketPopUp from "./NoTicketPopUp";
import NoPrizePopUp from "./NoPrizePopUp";
import { Typography } from "@mui/material";
import { WHEEL_IMAGE } from "../../common/wheel.constants";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";
import { fDate, formatDate } from "@/common/utils/common.utils";
import useTranslation from "next-translate/useTranslation";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";

const WheelComponent = ({ items, winningHistory }: IWheelDetailProps) => {
  const dispatch = useDispatch();
  const { showErrorSnackbar } = useShowSnackbar();
  const { t } = useTranslation("common");
  const isOpenPopup = useSelector((state) => state.wheelReducer.openPopup);
  const router = useRouter();
  const {
    winningGift,
    playTime,
    isNoPlayTime,
    isGotNoPrize,
    isSpinning,
    spinValue,
    isOpenPolicy,
  } = useSelector((state) => state.wheelReducer);
  const { data, mutate } = useGetWheelPrize();
  const selectedItems = winningGift?.posInImage || 0;
  const pieceDeg = 360 / (items?.gameGifts?.length || 1);
  const spin = `${5400 - pieceDeg * (selectedItems - 1)}`;
  const spinAnimationDuration = 10000;
  const easing = "cubic-bezier(0.25, 0.1, 0.25, 1)";
  const queryClient = useQueryClient();

  useEffect(() => {
    if (data) {
      const { wonGift } = data;
      dispatch(setWinningGift(wonGift));
      if (!wonGift?.isWinnable) {
        setTimeout(() => dispatch(setNoPrizePopup(true)), 11000);
        return;
      }
      setTimeout(() => dispatch(setOpenPopup(true)), 11000);
    }
  }, [data]);

  const startSpinAnimation = () => {
    if (playTime < 1) {
      dispatch(setIsNoPlayTime(true));
      return;
    }
    dispatch(setSpinning(true));
    mutate(items?.id as number, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.CLIENT_WHEEL_INFO);
        setTimeout(
          () => queryClient.invalidateQueries(QUERY_KEYS.LIST_GAME_PRIZE),
          11000
        );

        dispatch(setSpinValue(parseInt(spin) || 0));
      },
      onError: (err: any) => {
        showErrorSnackbar(err?.message);
        dispatch(setSpinning(false));
      },
    });
  };

  return (
    <Stack
      alignItems="center"
      paddingX="16px"
      spacing={{ xs: "16px", md: "24px", lg: "32px" }}
    >
      <style>
        {`
          @keyframes spin-animation {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(${spin}deg);
            }
          }
        `}
      </style>
      <Box
        display="flex"
        position="relative"
        justifyContent="center"
        alignItems="center"
        height="100%"
        sx={{
          maxWidth: "500px",
          maxHeigh: "500px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <Image src={WHEEL_IMAGE.wheel_container} alt="wheel container" />
        </Box>
        <Box
          sx={{
            padding: { xs: "16px", sm: "30px", md: "24px", lg: "31px" },
            position: "absolute",
            margin: "auto",
            overflow: "hidden",
            borderRadius: 9999,
            top: { xs: "0%", sm: "0%", md: "0%", lg: "0%" },
            animation: isSpinning
              ? `spin-animation ${spinAnimationDuration / 1000}s ${easing}`
              : "none",
            animationFillMode: "forwards",
          }}
        >
          <Image src={items?.image?.url} alt="test wheel" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "17%",
            zIndex: 2,
            width: "48%",
          }}
        >
          <Image
            src={WHEEL_IMAGE.wheel_needle}
            alt="wheel needle"
            ratio="1/1"
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
      <Button
        onClick={startSpinAnimation}
        sx={{
          width: { xs: "130px", sm: "150px", md: "174px" },
        }}
        disabled={isSpinning}
      >
        <Image alt="wheel button" src={WHEEL_IMAGE.wheel_button} />
      </Button>
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        gap={"24px"}
        spacing={{ xs: "16px", md: "0px" }}
        alignItems={"center"}
      >
        <Box bgcolor={"#1F8A70"} padding={"10px"} borderRadius={"24px"}>
          <Typography
            color={"#FFF"}
            fontWeight={600}
            fontSize={{ xs: "16px", md: "18px" }}
          >
            Còn {playTime} lượt
          </Typography>
        </Box>
        <Stack flexDirection={"row"} gap={"12px"}>
          <Stack
            width={"45px"}
            height={"45px"}
            justifyContent={"center"}
            alignItems={"center"}
            bgcolor={"#1F8A70"}
            padding={"5px"}
            borderRadius={"8px"}
          >
            <Image alt="icon volume" src={WHEEL_IMAGE.icon_volume} />
          </Stack>
          <Stack
            width={"45px"}
            height={"45px"}
            justifyContent={"center"}
            alignItems={"center"}
            bgcolor={"#1F8A70"}
            padding={"5px"}
            borderRadius={"8px"}
            onClick={() => dispatch(setIsOpenPolicy(true))}
            sx={{
              cursor: "pointer",
            }}
          >
            <Image alt="icon question" src={WHEEL_IMAGE.icon_question} />
          </Stack>
          <Stack
            width={"45px"}
            height={"45px"}
            justifyContent={"center"}
            alignItems={"center"}
            bgcolor={"#1F8A70"}
            padding={"5px"}
            borderRadius={"8px"}
            onClick={() => router.push(PATH_HOME.eVoucher.list)}
            sx={{
              cursor: "pointer",
            }}
          >
            <Image alt="icon gift" src={WHEEL_IMAGE.icon_gift} />
          </Stack>
        </Stack>
      </Stack>
      {items?.aboutToExpirePlayTime && items?.stalesAt ? (
        <Typography
          height={"45px"}
          display={"inline-flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={"#FFFFFF"}
          padding={"5px"}
          borderRadius={"8px"}
          fontSize={"14px"}
          border={"1px solid #1F8A70"}
          color={"primary.main"}
        >
          {t("game.expirePlayTimeContent", {
            number: items?.aboutToExpirePlayTime,
            date: formatDate(items?.stalesAt, "HH:mm DD/MM/YYYY"),
          })}
        </Typography>
      ) : (
        <></>
      )}
      {isOpenPopup && winningGift && (
        <CongratsPopUp
          open={isOpenPopup}
          giftName={winningGift?.name || ""}
          giftImage={winningGift?.image?.url || ""}
          isVoucherGift={winningGift?.isVoucherGift || false}
        />
      )}
      {isNoPlayTime && (
        <NoTicketPopUp
          open={isNoPlayTime}
          onClose={() => {
            dispatch(setIsNoPlayTime(false));
            dispatch(setSpinning(false));
          }}
        />
      )}
      {isGotNoPrize && (
        <NoPrizePopUp
          open={isGotNoPrize}
          onClose={() => {
            dispatch(setNoPrizePopup(false));
            dispatch(setSpinValue(0));
            dispatch(setSpinning(false));
            // dispatch(setPlayTime(playTime - 1));
            dispatch(setNumberPopupFeedback(1));
          }}
        />
      )}
    </Stack>
  );
};

export default WheelComponent;
