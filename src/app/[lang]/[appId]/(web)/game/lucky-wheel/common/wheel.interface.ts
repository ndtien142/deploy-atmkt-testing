export type GameGift = {
  id: number;
  name: string;
  image: {
    url: string;
  };
  isWinnable: boolean;
  posInImage: number;
  isVoucherGift: boolean;
  quantity: number;
  totalQuantity: number;
};

export type StateProps = {
  wheelInfo?: IGameDetail;
  winningGift?: GameGift;
  gameGifts: GameGift[];
  playTime: number;
  playingSound: boolean;
  openPopup: boolean;
  isNoPlayTime: boolean;
  isGotNoPrize: boolean;
  isSpinning: boolean;
  numberPopupFeedback: number;
  spinValue: number;
  isOpenPolicy: boolean;
};

export interface IResWinningGift {
  wonGift: GameGift;
}

export interface IGameDetail {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  playTime: number;
  policy: string;
  image: {
    url: string;
  };
  gameType: {
    id: number;
    type: string;
  };
  gameGifts: GameGift[];
  aboutToExpirePlayTime: number;
  stalesAt: string;
}

export interface IResWinningHistory {
  data: UserWon[];
}

export interface UserWon {
  id: number;
  createdAt: string;
  userName: string;
  giftName: string;
}

export type IWinningHistory = UserWon[];

export interface IWheelDetailProps {
  items?: IGameDetail;
  winningHistory?: IWinningHistory;
}

export interface IListPrize {
  id: number;
  createdAt: string;
  name: string;
  policy: string;
  startDate: string;
  endDate: string;
  image: {
    url: string;
    key: string;
    id: string;
  };
  gameGifts: GameGift[];
  quantity: number;
}

export interface IParamSearch {
  gameId: number;
}

export interface IResListPrize {
  items: IListPrize[];
  meta: {
    itemCount: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface IListGamesParams {
  page: number;
  limit: number;
}

export interface IResGames {
  items: IGameDetail[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}
