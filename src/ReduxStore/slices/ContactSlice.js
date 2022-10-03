import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    dataId: null,
    contactHeading: "",
  },
  reducers: {
    contactInfo(state, action) {
      state.dataId = action.payload.id;
      state.contact = action.payload.contact;
    },
  },
});

export const contactActions = contactSlice.actions;
export default contactSlice.reducer;
