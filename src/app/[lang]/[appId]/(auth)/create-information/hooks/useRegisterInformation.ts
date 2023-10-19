import { useMutation } from "react-query";
import { customerRegisterInformation } from "../service";
import {
  setAccessToken,
  setIsLoggedIn,
  setRefreshToken,
} from "../../login/reducers/auth.slice";
import { useDispatch } from "react-redux";
import { useAnalytics } from "@/common/hooks/firebase-analytics/useAnalytics";

export const useRegisterInformation = () => {
  const dispatch = useDispatch();
  const { logSignUp } = useAnalytics();
  const { mutate, isLoading } = useMutation(customerRegisterInformation, {
    onSuccess: (data) => {
      if (!data) return;
      logSignUp("phone");
      const { accessToken, refreshToken } = data;
      dispatch(setAccessToken(accessToken));
      dispatch(setRefreshToken(refreshToken));
      dispatch(setIsLoggedIn(true));
    },
  });

  return { mutate, isLoading };
};
