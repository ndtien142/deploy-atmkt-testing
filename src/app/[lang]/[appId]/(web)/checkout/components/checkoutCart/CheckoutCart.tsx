"use client";
import {
  Button,
  Card,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import EmptyCart from "../EmptyCart";
import Iconify from "@/common/components/Iconify";
import { TLink } from "@/common/components/TLink";
import CheckoutProductList from "./CheckoutProductList";
import {
  onGotoStep,
  onNextStep,
  removeCartItem,
  resetOrderState,
  setCart,
  setIsEVoucher,
  setIsPhysical,
  setPaymentType,
  setTotalCash,
  setTotalPoint,
  setUpdateQuantity,
} from "../../order.slice";
import CheckoutSummary from "../CheckoutSummary";
import { ICartItem } from "../../interface";
import { useEffect } from "react";
import { useDispatch, useSelector } from "@/common/redux/store";
import { useDeleteCartItem } from "../../hooks/useDeleteCart";
import { useUpdateCartItem } from "../../hooks/useUpdateCartItem";
import { CheckoutCartSkeleton } from "./CheckoutCartSkeleton";
import { useAnalytics } from "@/common/hooks/firebase-analytics/useAnalytics";
import { PATH_HOME } from "@/common/constants/path.constants";
import useMessage from "@/common/hooks/useMessage";
import useTranslation from "next-translate/useTranslation";

type Props = {
  data: ICartItem[];
  isLoading: boolean;
};

export default function CheckoutCart({ data, isLoading }: Props) {
  const { cart, discount, shipping, totalPoint, paymentType, totalCash } =
    useSelector((state) => state.checkout);
  const dispatch = useDispatch();
  const { logRemoveFromCart } = useAnalytics();
  const { showErrorSnackbar, showSuccessSnackbar } = useMessage();
  const { t } = useTranslation("common");

  const isEmptyCart = cart.length === 0;

  const { mutate: deleteCartItem } = useDeleteCartItem(
    () => {
      showSuccessSnackbar("Xoá sản phẩm thành công!");
    },
    () => {
      dispatch(setCart(data));
    }
  );

  const { mutate: updateCartItem } = useUpdateCartItem(
    () => {},
    () => {
      dispatch(setCart(data));
    }
  );

  const handleNextStep = () => {
    const listProductNotExist = cart.filter(
      (item) =>
        item?.product?.productToVariants?.[0]?.productVariant?.quantity === 0
    );
    const isPhysical = cart.some(
      (item) =>
        item?.product?.productToVariants[0]?.productVariant?.type === "PHYSICAL"
    );
    if (listProductNotExist.length > 0) {
      showErrorSnackbar(t("product.outOfStockProduct"));
      return;
    }
    if (isPhysical) {
      dispatch(onNextStep());
    } else {
      dispatch(setPaymentType("POINT"));
      dispatch(onGotoStep(2));
    }
  };

  const handleApplyDiscount = (value: number) => {};

  const onDelete = async (id: string) => {
    deleteCartItem(
      { productToVariantIds: [parseInt(id)] },
      {
        onSuccess: () => {
          const itemToRemove = data?.find(
            (item) => item.productToVariantIds[0] !== parseInt(id)
          );
          logRemoveFromCart({
            currency: "VND",
            items: [
              {
                item_id: String(id),
                item_name: String(
                  itemToRemove?.product?.productDetails[0]?.name
                ),
                item_variant: String(
                  itemToRemove?.product?.productToVariants[0]?.productVariant
                    ?.name
                ),
                quantity: itemToRemove?.quantity,
                price:
                  itemToRemove?.product?.productToVariants[0]?.productVariant
                    ?.price,
              },
            ],
            value:
              (itemToRemove?.quantity ?? 1) *
              (itemToRemove?.product?.productToVariants[0]?.productVariant
                ?.price ?? 0),
          });
          dispatch(removeCartItem(parseInt(id)));
        },
      }
    );
  };

  const onIncreaseQuantity = async (id: string, quantity: number) => {
    dispatch(setUpdateQuantity({ id: parseInt(id), quantity: quantity + 1 }));
    updateCartItem({
      productToVariantIds: [parseInt(id)],
      quantity: quantity + 1,
    });
  };

  const onDecreaseQuantity = async (id: string, quantity: number) => {
    dispatch(setUpdateQuantity({ id: parseInt(id), quantity: quantity - 1 }));
    updateCartItem({
      productToVariantIds: [parseInt(id)],
      quantity: quantity - 1,
    });
  };

  useEffect(() => {
    const totalPoint = cart?.reduce((accumulator, item) => {
      if (item?.product?.productToVariants.length > 0) {
        const variant = item?.product?.productToVariants[0]?.productVariant;
        const point = variant?.productVariantPoint?.point;
        const salePoint = variant?.productVariantPoint?.salePoint;
        const quantity = item.quantity;

        const itemPrice = item.product.onSale && salePoint ? salePoint : point;
        accumulator += itemPrice * quantity;
      }
      return accumulator;
    }, 0);
    const totalCash = cart?.reduce((accumulator, item) => {
      if (item?.product?.productToVariants.length > 0) {
        const variant = item?.product?.productToVariants[0]?.productVariant;
        const price = variant?.price;
        const salePrice = variant?.salePrice;
        const quantity = item.quantity;

        const itemPrice = item.product.onSale && salePrice ? salePrice : price;
        accumulator += itemPrice * quantity;
      }
      return accumulator;
    }, 0);
    const isPhysical = cart.some(
      (item) =>
        item?.product?.productToVariants[0]?.productVariant?.type === "PHYSICAL"
    );
    const isEVoucher = cart.some(
      (item) =>
        item?.product?.productToVariants[0]?.productVariant?.type === "EVOUCHER"
    );
    dispatch(setIsEVoucher(isEVoucher));
    dispatch(setIsPhysical(isPhysical));
    dispatch(setTotalPoint(totalPoint));
    dispatch(setTotalCash(totalCash));
    dispatch(setPaymentType(isPhysical && !isEVoucher ? paymentType : "POINT"));
  }, [cart]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card sx={{ mb: 3 }} elevation={5}>
          <CardHeader
            title={
              <Typography variant="h5">
                Giỏ hàng
                <Typography component={"span"} sx={{ color: "text.secondary" }}>
                  &nbsp;&nbsp;({cart?.length || 0} sản phẩm)
                </Typography>
              </Typography>
            }
          />
          {isLoading && <CheckoutCartSkeleton />}
          {!isLoading &&
            (!isEmptyCart ? (
              // <Scrollbar>
              <CheckoutProductList
                products={cart}
                onDelete={onDelete}
                onDecreaseQuantity={onDecreaseQuantity}
                onIncreaseQuantity={onIncreaseQuantity}
              />
            ) : (
              // </Scrollbar>
              <EmptyCart
                title="Không có sản phẩm trong giỏ hàng"
                description=""
                img="/assets/illustration_empty_cart.svg"
              />
            ))}
        </Card>
        <Button
          color="inherit"
          component={TLink}
          href={PATH_HOME.root}
          startIcon={<Iconify icon={"eva:arrow-ios-back-fill"} />}
        >
          Quay lại mua sắm
        </Button>
      </Grid>
      <Grid item xs={12} md={4}>
        <CheckoutSummary
          enableDiscount
          totalPoint={totalPoint}
          totalCash={totalCash}
          discount={discount}
          subtotalPoint={totalPoint}
          subtotalCash={totalCash}
          onApplyDiscount={handleApplyDiscount}
        />
        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          disabled={cart.length === 0}
          onClick={handleNextStep}
          sx={{ borderRadius: 5 }}
        >
          Thanh toán <Iconify icon={"grommet-icons:link-next"} sx={{ ml: 1 }} />
        </Button>
      </Grid>
    </Grid>
  );
}
