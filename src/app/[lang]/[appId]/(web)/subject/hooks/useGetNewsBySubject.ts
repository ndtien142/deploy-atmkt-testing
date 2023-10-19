import { useQuery } from "react-query";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { getListNews } from "../common/services";

export const useGetListNewsBySubject = (params: any) => {
  const { data, isLoading } = useQuery(
    [QUERY_KEYS.GET_LIST_NEW_BY_SUBJECT, params],
    () => getListNews(params)
  );

  return { data, isLoading };
};
