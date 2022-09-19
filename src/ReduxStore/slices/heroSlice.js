import { createSlice } from "@reduxjs/toolkit";

const heroSlice = createSlice({
  name: "hero",
  initialState: {
    backEnd: {
      imageURL: null,
      formInfo: {
        heading: null,
        subheading: null,
      },
      databaseInfo: {
        id: null,
        heading: null,
        subHeading: null,
        photo: null,
      },
      isLoading: false,
    },
    frontEnd: {
      heroInfo: {
        id: null,
        heading: null,
        subHeading: null,
        photo: null,
      },
    },
  },
  reducers: {
    handleDatabaseInfo(state, action) {
      state.backEnd.databaseInfo = {
        id: action.payload.id,
        heading: action.payload.heading,
        subHeading: action.payload.subHeading,
        photo: action.payload.imageURL,
      };
    },
    handleFormInfo(state, action) {
      state.backEnd.formInfo = {
        heading: action.payload.heading,
        subHeading: action.payload.subHeading,
      };
    },
    handleFrontEndHero(state, action) {
      state.frontEnd.heroInfo = {
        id: action.payload.id && action.payload.id,
        heading: action.payload.heading && action.payload.heading,
        subHeading: action.payload.subHeading && action.payload.subHeading,
        photo: action.payload.photo && action.payload.photo,
      };
    },
    handleImageURL(state, action) {
      state.backEnd.imageURL = action.payload;
    },
    handleIsLoading(state, action) {
      state.backEnd.isLoading = action.payload;
    },
  },
});

export const heroActions = heroSlice.actions;

export default heroSlice.reducer;
