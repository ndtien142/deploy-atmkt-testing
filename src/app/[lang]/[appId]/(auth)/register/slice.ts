import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type RegisterStateProps = {
  phoneNumber: string;
  otpValue: string;
  isShowPassword: boolean;
  firIdToken?: string;
  fullName?: string;
  isRegisterWithFirebase: boolean;
};

const initialState: RegisterStateProps = {
  phoneNumber: "",
  otpValue: "",
  isShowPassword: false,
  isRegisterWithFirebase: false,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setOtpValue: (state, action: PayloadAction<string>) => {
      state.otpValue = action.payload;
    },
    setShowPassword: (state, action: PayloadAction<boolean>) => {
      state.isShowPassword = action.payload;
    },
    setFirIdToken: (state, action: PayloadAction<string>) => {
      state.firIdToken = action.payload;
    },
    setFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    setRegisterWithFirebase: (state, action: PayloadAction<boolean>) => {
      state.isRegisterWithFirebase = action.payload;
    },
  },
});

export const {
  setPhoneNumber,
  setOtpValue,
  setShowPassword,
  setFirIdToken,
  setFullName,
  setRegisterWithFirebase,
} = registerSlice.actions;

export default registerSlice.reducer;
