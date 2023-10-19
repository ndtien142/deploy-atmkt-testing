import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  countNotifyUnread: number;
};

const initialState: InitialState = {
  countNotifyUnread: 0,
};

export const webSlice = createSlice({
  name: "webSlice",
  initialState,
  reducers: {
    setCountNotifyUnread: (state, action: PayloadAction<number>) => {
      state.countNotifyUnread = action.payload;
    },
  },
});

export const { setCountNotifyUnread } = webSlice.actions;
export default webSlice.reducer;
