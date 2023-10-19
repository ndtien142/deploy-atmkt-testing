import dayjs from "dayjs";
import React from "react";
import { PriceType } from "../@types/common.types";
import numeral from "numeral";

export const hanldeSrcImage = (src: string) => {
  if (src?.startsWith("/")) {
    return src.slice(1);
  }
  return src;
};

export const formatNumberToCurrency = (num?: number) => {
  return num?.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "code",
  });
};

export const formatCurrencyPoint = (num?: number) => {
  const numericValue = parseFloat(String(num));
  if (isNaN(numericValue)) return "";
  return numeral(num).format(Number.isInteger(num) ? "0,0" : "0,0.00");
};

export function formatDate(date: string, format?: string) {
  return dayjs(date).format(format || "DD/MM/YYYY HH:mm");
}

export function fDate(date: string, format?: string) {
  return dayjs(date).format(format || "DD/MM/YYYY");
}

export function currencyFormat(num: number) {
  return new Intl.NumberFormat("en-DE").format(num);
}

export const convertPrice = (price: number, typePrice: string) => {
  if (typePrice === PriceType.VND) {
    if (price > 0) {
      return `${currencyFormat(price)} VND`;
    }
    return "0 VND";
  } else if (typePrice === PriceType.POINT) {
    if (price > 0) {
      return `${currencyFormat(price)} xu`;
    }
    return "0 xu";
  }
};
