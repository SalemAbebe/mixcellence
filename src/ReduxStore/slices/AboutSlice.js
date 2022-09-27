import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
  name: "about",
  initialState: {
    aboutInfo: {
      id: null,
      heading: null,
      text: null,
      photo: null,
    },
    dataId: null,
    formInfo: {
      heading: "",
      text: "",
    },
    imageURL: null,
    isLoading: false,
  },
  reducers: {
    handleDatabaseInfo(state, action) {
      state.aboutInfo = {
        id: action.payload.id,
        heading: action.payload.heading,
        text: action.payload.text,
        photo: action.payload.photo,
      };
      state.dataId = action.payload.id;
      state.imageURL = action.payload.photo;
    },
    handleFormInfo(state, action) {
      state.formInfo = {
        heading: action.payload.heading,
        text: action.payload.text,
      };
    },
    handleImageURL(state, action) {
      state.imageURL = action.payload;
    },
    handleIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const aboutActions = aboutSlice.actions;

export default aboutSlice.reducer;
