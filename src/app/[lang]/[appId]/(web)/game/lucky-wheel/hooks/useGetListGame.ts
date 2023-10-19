import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { IListGamesParams } from "../common/wheel.interface";
import { getListGames } from "../service";

export function useGetListGame(params: IListGamesParams) {
  return useQuery(
    [QUERY_KEYS.GET_LIST_GAMES, params],
    () => getListGames(params),
    {
      cacheTime: 0,
    }
  );
}
