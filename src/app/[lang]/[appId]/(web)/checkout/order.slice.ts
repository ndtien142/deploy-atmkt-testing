import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartItem, IOrderState, ISelectedAddressCart } from "./interface";

const initialState: IOrderState = {
  activeStep: 0,
  billing: null,
  cart: [],
  discount: 0,
  shipping: 0,
  subtotalPoint: 0,
  totalPoint: 0,
  subtotalCash: 0,
  totalCash: 0,
  openModalAddAddress: false,
  provinceParams: {
    type: "",
    parentId: 0,
    searchText: "",
  },
  selectedAddress: {
    id: 0,
    name: "",
    phone: "",
    address: "",
    province: "",
    district: "",
    ward: "",
  },
  paymentType: "POINT",
  isPhysical: false,
  isEVoucher: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    onBackStep(state) {
      state.activeStep -= 1;
    },

    onNextStep(state) {
      state.activeStep += 1;
    },

    onGotoStep(state, action: PayloadAction<number>) {
      state.activeStep = action.payload;
    },
    setCart: (state, action: PayloadAction<ICartItem[]>) => {
      state.cart = action.payload;
    },
    setTotalPoint: (state, action: PayloadAction<number>) => {
      state.totalPoint = action.payload;
    },
    setTotalCash: (state, action: PayloadAction<number>) => {
      state.totalCash = action.payload;
    },
    setUpdateQuantity: (
      state,
      action: PayloadAction<{ id: Number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const index = state.cart.findIndex(
        (item) => item.productToVariantIds[0] === id
      );
      if (index !== -1) state.cart[index].quantity = action.payload.quantity;
    },
    removeCartItem: (state, action: PayloadAction<number>) => {
      const result = state.cart.filter(
        (item) => item.productToVariantIds[0] !== action.payload
      );

      state.cart = result;
    },
    setOpenModalAddAddress: (state, action: PayloadAction<boolean>) => {
      state.openModalAddAddress = action.payload;
    },

    setTypeProvinceParams: (
      state,
      action: PayloadAction<{ type: string; parentId: number }>
    ) => {
      state.provinceParams.type = action.payload.type;
      state.provinceParams.parentId = action.payload.parentId;
    },

    setSearchTextProvince: (state, action: PayloadAction<string>) => {
      state.provinceParams.searchText = action.payload;
    },
    setSelectedAddress: (
      state,
      action: PayloadAction<ISelectedAddressCart>
    ) => {
      const { id, name, phone, address, province, ward, district } =
        action.payload;
      state.selectedAddress = { ...action.payload };
    },
    setPaymentType: (state, action: PayloadAction<string>) => {
      if (!state.isPhysical) return;
      state.paymentType = action.payload;
    },
    setIsPhysical: (state, action: PayloadAction<boolean>) => {
      state.isPhysical = action.payload;
    },
    setIsEVoucher: (state, action: PayloadAction<boolean>) => {
      state.isEVoucher = action.payload;
    },
    resetOrderState: (state) => {
      state.activeStep = initialState.activeStep;
      state.billing = initialState.billing;
      state.cart = initialState.cart;
      state.discount = initialState.discount;
      state.openModalAddAddress = initialState.openModalAddAddress;
      state.paymentType = initialState.paymentType;
      state.provinceParams = initialState.provinceParams;
      state.selectedAddress = initialState.selectedAddress;
      state.shipping = initialState.shipping;
      state.subtotalPoint = initialState.subtotalPoint;
      state.totalCash = initialState.totalCash;
      state.totalPoint = initialState.totalPoint;
      state.subtotalCash = initialState.subtotalCash;
      state.isPhysical = initialState.isPhysical;
    },
  },
});

export const {
  onBackStep,
  onGotoStep,
  onNextStep,
  setCart,
  setTotalPoint,
  setTotalCash,
  setUpdateQuantity,
  removeCartItem,
  setOpenModalAddAddress,
  setTypeProvinceParams,
  setSearchTextProvince,
  setSelectedAddress,
  setPaymentType,
  resetOrderState,
  setIsPhysical,
  setIsEVoucher,
} = orderSlice.actions;

export default orderSlice.reducer;
