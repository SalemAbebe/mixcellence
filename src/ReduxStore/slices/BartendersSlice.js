import { createSlice } from "@reduxjs/toolkit";

const bartendersSlice = createSlice({
  name: "bartenders",
  initialState: {
    componentArrSize: [],
    componentCounter: 0,
    dataId: [],
    formArr: [],
    imageURL: [],
    isLoading: false,
    bartendersInfo: {
      id: null,
      heading: null,
      subHeading: null,
      text: null,
      instagram: {
        selected: false,
        link: null,
      },
      twitter: {
        selected: false,
        link: null,
      },
      facebook: {
        selected: false,
        link: null,
      },
    },
  },
  reducers: {
    handleDeleteBartender(state, action) {
      state.componentArrSize.splice(action.payload, 1);
      state.dataId.splice(action.payload, 1);
      state.formArr.splice(action.payload, 1);
      state.imageURL.splice(action.payload, 1);
    },
    handleFormArr(state, action) {
      if (state.formArr[action.payload.index] === undefined) {
        state.formArr.push({
          heading: action.payload.heading,
          subHeading: action.payload.subHeading,
          text: action.payload.text,
          instagram: action.payload.instagram,
          twitter: action.payload.twitter,
          facebook: action.payload.facebook,
          photo: action.payload.photo,
        });
      } else {
        state.formArr.splice(action.payload.index, 1, {
          heading: action.payload.heading,
          subHeading: action.payload.subHeading,
          text: action.payload.text,
          instagram: action.payload.instagram,
          twitter: action.payload.twitter,
          facebook: action.payload.facebook,
          photo: action.payload.photo,
        });
      }
    },
    handleImageURL(state, action) {
      if (state.imageURL[action.payload.index] === undefined) {
        state.imageURL.push(action.payload.photo);
      } else {
        state.imageURL.splice(action.payload.index, 1, action.payload.photo);
      }
    },
    handleIncreaseComponentArrSize(state, action) {
      state.componentArrSize.push(state.componentCounter);
      state.componentCounter = state.componentCounter + action.payload;
    },
    handleIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    handleBartendersInfo(state, action) {
      state.dataId.splice(action.payload.index, 1, action.payload.id);
      state.bartendersInfo = {
        id: action.payload.id,
        heading: action.payload.heading,
        subHeading: action.payload.subHeading,
        text: action.payload.text,
        instagram: action.payload.instagram,
        twitter: action.payload.twitter,
        facebook: action.payload.facebook,
        photo: action.payload.photo,
      };
    },
  },
});

export const bartendersActions = bartendersSlice.actions;

export default bartendersSlice.reducer;
