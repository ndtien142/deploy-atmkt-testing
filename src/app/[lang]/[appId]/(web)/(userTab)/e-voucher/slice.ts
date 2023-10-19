import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IEVoucherState, IStatusVoucher } from "./eVoucher.interface";

const initialState: IEVoucherState = {
  currentTab: [IStatusVoucher.un_used],
  currentPage: 1,
  tabIndex: 1,
};

export const eVoucherSlice = createSlice({
  initialState,
  name: "e-voucher",
  reducers: {
    setCurrentTabListEVoucher: (
      state,
      action: PayloadAction<IStatusVoucher[]>
    ) => {
      state.currentTab = action.payload;
    },
    setCurrentTabIndex: (state, action: PayloadAction<number>) => {
      state.tabIndex = action.payload;
    },
    setCurrentPageEVoucher: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    resetEVoucherState: (state) => {
      state.currentTab = initialState.currentTab;
      state.currentPage = initialState.currentPage;
      state.tabIndex = initialState.tabIndex;
    },
  },
});

export const {
  setCurrentTabIndex,
  resetEVoucherState,
  setCurrentTabListEVoucher,
  setCurrentPageEVoucher,
} = eVoucherSlice.actions;

export default eVoucherSlice.reducer;
