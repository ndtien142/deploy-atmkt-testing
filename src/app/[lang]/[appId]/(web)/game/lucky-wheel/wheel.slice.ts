import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameGift, IGameDetail, StateProps } from "./common/wheel.interface";

const initialState: StateProps = {
  gameGifts: [],
  playTime: 0,
  playingSound: false,
  openPopup: false,
  isNoPlayTime: false,
  isGotNoPrize: false,
  isSpinning: false,
  numberPopupFeedback: 0,
  spinValue: 0,
  isOpenPolicy: false,
};

export const wheelSlice = createSlice({
  name: "wheel",
  initialState,
  reducers: {
    setGameGifts: (state, action: PayloadAction<GameGift[]>) => {
      state.gameGifts = action.payload;
    },
    setWinningGift: (state, action: PayloadAction<GameGift | undefined>) => {
      state.winningGift = action.payload;
    },
    setPlayTime: (state, action: PayloadAction<number>) => {
      state.playTime = action.payload;
    },
    setPlayingSound: (state, action: PayloadAction<boolean>) => {
      state.playingSound = action.payload;
    },
    setOpenPopup: (state, action: PayloadAction<boolean>) => {
      state.openPopup = action.payload;
    },
    setIsNoPlayTime: (state, action: PayloadAction<boolean>) => {
      state.isNoPlayTime = action.payload;
    },
    setWheelInfo: (state, action: PayloadAction<IGameDetail>) => {
      state.wheelInfo = action.payload;
    },
    setNoPrizePopup: (state, action: PayloadAction<boolean>) => {
      state.isGotNoPrize = action.payload;
    },
    setSpinning: (state, action: PayloadAction<boolean>) => {
      state.isSpinning = action.payload;
    },
    setNumberPopupFeedback: (state, action: PayloadAction<number>) => {
      state.numberPopupFeedback = action.payload;
    },
    setSpinValue: (state, action: PayloadAction<number>) => {
      state.spinValue = action.payload;
    },
    setIsOpenPolicy: (state, action: PayloadAction<boolean>) => {
      state.isOpenPolicy = action.payload;
    },
    resetWheelReducer: (state) => {
      state.gameGifts = [];
      state.playTime = 0;
      state.playingSound = false;
      state.openPopup = false;
      state.isNoPlayTime = false;
      state.isGotNoPrize = false;
      state.isSpinning = false;
      state.numberPopupFeedback = 0;
      state.spinValue = 0;
      state.isOpenPolicy = false;
    },
  },
});

export const {
  setGameGifts,
  setWinningGift,
  setPlayTime,
  setPlayingSound,
  setOpenPopup,
  setIsNoPlayTime,
  setWheelInfo,
  setNoPrizePopup,
  setSpinning,
  setNumberPopupFeedback,
  setSpinValue,
  setIsOpenPolicy,
  resetWheelReducer,
} = wheelSlice.actions;

export default wheelSlice.reducer;
