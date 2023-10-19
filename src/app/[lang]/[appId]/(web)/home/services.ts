import axiosClient from "@/common/utils/axios";
import { MOCK_DATA } from "./constants";
import {
  API_CUSTOMER_LOGIN,
  API_DEVICE_TOKEN,
  API_HOME_CONFIG,
  API_NOTIFY,
} from "@/common/constants/api.constants";
import { IDeviceToken, IResHomeConfig } from "./interfaces";

export const getHomeConfig = () => {
  return axiosClient.get<unknown, any>(API_HOME_CONFIG);
};

export const postDeviceToken = (data: IDeviceToken) => {
  return axiosClient.post(API_DEVICE_TOKEN, data);
};

export const getCountNotifyUnread = () => {
  return axiosClient.get<any, number>(`${API_NOTIFY}/count-unread`);
};
