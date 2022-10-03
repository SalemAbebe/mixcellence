import { configureStore } from "@reduxjs/toolkit";

//slices
import aboutReducer from "./slices/AboutSlice";
import bartenderReducer from "./slices/BartendersSlice";
import heroReducer from "./slices/HeroSlice";
import loginReducer from "./slices/LoginSlice";
import notificationReducer from "./slices/NotificationSlice";
import servicesReducer from "./slices/ServicesSlice";
import testimonialReducer from "./slices/TestimonialSlice";

const store = configureStore({
  reducer: {
    about: aboutReducer,
    bartenders: bartenderReducer,
    hero: heroReducer,
    login: loginReducer,
    notification: notificationReducer,
    services: servicesReducer,
    testimonial: testimonialReducer,
  },
});

export default store;
