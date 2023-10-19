import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import CheckoutSummary from "../CheckoutSummary";
import { dispatch, useSelector } from "@/common/redux/store";
import Iconify from "@/common/components/Iconify";
import TableProductList from "./TableProductList";
import { onBackStep, onGotoStep } from "../../order.slice";
import { useAddOrder } from "../../hooks/useAddOrder";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";
import useShowSnackbar from "@/common/hooks/useShowSnackbar";

export default function CheckoutPayment() {
  const router = useRouter();

  const {
    cart,
    totalCash,
    discount,
    shipping,
    totalPoint,
    selectedAddress,
    paymentType,
    isPhysical,
    isEVoucher,
  } = useSelector((state) => state.checkout);

  const { mutate: addOrder, error: orderError } = useAddOrder();

  const handleBackStep = () => {
    if (isPhysical) {
      dispatch(onBackStep());
    } else {
      dispatch(onGotoStep(0));
    }
  };

  const handleOrder = () => {
    if (isEVoucher && !isPhysical) {
      addOrder(
        {
          paymentType: "POINT",
        },
        {
          onSuccess: () => {
            dispatch(onGotoStep(0));
            router.push(`${PATH_HOME.checkout}/checkout-success`);
          },
          onError: () => {
            // router.push(`${PATH_HOME.checkout}/checkout-fail`);
          },
        }
      );
    } else {
      addOrder(
        {
          orderShipping: {
            address1: selectedAddress?.address || "",
            province: selectedAddress?.province || "",
            ward: selectedAddress?.ward || "",
            district: selectedAddress?.district || "",
            phone: selectedAddress?.phone || "",
            name: selectedAddress?.name || "",
          },
          paymentType: paymentType,
        },
        {
          onSuccess: () => {
            dispatch(onGotoStep(0));
            router.push(`${PATH_HOME.checkout}/checkout-success`);
          },
          onError: () => {
            // router.push(`${PATH_HOME.checkout}/checkout-fail`);
          },
        }
      );
    }
  };

  const fullAddress =
    selectedAddress.address +
    " " +
    selectedAddress.ward +
    ", " +
    selectedAddress.district +
    ", " +
    selectedAddress.province;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card sx={{ mb: 3 }} elevation={5}>
          <CardHeader
            title={<Typography variant="h6">Phương thức giao hàng</Typography>}
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
                Thanh toán khi nhận hàng
              </Typography>
            </Stack>
          </CardContent>
        </Card>

        {isPhysical && (
          <Card sx={{ mb: 3 }} elevation={5}>
            <CardHeader
              title={
                <>
                  <Stack
                    direction="row"
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="h6">Địa chỉ</Typography>
                    <Button
                      variant="text"
                      onClick={() => dispatch(onGotoStep(1))}
                    >
                      <Iconify
                        icon={"eva:edit-fill"}
                        sx={{ mr: 1, width: 20, height: 20 }}
                      />{" "}
                      Chỉnh sửa
                    </Button>
                  </Stack>
                </>
              }
            />

            <CardContent sx={{ paddingTop: 0 }}>
              <Stack
                direction="column"
                spacing={1}
                sx={{
                  width: "100%",
                }}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
                  {selectedAddress.name}
                </Typography>
                <Typography
                  sx={{ fontWeight: 400, fontSize: "13px", color: "#637381" }}
                >
                  {selectedAddress.name}
                </Typography>
                <Typography
                  sx={{ fontWeight: 400, fontSize: "15px", color: "#212B36" }}
                >
                  {fullAddress}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        )}

        <Card sx={{ mb: 3 }} elevation={5}>
          <CardHeader
            title={
              <>
                <Stack
                  direction="row"
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography variant="h6">Sản phẩm</Typography>
                  <Button
                    variant="text"
                    onClick={() => dispatch(onGotoStep(0))}
                  >
                    <Iconify
                      icon={"eva:edit-fill"}
                      sx={{ mr: 1, width: 20, height: 20 }}
                    />{" "}
                    Chỉnh sửa
                  </Button>
                </Stack>
              </>
            }
          />

          <TableProductList products={cart} />
        </Card>

        <Button
          size="small"
          color="inherit"
          onClick={handleBackStep}
          startIcon={<Iconify icon={"eva:arrow-ios-back-fill"} />}
        >
          Quay lại
        </Button>
      </Grid>
      <Grid item xs={12} md={4}>
        <CheckoutSummary
          totalPoint={totalPoint}
          discount={discount}
          subtotalPoint={totalPoint}
          subtotalCash={totalCash}
          totalCash={totalCash}
        />
        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          disabled={cart.length === 0}
          onClick={handleOrder}
          sx={{ borderRadius: 5 }}
        >
          Thanh toán <Iconify icon={"grommet-icons:link-next"} sx={{ ml: 1 }} />
        </Button>
      </Grid>
    </Grid>
  );
}
