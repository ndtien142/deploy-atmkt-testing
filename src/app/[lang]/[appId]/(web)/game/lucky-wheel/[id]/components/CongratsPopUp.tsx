import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useDispatch, useSelector } from "@/common/redux/store";
import React from "react";
import { useQueryClient } from "react-query";

import { Card, Modal, Stack, Typography } from "@mui/material";
import { Box } from "@mui/material";
import Image from "@/common/components/Image";
import { Button } from "@mui/material";
import {
  setNumberPopupFeedback,
  setOpenPopup,
  setPlayTime,
  setSpinValue,
  setSpinning,
  setWinningGift,
} from "../../wheel.slice";
import { WHEEL_IMAGE } from "../../common/wheel.constants";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";

type Props = {
  open: boolean;
  giftName: string;
  giftImage: string;
  isVoucherGift: boolean;
};

const CongratsPopUp = ({ open, giftName, giftImage, isVoucherGift }: Props) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const { playTime } = useSelector((state) => state.wheelReducer);
  const handleClosePopUp = () => {
    dispatch(setSpinning(false));
    dispatch(setOpenPopup(false));
    dispatch(setWinningGift(undefined));
    dispatch(setPlayTime(playTime - 1));
    dispatch(setSpinValue(0));
    dispatch(setNumberPopupFeedback(1));
  };

  const onGoEVoucher = async () => {
    await queryClient
      .getQueryCache()
      .findAll([QUERY_KEYS.GET_LIST_E_VOUCHER])
      .forEach(({ queryKey }) => queryClient.invalidateQueries(queryKey));
    router.push(PATH_HOME.eVoucher.list);
  };

  const handleCallSupport = () => {
    handleClosePopUp();
    window.location.href = "tel:19001001";
  };

  return (
    <Modal open={open} onClose={handleClosePopUp}>
      <Card
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          p: 3,
          minWidth: { xs: "300px", md: "350px" },
          mx: "auto",
          borderRadius: { xs: "16px", md: "20px" },
        }}
      >
        <Stack
          spacing={{ xs: "30px", md: "45px" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            sx={{
              position: "relative",
              maxWidth: { md: "200px", lg: "250px" },
            }}
            width={"100%"}
          >
            <Image
              alt="pop up congrats"
              src={giftImage?.length ? giftImage : WHEEL_IMAGE.wheel_congrats}
            />
          </Box>
          <Stack
            spacing={{ xs: "20px", md: "30px" }}
            width={"100%"}
            alignItems={"center"}
          >
            <Stack justifyItems={"center"} spacing={"10px"}>
              <Typography
                textAlign={"center"}
                fontSize={{ xs: "20px", md: "28px", lg: "32px" }}
                fontWeight={700}
                color={"#17181A"}
              >
                XIN CHÚC MỪNG
              </Typography>
              <Typography
                textAlign={"center"}
                fontSize={{ xs: "16px", md: "18px", lg: "24px" }}
                fontWeight={700}
                color={"#666E80"}
                maxWidth={{ xs: "280px", md: "380px", lg: "480px" }}
                minWidth={{ md: "380px" }}
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                Chúc mừng bạn đã trúng giải {giftName}
              </Typography>
              <Typography
                textAlign={"center"}
                fontSize={{ xs: "16px", md: "18px", lg: "24px" }}
                fontWeight={700}
                color={"#666E80"}
                maxWidth={{ xs: "280px", md: "380px", lg: "480px" }}
                minWidth={{ md: "380px" }}
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {isVoucherGift
                  ? "Giải thưởng của bạn sẽ được gửi vào túi E-voucher."
                  : "Bạn vui lòng liên hệ Hotline 19001001 để nhận giải."}
              </Typography>
            </Stack>
            <Button
              onClick={isVoucherGift ? onGoEVoucher : handleCallSupport}
              variant="contained"
              sx={{
                padding: { xs: "8px 16px", md: "16px 24px" },
                borderRadius: "107px",
                bgcolor: "#1F8A70",
                fontSize: "18px",
                fontWeight: 700,
                width: { xs: "60%", md: "40%" },
                marginLeft: "auto!important",
                marginRight: "auto!important",
              }}
            >
              {isVoucherGift ? "Xem ngay" : "Liên hệ"}
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Modal>
  );
};

export default CongratsPopUp;
