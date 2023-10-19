"use client";
import { convertPrice } from "@/common/utils/common.utils";
import { Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";

interface IProductPriceProps {
  normalPrice: number;
  salePrice: number;
  typeCurrency: string;
  textColor: string;
  typeProduct?: string;
  hasTitle?: boolean;
  isDisplayEnd?: boolean;
}

const ProductPrice = ({
  // iconCurrency,
  normalPrice,
  salePrice,
  typeCurrency,
  textColor,
  hasTitle,
  typeProduct,
  isDisplayEnd,
}: IProductPriceProps) => {
  const productPrices = useMemo(() => {
    let normalPriceValue;
    let salePriceValue;

    if (normalPrice) {
      const normalPriceConverted = convertPrice(normalPrice, typeCurrency);
      normalPriceValue = normalPriceConverted;
    }
    if (salePrice) {
      const salePriceConverted = convertPrice(salePrice, typeCurrency);
      salePriceValue = salePriceConverted;
    }
    return {
      normalPriceValue,
      salePriceValue,
    };
  }, [normalPrice, salePrice]);
  return (
    <Stack
      direction={"row"}
      alignItems="center"
      width={"100%"}
      spacing={1}
      justifyContent={isDisplayEnd ? "flex-end" : "flex-start"}
    >
      {hasTitle && (
        <Typography sx={{ textWrap: "nowrap" }}>Giá trị: </Typography>
      )}
      {normalPrice ? (
        <Typography
          noWrap
          fontSize={{ xs: "12px", sm: "14px", md: "16px" }}
          color={textColor}
          fontWeight={600}
          sx={{
            textDecoration: !!salePrice ? "line-through" : "none",
          }}
        >
          {productPrices.normalPriceValue}
        </Typography>
      ) : (
        <></>
      )}

      {salePrice ? (
        <Typography
          noWrap
          fontSize={{ xs: "12px", sm: "14px", md: "16px" }}
          color={textColor}
          fontWeight={600}
        >
          {productPrices.salePriceValue}
        </Typography>
      ) : (
        <></>
      )}
    </Stack>
  );
};

export default ProductPrice;
