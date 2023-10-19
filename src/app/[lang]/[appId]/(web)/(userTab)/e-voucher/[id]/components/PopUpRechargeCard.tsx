"use client";
import { useGetCustomerInfo } from "@/common/hooks/useGetCustomerInfo";
import useShowSnackbar from "@/common/hooks/useShowSnackbar";
import { useDispatch, useSelector } from "@/common/redux/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack, Typography } from "@mui/material";
import { Card } from "@mui/material";
import { Box } from "@mui/material";
import { Modal } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect } from "react";
import { formOrderVoucherSchema } from "../detailEVoucher.schema";
import { IFormOrderVoucher } from "../detailEVoucher.interface";
import { useForm } from "react-hook-form";
import {
  setIsShowPopUpRechargeCard,
  setNumSubmitOrderVoucher,
  setPhoneNumber,
} from "../detailEVoucherSlice";
import { FormProvider, RHFTextField } from "@/common/components/hook-form";

const PopUpRechargeCard = () => {
  const { t } = useTranslation("common");
  const { isShowPopUpRechargeCard, typeVoucher, numSubmitOrderVoucher } =
    useSelector((state) => state.detailEVoucher);
  const { data, isLoading } = useGetCustomerInfo();
  const { showErrorSnackbar } = useShowSnackbar();
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(setIsShowPopUpRechargeCard(false));
  };
  const defaultValues = {
    phoneNumber: `0${data?.phoneNumber.substring(3)}`,
  };
  const methods = useForm<IFormOrderVoucher>({
    resolver: yupResolver(formOrderVoucherSchema()),
    defaultValues,
  });
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
    setValue,
  } = methods;

  const onSubmit = (data: IFormOrderVoucher) => {
    dispatch(setPhoneNumber(data.phoneNumber));
    dispatch(setNumSubmitOrderVoucher(numSubmitOrderVoucher + 1));
    setValue("phoneNumber", "");
    dispatch(setIsShowPopUpRechargeCard(false));
  };

  useEffect(() => {
    reset(defaultValues);
  }, [reset, isLoading]);

  return (
    <Modal open={isShowPopUpRechargeCard} onClose={onClose}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
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
            <Stack alignItems="center" spacing={"16px"}>
              <Typography
                fontWeight={600}
                fontSize={{ xs: "16px", md: "18px" }}
              >
                {t("e_voucher.type_phone_number")}
              </Typography>
              <RHFTextField
                name="phoneNumber"
                label={t("phone_number")}
                placeholder={t("phone_number")}
                sx={{
                  borderRadius: "8px",
                }}
              />
              <Button type="submit" variant="contained" sx={{ width: "80%" }}>
                {t("e_voucher.use")}
              </Button>
            </Stack>
          </Card>
        </Box>
      </FormProvider>
    </Modal>
  );
};

export default PopUpRechargeCard;
