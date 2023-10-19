import axiosClient from "@/common/utils/axios"
import { IOtpParamsVerify } from "./interface";
import { API_CUSTOMER_VERIFY_OTP } from "@/common/constants/api.constants";


export const customerVerifyOtp = (data: IOtpParamsVerify) => {
    return axiosClient.post(API_CUSTOMER_VERIFY_OTP, data);
}