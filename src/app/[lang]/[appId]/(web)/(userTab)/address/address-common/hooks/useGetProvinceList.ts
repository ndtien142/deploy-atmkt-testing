import { useInfiniteQuery } from "react-query";
import { IParamsProvinceList, IResProvinceList } from "../interface";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { getProvinceList } from "../service";

export const useGetProvinceList = (params: IParamsProvinceList) => {
  const {
    data: dataProvinceList,
    isLoading: isLoadingProvinceList,
    fetchNextPage: fetchNextPageProvinceList,
    hasNextPage: hasNextPageProvinceList,
    isFetchingNextPage: isFetchingNextPageProvinceList,
  } = useInfiniteQuery(
    [QUERY_KEYS.PROVINCE_DATA, params],
    ({ pageParam = params.page }) =>
      getProvinceList({ ...params, page: pageParam }),
    {
      getNextPageParam: (lastPage: IResProvinceList) => {
        const { meta } = lastPage;
        const { currentPage, totalPages } = meta;
        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
      cacheTime: 60000,
      staleTime: 10000,
    }
  );
  return {
    dataProvinceList,
    isLoadingProvinceList,
    fetchNextPageProvinceList,
    hasNextPageProvinceList,
    isFetchingNextPageProvinceList,
  };
};
