import { useQuery } from "react-query";
import { IParamsListNews } from "../interface";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { getListNews } from "../services";

export const useGetListNews = (params: IParamsListNews) => {
  const { data, isLoading } = useQuery(
    [QUERY_KEYS.LIST_NEWS, params],
    () => getListNews(params),
    {
      cacheTime: 0,
    }
  );
  return {
    data,
    isLoading,
  };
};
