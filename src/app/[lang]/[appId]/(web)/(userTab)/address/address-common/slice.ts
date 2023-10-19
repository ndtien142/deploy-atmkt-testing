import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProvinceParams, InitialState } from "./interface";
import { RootState } from "@/common/redux/store";

const initialState: InitialState = {
  isOpenEditForm: false,
  idEdit: 0,
  isOpenCreateForm: false,
  provinceParams: {
    parentId: undefined,
    searchText: "",
    type: "PROVINCE",
  },
  idDelete: 0,
  isOpenModalConfirm: false,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setIsOpenEditForm: (state, action: PayloadAction<boolean>) => {
      state.isOpenEditForm = action.payload;
    },
    setIdEdit: (state, action: PayloadAction<number>) => {
      state.idEdit = action.payload;
    },
    setIsOpenCreateForm: (state, action: PayloadAction<boolean>) => {
      state.isOpenCreateForm = action.payload;
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
    setIdDelete: (state, action: PayloadAction<number>) => {
      state.idDelete = action.payload;
    },
    setIsOpenModalConfirm: (state, action: PayloadAction<boolean>) => {
      state.isOpenModalConfirm = action.payload;
    },
  },
});

export const {
  setIsOpenEditForm,
  setIdEdit,
  setIsOpenCreateForm,
  setSearchTextProvinceParams,
  setTypeProvinceParams,
  setIdDelete,
  setIsOpenModalConfirm,
} = addressSlice.actions;

export const isOpenEditForm = (state: RootState) =>
  state.address.isOpenEditForm;
export const isOpenCreateForm = (state: RootState) =>
  state.address.isOpenCreateForm;
export const provinceParamsForm = (state: RootState) =>
  state.address.provinceParams;
export const idEditForm = (state: RootState) => state.address.idEdit;
export const idDelete = (state: RootState) => state.address.idDelete;
export const isOpenModalConfirm = (state: RootState) =>
  state.address.isOpenModalConfirm;

export default addressSlice.reducer;
