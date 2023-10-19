import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type searchProps = {
  searchText: string;
};
const initialState: searchProps = {
  searchText: "",
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { setSearchText } = searchSlice.actions;

export default searchSlice.reducer;
