import { createSlice } from "@reduxjs/toolkit";

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    photoInfo1: {
      id: null,
      photo1: null,
      imgURL: null,
      isLoading: false,
    },
  },
  reducers: {
    handleDatabaseInfo(state, action) {
      state.photoInfo1 = {
        id: action.payload.id,
        photo1: action.payload.photo1,
        imgURL: action.payload.imgURL,
        // isLoading: action.payload.isLoading,
      };
    },
    handleImgURL(state, action) {
      state.photoInfo1.imgURL = action.payload;
    },
    handleIsLoading(state, action) {
      state.photoInfo1.isLoading = action.payload;
    },
  },
});

export const eventsAction = eventsSlice.actions;
export default eventsSlice.reducer;
