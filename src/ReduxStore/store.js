import { configureStore } from "@reduxjs/toolkit";

//slices
import aboutReducer from "./slices/AboutSlice";
import heroReducer from "./slices/HeroSlice";
import servicesReducer from "./slices/ServicesSlice";
import testimonialReducer from "./slices/TestimonialSlice";
import notificationReducer from "./slices/NotificationSlice";

const store = configureStore({
  reducer: {
    about: aboutReducer,
    hero: heroReducer,
    services: servicesReducer,
    testimonial: testimonialReducer,
    notification: notificationReducer,
  },
});

export default store;
