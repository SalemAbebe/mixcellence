import { configureStore } from "@reduxjs/toolkit";

//slices
import aboutReducer from "./slices/AboutSlice";
import bartenderReducer from "./slices/BartendersSlice";
import heroReducer from "./slices/HeroSlice";
import loginReducer from "./slices/LoginSlice";
import notificationReducer from "./slices/NotificationSlice";
import servicesReducer from "./slices/ServicesSlice";
import testimonialReducer from "./slices/TestimonialSlice";

import FAQReducer from "./slices/FAQSlice";
import contactReducer from "./slices/ContactSlice";
import eventsReducer from "./slices/EventsSlice";

const store = configureStore({
  reducer: {
    about: aboutReducer,
    bartenders: bartenderReducer,
    contact: contactReducer,
    hero: heroReducer,
    login: loginReducer,
    notification: notificationReducer,
    services: servicesReducer,
    testimonial: testimonialReducer,
    FAQ: FAQReducer,
    events: eventsReducer,
  },
});

export default store;
