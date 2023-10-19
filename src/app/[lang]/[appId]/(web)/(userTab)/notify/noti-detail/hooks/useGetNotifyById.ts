import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getNotifyById } from "../../noti-common/service";

export const useGetNotifyById = (id: number, isEnable: boolean) => {
  const { data: dataNotifyById, isLoading: isLoadingNotifyById } = useQuery(
    [QUERY_KEYS.NOTIFY_BY_ID, id],
    () => getNotifyById(id),
    {
      cacheTime: 0,
      enabled: isEnable,
    }
  );
  return { dataNotifyById, isLoadingNotifyById };
};
