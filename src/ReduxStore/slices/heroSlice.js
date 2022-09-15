import { createSlice } from "@reduxjs/toolkit";

const heroSlice = createSlice({
  name: "hero",
  initialState: {
    backEnd: {
      imageURL: "",
      id: "",
      gotId: false,
      isLoading: false,
      filePath: "",
      heroInfo: {
        heading: "",
        subHeading: "",
      },
    },
    frontEnd: {
      heroInfo: {
        heading: "",
        subHeading: "",
        photo: "",
      },
    },
  },
  reducers: {
    frontEndInfo(state, action) {
      state.frontEnd.heroInfo = {
        heading: action.payload.heading,
        subHeading: action.payload.subHeading,
        photo: action.payload.photo,
      };
    },
    backEndInfo(state, action) {
      state.backEnd.heroInfo = {
        heading: action.payload.heading,
        subHeading: action.payload.subHeading,
      };
    },
    handleIsLoading(state, action) {
      state.backEnd.isLoading = action.payload;
    },
    handleImageURL(state, action) {
      state.backEnd.imageURL = action.payload;
    },
    handleId(state, action) {
      state.backEnd.id = action.payload;
    },
    handleGotId(state, action) {
      state.backEnd.gotId = action.payload;
    },
    handleFilePath(state, action) {
      state.backEnd.filePath = action.payload;
    },
  },
});

export const heroActions = heroSlice.actions;

export default heroSlice.reducer;
