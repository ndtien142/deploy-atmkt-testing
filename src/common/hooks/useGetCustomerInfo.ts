import { useQuery } from "react-query";
import { QUERY_KEYS } from "../constants/queryKeys.constant";
import { useSelector } from "../redux/store";
import { getCustomerInfo } from "../services";

export function useGetCustomerInfo() {
  const { accessToken, isLoggedIn: isLoginReducer } = useSelector(
    (state) => state.authLogin
  );
  const isLoggedIn = accessToken !== "" || isLoginReducer;

  return {
    ...useQuery([QUERY_KEYS.CUSTOMER_PROFILE], getCustomerInfo, {
      enabled: isLoggedIn,
      refetchOnWindowFocus: false,
    }),
  };
}
