import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useInfiniteQuery } from "react-query";
import { getListEVoucher } from "../eVoucher.service";
import {
  IListEVoucherResponse,
  IParamsListEVoucher,
} from "../eVoucher.interface";

export const useGetListEVoucher = (params: IParamsListEVoucher) => {
  const {
    data: dataListEVoucher,
    isLoading: isLoadingListEVoucher,
    fetchNextPage: fetchNextPageListEVoucher,
    hasNextPage: hasNextPageListEVoucher,
    isFetchingNextPage: isFetchingNextPageListEVoucher,
    isError: isErrorListEVoucher,
  } = useInfiniteQuery(
    [QUERY_KEYS.GET_LIST_E_VOUCHER, params],
    ({ pageParam = params.page }) =>
      getListEVoucher({ ...params, page: pageParam }),
    {
      getNextPageParam: (lastPage: IListEVoucherResponse) => {
        const { meta } = lastPage;
        const { currentPage, totalPages } = meta;
        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
      cacheTime: 0,
    }
  );
  return {
    dataListEVoucher,
    isLoadingListEVoucher,
    fetchNextPageListEVoucher,
    hasNextPageListEVoucher,
    isFetchingNextPageListEVoucher,
    isErrorListEVoucher,
  };
};
