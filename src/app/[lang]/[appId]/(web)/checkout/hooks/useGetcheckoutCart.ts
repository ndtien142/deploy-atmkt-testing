import { useQuery } from "react-query";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { getProductCart } from "../services";

export function useGetCheckoutCart() {
  const { data, refetch, isLoading } = useQuery(
    [QUERY_KEYS.CHECKOUT_CART],
    () => getProductCart(),
    {
      cacheTime: 0,
      // enabled: false,
    }
  );

  return {
    dataCart: data || [],
    refetch,
    isLoading,
  };
}
