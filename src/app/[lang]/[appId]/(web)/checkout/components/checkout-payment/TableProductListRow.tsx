import {
  Box,
  Divider,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { ICartItem } from "../../interface";
import Image from "next/image";
import { fFormatCoin } from "@/common/utils/formatNumber";
import { useSelector } from "@/common/redux/store";

type Props = {
  row: ICartItem;
};

export default function TableProductListRow({ row }: Props) {
  const { product, quantity, productToVariantIds } = row;
  const { paymentType } = useSelector((state) => state.checkout);
  const pointVariant =
    row?.product?.productToVariants[0]?.productVariant?.productVariantPoint;
  const point =
    pointVariant?.salePoint && product?.onSale
      ? pointVariant?.salePoint
      : pointVariant?.point;
  const price =
    row?.product?.productToVariants[0]?.productVariant?.salePrice &&
    row?.product?.onSale
      ? row?.product?.productToVariants[0]?.productVariant?.salePrice
      : row?.product?.productToVariants[0]?.productVariant?.price;
  return (
    <TableRow>
      <TableCell sx={{ display: "flex", alignItems: "center" }}>
        <Image
          alt="product image"
          src={
            row?.product?.productToVariants[0]?.productVariant?.images[0]?.url
          }
          width={64}
          height={64}
          style={{ borderRadius: 1.5, marginRight: 6 }}
        />

        <Stack
          spacing={0.5}
          sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
        >
          <Typography noWrap variant="subtitle2" sx={{ maxWidth: 240 }}>
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
      <TableCell align="center">
        {" "}
        {paymentType === "POINT"
          ? `${fFormatCoin(point)} xu`
          : `${fFormatCoin(price)} VNĐ`}
      </TableCell>
      <TableCell align="center">{quantity}</TableCell>
      <TableCell align="center">
        {" "}
        {paymentType === "POINT"
          ? `${fFormatCoin(point * quantity)} xu`
          : `${fFormatCoin(price * quantity)} VNĐ`}
      </TableCell>
    </TableRow>
  );
}
