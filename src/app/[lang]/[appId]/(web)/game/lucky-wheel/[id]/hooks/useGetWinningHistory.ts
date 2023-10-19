import { useQuery } from "react-query";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { getWinningHistory } from "../detailWheel.service";

export const useGetWinningHistory = (id: number) => ({
  ...useQuery([QUERY_KEYS.GET_WINNING_HISTORY, id], () =>
    getWinningHistory(id)
  ),
});
