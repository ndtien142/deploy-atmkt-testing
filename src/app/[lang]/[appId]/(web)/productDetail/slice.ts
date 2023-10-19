import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IProductToVariants,
  IStateProps,
  IVariantAttributeTermIdList,
} from "./interface";

const initialState: IStateProps = {
  isReviewModal: false,
  productVariantSelected: null,
  attributeSelected: [],
  quantityCurrent: 0,
  variantIdSelect: 0,
  isShowPopupNotiLogin: false,
  totalVariant: 0,
  isOpenOrderNow: false,
  quantityVariantOrderNow: 0,
  totalPaymentOrderNow: 0,
  isAddingCart: false,
  availableTermId: [],
  defaultPrice: {},
  defaultPoint: {},
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    setIsAddingCart: (state, action: PayloadAction<boolean>) => {
      state.isAddingCart = action.payload;
    },
    setQuantityCurrent: (state, action: PayloadAction<number>) => {
      state.quantityCurrent = action.payload;
    },
    setVariantIdSelect: (state, action: PayloadAction<number>) => {
      state.variantIdSelect = action.payload;
    },
    setProdVariantSelected: (
      state,
      action: PayloadAction<IProductToVariants | null>
    ) => {
      state.productVariantSelected = action.payload;
    },
    setDefaultPriceDetailProduct: (state, action: PayloadAction<any>) => {
      state.defaultPrice = action.payload;
    },
    setDefaultPointDetailProduct: (state, action: PayloadAction<any>) => {
      state.defaultPoint = action.payload;
    },
    setAttributeSelected: (
      state,
      action: PayloadAction<IVariantAttributeTermIdList>
    ) => {
      const indexIfContain = state.attributeSelected.findIndex(
        (item) => item.attributeId === action.payload.attributeId
      );
      if (indexIfContain === -1) {
        state.attributeSelected.push(action.payload);
      } else {
        state.attributeSelected[indexIfContain].termId = action.payload.termId;
      }
    },
    setAvailableTermId: (state, action: PayloadAction<number>) => {
      if (state.availableTermId.includes(action.payload)) return;
      state.availableTermId.push(action.payload);
    },
    setListAvailableTermId: (state, action: PayloadAction<number[]>) => {
      state.availableTermId = action.payload;
    },
    removeAttributeSelected: (
      state,
      action: PayloadAction<IVariantAttributeTermIdList>
    ) => {
      const indexIfContain = state.attributeSelected.findIndex(
        (item) => item.attributeId === action.payload.attributeId
      );

      if (indexIfContain > -1) {
        state.attributeSelected = state.attributeSelected.filter(
          (item) => item.attributeId != action.payload.attributeId
        );
      }
    },
    resetAttributeSelected: (state) => {
      state.attributeSelected = [];
      state.availableTermId = [];
      state.defaultPrice = {};
    },
  },
});

export const {
  setAvailableTermId,
  setListAvailableTermId,
  setIsAddingCart,
  setQuantityCurrent,
  setVariantIdSelect,
  setProdVariantSelected,
  setAttributeSelected,
  removeAttributeSelected,
  resetAttributeSelected,
  setDefaultPriceDetailProduct,
  setDefaultPointDetailProduct,
} = productDetailSlice.actions;

export default productDetailSlice.reducer;
