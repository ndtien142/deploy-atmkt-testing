import axiosClient from "@/common/utils/axios";
import { IAddPointRequest, IResAddPoint } from "./interface";
import { API_ACCUMULATE_POINT } from "@/common/constants/api.constants";


export const customerAccumulatePoint = (data: IAddPointRequest) => {
    return axiosClient.post<any, IResAddPoint>(API_ACCUMULATE_POINT, data);
}