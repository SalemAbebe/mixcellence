import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    forgotPassword: false,
  },
  reducers: {
    handleForgotPassword(state) {
      state.forgotPassword = !state.forgotPassword;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;
