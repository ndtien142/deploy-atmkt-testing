import { useInfiniteQuery } from "react-query";
import { IParamsSearchProvince } from "../interface";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { getDataProvince } from "../services";

export const useGetProvinceData = (params: IParamsSearchProvince) => {
  return useInfiniteQuery(
    [QUERY_KEYS.PROVINCE_DATA, params],
    ({ pageParam = 1 }) => getDataProvince(pageParam, params),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage?.meta?.currentPage === lastPage?.meta?.totalPages
          ? undefined
          : lastPage?.meta?.currentPage + 1;
      },
    }
  );
};
