import { useMutation } from "react-query";
import { registerWithFirebase } from "../service";
import {
  setAccessToken,
  setIsLoggedIn,
  setRefreshToken,
} from "../../login/reducers/auth.slice";
import { useDispatch } from "react-redux";
import { useAnalytics } from "@/common/hooks/firebase-analytics/useAnalytics";

export const useRegisterWithFirebase = () => {
  const dispatch = useDispatch();
  const { logSignUp } = useAnalytics();
  const { mutate: regWithFirebase, isLoading } = useMutation(
    registerWithFirebase,
    {
      onSuccess: (data) => {
        if (!data) return;
        logSignUp("firebase");
        const { accessToken, refreshToken } = data;
        dispatch(setAccessToken(accessToken));
        dispatch(setRefreshToken(refreshToken));
        dispatch(setIsLoggedIn(true));
      },
    }
  );

  return { regWithFirebase, isLoading };
};
