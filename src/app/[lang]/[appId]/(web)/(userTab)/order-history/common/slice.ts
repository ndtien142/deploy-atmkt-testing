import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type IOrderHistoryState = {
  currentTab: string;
  isOpenPopUpOutOfQuantity: boolean;
  isOpenPopUpImpossibleProduct: boolean;
  orderId: number;
};

const initialState: IOrderHistoryState = {
  currentTab: "",
  isOpenPopUpOutOfQuantity: false,
  isOpenPopUpImpossibleProduct: false,
  orderId: 0,
};

const orderHistorySlice = createSlice({
  name: "order-history",
  initialState,
  reducers: {
    onChangeCurrentTab: (state, action: PayloadAction<string>) => {
      state.currentTab = action.payload;
    },
    setIsOpenPopUpOutOfQuantity: (state, action: PayloadAction<boolean>) => {
      state.isOpenPopUpOutOfQuantity = action.payload;
    },
    setIsOpenPopUpImpossibleProduct: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isOpenPopUpImpossibleProduct = action.payload;
    },
    setOrderId: (state, action: PayloadAction<number>) => {
      state.orderId = action.payload;
    },
    resetStateOrderHistory: (state) => {
      state.currentTab = initialState.currentTab;
      state.isOpenPopUpOutOfQuantity = initialState.isOpenPopUpOutOfQuantity;
      state.isOpenPopUpImpossibleProduct =
        initialState.isOpenPopUpImpossibleProduct;
      state.orderId = initialState.orderId;
    },
  },
});

export const {
  onChangeCurrentTab,
  setIsOpenPopUpOutOfQuantity,
  resetStateOrderHistory,
  setIsOpenPopUpImpossibleProduct,
  setOrderId,
} = orderHistorySlice.actions;

export default orderHistorySlice.reducer;
