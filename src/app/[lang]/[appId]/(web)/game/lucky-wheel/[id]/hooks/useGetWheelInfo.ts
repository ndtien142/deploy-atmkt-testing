import { useQuery } from "react-query";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { getWheelInfo } from "../detailWheel.service";

export const useGetWheelInfo = (id: number) => ({
  ...useQuery([QUERY_KEYS.CLIENT_WHEEL_INFO, id], () => getWheelInfo(id)),
});
