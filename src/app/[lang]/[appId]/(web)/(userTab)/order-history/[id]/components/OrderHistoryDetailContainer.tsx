"use client";
import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Paper,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import Iconify from "@/common/components/Iconify";
import { PATH_HOME } from "@/common/constants/path.constants";
import { TitleHeader } from "../../components/TitleHeader";
import { AddressInfo } from "./AddressInfo";
import { ProductInfo } from "./ProductInfo";
import { PaymentInfo } from "./PaymentInfo";
import { useRouter } from "next/navigation";
import { useGetDetailOrder } from "../../hooks/useGetDetailOrder";
import { OrderDetailSkeleton } from "./OrderDetailSkeleton";
import { useGetOrderStatus } from "../../hooks/useGetOrderStatus";
import { dispatch, useSelector } from "@/common/redux/store";
import PopUpOutOfQuantity from "./PopUpOutOfQuantity";
import {
  resetStateOrderHistory,
  setIsOpenPopUpImpossibleProduct,
  setIsOpenPopUpOutOfQuantity,
  setOrderId,
} from "../../common/slice";
import { useTheme } from "@mui/material/styles";
import PopUpImpossibleProduct from "./PopUpImpossibleProduct";
import { useAddCartFromOrder } from "../../hooks/useAddCartFromOrder";

type Props = {
  orderId: string;
};

const OrderHistoryDetailContainer = ({ orderId }: Props) => {
  const router = useRouter();
  const { isOpenPopUpOutOfQuantity, isOpenPopUpImpossibleProduct } =
    useSelector((state) => state.orderHistory);
  const theme = useTheme();

  const { orderDetail, isLoading, isError } = useGetDetailOrder(
    parseInt(orderId)
  );
  const { data: orderStatus } = useGetOrderStatus({
    orderId: parseInt(orderId),
  });
  const { mutate: addCartFromOrder } = useAddCartFromOrder();

  const handleReOrder = () => {
    if (!orderStatus?.possible) {
      dispatch(setIsOpenPopUpOutOfQuantity(true));
      return;
    }
    if (orderStatus?.possible && orderStatus?.impossibleProducts?.length > 0) {
      dispatch(setOrderId(parseInt(orderId)));
      dispatch(setIsOpenPopUpImpossibleProduct(true));
    } else {
      addCartFromOrder({ orderId: parseInt(orderId) });
      router.push(PATH_HOME.checkout);
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetStateOrderHistory());
    };
  }, []);

  if (isLoading || isError) {
    return <OrderDetailSkeleton />;
  }

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          background: "white",
          borderRadius: "24px",
          padding: 3,
        }}
      >
        <TitleHeader title={`Chi tiết đơn hàng #${orderDetail?.displayId}`} />
        <AddressInfo address={orderDetail?.orderShipping} />
        <Card sx={{ mb: 3 }} elevation={5}>
          <CardHeader
            title={<Typography variant="h6">Phương thức thanh toán</Typography>}
          />

          <CardContent>
            <Stack
              direction="row"
              spacing={3}
              alignItems={"center"}
              sx={{
                paddingY: 2,
                width: "100%",
                borderRadius: "10px",
                border: "0.5px solid rgba(145, 158, 171, 0.32)",
              }}
            >
              <Radio checked />
              <Typography sx={{ fontWeight: 400, fontSize: "15px" }}>
                {orderDetail?.paymentType === "POINT"
                  ? "Thanh toán bằng xu"
                  : "Thanh toán khi nhận hàng"}
              </Typography>
            </Stack>
          </CardContent>
        </Card>

        <ProductInfo
          data={orderDetail?.orderLineItemReqDto}
          paymentType={orderDetail?.paymentType || "POINT"}
        />
        <PaymentInfo
          total={
            orderDetail?.paymentType === "COD"
              ? orderDetail?.total
              : orderDetail?.orderLineItemReqDto.reduce((qty, object) => {
                  return qty + (object.point || 0) * object.quantity;
                }, 0) || 0
          }
          paymentType={orderDetail?.paymentType || "POINT"}
          totalShipping={orderDetail?.shippingTotal || 0}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            direction: "row",
          }}
        >
          <Button
            size="small"
            color="inherit"
            startIcon={
              <Iconify
                icon={"material-symbols:west"}
                color={theme.palette.text.primary}
              />
            }
            sx={{
              fontSize: "16px",
              color: theme.palette.text.primary,
            }}
            onClick={() => {
              router.push(PATH_HOME.order_history.list);
            }}
          >
            Quay lại
          </Button>
          <Button
            size="large"
            variant="contained"
            onClick={handleReOrder}
            sx={{
              borderRadius: "40px",
              padding: "16px 24px",
            }}
          >
            Đặt lại đơn hàng
          </Button>
        </Box>
      </Paper>
      {isOpenPopUpOutOfQuantity && <PopUpOutOfQuantity />}
      {isOpenPopUpImpossibleProduct && <PopUpImpossibleProduct />}
    </>
  );
};

export default OrderHistoryDetailContainer;
