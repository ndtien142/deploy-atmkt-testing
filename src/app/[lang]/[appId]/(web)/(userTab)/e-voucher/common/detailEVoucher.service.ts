import { HOST_API } from "@/common/config";
import {
  API_CUSTOMER_PROFILE,
  API_ORDER_E_VOUCHER,
} from "@/common/constants/api.constants";
import { store } from "@/common/redux/store";
import {
  IDetailEVoucherResponse,
  IPostOrderVoucher,
} from "../[id]/detailEVoucher.interface";
import axiosClient from "@/common/utils/axios";

export const getDetailEVoucher = async (
  id: number
): Promise<IDetailEVoucherResponse> => {
  const state = store.getState();
  const token = state.authLogin.accessToken;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const options = {
    method: "GET",
    headers,
  };
  const response = await fetch(
    `${HOST_API}${API_ORDER_E_VOUCHER}/${id}`,
    options
  );
  if (!response.ok) {
    throw new Error("Request failed");
  }
  const data = await response.json();
  return data as IDetailEVoucherResponse;
};

export const postOrderEVoucher = (data: IPostOrderVoucher) => {
  return axiosClient.post(API_ORDER_E_VOUCHER, data);
};

export const getProfileUser = () => {
  return axiosClient.get<any, { id: number; phoneNumber: string }>(
    API_CUSTOMER_PROFILE
  );
};
