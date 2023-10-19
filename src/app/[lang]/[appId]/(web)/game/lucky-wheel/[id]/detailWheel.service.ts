import {
  API_GAME,
  API_GAME_LIST_PRIZE,
  API_GAME_WINNING_HISTORY,
} from "@/common/constants/api.constants";
import axiosClient from "@/common/utils/axios";
import {
  IGameDetail,
  IListPrize,
  IParamSearch,
  IResListPrize,
  IResWinningGift,
  UserWon,
} from "../common/wheel.interface";

export const getWheelInfo = (id: number) => {
  return axiosClient.get<any, IGameDetail>(`${API_GAME}/${id}`);
};

export const getWheelPrize = (gameId: number) => {
  return axiosClient.post<any, IResWinningGift>(`${API_GAME}/play`, { gameId });
};

export const getWinningHistory = (gameId: number) => {
  return axiosClient.get<any, UserWon[]>(
    `${API_GAME_WINNING_HISTORY}/${gameId}`
  );
};

export const getGamePrice = (params: IParamSearch) => {
  return axiosClient.get<any, IListPrize>(API_GAME_LIST_PRIZE, { params });
};
