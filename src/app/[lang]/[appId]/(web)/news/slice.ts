import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  currPage: number;
};

const initialState: InitialState = {
  currPage: 1,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setCurrPage: (state, action: PayloadAction<number>) => {
      state.currPage = action.payload;
    },
  },
});

export const { setCurrPage } = newsSlice.actions;
export default newsSlice.reducer;
