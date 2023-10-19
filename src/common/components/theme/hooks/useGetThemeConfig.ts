import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getThemeConfig } from "../service";

export const useGetThemeConfig = () => {
  const { data: dataThemeConfig, isLoading: isLoadingThemeConfig } = useQuery(
    [QUERY_KEYS.THEME_CONFIG],
    () => getThemeConfig(),
    {
      staleTime: 5000,
      cacheTime: 0,
    }
  );
  return { dataThemeConfig, isLoadingThemeConfig };
};
