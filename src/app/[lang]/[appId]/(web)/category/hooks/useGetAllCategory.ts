import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getAllCategory, getListCategory } from "../services";
import { IParamsListProduct } from "../interfaces";

export function useGetListCategory(params?: IParamsListProduct) {
  const {
    data: dataListCategory,
    isLoading,
    refetch,
    isRefetching,
    isSuccess,
  } = useQuery([QUERY_KEYS.CATEGORY_LIST, params], () =>
    getAllCategory(params)
  );
  return { dataListCategory, isLoading, refetch, isRefetching, isSuccess };
}
