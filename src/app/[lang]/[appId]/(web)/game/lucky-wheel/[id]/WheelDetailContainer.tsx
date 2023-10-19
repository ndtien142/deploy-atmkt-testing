"use client";
import { Box, Stack, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import { WHEEL_IMAGE } from "../common/wheel.constants";
import { useParams, useRouter } from "next/navigation";
import PrizeStructure from "./components/PrizeStructure";
import GiftReceived from "./components/GiftReceived";
import WheelPolicy from "./components/WheelPolicy";
import { dispatch, useSelector } from "@/common/redux/store";
import { resetWheelReducer, setPlayTime } from "../wheel.slice";
import WheelComponent from "./components/WheelComponent";
import { useGetWheelInfo } from "./hooks/useGetWheelInfo";
import Iconify from "@/common/components/Iconify";
import { PATH_HOME } from "@/common/constants/path.constants";
import { useGetWinningHistory } from "./hooks/useGetWinningHistory";
import { useDispatch } from "react-redux";
import { useGetGamePrize } from "./hooks/useGetGamePrize";

const WheelDetailContainer = () => {
  const { id } = useParams();
  const { isOpenPolicy } = useSelector((state) => state.wheelReducer);
  const dispatch = useDispatch();
  const { data } = useGetWheelInfo(parseInt(id as string));
  const { dataPrize } = useGetGamePrize(parseInt(id as string));
  const { data: dataWinningHistory } = useGetWinningHistory(
    parseInt(id as string)
  );

  const router = useRouter();
  useEffect(() => {
    if (data) dispatch(setPlayTime(data?.playTime || 0));
  }, [data]);

  useEffect(() => {
    return () => {
      dispatch(resetWheelReducer());
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "95%",
        pt: "8%",
        pb: "4%",
        backgroundImage: `url("${WHEEL_IMAGE.wheel_background}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Box
        position={{ xs: "relative", md: "absolute" }}
        top={{ md: "1%" }}
        mb={{ xs: "20px", md: "0px" }}
      >
        <Button onClick={() => router.push(PATH_HOME.game.lucky_wheel.root)}>
          <Stack
            sx={{
              px: { xs: "16px", md: "75px", lg: "100px" },
              ml: { xs: 0, md: "-16px" },
              flexDirection: "row",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <Iconify icon={"ep:back"} color={"#1F8A70"} fontSize={"20px"} />
            <Typography fontSize={"16px"} fontWeight={600} color={"#1F8A70"}>
              Quay lại
            </Typography>
          </Stack>
        </Button>
      </Box>
      <Stack
        gap={{ xs: "30px", md: "156px" }}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems={{ xs: "center", md: "flex-start" }}
        flexWrap={{ xs: "wrap", md: "nowrap" }}
        width={"100%"}
        sx={{
          px: { xs: "16px", md: "75px", lg: "100px" },
          ml: { xs: 0, md: "-16px" },
        }}
        mb={{ xs: "40px", md: "80px" }}
      >
        <Stack>
          <WheelComponent items={data} />
        </Stack>
        <Stack>
          <PrizeStructure gameGift={dataPrize?.gameGifts || []} />
        </Stack>
      </Stack>
      <Stack
        gap={{ xs: "30px", md: "50px" }}
        justifyContent="center"
        alignItems={{ xs: "center" }}
        flexWrap={{ md: "nowrap" }}
        width={"100%"}
        sx={{
          px: { xs: "16px", md: "100px", lg: "200px" },
          pb: { xs: 0, md: "100px", lg: "200px" },
          ml: { xs: 0, md: "-16px" },
        }}
      >
        {dataWinningHistory?.length !== 0 && (
          <GiftReceived listUserWon={dataWinningHistory || []} />
        )}
        <WheelPolicy policy={data?.policy} />
      </Stack>
    </Box>
  );
};

export default WheelDetailContainer;
