import { useInfiniteQuery } from "react-query";
import {
  IParamsAddressList,
  IResAddressList,
} from "../../address-common/interface";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { getAddressList } from "../../address-common/service";

export const useGetAddressList = (params: IParamsAddressList) => {
  const {
    data: dataAddressList,
    isLoading: isLoadingAddressList,
    fetchNextPage: fetchNextPageAddressList,
    hasNextPage: hasNextPageAddressList,
    isFetchingNextPage: isFetchingNextPageAddressList,
  } = useInfiniteQuery(
    [QUERY_KEYS.LIST_ADDRESS, params],
    ({ pageParam = params.page }) =>
      getAddressList({ ...params, page: pageParam }),
    {
      getNextPageParam: (lastPage: IResAddressList) => {
        const { meta } = lastPage;
        const { currentPage, totalPages } = meta;
        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
      cacheTime: 60000,
      staleTime: 10000,
    }
  );
  return {
    dataAddressList,
    isLoadingAddressList,
    fetchNextPageAddressList,
    hasNextPageAddressList,
    isFetchingNextPageAddressList,
  };
};
