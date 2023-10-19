import { useMutation, useQueryClient } from "react-query";
import { addNewOrder } from "../services";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import useShowSnackbar from "@/common/hooks/useShowSnackbar";

export const useAddOrder = (
  handleSuccess?: () => void,
  handleError?: () => void
) => {
  const { showSuccessSnackbar, showErrorSnackbar } = useShowSnackbar();

  const queryClient = useQueryClient();
  return useMutation(addNewOrder, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEYS.CHECKOUT_CART]);
      handleSuccess && handleSuccess();
    },
    onError(error: Error) {
      showErrorSnackbar(error?.message || "Đặt hàng thất bại !!");
      handleError && handleError();
    },
  });
};
