import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { deleteCartItem } from "../services";

export const useDeleteCartItem = (
  // params: IParamsDelete | [],
  handleSuccess?: () => void,
  handleError?: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation(deleteCartItem, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CHECKOUT_CART] });
      handleSuccess && handleSuccess();
    },
    onError: (err: Error) => {
      handleError && handleError();
    },
  });
};
