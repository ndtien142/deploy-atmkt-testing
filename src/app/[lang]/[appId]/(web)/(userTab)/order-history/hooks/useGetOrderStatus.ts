import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getOrderStatus } from "../common/services";
import { IPramsGetOrderStatus } from "../common/interface";

export const useGetOrderStatus = (params: IPramsGetOrderStatus) => {
  return useQuery([QUERY_KEYS.GET_ORDER_STATUS, params], () =>
    getOrderStatus(params)
  );
};
