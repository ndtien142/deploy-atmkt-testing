import { useQuery } from "react-query";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { getListUserAddress } from "../services";
import { paramsDefault } from "../constant";

export function useGetListUserAddress(params?: {
  page: number;
  limit: number;
}) {
  return {
    ...useQuery(
      [QUERY_KEYS.CUSTOMER_ORDER_SHIPPING, params],
      () => getListUserAddress(params ? params : paramsDefault),
      { cacheTime: 0 }
    ),
  };
}
