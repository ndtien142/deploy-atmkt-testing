import axiosClient from "@/common/utils/axios";
import { IAppPolicy, IParams, IResAppPolicy } from "./interface";
import { API_APP_POLICY } from "@/common/constants/api.constants";

export const getAppPolicy = (params: IParams) => {
  return axiosClient.get<any, IResAppPolicy>(API_APP_POLICY, { params });
};

export const getAppPolicyById = (id: number) => {
  return axiosClient.get<any, IAppPolicy>(`${API_APP_POLICY}/${id}`);
};
