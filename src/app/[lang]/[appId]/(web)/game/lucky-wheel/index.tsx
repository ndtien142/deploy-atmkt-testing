"use client";
import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { WHEEL_IMAGE } from "./common/wheel.constants";
import { useGetListGame } from "./hooks/useGetListGame";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";
import { fDate } from "@/common/utils/common.utils";
import Image from "@/common/components/Image";
import Iconify from "@/common/components/Iconify";

const LuckyWheelContainer = () => {
  const listGameParams = {
    page: 1,
    limit: 5,
  };
  const { data } = useGetListGame(listGameParams);
  const router = useRouter();
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "95%",
        pt: 2,
        pb: "4%",
        backgroundImage: `url("${WHEEL_IMAGE.wheel_background}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Button onClick={() => router.push(PATH_HOME.root)}>
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
            Quay lại trang chủ
          </Typography>
        </Stack>
      </Button>
      <Stack
        gap={{ xs: "30px" }}
        justifyContent="center"
        alignItems={{ xs: "center", md: "flex-start" }}
        flexWrap={{ xs: "wrap", md: "nowrap" }}
        width={"100%"}
        sx={{
          px: { xs: "16px", md: "75px", lg: "100px" },
          ml: { xs: 0, md: "-16px" },
          mt: 5,
        }}
        mb={{ xs: "40px", md: "80px" }}
      >
        <Box
          width={"100%"}
          bgcolor={"#1F8A70"}
          sx={{
            borderRadius: "24px 24px 0px 0px",
            py: "10px",
          }}
        >
          <Typography
            textAlign={"center"}
            fontSize={"20px"}
            color={"#FFF"}
            fontWeight={700}
          >
            Danh Sách trò chơi
          </Typography>
        </Box>
        {data?.items?.map((item, index) => {
          return (
            <Box
              key={index}
              bgcolor={"#FFF"}
              width={"100%"}
              borderRadius={"16px"}
              padding={"10px"}
              sx={{
                cursor: "pointer",
              }}
              onClick={() =>
                router.push(`${PATH_HOME.game.lucky_wheel.root}/${item.id}`)
              }
            >
              <Stack
                flexDirection={"row"}
                width={"100%"}
                gap={"12px"}
                padding={"10px"}
                bgcolor={"#FFF"}
                alignItems={"center"}
              >
                <Box
                  sx={{
                    width: "57px",
                    height: "57px",
                  }}
                >
                  <Image alt="gift" src={item?.image?.url} ratio="1/1" />
                </Box>
                <Stack spacing={"5px"}>
                  <Typography
                    color={"#1F8A70"}
                    fontSize={"16px"}
                    fontWeight={600}
                  >
                    {item?.name}
                  </Typography>
                  <Stack direction={"row"} gap={"20px"}>
                    <Typography
                      color={"#98A1B3"}
                      fontSize={"14px"}
                      fontWeight={400}
                    >
                      Bắt đầu: {fDate(item?.startDate)}
                    </Typography>
                    <Typography
                      color={"#98A1B3"}
                      fontSize={"14px"}
                      fontWeight={400}
                    >
                      Kết thúc: {fDate(item?.endDate)}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default LuckyWheelContainer;
