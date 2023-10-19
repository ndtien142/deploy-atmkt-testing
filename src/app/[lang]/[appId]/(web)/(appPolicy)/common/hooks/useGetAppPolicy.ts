import { useQuery } from "react-query";
import { IParams } from "../interface";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { getAppPolicy } from "../service";

export const useGetAppPolicy = (params: IParams) => {
  const { data, isLoading } = useQuery(
    [QUERY_KEYS.LIST_APP_POLICY, params],
    () => getAppPolicy(params),
    { cacheTime: 0 }
  );
  return { data, isLoading };
};
