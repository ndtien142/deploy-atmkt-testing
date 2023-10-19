import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useMutation, useQueryClient } from "react-query";
import { patchIsReadNotifyById } from "../../noti-common/service";

export const usePatchIsReadNotiById = () => {
  const queryClient = useQueryClient();
  const { mutate: mutateIsReadNotiById } = useMutation(patchIsReadNotifyById, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.LIST_NOTI]);
      queryClient.invalidateQueries(QUERY_KEYS.COUNT_NOTIFY_UNREAD);
    },
  });
  return {
    mutateIsReadNotiById,
  };
};
