import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getCategoryFilter } from "../services";
import { IParamsCategoryFilter } from "../interfaces";

export function useCategoryFilter(params?: IParamsCategoryFilter) {
  const {
    data: dataCategoryFilter,
    isLoading,
    refetch,
    isRefetching,
    isSuccess,
  } = useQuery(
    [QUERY_KEYS.CATEGORY_FILTER, params],
    () => getCategoryFilter(params),
    { cacheTime: 0 }
  );
  return { dataCategoryFilter, isLoading, refetch, isRefetching, isSuccess };
}
