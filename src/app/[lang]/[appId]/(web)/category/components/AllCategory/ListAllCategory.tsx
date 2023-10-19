"use client";
import { ProductItemDefault } from "@/common/components/product/ProductItem";
import {
  Breadcrumbs,
  Grid,
  Link,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { IProductItems } from "../../interfaces";
import { PATH_HOME } from "@/common/constants/path.constants";
import { useGetListCategory } from "../../hooks/useGetAllCategory";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHasMore, setPageNumber } from "../../category.slice";
import { useAddToCart } from "@/common/hooks/useAddToCart";
import { useSelector } from "@/common/redux/store";
import { useAnalytics } from "@/common/hooks/firebase-analytics/useAnalytics";
import {
  setDefaultPointDetailProduct,
  setDefaultPriceDetailProduct,
} from "../../../productDetail/slice";

export default function ListAllCategoryProduct() {
  const route = useRouter();
  const dispatch = useDispatch();
  const { page, filterParam } = useSelector((state) => state?.categoryRoot);
  const { mutate } = useAddToCart();
  const { logAddToCart } = useAnalytics();

  const searchParams: {
    page: number;
    limit: number;
    categoryIds?: any;
    minPrice?: number;
    maxPrice?: number;
    sortType?: string;
    sortField?: string;
  } = {
    page: page,
    limit: 12,
    minPrice: filterParam?.minPrice,
    sortField:
      filterParam?.sortField?.length === 0 ? undefined : filterParam?.sortField,
    sortType:
      filterParam?.sortType?.length === 0 ? undefined : filterParam?.sortType,
    maxPrice: filterParam?.maxPrice,
  };

  const { dataListCategory, isSuccess } = useGetListCategory(
    filterParam?.categoryId?.length
      ? {
          ...searchParams,
          categoryIds: decodeURIComponent(
            filterParam?.categoryId?.reduce(
              (f: any, s: any) => `${f}&categoryIds=${s}`
            )
          ),
        }
      : searchParams
  );
  const data_CATEGORY = dataListCategory?.items || [];

  const handleAddToCart = (product: any) => {
    const dataAddToCart = {
      productVariantList: [
        {
          productVariantId:
            product?.type === "SIMPLE" || product?.type === "EXTERNAL_AFFILIATE"
              ? product?.productToVariants[0]?.productVariantId
              : product?.defaultProductVariantId,
          quantity: 1,
        },
      ],
      productId: product?.id,
    };
    mutate(dataAddToCart, {
      onSuccess: () => {
        logAddToCart({
          currency: "VND",
          items: [
            {
              item_id: String(product?.id),
              item_name: String(product?.productDetails[0]?.name),
              price: product?.point?.normalPoint || 0,
              quantity: 1,
            },
          ],
          value: product?.point?.normalPoint ? product?.point?.normalPoint : 0,
        });
      },
    });
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPageNumber(value));
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href={PATH_HOME.root}>
      Trang chủ
    </Link>,
    <Typography key="2" color="primary">
      Sản phẩm
    </Typography>,
  ];
  return (
    <Grid item md={9} xs={12}>
      <Stack spacing={2}>
        <Breadcrumbs
          separator="·"
          sx={{ fontWeight: "700 !important" }}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Grid
          container
          spacing={{ md: 4, xs: 1, sm: 2 }}
          height={"100%"}
          width={"100%"}
          sx={{
            marginLeft: {
              xs: "-8px !important",
              sm: "-24px !important",
              md: "0",
            },
          }}
        >
          {data_CATEGORY?.map((itemProd: IProductItems, index: number) => {
            return (
              <Grid
                item
                xs={6}
                sm={4}
                key={`${index} + ${itemProd?.id} + ${itemProd?.type}`}
              >
                <ProductItemDefault
                  title={itemProd?.productDetails[0]?.name}
                  srcImg={itemProd?.thumbnail?.url}
                  property={itemProd?.productDetails[0]?.shortDescription}
                  price={itemProd?.price}
                  point={itemProd?.point}
                  onSale={itemProd?.onSale}
                  type={itemProd?.type}
                  isOutOfStock={itemProd?.isOutOfStock}
                  productVariantType={
                    itemProd?.productToVariants[0]?.productVariant?.type
                  }
                  onClick={() => {
                    dispatch(setDefaultPriceDetailProduct(itemProd?.price));
                    dispatch(setDefaultPointDetailProduct(itemProd?.point));
                    route.push(PATH_HOME.product.detail(itemProd?.id));
                  }}
                  onClickAddToCart={() => handleAddToCart(itemProd)}
                  isShowPriceAffiliate={
                    itemProd?.productToVariants[0]?.productVariant
                      ?.externalAffiliateInfo?.isShowPrice
                  }
                />
              </Grid>
            );
          })}
          <Pagination
            count={dataListCategory?.meta?.totalPages}
            page={page}
            onChange={handleChange}
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingY: "50px",
              width: "100%",
              ul: {
                flexWrap: "nowrap !important",
              },
              "& .css-lxelle-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
                {
                  bgcolor: "#7fc5b8 !important",
                },
            }}
          />
        </Grid>
      </Stack>
    </Grid>
  );
}
