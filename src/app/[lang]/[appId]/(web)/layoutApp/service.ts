import { HOST_API, MERCHANT_ID } from "@/common/config";
import {
  API_CUSTOMER_PRODUCT,
  API_NOTIFY,
} from "@/common/constants/api.constants";
import axiosClient from "@/common/utils/axios";
import { getCookie } from "@/common/utils/getValueFromCookie";

export async function getSearch(
  params: {
    page: number;
    limit: number;
    searchText?: string;
  },
  pageParams: number
) {
  params.page = pageParams;
  const url = new URL(
    `${HOST_API}${API_CUSTOMER_PRODUCT}?page=${params?.page}&limit=${params?.limit}`
  );
  !params?.searchText || params?.searchText === undefined
    ? url
    : url.searchParams.set("searchText", params?.searchText ?? "");
  const appId = getCookie("APP_ID");
  const res = await fetch(url, { headers: { app_code: `${appId}` } });
  const projects = await res.json();

  return projects;
}
