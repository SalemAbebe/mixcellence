import { createSlice } from "@reduxjs/toolkit";

const heroSlice = createSlice({
  name: "hero",
  initialState: {
    dataId: null,
    formInfo: {
      heading: "",
      subHeading: "",
    },
    heroInfo: {
      id: null,
      heading: null,
      subHeading: null,
      photo: null,
    },
    imageURL: null,
    isLoading: false,
  },
  reducers: {
    handleFormInfo(state, action) {
      state.formInfo = {
        heading: action.payload.heading,
        subHeading: action.payload.subHeading,
      };
    },
    handleHeroInfo(state, action) {
      state.dataId = action.payload.id;
      state.heroInfo = {
        id: action.payload.id,
        heading: action.payload.heading,
        subHeading: action.payload.subHeading,
        photo: action.payload.imageURL,
      };
      state.imageURL = action.payload.imageURL;
    },
    handleImageURL(state, action) {
      state.imageURL = action.payload;
    },
    handleIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const heroActions = heroSlice.actions;

export default heroSlice.reducer;
