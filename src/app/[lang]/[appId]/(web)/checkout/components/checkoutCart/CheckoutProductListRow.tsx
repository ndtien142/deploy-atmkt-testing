import {
  Box,
  Divider,
  IconButton,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { ICartItem } from "../../interface";
import Image from "next/image";
import { fCurrency, fFormatCoin } from "@/common/utils/formatNumber";
import Iconify from "@/common/components/Iconify";
import { QuantityBox } from "./QuantityBox";
import { useSelector } from "@/common/redux/store";

type CheckoutProductListRowProps = {
  row: ICartItem;
  onDelete: VoidFunction;
  onDecrease: VoidFunction;
  onIncrease: VoidFunction;
};

export default function CheckoutProductListRow({
  row,
  onDelete,
  onDecrease,
  onIncrease,
}: CheckoutProductListRowProps) {
  const { paymentType } = useSelector((state) => state.checkout);
  const { product, quantity, productToVariantIds } = row;
  const pointVariant =
    row?.product?.productToVariants[0]?.productVariant?.productVariantPoint;
  const point =
    pointVariant?.salePoint && row?.product?.onSale
      ? pointVariant?.salePoint
      : pointVariant?.point;
  const price =
    row?.product?.productToVariants[0]?.productVariant?.salePrice &&
    row?.product?.onSale
      ? row?.product?.productToVariants[0]?.productVariant?.salePrice
      : row?.product?.productToVariants[0]?.productVariant?.price;
  return (
    <TableRow>
      <TableCell
        sx={{
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          width: { xs: "270px" },
        }}
      >
        <Image
          alt="product image"
          src={
            row?.product?.productToVariants[0]?.productVariant?.images[0]?.url
          }
          key={
            row?.product?.productToVariants[0]?.productVariant?.images[0]?.key
          }
          width={64}
          height={64}
          style={{ borderRadius: 1.5, marginRight: 12 }}
        />

        <Stack
          spacing={0.5}
          sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
        >
          <Typography
            noWrap
            variant="subtitle2"
            sx={{
              maxWidth: 240,
            }}
          >
            {row?.product?.productDetails[0]?.name}
          </Typography>
          <Stack
            direction={{ xs: "column", md: "column" }}
            alignItems={{ xs: "left", md: "left" }}
          >
            {row?.product?.productToVariants[0]?.productVariant?.productAttributeTerms?.map(
              (item, index) => (
                <>
                  <Typography variant="body2">
                    <Box component="span" sx={{ color: "text.secondary" }}>
                      {item?.productAttribute?.productAttributeDetails[0]?.name}
                      :&nbsp;
                    </Box>
                    {item?.productAttributeTermDetails[0]?.value}
                  </Typography>
                  {index !==
                    row?.product?.productToVariants[0]?.productVariant
                      ?.productAttributeTerms?.length -
                      1 && (
                    // <Divider
                    //   orientation="vertical"
                    //   sx={{
                    //     mx: 1,
                    //     height: 16,
                    //     display: { xs: "none", md: "block" },
                    //   }}
                    // />
                    <></>
                  )}
                </>
              )
            )}
          </Stack>
        </Stack>
      </TableCell>
      <TableCell align="center" sx={{ ml: { xs: 5 } }}>
        {paymentType === "POINT"
          ? `${fFormatCoin(point)} xu`
          : `${fFormatCoin(price)} VNĐ`}
      </TableCell>
      <TableCell align="center">
        <QuantityBox
          quantity={quantity}
          available={
            row?.product?.productToVariants[0]?.productVariant?.quantity
          }
          onDecrease={onDecrease}
          onIncrease={onIncrease}
        />
      </TableCell>

      <TableCell align="center">
        {paymentType === "POINT"
          ? `${fFormatCoin(point * quantity)} xu`
          : `${fFormatCoin(price * quantity)} VNĐ`}
      </TableCell>

      <TableCell align="center">
        <IconButton onClick={onDelete}>
          <Iconify icon={"eva:trash-2-outline"} width={20} height={20} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
