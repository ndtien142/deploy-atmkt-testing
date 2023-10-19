import { useQuery } from "react-query";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { getDetailEVoucher } from "../detailEVoucher.service";

export const useGetDetailEVoucher = (id: number) => {
  const { data: detailEVoucher, isLoading: isLoadingDetailEVoucher } = useQuery(
    [QUERY_KEYS.GET_DETAIL_E_VOUCHER, id],
    () => getDetailEVoucher(id)
  );
  return { detailEVoucher, isLoadingDetailEVoucher };
};
