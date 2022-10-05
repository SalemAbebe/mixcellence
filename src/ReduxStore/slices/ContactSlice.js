import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    dataId: null,
    contactHeading: "",
    modal: {
      showModal: false,
      message: "",
    },
  },
  reducers: {
    contactInfo(state, action) {
      state.dataId = action.payload.id;
      state.contact = action.payload.contact;
    },
    handleShowModal(state, action) {
      state.modal = {
        showModal: action.payload.showModal,
        message: action.payload.message,
      };
    },
  },
});

export const contactActions = contactSlice.actions;
export default contactSlice.reducer;
