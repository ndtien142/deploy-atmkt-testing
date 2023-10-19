import { Query, QueryKey, useMutation, useQueryClient } from "react-query";
import { addNewAddress } from "../services";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { ICallback } from "../interface";

export const useAddAddress = (callback: ICallback) => {
  const queryClient = useQueryClient();
  const keys = queryClient
    .getQueryCache()
    .getAll()
    .map((query: Query) => query.queryKey)
    .filter((key: QueryKey) =>
      Array.isArray(key)
        ? key.includes(QUERY_KEYS.CUSTOMER_ORDER_SHIPPING)
        : key.toString() === QUERY_KEYS.CUSTOMER_ORDER_SHIPPING
    );

  return useMutation(addNewAddress, {
    onSuccess(data) {
      keys.forEach((queryKey) => {
        queryClient.invalidateQueries(queryKey);
      });
      callback.onSuccess && callback.onSuccess(data);
    },
    onError() {
      callback.onError && callback.onError();
    },
  });
};
