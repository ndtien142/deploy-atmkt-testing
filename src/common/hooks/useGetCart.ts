import { useQuery } from "react-query";
import { getProductCart } from "../services";
import { QUERY_KEYS } from "../constants/queryKeys.constant";
import { useSelector } from "../redux/store";

export function useGetCart() {
  const { accessToken, isLoggedIn: isLoginReducer } = useSelector(
    (state) => state.authLogin
  );
  const isLoggedIn = accessToken !== "" || isLoginReducer;

  return {
    ...useQuery([QUERY_KEYS.CHECKOUT_CART], () => getProductCart(), {
      cacheTime: 0,
      enabled: isLoggedIn,
    }),
  };
}
