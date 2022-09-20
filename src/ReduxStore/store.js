import { configureStore } from "@reduxjs/toolkit";

//slices
import aboutReducer from "./slices/AboutSlice";
import heroReducer from "./slices/HeroSlice";
import testimonialReducer from "./slices/testimonialSlice";
import notificationReducer from "./slices/NotificationSlice";

const store = configureStore({
  reducer: {
    about: aboutReducer,
    hero: heroReducer,
    testimonial: testimonialReducer,
    notification: notificationReducer,
  },
});

export default store;
