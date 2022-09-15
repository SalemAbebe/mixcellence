import { configureStore } from "@reduxjs/toolkit";

//slices
import heroReducer from "./slices/heroSlice";
import testimonialReducer from "./slices/testimonialSlice";

const store = configureStore({
  reducer: {
    hero: heroReducer,
    testimonial: testimonialReducer,
  },
});

export default store;
