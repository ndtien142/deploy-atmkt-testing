import { useMutation } from "react-query";
import { loginWithFirToken } from "../service";
import { useDispatch } from "@/common/redux/store";
import {
  setAccessToken,
  setIsLoggedIn,
  setRefreshToken,
} from "../reducers/auth.slice";
import { IResLogin, IResError, ILoginWithFirToken } from "../interface";
import { useAnalytics } from "@/common/hooks/firebase-analytics/useAnalytics";

export const useLoginWithFirToken = () => {
  const dispatch = useDispatch();
  const { logLogin } = useAnalytics();
  const { mutate, isLoading } = useMutation<
    IResLogin,
    IResError,
    ILoginWithFirToken,
    any
  >(loginWithFirToken, {
    onSuccess: (data) => {
      if (!data) return;
      logLogin("firebase");
      const { accessToken, refreshToken } = data;
      dispatch(setAccessToken(accessToken));
      dispatch(setRefreshToken(refreshToken));
      dispatch(setIsLoggedIn(true));
    },
  });

  return { mutate, isLoading };
};
