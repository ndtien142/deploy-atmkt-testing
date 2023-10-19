import { useInfiniteQuery } from "react-query";
import { INotiList, IParamsNotiList } from "../../noti-common/interface";
import { getNotiList } from "../../noti-common/service";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";

export const useGetNotiList = (params: IParamsNotiList) => {
  const {
    data: dataNotiList,
    isLoading: isLoadingNotiList,
    fetchNextPage: fetchNextPageNotiList,
    isFetchingNextPage: isFetchingNextPageNotiList,
    hasNextPage: hasNextPageNotiList,
  } = useInfiniteQuery(
    [QUERY_KEYS.LIST_NOTI, params],
    ({ pageParam = params.page }) =>
      getNotiList({ ...params, page: pageParam }),
    {
      getNextPageParam: (lastPage: INotiList) => {
        const { meta } = lastPage;
        const { currentPage, totalPages } = meta;
        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
      cacheTime: 0,
    }
  );

  return {
    dataNotiList,
    isLoadingNotiList,
    fetchNextPageNotiList,
    isFetchingNextPageNotiList,
    hasNextPageNotiList,
  };
};
