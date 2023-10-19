import { API_THEME_CONFIG } from "@/common/constants/api.constants";
import axiosClient from "@/common/utils/axios";
import { IDataThemeConfig } from "./interface";

export const getThemeConfig = () => {
  return axiosClient.get<any, IDataThemeConfig>(API_THEME_CONFIG);
};
