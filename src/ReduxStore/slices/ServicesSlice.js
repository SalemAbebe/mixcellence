import { createSlice } from "@reduxjs/toolkit";

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    componentArrSize: [],
    componentCounter: 0,
    dataId: [],
    dataSize: [],
    formArr: [],
    formSent: false,
    imageURL: [],
    isLoading: false,
    servicesInfo: {
      id: null,
      heading: null,
      subHeading: null,
      text: null,
      photo: null,
    },
  },
  reducers: {
    handleDataSize(state, action) {
      state.dataSize.push(action.payload);
    },
    handleDecreaseComponentArrSize(state, action) {
      state.componentArrSize.splice(action.payload.index, 1);
    },
    handleDeleteDataId(state, action) {
      state.dataId.splice(action.payload, 1);
    },
    handleDeleteImageURL(state, action) {
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
    handleFormSent(state, action) {
      state.formSent = action.payload;
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
    handleUpdateComponentArrSize(state, action) {
      if (state.componentArrSize.length === 1) {
        state.componentArrSize.splice(
          action.payload.index,
          1,
          action.payload.length
        );
      } else {
        state.componentArrSize.push([
          ...state.componentArrSize,
          action.payload.length,
        ]);
      }
    },
  },
});

export const servicesActions = servicesSlice.actions;

export default servicesSlice.reducer;
