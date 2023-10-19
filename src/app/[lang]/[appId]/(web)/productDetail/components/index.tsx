"use client";
import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import { useGetDetailProd } from "../hooks/useGetDetailProd";
import { VariantProduct } from "../components/variant-product/VariantProduct";
import { TabDescriptionReview } from "../components/TabDescriptionReview";
import { SliderProductRecomnend } from "../components/SliderProductRecomnend";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { dispatch, useSelector } from "@/common/redux/store";
import {
  setAttributeSelected,
  setProdVariantSelected,
  setVariantIdSelect,
} from "../slice";
import { useAnalytics } from "@/common/hooks/firebase-analytics/useAnalytics";
import { PATH_HOME } from "@/common/constants/path.constants";
import { findMatchingVariantId } from "../utils";

export const ProductDetailContainer = () => {
  const params = useParams();
  const { attributeSelected } = useSelector((state) => state.productDetail);
  const { data_ProductDetail, isLoading } = useGetDetailProd(
    parseInt(params?.id as string)
  );
  const { logViewItem } = useAnalytics();

  const data_DETAIL = data_ProductDetail;

  useEffect(() => {
    if (data_DETAIL) {
      const categoryNames = data_DETAIL?.productCategories?.map(
        (category) => category?.categoryDetails[0]?.name
      );
      logViewItem({
        currency: "VND",
        items: [
          {
            item_id: String(data_DETAIL?.id),
            item_name: data_DETAIL?.productDetails?.name,
            quantity: data_DETAIL?.productVariants[0]?.productVariant?.quantity,
            item_variant: data_DETAIL?.productVariants[0]?.productVariant?.name,
            price: data_DETAIL?.productVariants[0].productVariant?.price,
            item_category: categoryNames[0],
            item_category2: categoryNames[1],
            item_category3: categoryNames[2],
            item_category4: categoryNames[3],
            item_category5: categoryNames[4],
          },
        ],
        value: data_DETAIL?.productVariants[0]?.productVariant?.price,
      });
      data_DETAIL?.variantIdDetail?.length > 0 &&
        data_DETAIL?.variantIdDetail[0]?.variantAtributeList?.map(
          (item: any) => {
            dispatch(
              setAttributeSelected({
                attributeId: item?.attributeId,
                termId: item?.termId,
              })
            );
          }
        );
      dispatch(
        setProdVariantSelected(
          data_DETAIL?.productVariants?.filter(
            (item) => item.id === data_DETAIL?.defaultProductVariantId
          )[0] || data_DETAIL?.productVariants[0]
        )
      );
    }
  }, [data_DETAIL]);

  useEffect(() => {
    if (data_DETAIL && attributeSelected.length > 0) {
      const existingTerms: number[] = attributeSelected?.map(
        (item) => item.termId
      );
      const selectedVariant = findMatchingVariantId(
        data_DETAIL.variantIdDetail,
        [existingTerms]
      );
      dispatch(setVariantIdSelect(selectedVariant || 0));
      const dataVariant = data_DETAIL?.productVariants?.filter(
        (item) => item.id === selectedVariant
      );

      dispatch(setProdVariantSelected(dataVariant[0] || null));
    }
  }, [attributeSelected]);

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href={PATH_HOME.root}>
      Trang chủ
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href={PATH_HOME.product.root}
    >
      Sản phẩm
    </Link>,
    <Typography key="3" color="primary">
      {data_DETAIL?.productCategories[0]?.categoryDetails[0]?.name}
    </Typography>,
  ];
  return (
    <>
      <title>{data_DETAIL?.productDetails?.name}</title>
      <Stack
        minHeight={"1000px"}
        sx={{ paddingX: { lg: "100px", md: "75px", sm: "50px", xs: "25px" } }}
        pt={"50px"}
        pb={{ md: "100px", xs: "50px" }}
        spacing={4}
      >
        <Breadcrumbs
          separator="·"
          sx={{ fontWeight: "700 !important" }}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <VariantProduct dataItem={data_DETAIL} />
        <TabDescriptionReview data={data_DETAIL} />
        <SliderProductRecomnend dataProductRelated={data_ProductDetail} />
      </Stack>
    </>
  );
};
