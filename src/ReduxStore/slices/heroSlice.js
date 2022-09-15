import { createSlice } from "@reduxjs/toolkit";

const heroSlice = createSlice({
  name: "hero",
  initialState: {
    heading: "",
    subHeading: "",
    photo: "",
  },
  reducers: {
    heroInfo(state, action) {
      state.heading = action.payload.heading;
      state.subHeading = action.payload.subHeading;
      state.photo = action.payload.photo;
    },
  },
});

export const heroActions = heroSlice.actions;

export default heroSlice.reducer;
