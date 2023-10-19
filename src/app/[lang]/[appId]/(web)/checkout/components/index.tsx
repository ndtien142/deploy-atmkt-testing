"use client";

import React from "react";
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
  styled,
} from "@mui/material";
import Iconify from "@/common/components/Iconify";
import { useEffect } from "react";
import { dispatch, useSelector } from "@/common/redux/store";
import { useGetCheckoutCart } from "../hooks/useGetcheckoutCart";
import { STEPS } from "../constant";
import { onGotoStep, resetOrderState, setCart } from "../order.slice";
import QontoStepIcon from "./QontoStepIcon";
import CheckoutCart from "./checkoutCart/CheckoutCart";
import CheckoutAddress from "./checkout-address/CheckoutAddress";
import CheckoutPayment from "./checkout-payment/CheckoutPayment";
import { useAnalytics } from "@/common/hooks/firebase-analytics/useAnalytics";
import { PATH_HOME } from "@/common/constants/path.constants";

export default function CheckOutContainer() {
  const { activeStep } = useSelector((state) => state.checkout);

  const isComplete = activeStep === STEPS.length;
  const { logViewCart } = useAnalytics();

  const { dataCart, isLoading } = useGetCheckoutCart();

  useEffect(() => {
    if (dataCart?.length > 0) {
      dispatch(setCart(dataCart));
      logViewCart({});
    }
  }, [dataCart]);

  useEffect(() => {
    return () => {
      dispatch(resetOrderState());
    };
  }, []);

  return (
    <>
      <Container sx={{ marginY: 8 }} maxWidth="xl">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ marginBottom: 5 }}
          separator={<Iconify icon={"lucide:dot"} color={"primary.main"} />}
        >
          <Link
            underline="hover"
            color="black"
            href={PATH_HOME.root}
            fontWeight={600}
          >
            Trang chủ
          </Link>
          <Typography color="primary.main" fontWeight={600}>
            Giỏ hàng
          </Typography>
        </Breadcrumbs>

        <Grid container justifyContent={isComplete ? "center" : "flex-start"}>
          <Grid item xs={12} md={8} sx={{ mb: 5 }}>
            <Stepper
              alternativeLabel
              activeStep={activeStep}
              connector={<QontoConnector />}
            >
              {STEPS?.map((label) => (
                <Step key={label} sx={{ color: "#1F8A70" }}>
                  <StepLabel
                    StepIconComponent={QontoStepIcon}
                    sx={{
                      "& .MuiStepLabel-label": {
                        typography: "subtitle2",
                        color: "text.disabled",
                      },
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>
        {!isComplete && (
          <>
            {activeStep === 0 && (
              <CheckoutCart data={dataCart || []} isLoading={isLoading} />
            )}
            {activeStep === 1 && <CheckoutAddress />}
            {activeStep === 2 && <CheckoutPayment />}
          </>
        )}
        {/* <Box sx={{ width: "100%", marginTop: 8 }}>
          <SliderProductRecomnend />
        </Box> */}
      </Container>
    </>
  );
}

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  top: 10,
  left: "calc(-50% + 20px)",
  right: "calc(50% + 20px)",
  "& .MuiStepConnector-line": {
    borderTopWidth: 2,
    borderColor: theme.palette.divider,
  },
  "&.Mui-active, &.Mui-completed": {
    "& .MuiStepConnector-line": {
      borderColor: theme.palette.primary.main,
    },
  },
}));
