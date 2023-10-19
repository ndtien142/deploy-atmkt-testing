import { useQuery } from "react-query";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { getDetailOrder } from "../common/services";

export function useGetDetailOrder(id: number) {
  const { data, isLoading, isError } = useQuery(
    [QUERY_KEYS.GET_MY_ORDER, id],
    () => getDetailOrder(id)
  );

  return { orderDetail: data, isLoading, isError };
}
