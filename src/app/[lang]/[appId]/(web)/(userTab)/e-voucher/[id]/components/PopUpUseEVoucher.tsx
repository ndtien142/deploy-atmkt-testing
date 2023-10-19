"use client";
import { useDispatch, useSelector } from "@/common/redux/store";
import { Button, Stack, Typography, Modal, Card, Box } from "@mui/material";
import React from "react";
import {
  setIsShowPopUpRechargeCard,
  setIsShowPopUpUseVoucher,
  setNumSubmitOrderVoucher,
  setPhoneNumber,
} from "../detailEVoucherSlice";
import useShowSnackbar from "@/common/hooks/useShowSnackbar";
import useTranslation from "next-translate/useTranslation";
import Image from "@/common/components/Image";

const PopUpUseEVoucher = () => {
  const { t } = useTranslation("common");
  const {
    isShowPopUpUseVoucher,
    typeVoucher,
    numSubmitOrderVoucher,
    phoneNumberUser,
  } = useSelector((state) => state.detailEVoucher);
  const { showErrorSnackbar } = useShowSnackbar();
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(setIsShowPopUpUseVoucher(false));
  };
  const handleUseVoucher = () => {
    if (typeVoucher === "TOPUP") {
      dispatch(setIsShowPopUpUseVoucher(false));
      dispatch(setIsShowPopUpRechargeCard(true));
    }
    if (typeVoucher === "VOUCHER") {
      dispatch(setNumSubmitOrderVoucher(numSubmitOrderVoucher + 1));
      dispatch(setPhoneNumber(phoneNumberUser));
      dispatch(setIsShowPopUpUseVoucher(false));
    }
    if (typeVoucher === "UNKNOWN") {
      dispatch(setIsShowPopUpUseVoucher(false));
      dispatch(setIsShowPopUpRechargeCard(true));
      // showErrorSnackbar(
      //   t("e_voucher.the_voucher_from_the_supplier_could_not_be_found")
      // );
    }
  };
  return (
    <Modal open={isShowPopUpUseVoucher} onClose={onClose}>
      <Box>
        <Card
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: 24,
            width: "30vw",
            p: 3,
            minWidth: "350px",
            mx: "auto",
          }}
        >
          <Stack width={"100%"} justifyContent={"center"} alignItems={"center"}>
            <Image
              src={"/assets/image_use_voucher.svg"}
              alt={"image use e voucher"}
            />
          </Stack>
          <Stack alignItems="center" spacing={"16px"}>
            <Typography fontSize={"14px"} fontWeight={400} color={"#22313F"}>
              {t("e_voucher.want_to_use_this_voucher")}
            </Typography>
            <Button
              onClick={handleUseVoucher}
              variant="contained"
              sx={{ width: "80%" }}
            >
              {t("e_voucher.use")}
            </Button>
          </Stack>
        </Card>
      </Box>
    </Modal>
  );
};

export default PopUpUseEVoucher;
