import { API_NEWS_DETAIL } from "@/common/constants/api.constants";
import axiosClient from "@/common/utils/axios";
import { IListNews } from "./interface";
import _ from "lodash";

export const getListNews = (params: any) => {
  if (_.isEmpty(params.subjectIds)) delete params.subjectIds;
  else
    return axiosClient.get<any, IListNews>(
      `${API_NEWS_DETAIL}?page=${params.page}&limit=${params.limit}&title=${
        params.title
      }&subjectIds=${params.subjectIds?.join("&subjectIds=")}`
    );
  return axiosClient.get<any, IListNews>(API_NEWS_DETAIL, { params });
};
