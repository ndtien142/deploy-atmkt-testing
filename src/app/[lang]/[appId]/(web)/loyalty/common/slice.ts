import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  EUserRank,
  IAddPointSuccess,
  IGamePlayTime,
  IResAddPoint,
} from "./interface";

const initialState: IAddPointSuccess = {
  data: {
    addPoint: 0,
    percent: 0,
    tierCode: EUserRank.MEMBER,
    nextTierCode: EUserRank.MEMBER,
    lackRankPoint: 0,
    addedGamePlayTimes: [],
    addedLoyaltyCodeGiftProduct: undefined,
  },
  isOpenGamePopup: false,
  gameData: [],
  isOpenScanPopup: false,
  code: "",
  isOpenModalGift: false,
};

const addPointSlice = createSlice({
  name: "add-point",
  initialState,
  reducers: {
    setAddPointSuccess: (state, action: PayloadAction<IResAddPoint>) => {
      state.data = action.payload;
    },
    setOpenGamePopup: (state, action: PayloadAction<boolean>) => {
      state.isOpenGamePopup = action.payload;
    },
    closeCurrentPopup: (state) => {
      if (state.gameData.length === 1) {
        state.isOpenGamePopup = false;
        return;
      }
      state.gameData.shift();
    },
    setGamePopupData: (state, action: PayloadAction<IGamePlayTime[]>) => {
      state.gameData = action.payload;
    },
    setOpenScanPopup: (state, action: PayloadAction<boolean>) => {
      state.isOpenScanPopup = action.payload;
    },
    setCodeScanned: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
    setIsOpenModalGift: (state, action: PayloadAction<boolean>) => {
      state.isOpenModalGift = action.payload;
    },
  },
});
export const {
  setAddPointSuccess,
  setOpenGamePopup,
  closeCurrentPopup,
  setGamePopupData,
  setOpenScanPopup,
  setCodeScanned,
  setIsOpenModalGift,
} = addPointSlice.actions;

export default addPointSlice.reducer;
