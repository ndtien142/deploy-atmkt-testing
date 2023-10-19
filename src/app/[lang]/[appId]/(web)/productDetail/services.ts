import axiosClient from "@/common/utils/axios";
import {
  API_ADDRESS,
  API_CUSTOMER_PRODUCT,
} from "@/common/constants/api.constants";
import { IProductDDetailRes } from "./interface";

export const getProductDetail = (id: number) => {
  return axiosClient.get<unknown, IProductDDetailRes>(
    `${API_CUSTOMER_PRODUCT}/${id}`
  );
};
