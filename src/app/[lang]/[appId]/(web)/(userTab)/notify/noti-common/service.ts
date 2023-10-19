import axiosClient from "@/common/utils/axios";
import {
  INotiItem,
  INotiList,
  IParamsNotiList,
  IParamsPatchIsReadNotify,
} from "./interface";
import { API_NOTIFY } from "@/common/constants/api.constants";

export const getNotiList = (params: IParamsNotiList) => {
  return axiosClient.get<any, INotiList>(API_NOTIFY, { params });
};

export const getNotifyById = (id: number) => {
  return axiosClient.get<any, INotiItem>(`${API_NOTIFY}/${id}`);
};

export const patchIsReadNotifyById = (params: IParamsPatchIsReadNotify) => {
  return axiosClient.patch(
    `${API_NOTIFY}/${params.id}/isRead/${params.isRead}`
  );
};
