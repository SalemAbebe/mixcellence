import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    error: {
      isError: false,
      message: null,
    },
    success: {
      isSuccess: false,
      message: null,
    },
  },
  reducers: {
    handleError(state, action) {
      state.error = {
        isError: action.payload.isError,
        message: action.payload.message,
      };
    },
    handleSuccess(state, action) {
      state.success = {
        isSuccess: action.payload.isSuccess,
        message: action.payload.message,
      };
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice.reducer;
