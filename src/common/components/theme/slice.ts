import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILogo, ITheme, InitialState } from "./interface";

const initialState: InitialState = {
  theme: undefined,
  logo: undefined,
};

export const themeSlice = createSlice({
  name: "themeLogo",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ITheme | undefined>) => {
      state.theme = action.payload;
    },
    setLogo: (state, action: PayloadAction<ILogo | undefined>) => {
      state.logo = action.payload;
    },
  },
});

export const { setTheme, setLogo } = themeSlice.actions;
export default themeSlice.reducer;
