import { useInfiniteQuery } from "react-query";
import { IDefaultParams, IListOrderResponse } from "../common/interface";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { getMyOrder } from "../common/services";

export const useGetOrder = (params: IDefaultParams) => {
  return useInfiniteQuery(
    [QUERY_KEYS.GET_MY_ORDER, params?.statuses],
    ({ pageParam = 1 }) =>
      getMyOrder({
        page: pageParam,
        limit: params.limit,
        statuses: params.statuses,
      }),
    {
      getNextPageParam: (lastPage) => {
        return lastPage?.meta?.currentPage === lastPage?.meta?.totalPages
          ? undefined
          : lastPage.meta.currentPage + 1;
      },
    }
  );
};
