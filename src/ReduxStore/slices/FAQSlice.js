import { createSlice } from "@reduxjs/toolkit";

const FAQSlice = createSlice({
  name: "FAQ",
  initialState: {
    dataId: null,
    Question: "",
    answer: "",
  },
  reducers: {
    FAQInfo(state, action) {
      state.dataId = action.payload.id;
      state.question = action.payload.question;
      state.answer = action.payload.answer;
    },
  },
});

export const FQAActions = FAQSlice.actions;
export default FAQSlice.reducer;
