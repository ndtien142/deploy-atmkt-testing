import axiosClient from "@/common/utils/axios";
import { IListNews, INewItem } from "./interface";
import { API_NEWS_DETAIL } from "@/common/constants/api.constants";

export const getDetailNewById = (id: number) => {
  return axiosClient.get<any, INewItem>(`${API_NEWS_DETAIL}/${id}`);
};

export const getListNews = (params: any) => {
  let query = `?page=${params.page}&limit=${params.limit}`;
  if (params?.subjectIds?.length) {
    query += params.subjectIds
      .map((item: any) => `&subjectIds=${item}`)
      .join("");
  }
  return axiosClient.get<any, IListNews>(`${API_NEWS_DETAIL}${query}`);
};
