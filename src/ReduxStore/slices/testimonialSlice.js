import { createSlice } from "@reduxjs/toolkit";

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState: {
    heading: "",
    name: "",
    text: "",
    cityAndDate: "",
  },
  reducers: {
    testimonialInfo(state, action) {
      state.heading = action.payload.heading;
      state.name = action.payload.name;
      state.text = action.payload.text;
      state.cityAndDate = action.payload.cityAndDate;
    },
  },
});

export const testimonialActions = testimonialSlice.actions;
export default testimonialSlice.reducer;
