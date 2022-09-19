import { configureStore } from "@reduxjs/toolkit";

//slices
import heroReducer from "./slices/HeroSlice";
import notificationReducer from "./slices/NotificationSlice";

const store = configureStore({
  reducer: {
    hero: heroReducer,
    notification: notificationReducer,
  },
});

export default store;
