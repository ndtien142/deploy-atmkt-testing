import { useInfiniteQuery, useQuery } from "react-query";
import { getListHistory } from "../services/getListHistoryPoint";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { IParamsPaging } from "@/common/constants/common.interfaces";
import { IHistoryPointList } from "../interfaces/interface";

export const useGetListHistoryPoint = (params: IParamsPaging) => {
  const {
    data: dataHistories,
    isLoading: isLoadingHistories,
    fetchNextPage: fetchNextPageHistoriesPoint,
    isFetchingNextPage: isFetchingNextPageHistoriesPoint,
    hasNextPage: hasNextPageHistoriesPoint,
  } = useInfiniteQuery(
    [QUERY_KEYS.LIST_HISTORY_POINT, params],
    ({ pageParam = params.page }) =>
      getListHistory({ ...params, page: pageParam }),
    {
      getNextPageParam: (lastPage: IHistoryPointList) => {
        const { meta } = lastPage;
        const { currentPage, totalPages } = meta;
        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
      cacheTime: 60000,
      staleTime: 10000,
    }
  );
  return {
    dataHistories,
    isLoadingHistories,
    fetchNextPageHistoriesPoint,
    isFetchingNextPageHistoriesPoint,
    hasNextPageHistoriesPoint,
  };
};
