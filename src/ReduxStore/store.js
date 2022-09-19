import { configureStore } from "@reduxjs/toolkit";

//slices
import heroReducer from "./slices/heroSlice";
import testimonialReducer from "./slices/testimonialSlice";
import notificationReducer from "./slices/NotificationSlice";

const store = configureStore({
  reducer: {
    hero: heroReducer,
    testimonial: testimonialReducer,
    notification: notificationReducer,
  },
});

export default store;
