"use client";
import React, { useEffect } from "react";
import { IDetailEVoucherProps } from "../detailEVoucher.interface";
import {
  Stack,
  Box,
  Typography,
  Divider,
  Button,
  FormHelperText,
} from "@mui/material";
import UnUsedEVoucherSlider from "./UnUsedEVoucherSlider";
import ProductPrice from "@/common/components/product-price/ProductPrice";
import { PriceType } from "@/common/@types/common.types";
import { fDate } from "@/common/utils/common.utils";
import Markdown from "@/common/components/hook-form/Markdown";
import { useDispatch, useSelector } from "@/common/redux/store";
import {
  resetDetailEVoucher,
  setIsShowPopUpUseVoucher,
  setTypeVoucher,
} from "../detailEVoucherSlice";
import useTranslation from "next-translate/useTranslation";
import useShowSnackbar from "@/common/hooks/useShowSnackbar";
import PopUpUseEVoucher from "./PopUpUseEVoucher";
import { useOrderEVoucher } from "../../common/hooks/useOrderEVoucher";
import PopUpRechargeCard from "./PopUpRechargeCard";

const UnUsedEVoucher = ({ voucher }: IDetailEVoucherProps) => {
  const {
    numSubmitOrderVoucher,
    phoneNumber,
    isShowPopUpUseVoucher,
    isShowPopUpRechargeCard,
  } = useSelector((state) => state.detailEVoucher);
  const dispatch = useDispatch();
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();
  const { mutate } = useOrderEVoucher();
  const { t } = useTranslation("common");
  const handleShowPopUp = () => {
    dispatch(setTypeVoucher(voucher?.evoucherInfo?.type));
    dispatch(setIsShowPopUpUseVoucher(true));
  };

  useEffect(() => {
    if (!numSubmitOrderVoucher) {
      return;
    }
    const dataSubmit = {
      userEvoucherId: voucher.id,
      phoneNumber: phoneNumber,
    };

    mutate(dataSubmit, {
      onError: (err) => {
        showErrorSnackbar("Sử dụng voucher thất bại!");
      },
      onSuccess: () => {
        showSuccessSnackbar("Sử dụng voucher thành công!");
      },
    });
  }, [numSubmitOrderVoucher]);
  useEffect(() => {
    return () => {
      dispatch(resetDetailEVoucher());
    };
  }, []);
  return (
    <Stack spacing={2} width={"100%"} height={"100%"}>
      <Stack
        padding={{ md: 2 }}
        alignItems={"center"}
        boxShadow={"0px 3.216397762298584px 13.669690132141113px 0px #00000040"}
        spacing={1}
        width={"100%"}
        direction={{ xs: "column", sm: "row" }}
        overflow={"hidden"}
        bgcolor={"#FFF"}
        borderRadius={{ xs: "16px", sm: "16px" }}
      >
        <Stack
          width={"100%"}
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-between"}
        >
          <Stack
            width={{ xs: "100%", md: "50%" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <UnUsedEVoucherSlider data={voucher?.product} />
          </Stack>
          <Stack
            width={{ xs: "100%", md: "50%" }}
            justifyContent={"space-between"}
          >
            <Stack spacing={2} mt={{ xs: 2, md: 0 }}>
              <Box
                width={"100%"}
                textAlign={{ xs: "center", md: "left" }}
                position={"relative"}
              >
                <Typography
                  color={"##1A1A1A"}
                  fontWeight={600}
                  fontSize={{ xs: "16px", md: "18px" }}
                  mb={2}
                >
                  {voucher?.product?.productDetails[0]?.name}
                </Typography>
              </Box>
              <Stack
                direction="row"
                alignItems="flex-start"
                marginBottom={"10px!important"}
                px={{ xs: 2, md: 0 }}
              >
                {voucher?.product?.attributeAndTerm?.map((item, index) => (
                  <>
                    <Typography variant="body2" key={index}>
                      <Box component="span" sx={{ color: "text.secondary" }}>
                        {item?.name}:&nbsp;
                      </Box>
                      {item?.term[0]?.value}
                    </Typography>
                    {index !==
                      voucher?.product?.attributeAndTerm?.length - 1 && (
                      <Divider
                        orientation="vertical"
                        sx={{ mx: 1, height: 16 }}
                      />
                    )}
                  </>
                ))}
              </Stack>
            </Stack>
            <Stack
              marginY={4}
              spacing={"12px"}
              justifyContent={"center"}
              px={{ xs: 2, md: 0 }}
            >
              <ProductPrice
                hasTitle={true}
                textColor="#212B36"
                normalPrice={
                  voucher?.product?.productToVariants[0]?.productVariant
                    ?.price &&
                  voucher?.product?.productToVariants[0]?.productVariant?.price
                }
                salePrice={
                  voucher?.product?.productToVariants[0]?.productVariant
                    ?.salePrice &&
                  voucher?.product?.productToVariants[0]?.productVariant
                    ?.salePrice
                }
                typeCurrency={PriceType.VND}
              />
              <ProductPrice
                textColor="#212B36"
                normalPrice={
                  voucher?.product?.productToVariants[0]?.productVariant
                    .productVariantPoint?.point &&
                  voucher?.product?.productToVariants[0]?.productVariant
                    .productVariantPoint?.point
                }
                salePrice={
                  voucher?.product?.productToVariants[0]?.productVariant
                    .productVariantPoint?.salePoint &&
                  voucher?.product?.productToVariants[0]?.productVariant
                    .productVariantPoint?.salePoint
                }
                typeCurrency={PriceType.POINT}
              />
              {voucher?.storingExpiresAt && (
                <>
                  <Typography fontSize={"14px"}>
                    {`Ưu đãi đến `}
                    <b>{fDate(voucher?.storingExpiresAt)}</b>
                  </Typography>
                  <FormHelperText sx={{ color: "red" }}>
                    *Vui lòng sử dụng mã trước ngày{" "}
                    {fDate(voucher?.storingExpiresAt)}
                  </FormHelperText>
                </>
              )}
            </Stack>
            {voucher?.status === "UNUSED" && (
              <Stack
                width={"100%"}
                pb={"18px"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Button
                  variant={"contained"}
                  sx={{
                    width: { xs: "60%", lg: "80%" },
                  }}
                  onClick={handleShowPopUp}
                >
                  {t("e_voucher.use")}
                </Button>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>
      <Stack
        padding={{ xs: 2 }}
        alignItems={"center"}
        boxShadow={"0px 3.216397762298584px 13.669690132141113px 0px #00000040"}
        spacing={1}
        width={"100%"}
        direction={{ xs: "column", sm: "row" }}
        overflow={"hidden"}
        bgcolor={"#FFF"}
        borderRadius={{ xs: "16px", sm: "16px" }}
      >
        <Markdown>{voucher?.product?.productDetails[0]?.description}</Markdown>
      </Stack>
      {isShowPopUpUseVoucher && <PopUpUseEVoucher />}
      {isShowPopUpRechargeCard && <PopUpRechargeCard />}
    </Stack>
  );
};

export default UnUsedEVoucher;
