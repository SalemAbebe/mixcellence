import { configureStore } from "@reduxjs/toolkit";

//slices
import heroReducer from "./slices/HeroSlice";

const store = configureStore({
  reducer: {
    hero: heroReducer,
  },
});

export default store;
