import { RootState } from "@/common/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IProvinceParams,
  ISubmitDataAddress,
} from "./profile/account-common/interfaces/customer-profile.interface";

type InititalState = {
  showUserTabMobile: boolean;
  isOpenAddressForm: boolean;
  provinceParams: IProvinceParams;
  addressInfo: ISubmitDataAddress;
};

const initialState: InititalState = {
  showUserTabMobile: false,
  isOpenAddressForm: false,
  provinceParams: {
    parentId: undefined,
    searchText: "",
    type: "PROVINCE",
  },
  addressInfo: {
    address: "",
    district: null,
    province: null,
    ward: null,
  },
};

export const userTabSlice = createSlice({
  name: "userTab",
  initialState,
  reducers: {
    setShowUserTabMobile: (state, action: PayloadAction<boolean>) => {
      state.showUserTabMobile = action.payload;
    },
    setSearchTextProvinceParams: (state, action: PayloadAction<string>) => {
      state.provinceParams.searchText = action.payload;
    },
    setTypeProvinceParams: (
      state,
      action: PayloadAction<{ type: string; parentId: number | undefined }>
    ) => {
      state.provinceParams.type = action.payload.type;
      state.provinceParams.parentId = action.payload.parentId;
    },
    setIsOpenAddressForm: (state, action: PayloadAction<boolean>) => {
      state.isOpenAddressForm = action.payload;
    },
    setAddressInfo: (state, action: PayloadAction<ISubmitDataAddress>) => {
      state.addressInfo = action.payload;
    },
  },
});

export const {
  setShowUserTabMobile,
  setSearchTextProvinceParams,
  setTypeProvinceParams,
  setIsOpenAddressForm,
  setAddressInfo,
} = userTabSlice.actions;

export const showUserTabMobile = (state: RootState) =>
  state.userTab.showUserTabMobile;

export default userTabSlice.reducer;
