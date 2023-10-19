import axiosClient from "@/common/utils/axios";
import { IPhoneExisted, IResPhoneExisted } from "./interface";
import { API_CHECK_PHONE_EXISTED } from "@/common/constants/api.constants";

export const checkPhoneExisted = async (params: IPhoneExisted) => {
  const res = await axiosClient.get<any, IResPhoneExisted>(API_CHECK_PHONE_EXISTED, { params });
  return res;
};

