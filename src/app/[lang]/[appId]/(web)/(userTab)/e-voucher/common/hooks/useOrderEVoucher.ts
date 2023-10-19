import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQueryClient, useMutation } from "react-query";
import { postOrderEVoucher } from "../detailEVoucher.service";

export const useOrderEVoucher = () => {
  const queryCLient = useQueryClient();
  return {
    ...useMutation(postOrderEVoucher, {
      onSuccess: (value) => {
        queryCLient.invalidateQueries([QUERY_KEYS.GET_DETAIL_E_VOUCHER]);
        queryCLient.invalidateQueries([QUERY_KEYS.GET_LIST_E_VOUCHER]);
      },
    }),
  };
};
