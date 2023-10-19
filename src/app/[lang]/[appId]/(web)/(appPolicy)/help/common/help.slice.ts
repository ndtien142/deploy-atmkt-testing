import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  idActive: number;
  isOpenDrawer: boolean;
};

const initialState: InitialState = {
  idActive: 0,
  isOpenDrawer: false,
};

const helpPolicySlice = createSlice({
  name: "helpPolicy",
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

export const { setIdActive, setIsOpenDrawer } = helpPolicySlice.actions;
export default helpPolicySlice.reducer;
