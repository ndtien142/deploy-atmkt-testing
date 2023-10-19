import React from "react";
import { ISearchItemProps } from "../header.interface";
import { Avatar, Box, IconButton, Stack, useTheme } from "@mui/material";
import ATypographyEllipsis from "@/common/components/customComponent/ATyporgraphyEllipsis";
import { formatNumberToCurrency } from "@/common/utils/common.utils";
import Image from "@/common/components/Image";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";
import { useDispatch, useSelector } from "@/common/redux/store";
import { useAddToCart } from "@/common/hooks/useAddToCart";
import ProductSearchPrice from "@/common/components/product-price";
import { PriceType } from "@/common/@types/common.types";
import { setPopupLogin } from "../header.slice";

const SearchItem = ({ product }: ISearchItemProps) => {
  const router = useRouter();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.authLogin);
  const { mutate } = useAddToCart();
  const isLoggedIn = accessToken !== "";
  const handleAddToCart = () => {
    if (isLoggedIn) {
      const itemNeedToAddCart = {
        productVariantList: [
          {
            productVariantId: product?.defaultProductVariantId,
            quantity: 1,
          },
        ],
        productId: product?.id,
      };
      mutate(itemNeedToAddCart);
      return;
    }
    dispatch(setPopupLogin(true));
  };
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
    >
      <Stack
        onClick={() => router.push(PATH_HOME.product.detail(product?.id))}
        width={{ xs: "50%", sm: "70%", md: "90%" }}
        direction="row"
        spacing={"16px"}
        alignItems={"center"}
      >
        <Avatar
          src={product?.thumbnail?.url}
          alt="avatar"
          sx={{
            borderRadius: "12px",
            width: { sm: "40px", lg: "64px" },
            height: { sm: "40px", lg: "64px" },
          }}
        />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          overflow="hidden"
          // spacing={2}
        >
          <Stack spacing={1} width={{ md: "70%", xs: "100%" }}>
            <ATypographyEllipsis
              fontWeight={600}
              fontSize={{ xs: "14px", md: "18px" }}
              lineHeight={"24px"}
            >
              {product?.productDetails[0]?.name}
            </ATypographyEllipsis>
            {/* <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          color: "grey",
        }}
      >
        Màu sắc:{" "}
        <ATypographyEllipsis color={"#212B36"}>
          {product?.color}
        </ATypographyEllipsis>
      </Box> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                color: "grey",
              }}
            >
              <ProductSearchPrice
                textColor="#212B36"
                normalPrice={
                  product?.price.normalPrice && product?.price.normalPrice
                }
                salePrice={product?.price.salePrice && product?.price.salePrice}
                rangePrice={product?.price?.range && product?.price?.range}
                typeCurrency={PriceType.VND}
              />
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <IconButton
        component="span"
        sx={{
          display: "flex",
          zIndex: 9999,
          backgroundColor: theme.palette.primary.main,
          ":hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        }}
        onClick={handleAddToCart}
      >
        <Image
          alt=""
          sx={{
            width: "24px",
            height: "24px",
          }}
          src={"/assets/icons/core/add-to-cart.svg"}
        />
      </IconButton>
    </Stack>
  );
};

export default SearchItem;
