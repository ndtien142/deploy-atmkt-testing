import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getProfileUser } from "../detailEVoucher.service";

export const useGetProfileUser = () => {
  const { data: dataProfileUser, isLoading: isLoadingProfileUser } = useQuery(
    [QUERY_KEYS.CUSTOMER_PROFILE],
    () => getProfileUser(),
    { cacheTime: 0 }
  );
  return { dataProfileUser, isLoadingProfileUser };
};
