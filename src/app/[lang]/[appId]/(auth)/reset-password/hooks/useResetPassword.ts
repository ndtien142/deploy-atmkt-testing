import { useMutation } from "react-query";
import { customerResetPassword } from "../service";
import { dispatch } from "@/common/redux/store";
import {
  setAccessToken,
  setIsLoggedIn,
  setRefreshToken,
} from "../../login/reducers/auth.slice";

export const useResetPassword = () => {
  const { mutate, isLoading } = useMutation(customerResetPassword, {
    onSuccess: (data) => {
      if (!data) return;
      const { accessToken, refreshToken } = data;
      dispatch(setAccessToken(accessToken));
      dispatch(setRefreshToken(refreshToken));
      dispatch(setIsLoggedIn(true));
    },
  });

  return { mutate, isLoading };
};

