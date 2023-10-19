import { API_HISTORY_POINT } from "@/common/constants/api.constants";
import { IParamsPaging } from "@/common/constants/common.interfaces";
import axiosClient from "@/common/utils/axios";
import { IHistoryPointList } from "../interfaces/interface";

export const getListHistory = (params: IParamsPaging) => {
  return axiosClient.get<any, IHistoryPointList>(API_HISTORY_POINT, { params });
};
