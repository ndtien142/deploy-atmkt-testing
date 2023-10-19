import { API_SHARE_APP_CONFIG } from "@/common/constants/api.constants";
import axiosClient from "@/common/utils/axios";
import { IShareAppResponse } from "./share.interface";

export const getShareApp = (): Promise<IShareAppResponse> => {
  return axiosClient.get(API_SHARE_APP_CONFIG);
};
