export interface IAddPointRequest {
  code: string;
}

export interface IResAddPoint {
  addPoint: number;
  percent: number;
  tierCode: EUserRank;
  nextTierCode: string;
  lackRankPoint: number;
  addedGamePlayTimes: IGamePlayTime[] | [];
  addedLoyaltyCodeGiftProduct?: IAddedLoyaltyCodeGiftProduct;
}

export enum EUserRank {
  MEMBER = "MEMBER",
  TITAN = "TITAN",
  GOLD = "GOLD",
  PLATINUM = "PLATINUM",
}

export interface IGamePlayTime {
  gameType: {
    id: number;
    type: string;
  };
  playTime: number;
  status: string;
}

export interface IAddedLoyaltyCodeGiftProduct {
  productVariant: {
    id: number;
    price: number;
    quantity: number;
    salePrice: number;
    sku: string;
    name: string;
    type: string;
    productVariantPoint: {
      id: number;
      point: number;
      salePoint: number;
    };
  };
  status: string;
}

export interface IAddPointSuccess {
  data: IResAddPoint;
  isOpenGamePopup: boolean;
  gameData: IGamePlayTime[];
  isOpenScanPopup: boolean;
  code: string;
  isOpenModalGift: boolean;
}
