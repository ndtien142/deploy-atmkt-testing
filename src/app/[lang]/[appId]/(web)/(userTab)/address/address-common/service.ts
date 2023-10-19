import {
  API_ADDRESS,
  API_PROVINCE_CUSTOMER,
} from "@/common/constants/api.constants";
import axiosClient from "@/common/utils/axios";
import {
  IDataEditAddress,
  IParamsAddressList,
  IParamsProvinceList,
  IResAddressDetail,
  IResAddressList,
  IResProvinceList,
  IdataCreateAddress,
} from "./interface";

export const getAddressList = (params: IParamsAddressList) => {
  return axiosClient.get<any, IResAddressList>(API_ADDRESS, { params });
};

export const createAddress = (data: IdataCreateAddress) => {
  return axiosClient.post(API_ADDRESS, data);
};

export const getProvinceList = (params: IParamsProvinceList) => {
  return axiosClient.get<any, IResProvinceList>(API_PROVINCE_CUSTOMER, {
    params,
  });
};

export const getAddressById = (id: number) => {
  return axiosClient.get<any, IResAddressDetail>(`${API_ADDRESS}/${id}`);
};

export const editAddress = (data: IDataEditAddress) => {
  return axiosClient.put(API_ADDRESS, data);
};

export const deleteAddress = (id: number) => {
  return axiosClient.delete(`${API_ADDRESS}/${id}`);
};
