import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getCountNotifyUnread } from "../services";

export const useGetCountNotifyUnread = () => {
  const {
    data: dataCountNotifyUnread,
    isLoading: isLoadingCountNotifyUnread,
    refetch: refetchCountNotifyUnread,
  } = useQuery([QUERY_KEYS.COUNT_NOTIFY_UNREAD], () => getCountNotifyUnread(), {
    cacheTime: 0,
  });
  return {
    dataCountNotifyUnread,
    isLoadingCountNotifyUnread,
    refetchCountNotifyUnread,
  };
};
