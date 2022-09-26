import { createSlice } from "@reduxjs/toolkit";

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState: {
    dataId: null,
    heading: "",
    name: "",
    text: "",
    cityAndDate: "",
    dataId1: null,
    name1: "",
    text1: "",
    cityAndDate1: "",
    dataId2: null,
    name2: "",
    text2: "",
    cityAndDate2: "",
  },
  reducers: {
    testimonialInfo(state, action) {
      state.dataId = action.payload.id;
      state.heading = action.payload.heading;
      state.name = action.payload.name;
      state.text = action.payload.text;
      state.cityAndDate = action.payload.cityAndDate;
      state.dataId1 = action.payload.id1;
      state.name1 = action.payload.name1;
      state.text1 = action.payload.text1;
      state.cityAndDate1 = action.payload.cityAndDate1;
      state.dataId2 = action.payload.id2;
      state.name2 = action.payload.name2;
      state.text2 = action.payload.text2;
      state.cityAndDate2 = action.payload.cityAndDate2;
    },
  },
});

export const testimonialActions = testimonialSlice.actions;
export default testimonialSlice.reducer;
