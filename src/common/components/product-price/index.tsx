"use client";
import { convertPrice } from "@/common/utils/common.utils";
import { Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";

interface IProductPriceProps {
  // iconCurrency: ImageURISource;
  normalPrice: number;
  salePrice: number;
  rangePrice: {
    max: number;
    min: number;
  };
  typeCurrency: string;
  textColor: string;
  // fontSizeForVndPrice?: string;
  // fontSizeForCoinPrice?: string;
  typeProduct?: string;
}

const ProductSearchPrice = ({
  // iconCurrency,
  normalPrice,
  salePrice,
  rangePrice,
  typeCurrency,
  textColor,
  // fontSizeForVndPrice,
  // fontSizeForCoinPrice,
  typeProduct,
}: IProductPriceProps) => {
  const productPrices = useMemo(() => {
    const minPriceConverted = convertPrice(rangePrice?.min, typeCurrency);
    const maxPriceConverted = convertPrice(rangePrice?.max, typeCurrency);
    const rangePriceConverted = `${minPriceConverted} - ${maxPriceConverted}`;
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
      rangePriceConverted,
      normalPriceValue,
      salePriceValue,
    };
  }, [normalPrice, salePrice, rangePrice]);
  return (
    <Stack direction={"row"} alignItems="center" width="100%" spacing={1}>
      <Typography
        noWrap
        color={"#637381"}
        fontWeight={400}
        fontSize={{ xs: "12px", sm: "14px" }}
      >
        {typeCurrency === "vnd" ? "Giá trị: " : ""}
      </Typography>
      {rangePrice ? (
        <Typography
          noWrap
          color={textColor}
          fontSize={{ xs: "12px", sm: "14px" }}
          fontWeight={400}
        >
          {productPrices.rangePriceConverted}
        </Typography>
      ) : (
        <></>
      )}
      {!rangePrice && normalPrice ? (
        <Typography
          noWrap
          fontSize={{ xs: "12px", sm: "14px" }}
          color={textColor}
          fontWeight={typeCurrency === "vnd" ? 400 : 600}
          sx={{
            textDecoration: !!salePrice ? "line-through" : "none",
          }}
        >
          {productPrices.normalPriceValue}
        </Typography>
      ) : (
        <></>
      )}

      {salePrice && !rangePrice ? (
        <Typography
          noWrap
          fontSize={{ xs: "12px", sm: "14px" }}
          color={textColor}
          fontWeight={typeCurrency === "vnd" ? 400 : 600}
        >
          {productPrices.salePriceValue}
        </Typography>
      ) : (
        <></>
      )}
    </Stack>
  );
};

export default ProductSearchPrice;
