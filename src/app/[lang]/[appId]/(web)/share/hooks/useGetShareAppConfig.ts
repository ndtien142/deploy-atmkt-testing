import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getShareApp } from "../service";

export const useGetShareAppConfig = () => {
  const { data: dataShareAppConfig, isLoading: isLoadingShareAppConfig } =
    useQuery([QUERY_KEYS.GET_SHARE_APP_CONFIG], getShareApp);
  return {
    dataShareAppConfig,
    isLoadingShareAppConfig,
  };
};
