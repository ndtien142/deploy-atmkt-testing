import { useQuery } from "react-query";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { getListNews } from "../common/services";

export const useGetListNews = (params: any) => {
  const { data, isLoading } = useQuery([QUERY_KEYS.GET_LIST_NEW, params], () =>
    getListNews(params)
  );

  const listNews = data?.items || [];

  return { listNews, isLoading };
};
