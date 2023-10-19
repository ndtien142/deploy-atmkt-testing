import axios from "axios";
// config

import { store } from "../redux/store";
import {
  BASE_URL_API,
  accessTokenExpiredStatusCode,
  accessTokenNotValidCode,
  unAuthorizedStatusCode,
} from "../constants/config.constant";
import { HOST_API, MERCHANT_ID } from "../config";
import { API_REFRESH_TOKEN } from "../constants/api.constants";
import {
  resetToken,
  setAccessToken,
  setIsExpiredToken,
} from "@/app/[lang]/[appId]/(auth)/login/reducers/auth.slice";
import { getCookie } from "./getValueFromCookie";
import { PATH_AUTH } from "../constants/path.constants";
import { setPopupLogin } from "@/app/[lang]/[appId]/(web)/layoutApp/components/header/header.slice";

// ----------------------------------------------------------------------
const currentLang = getCookie("NEXT_LOCALE");
const appId = getCookie("APP_ID");
const axiosClient = axios.create({
  baseURL: HOST_API,
  headers: {
    "Content-Type": "application/json",
    Accept: "Application/json",
    common: {
      app_code: appId,
      lang: currentLang,
    },
  },
});

const axiosClient2 = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
    Accept: "Application/json",
    common: {
      app_code: appId,
      lang: currentLang,
    },
  },
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  async (error: any) => {
    const { response, config: originalRequest } = error;
    let isAccessTokenExpired =
      response?.data?.subCode === accessTokenExpiredStatusCode;
    let is401 = response?.status === unAuthorizedStatusCode;
    let isAccessTokenInvalid =
      response?.data?.subCode === accessTokenNotValidCode;

    const { refreshToken, accessToken } = store?.getState().authLogin;

    if (is401 && isAccessTokenInvalid) {
      // store.dispatch(setPopupLogin(true));
      return Promise.reject(error?.response?.data);
    }
    if (is401 && isAccessTokenExpired) {
      return new Promise(function (resolve, reject) {
        axiosClient2.defaults.headers.common.Authorization = accessToken;
        axiosClient2
          .post(API_REFRESH_TOKEN, { refreshToken })
          .then(async ({ data }) => {
            const newAccessToken = `Bearer ${data?.accessToken}`;
            axiosClient.defaults.headers.common.Authorization = newAccessToken;
            originalRequest.headers.Authorization = newAccessToken;
            store?.dispatch(setAccessToken(data?.accessToken));
            resolve(axiosClient(originalRequest));
          })
          .catch(async (error) => {
            store?.dispatch(resetToken());
            store?.dispatch(setIsExpiredToken(true));
            reject(error?.response?.data);
          });
      });
    } else {
      return Promise.reject(error?.response?.data);
    }
  }
);
axiosClient.interceptors.request.use(async (config) => {
  const token = store?.getState().authLogin.accessToken;

  if (token) {
    try {
      config.headers.Authorization = `Bearer ${token}`;
    } catch (e) {}
  }
  return {
    ...config,
  };
});
export default axiosClient;
