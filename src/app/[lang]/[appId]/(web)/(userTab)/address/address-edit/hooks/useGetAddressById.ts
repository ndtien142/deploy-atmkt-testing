import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getAddressById } from "../../address-common/service";

export const useGetAddressById = (id: number) => {
  const { data: dataAddressById, isLoading: isLoadingAddressById } = useQuery(
    [QUERY_KEYS.ADDRESS_BY_ID, id],
    () => getAddressById(id),
    {
      cacheTime: 60000,
      staleTime: 10000,
    }
  );
  return { dataAddressById, isLoadingAddressById };
};
