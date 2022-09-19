import { createSlice } from "@reduxjs/toolkit";

const heroSlice = createSlice({
  name: "hero",
  initialState: {
    backEnd: {
      filePath: null,
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
      gotId: false,
      isLoading: false,
    },
    error: {
      isError: false,
      message: null,
    },
    frontEnd: {
      heroInfo: {
        id: null,
        heading: null,
        subHeading: null,
        photo: null,
      },
    },
    success: {
      isSuccess: false,
      message: null,
    },
  },
  reducers: {
    handleDatabaseInfo(state, action) {
      state.backEnd.databaseInfo = {
        id: action.payload.id,
        heading: action.payload.heading,
        subHeading: action.payload.subHeading,
        photo: action.payload.imageURL && action.payload.imageURL,
      };
    },
    handleError(state, action) {
      state.error = {
        isError: action.payload.isError,
        message: action.payload.message,
      };
    },
    handleFilePath(state, action) {
      state.backEnd.filePath = action.payload;
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
    handleGotId(state, action) {
      state.backEnd.gotId = action.payload;
    },
    handleImageURL(state, action) {
      state.backEnd.imageURL = action.payload;
    },
    handleIsLoading(state, action) {
      state.backEnd.isLoading = action.payload;
    },
    handleSuccess(state, action) {
      state.success = {
        isSuccess: action.payload.isSuccess,
        message: action.payload.message,
      };
    },
  },
});

export const heroActions = heroSlice.actions;

export default heroSlice.reducer;
