import { useQuery } from "react-query";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { getDetailNewById, getListNews } from "../services";

export const useGetListRelatedNews = (params: any) => {
  const { data, isLoading } = useQuery(
    [QUERY_KEYS.GET_LIST_RELATED_NEW, params],
    () => getListNews(params)
  );

  const listRelatedNews = data?.items || [];

  return { listRelatedNews, isLoading };
};
