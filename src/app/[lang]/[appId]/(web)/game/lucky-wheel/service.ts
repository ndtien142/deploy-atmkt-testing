import axiosClient from "@/common/utils/axios";
import { API_GAME } from "@/common/constants/api.constants";
import { IListGamesParams, IResGames } from "./common/wheel.interface";

export const getListGames = (params: IListGamesParams) => {
  return axiosClient.get<any, IResGames>(API_GAME, { params });
};
