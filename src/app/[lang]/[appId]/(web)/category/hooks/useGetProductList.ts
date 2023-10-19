import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getListCategory, getProductByCategory } from "../services";
import { IParamsProductByCategory } from "../interfaces";

export function useGetProductList(categoryId: number) {
  const { data: dataListProd, isLoading: isLoadingListProd } = useQuery(
    [QUERY_KEYS.CATEGORY_LIST],
    () => getListCategory(categoryId),
    {
      cacheTime: 60000,
    }
  );
  return { dataListProd, isLoadingListProd };
}

export function useGetProductByCategory(params: IParamsProductByCategory) {
  const { data: dataListProdByCategory, isLoading: isLoadingListProdByCategory } = useQuery(
    [QUERY_KEYS.GET_PROD_BY_CATEGORY, params],
    () => getProductByCategory(params),
    {}
  );
  return { dataListProdByCategory, isLoadingListProdByCategory };
}
