import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getProductDetail } from "../services";
import {
  listAttributeWithTermOfProduct,
  transformProductIdAttributeWithTerm,
} from "../utils";
import { IProductDDetailRes } from "../interface";

export function useGetDetailProd(id: number) {
  const {
    data: data_ProductDetail,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery([QUERY_KEYS.CATE_DETAIL, id], () => getProductDetail(id), {
    select: (data: IProductDDetailRes) => {
      return {
        id: data.id,
        onSale: data.onSale,
        defaultProductVariantId: data.defaultProductVariantId,
        type: data.type,
        productDetails:
          data.productDetails?.find((item) => item.lang === "VN") ||
          data.productDetails[0],
        merchant: data.id,
        productVariants: data.productToVariants,
        thumbnail: data.thumbnail,
        variantIdDetail: transformProductIdAttributeWithTerm(
          data.productToVariants
        ),
        attributeAndTerm: listAttributeWithTermOfProduct(
          data.productToVariants
        ),
        productCategories: data.productCategories,
      };
    },
  });

  return { data_ProductDetail, isLoading, refetch, isRefetching };
}
