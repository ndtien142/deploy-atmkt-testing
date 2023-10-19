import { useMutation, useQueryClient } from "react-query";
import { postAddCartFromOrder } from "../common/services";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import useShowSnackbar from "@/common/hooks/useShowSnackbar";

export const useAddCartFromOrder = () => {
  const queryClient = useQueryClient();
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();
  return useMutation(postAddCartFromOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.GET_MY_ORDER]);
      queryClient.invalidateQueries([QUERY_KEYS.GET_ORDER_STATUS]);
      queryClient.invalidateQueries([QUERY_KEYS.CHECKOUT_CART]);
      showSuccessSnackbar("Đặt lại đơn hàng thành công!");
    },
    onError: (error: any) => {
      showErrorSnackbar("Đặt lại đơn hàng không thành công!");
    },
  });
};
