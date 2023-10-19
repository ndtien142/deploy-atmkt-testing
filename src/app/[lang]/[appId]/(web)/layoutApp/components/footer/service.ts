import axiosClient from "@/common/utils/axios";
import { IDataFooterConfig, ISubscribeEmailSubmit } from "./interface";
import {
  API_FOOTER_CONFIG,
  API_SUBSCRIPTION_EMAIL,
} from "@/common/constants/api.constants";

export const getFooterConfig = () => {
  return axiosClient.get<any, IDataFooterConfig>(API_FOOTER_CONFIG);
};

export const sendEmail = (data: ISubscribeEmailSubmit) => {
  return axiosClient.post(API_SUBSCRIPTION_EMAIL, data);
};
