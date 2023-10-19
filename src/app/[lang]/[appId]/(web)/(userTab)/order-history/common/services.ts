import axiosClient from "@/common/utils/axios";
import {
  IDataAddCartFromOrder,
  IDefaultParams,
  IListOrderResponse,
  IOrder,
  IOrderStatusResponse,
  IPramsGetOrderStatus,
} from "./interface";
import {
  API_ADD_CART_FROM_ORDER,
  API_CUSTOMER_ORDER,
  API_STATUS_ORDER,
} from "@/common/constants/api.constants";

export const getMyOrder = (params: IDefaultParams, pageParams?: number) => {
  const transParams =
    params.statuses === "" || params.statuses === "ALL" || !params.statuses
      ? {
          limit: params.limit,
          page: params.page || pageParams,
        }
      : {
          limit: 3,
          page: pageParams || params.page,
          statuses: params.statuses,
        };
  return axiosClient.get<any, IListOrderResponse>(API_CUSTOMER_ORDER, {
    params: { ...transParams },
  });
};

export const getDetailOrder = (id: number) => {
  return axiosClient.get<any, IOrder>(`${API_CUSTOMER_ORDER}/${id}`);
};

export const getOrderStatus = (params: IPramsGetOrderStatus) => {
  return axiosClient.get<any, IOrderStatusResponse>(API_STATUS_ORDER, {
    params,
  });
};

export const postAddCartFromOrder = (data: IDataAddCartFromOrder) => {
  return axiosClient.post(API_ADD_CART_FROM_ORDER, data);
};
