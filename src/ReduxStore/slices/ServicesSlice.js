import { createSlice } from "@reduxjs/toolkit";

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    componentArrSize: [],
    componentCounter: 0,
    dataId: [],
    formArr: [],
    imageURL: [],
    isLoading: false,
    servicesInfo: {
      id: null,
      heading: null,
      subHeading: null,
      text: null,
      photo: null,
    },
    showInfo: 0,
  },
  reducers: {
    handleDeleteService(state, action) {
      state.componentArrSize.splice(action.payload.index, 1);
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
          photo: action.payload.photo,
        });
      } else {
        state.formArr.splice(action.payload.index, 1, {
          heading: action.payload.heading,
          subHeading: action.payload.subHeading,
          text: action.payload.text,
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
    handleServicesInfo(state, action) {
      state.dataId.splice(action.payload.index, 1, action.payload.id);
      state.servicesInfo = {
        id: action.payload.id,
        heading: action.payload.heading,
        subHeading: action.payload.subHeading,
        text: action.payload.text,
        photo: action.payload.photo,
      };
    },
    handleShowInfo(state, action) {
      state.showInfo = action.payload;
    },
  },
});

export const servicesActions = servicesSlice.actions;

export default servicesSlice.reducer;
