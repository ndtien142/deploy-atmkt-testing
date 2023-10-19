import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEYS } from "../constants/queryKeys.constant";
import { addToCart } from "../services";
import useShowSnackbar from "./useShowSnackbar";
import { onGotoStep } from "@/app/[lang]/[appId]/(web)/checkout/order.slice";
import { dispatch } from "../redux/store";

type ICallBack = {
  onSuccess?: VoidFunction;
  onError?: VoidFunction;
};

export const useAddToCart = (callback?: ICallBack) => {
  const { showSuccessSnackbar, showErrorSnackbar } = useShowSnackbar();
  const queryClient = useQueryClient();

  const variables = useMutation(addToCart, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.CHECKOUT_CART]);
      showSuccessSnackbar("Thêm vào giỏ hàng thành công !");
      dispatch(onGotoStep(0));
      callback?.onSuccess && callback.onSuccess();
    },
    onError: (error: Error) => {
      showErrorSnackbar(error?.message || "Thêm vào giỏ hàng thất bại!");
    },
  });

  return {
    ...variables,
  };
};
