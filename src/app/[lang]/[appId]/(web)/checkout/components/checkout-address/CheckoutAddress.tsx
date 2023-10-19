"use client";

import React from "react";
import { Box, Button, FormControl, Grid, RadioGroup } from "@mui/material";
import { _addressBooks } from "../../constant";
import AddressItem from "./AddressItem";
import { BillingAddress } from "../../interface";
import Iconify from "@/common/components/Iconify";
import { useDispatch, useSelector } from "@/common/redux/store";
import {
  onBackStep,
  onNextStep,
  setOpenModalAddAddress,
  setSelectedAddress,
} from "../../order.slice";
import CheckoutSummary from "../CheckoutSummary";
import { useGetListUserAddress } from "../../hooks/useGetListUserAddress";
import AddNewAddressModal from "./AddNewAddressModal";
import EmptyCart from "../EmptyCart";
import { useEffect } from "react";
import { CheckoutAddressSkeleton } from "./CheckoutAddressSkeleton";

export default function CheckoutAddress() {
  const { totalCash, totalPoint, discount, cart, selectedAddress } =
    useSelector((state) => state.checkout);

  const {
    data: dataAddress,
    isLoading: isLoadingDataAddress,
    refetch: refetchAddress,
    isError,
  } = useGetListUserAddress();

  const userAddress = dataAddress?.items || [];

  const dispatch = useDispatch();

  const handleBackStep = () => {
    dispatch(onBackStep());
  };

  const handleNextStep = () => {
    dispatch(onNextStep());
  };

  const handleClickOpen = () => {
    dispatch(setOpenModalAddAddress(true));
  };

  useEffect(() => {
    dispatch(
      setSelectedAddress({
        id: 0,
        name: "",
        phone: "",
        address: "",
        province: "",
        district: "",
        ward: "",
      })
    );
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <RadioGroup name="addressCurrentId">
            {(isLoadingDataAddress || isError) && <CheckoutAddressSkeleton />}
            {!isLoadingDataAddress &&
              userAddress?.map((address, index) => (
                <AddressItem key={index} address={address} />
              ))}

            {!(isLoadingDataAddress || isError) &&
              userAddress?.length === 0 && (
                <EmptyCart
                  title="Bạn chưa có địa chỉ nào!"
                  description=""
                  img="/assets/empty-address.svg"
                />
              )}
          </RadioGroup>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              size="small"
              color="inherit"
              onClick={handleBackStep}
              startIcon={<Iconify icon={"eva:arrow-ios-back-fill"} />}
            >
              Quay lại
            </Button>
            <Button
              size="small"
              onClick={handleClickOpen}
              startIcon={<Iconify icon={"eva:plus-fill"} />}
            >
              Thêm mới địa chỉ
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <CheckoutSummary
            subtotalPoint={totalPoint}
            totalPoint={totalPoint}
            totalCash={totalCash}
            subtotalCash={totalCash}
            discount={discount}
          />
          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            disabled={cart.length === 0 || selectedAddress.id === 0}
            onClick={handleNextStep}
            sx={{ borderRadius: 5 }}
          >
            Tiếp tục <Iconify icon={"grommet-icons:link-next"} sx={{ ml: 1 }} />
          </Button>
        </Grid>
      </Grid>
      <AddNewAddressModal />
    </>
  );
}
