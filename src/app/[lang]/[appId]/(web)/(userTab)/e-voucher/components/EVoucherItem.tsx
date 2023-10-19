import React from "react";
import {
  Box,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { IEVoucherItemProps } from "../eVoucher.interface";
import { TLink } from "@/common/components/TLink";
import { Divider } from "@mui/material";
import { PATH_HOME } from "@/common/constants/path.constants";
import Image from "@/common/components/Image";
import { PriceType } from "@/common/@types/common.types";
import ProductPrice from "@/common/components/product-price/ProductPrice";
import useTranslation from "next-translate/useTranslation";

const EVoucherItem = ({ eVoucher, isLastChild }: IEVoucherItemProps) => {
  const theme = useTheme();
  const { t } = useTranslation("common");
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Paper
      elevation={5}
      sx={{
        paddingY: 2,
        paddingX: 3,
        width: "97%",
      }}
    >
      <Stack direction="column" spacing={1} width={"100%"}>
        <TLink
          href={`${PATH_HOME.eVoucher.list}/${eVoucher?.id}`}
          style={{ textDecoration: "none" }}
        >
          <Typography
            sx={{
              color: "#191919",
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 600,
              marginBottom: 1,
            }}
          >
            {t("e_voucher.e_voucher_id")} {eVoucher.id}
          </Typography>
          <Divider sx={{ borderStyle: "dashed" }} />
          <Stack
            direction={matches ? "row" : "column"}
            width="100%"
            sx={{ paddingY: "15px!important", cursor: "pointer" }}
            spacing={matches ? 0 : 3}
          >
            <Stack
              direction="row"
              width={"100%"}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <Box
                minWidth={{ xs: "80px", md: "100px" }}
                minHeight={{ xs: "80px", md: "100px" }}
                width={{ xs: "80px", md: "100px" }}
                height={{ xs: "80px", md: "100px" }}
                bgcolor={"#F5F5F5"}
                marginRight={3}
              >
                {eVoucher?.product?.thumbnail?.url ? (
                  <Image
                    src={eVoucher?.product?.thumbnail?.url}
                    alt="Order Item Image"
                    sx={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  ></Box>
                )}
              </Box>
              <Stack spacing={0.5} width={"100%"} minHeight={"100%"}>
                <Typography
                  sx={{ fontSize: { xs: "16px", md: "18px" }, fontWeight: 600 }}
                  color={"#191919"}
                >
                  {eVoucher?.product?.productDetails[0]?.name}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="flex-start"
                  marginBottom={"10px!important"}
                >
                  {eVoucher?.product?.attributeAndTerm?.map((item, index) => (
                    <>
                      <Typography variant="body2" key={index}>
                        <Box component="span" sx={{ color: "text.secondary" }}>
                          {item?.name}:&nbsp;
                        </Box>
                        {item?.term[0]?.value}
                      </Typography>
                      {index !==
                        eVoucher?.product?.attributeAndTerm?.length - 1 && (
                        <Divider
                          orientation="vertical"
                          sx={{ mx: 1, height: 16 }}
                        />
                      )}
                    </>
                  ))}
                </Stack>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              width={matches ? "30%" : "100%"}
              minHeight="100%"
              justifyContent={{ xs: "flex-start", md: "flex-end" }}
              alignItems={"center"}
            >
              <ProductPrice
                isDisplayEnd={true}
                textColor="#212B36"
                normalPrice={
                  eVoucher?.product?.productToVariants[0]?.productVariant
                    ?.price &&
                  eVoucher?.product?.productToVariants[0]?.productVariant?.price
                }
                salePrice={
                  eVoucher?.product?.productToVariants[0]?.productVariant
                    ?.salePrice &&
                  eVoucher?.product?.productToVariants[0]?.productVariant
                    ?.salePrice
                }
                typeCurrency={PriceType.VND}
              />
            </Stack>
          </Stack>
        </TLink>
      </Stack>
    </Paper>
  );
};

export default EVoucherItem;
