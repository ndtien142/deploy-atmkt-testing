import { HOST_API } from "@/common/config";
import { API_ORDER_E_VOUCHER } from "@/common/constants/api.constants";
import {
  IListEVoucherResponse,
  IParamsListEVoucher,
} from "./eVoucher.interface";
import axiosClient from "@/common/utils/axios";

export const getListEVoucher = (params: IParamsListEVoucher) => {
  const { limit, page, status } = params;
  const query = `?page=${page}&limit=${limit}&${status
    ?.map((item) => `status=${item}`)
    .join("&")}`;
  return axiosClient.get<any, IListEVoucherResponse>(
    `${API_ORDER_E_VOUCHER}${query}`
  );
};
