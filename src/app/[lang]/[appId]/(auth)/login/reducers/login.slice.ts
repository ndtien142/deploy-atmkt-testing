import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AuthStateProps = {
    isShowPassword: boolean;
}

const initialState: AuthStateProps = {
    isShowPassword: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setShowPassword: (state, action: PayloadAction<boolean>) => {
            state.isShowPassword = action.payload;
        }
    }
})

export const {setShowPassword} = loginSlice.actions;

export default loginSlice.reducer;