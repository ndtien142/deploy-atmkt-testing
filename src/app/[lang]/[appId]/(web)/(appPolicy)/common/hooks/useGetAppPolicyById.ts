import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getAppPolicyById } from "../service";

export const useGetAppPolicyById = (id: number) => {
  const { data, isLoading } = useQuery(
    [QUERY_KEYS.APP_POLICY_BY_ID, id],
    () => getAppPolicyById(id),
    { cacheTime: 0 }
  );
  return { data, isLoading };
};
