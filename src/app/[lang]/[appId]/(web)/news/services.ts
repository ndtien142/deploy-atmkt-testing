import axiosClient from "@/common/utils/axios";
import {
  IParamSubjectAndNews,
  IParamsListNews,
  IResListNews,
  IResSubjectNews,
} from "./interface";
import {
  API_CUSTOMER_SUBJECT,
  API_NEWS_DETAIL,
} from "@/common/constants/api.constants";

export const getListSubjectAndNew = (params: IParamSubjectAndNews) => {
  return axiosClient.get<any, IResSubjectNews>(API_CUSTOMER_SUBJECT, {
    params,
  });
};

export const getListNews = (params: IParamsListNews) => {
  let query = `?page=${params.page}&limit=${params.limit}`;
  if (params?.subjectIds?.length) {
    query += params.subjectIds?.map((item) => `&subjectIds=${item}`).join("");
  }
  return axiosClient.get<any, IResListNews>(`${API_NEWS_DETAIL}${query}`);
};
