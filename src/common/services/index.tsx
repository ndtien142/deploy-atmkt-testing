import { ICustomerProfileResponse } from "../@types/profile";
import {
  API_CUSTOMER_CART,
  API_CUSTOMER_PROFILE,
} from "../constants/api.constants";
import {
  ICartDataSubmit,
  ICartProductItem,
} from "../constants/common.interfaces";
import axiosClient from "../utils/axios";

export const getProductCart = () => {
  return axiosClient.get<any, ICartProductItem[]>(API_CUSTOMER_CART);
};

export const addToCart = async (data: ICartDataSubmit) => {
  return axiosClient.post(API_CUSTOMER_CART, data);
};

export const getCustomerInfo = (): Promise<ICustomerProfileResponse> => {
  return axiosClient.get<unknown, any>(API_CUSTOMER_PROFILE);
};
