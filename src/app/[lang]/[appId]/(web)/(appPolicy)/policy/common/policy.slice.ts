import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  idActive: number;
  isOpenDrawer: boolean;
};

const initialState: InitialState = {
  idActive: 0,
  isOpenDrawer: false,
};

const policySlice = createSlice({
  name: "policy",
  initialState,
  reducers: {
    setIdActive: (state, action: PayloadAction<number>) => {
      state.idActive = action.payload;
    },
    setIsOpenDrawer: (state, action: PayloadAction<boolean>) => {
      state.isOpenDrawer = action.payload;
    },
  },
});

export const { setIdActive, setIsOpenDrawer } = policySlice.actions;
export default policySlice.reducer;
