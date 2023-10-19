import { useMutation, useQueryClient } from "react-query";
import { IFormCallback } from "../../address-common/interface";
import { deleteAddress } from "../../address-common/service";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";

export function useDeleteAddress(callback: IFormCallback) {
  const queryClient = useQueryClient();
  return useMutation((id: number) => deleteAddress(id), {
    onSuccess: () => {
      queryClient
        .getQueryCache()
        .findAll([QUERY_KEYS.LIST_ADDRESS])
        .forEach(({ queryKey }) => {
          queryClient.invalidateQueries(queryKey);
        });
      callback.onSuccess && callback.onSuccess();
    },
    onError: () => {
      callback.onError && callback.onError();
    },
  });
}
