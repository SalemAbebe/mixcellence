import { configureStore } from "@reduxjs/toolkit";

//slices
import heroReducer from "./slices/heroSlice";

const store = configureStore({
  reducer: {
    hero: heroReducer,
  },
});

export default store;
