import { API_CUSTOMER_LOGIN, API_LOGIN_WITH_FIREBASE } from "@/common/constants/api.constants";
import axiosClient from "@/common/utils/axios";
import { IFormLogin, ILoginWithFirToken, IResLogin, IResError } from "./interface";


export const loginCustomer = (data: IFormLogin) => {
    return axiosClient.post<any, IResLogin>(API_CUSTOMER_LOGIN, data);
}

export const loginWithFirToken = (data: ILoginWithFirToken) => {
    return axiosClient.post<any, IResLogin>(API_LOGIN_WITH_FIREBASE, data);
}