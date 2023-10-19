import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IDetailEVoucherState } from "./detailEVoucher.interface";

const initialState: IDetailEVoucherState = {
  currentCopyText: "",
  isCopy: false,
  isShowPopUpUseVoucher: false,
  typeVoucher: "",
  phoneNumber: "",
  numSubmitOrderVoucher: 0,
  isShowPopUpRechargeCard: false,
  phoneNumberUser: "",
};

export const detailEVoucherSlice = createSlice({
  name: "detail-e-voucher",
  initialState,
  reducers: {
    setNumSubmitOrderVoucher: (state, action: PayloadAction<number>) => {
      state.numSubmitOrderVoucher = action.payload;
    },
    setCurrentCopyText: (state, action: PayloadAction<string>) => {
      state.currentCopyText = action.payload;
    },
    setIsShowPopUpUseVoucher: (state, action: PayloadAction<boolean>) => {
      state.isShowPopUpUseVoucher = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      const phone = action.payload.substring(1);
      state.phoneNumber = `+84${phone}`;
      if (action.payload === "") {
        state.phoneNumber = "";
      }
    },
    setTypeVoucher: (state, action: PayloadAction<string>) => {
      state.typeVoucher = action.payload;
    },
    setIsShowPopUpRechargeCard: (state, action: PayloadAction<boolean>) => {
      state.isShowPopUpRechargeCard = action.payload;
    },
    resetDetailEVoucher: (state) => {
      state.currentCopyText = initialState.currentCopyText;
      state.isCopy = false;
      state.isShowPopUpUseVoucher = initialState.isShowPopUpUseVoucher;
      state.typeVoucher = initialState.typeVoucher;
      state.phoneNumber = initialState.phoneNumber;
      state.isShowPopUpRechargeCard = initialState.isShowPopUpRechargeCard;
      state.numSubmitOrderVoucher = initialState.numSubmitOrderVoucher;
    },
    setPhoneNumberUser: (state, action: PayloadAction<string>) => {
      state.phoneNumberUser = action.payload;
    },
  },
});

export const {
  setCurrentCopyText,
  resetDetailEVoucher,
  setIsShowPopUpUseVoucher,
  setNumSubmitOrderVoucher,
  setPhoneNumber,
  setIsShowPopUpRechargeCard,
  setTypeVoucher,
  setPhoneNumberUser,
} = detailEVoucherSlice.actions;

export default detailEVoucherSlice.reducer;
