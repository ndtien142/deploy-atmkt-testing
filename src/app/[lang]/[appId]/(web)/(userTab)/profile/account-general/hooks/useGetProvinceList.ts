import { useInfiniteQuery } from "react-query";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import {
  IParamsProvinceList,
  IResProvinceList,
} from "../../account-common/interfaces/customer-profile.interface";
import { getProvinceList } from "../../account-common/services/customer-profile.service";

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
      cacheTime: 0,
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
