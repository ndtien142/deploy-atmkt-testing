import { useQueryClient, useMutation } from "react-query";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { IFormCallback } from "../../address-common/interface";
import { createAddress } from "../../address-common/service";

export const useCreateAddress = (callback: IFormCallback) => {
  const queryClient = useQueryClient();
  const { mutate: mutateNewAddress } = useMutation(createAddress, {
    onSuccess: (_result, variables) => {
      queryClient.invalidateQueries([QUERY_KEYS.LIST_ADDRESS]);
      callback.onSuccess && callback.onSuccess();
    },
    onError: () => {
      callback.onError && callback.onError();
    },
  });
  return { mutateNewAddress };
};
