import axiosClient from "@/common/utils/axios";
import {
  IRegisterInformationRequest,
  IRegisterWithFirebaseRequest,
} from "./interface";
import {
  API_CUSTOMER_REGISTER,
  API_REGISTER_WITH_FIREBASE,
} from "@/common/constants/api.constants";
import { IResLogin } from "../login/interface";

export const customerRegisterInformation = (
  data: IRegisterInformationRequest
): Promise<IResLogin> => {
  return axiosClient.post(API_CUSTOMER_REGISTER, data);
};

export const registerWithFirebase = (
  data: IRegisterWithFirebaseRequest
): Promise<IResLogin> => {
  return axiosClient.post(API_REGISTER_WITH_FIREBASE, data);
};
