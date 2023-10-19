import { useMutation } from "react-query";
import { loginCustomer } from "../service";
import { dispatch } from "@/common/redux/store";
import {
  setAccessToken,
  setIsLoggedIn,
  setRefreshToken,
} from "../reducers/auth.slice";
import { useAnalytics } from "@/common/hooks/firebase-analytics/useAnalytics";

export const useLogin = () => {
  const { logLogin } = useAnalytics();
  const { mutate, isLoading } = useMutation(loginCustomer, {
    onSuccess: (data) => {
      if (!data) return;
      logLogin("phone");
      const { accessToken, refreshToken } = data;
      dispatch(setAccessToken(accessToken));
      dispatch(setRefreshToken(refreshToken));
      dispatch(setIsLoggedIn(true));
    },
  });
  return { mutate, isLoading };
};
