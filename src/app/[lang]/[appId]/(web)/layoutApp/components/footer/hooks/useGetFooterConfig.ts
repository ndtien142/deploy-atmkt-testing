import { useQuery } from "react-query";
import { getFooterConfig } from "../service";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";

export const useGetFooterConfig = () => {
  const { data: dataFooterConfig, isLoading: isLoadingFooterConfig } = useQuery(
    [QUERY_KEYS.FOOTER_CONFIG],
    () => getFooterConfig(),
    {
      cacheTime: 0,
    }
  );
  return { dataFooterConfig, isLoadingFooterConfig };
};
