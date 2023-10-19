import { API_RESET_PASSWORD } from "@/common/constants/api.constants"
import axiosClient from "@/common/utils/axios"
import { IResetPasswordRequest } from "./interface"
import { IResLogin } from "../login/interface"


export const customerResetPassword = (data: IResetPasswordRequest) => {
    return axiosClient.post<any, IResLogin>(API_RESET_PASSWORD, data)
}