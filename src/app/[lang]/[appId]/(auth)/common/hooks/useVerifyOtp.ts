import { useMutation } from "react-query";
import { customerVerifyOtp } from "../service";

export const useVerifyOtp = () => {
  const { mutate, isLoading } = useMutation(customerVerifyOtp);

  return { mutate, isLoading };
};
