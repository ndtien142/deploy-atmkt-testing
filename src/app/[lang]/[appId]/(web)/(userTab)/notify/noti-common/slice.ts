import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./interface";

const initialState: InitialState = {
  isOpenFormDetail: false,
  idNotifySelected: 0,
};

export const notifySlice = createSlice({
  name: "notify",
  initialState,
  reducers: {
    setIsOpenFormDetail: (state, action: PayloadAction<boolean>) => {
      state.isOpenFormDetail = action.payload;
    },
    setIdNotifySelected: (state, action: PayloadAction<number>) => {
      state.idNotifySelected = action.payload;
    },
  },
});

export const { setIsOpenFormDetail, setIdNotifySelected } = notifySlice.actions;
export default notifySlice.reducer;
