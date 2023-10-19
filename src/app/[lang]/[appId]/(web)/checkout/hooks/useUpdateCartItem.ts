import { useMutation, useQueryClient } from "react-query";
import { updateCartItem } from "../services";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";

export const useUpdateCartItem = (
  handleSuccess?: () => void,
  handelError?: () => void
) => {
  const queryClient = useQueryClient();

  return {
    ...useMutation(updateCartItem, {
      onSuccess() {
        // queryClient.invalidateQueries([QUERY_KEYS.CUSTOMER_CART]);
        handleSuccess && handleSuccess();
      },
      onError() {
        handelError && handelError();
      },
    }),
  };
};
