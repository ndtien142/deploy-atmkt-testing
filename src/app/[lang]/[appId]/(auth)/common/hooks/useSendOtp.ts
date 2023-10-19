import { useMutation } from "react-query";
import { IOtpParamsSend } from "../interface";
import axiosClient from "@/common/utils/axios";
import { API_CUSTOMER_OTP_SEND } from "@/common/constants/api.constants";

export const useSendOtp = () => {
  const { mutate, isLoading } = useMutation(customerSendOtp);

  return { mutate, isLoading };
};

export const customerSendOtp = (data: IOtpParamsSend) => {
  return axiosClient.post(API_CUSTOMER_OTP_SEND, data);
};
