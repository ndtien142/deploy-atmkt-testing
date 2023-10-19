import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IStateProps } from "./interface";

const initialState: IStateProps = {
  titleCurrentSubject: "",
  currentSubject: [],
  dataSubject: [{ value: 0, label: "" }],
  searchText: "",
  currentPage: 1,
};

const subjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {
    setTitleCurrentSubject: (state, action: PayloadAction<string>) => {
      state.titleCurrentSubject = action.payload;
    },
    setCurrentSubject: (state, action: PayloadAction<any>) => {
      if (typeof action.payload === "number") {
        const checkExist = state.currentSubject.findIndex(
          (item) => item === action.payload
        );

        if (checkExist < 0) {
          state.currentSubject.push(action.payload);
        }
      } else {
        state.currentSubject = action.payload;
      }
    },
    setDataSubject: (
      state,
      action: PayloadAction<IStateProps["dataSubject"]>
    ) => {
      state.dataSubject = action.payload;
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setCurrentSubject,
  setTitleCurrentSubject,
  setDataSubject,
  setSearchText,
  setCurrentPage,
} = subjectSlice.actions;

export default subjectSlice.reducer;
