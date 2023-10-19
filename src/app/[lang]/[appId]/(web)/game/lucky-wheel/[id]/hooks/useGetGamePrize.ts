import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getGamePrice } from "../detailWheel.service";

export const useGetGamePrize = (gameId: number) => {
  const { data: dataPrize, isLoading } = useQuery(
    [QUERY_KEYS.LIST_GAME_PRIZE, gameId],
    () => getGamePrice({ gameId })
  );

  return { dataPrize, isLoading };
};
