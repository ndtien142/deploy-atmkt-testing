import { useQueryClient, useMutation } from "react-query";
import { IFormCallback } from "../../account-common/interfaces/customer-profile.interface";
import { editCustomerProfile } from "../../account-common/services/customer-profile.service";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";

export const useEditCustomerProfile = (callback: IFormCallback) => {
  const queryClient = useQueryClient();
  return useMutation(editCustomerProfile, {
    onSuccess: (_result, variables) => {
      queryClient.invalidateQueries([QUERY_KEYS.CUSTOMER_PROFILE]);
      callback.onSuccess && callback.onSuccess();
    },
    onError: () => {
      callback.onError && callback.onError();
    },
  });
};
