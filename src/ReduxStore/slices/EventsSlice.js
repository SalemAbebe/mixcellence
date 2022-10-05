import { createSlice } from "@reduxjs/toolkit";

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    // photoInfo1: {
    //   id: null,
    //   photo1: null,
    //   imgURL: null,
    //   isLoading: false,
    // },
    photoArr: [],
    isLoading: false,
    eventModal: false,
  },
  reducers: {
    handlePhotoArr(state, action) {
      if (state.photoArr[action.payload.index] === undefined) {
        state.photoArr.push(action.payload.photo);
      } else {
        state.photoArr.splice(action.payload.index, 1, action.payload.photo);
      }
      // isLoading: action.payload.isLoading,
      // };
    },
    handleIsLoading(state, action) {
      state.photoInfo1.isLoading = action.payload;
    },
    handleEventModal(state, action) {
      state.eventModal = action.payload;
    },
  },
});

export const eventsAction = eventsSlice.actions;
export default eventsSlice.reducer;
