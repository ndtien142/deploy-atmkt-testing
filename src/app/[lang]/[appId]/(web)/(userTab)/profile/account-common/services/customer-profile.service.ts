import {
  API_CUSTOMER_PROFILE,
  API_PROVINCE_CUSTOMER,
} from "@/common/constants/api.constants";
import {
  IEditCustomerForm,
  IParamsProvinceList,
  IResProvinceList,
} from "../interfaces/customer-profile.interface";
import axiosClient from "@/common/utils/axios";

export const editCustomerProfile = async (data: IEditCustomerForm) =>
  axiosClient.put(API_CUSTOMER_PROFILE, data);

export const getProvinceList = (params: IParamsProvinceList) => {
  return axiosClient.get<any, IResProvinceList>(API_PROVINCE_CUSTOMER, {
    params,
  });
};
