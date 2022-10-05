import { createSlice } from "@reduxjs/toolkit";

const FAQSlice = createSlice({
  name: "FAQ",
  initialState: {
    dataId: null,
    Question: "",
    answer: "",
    dataId1: null,
    question1: "",
    answer1: "",
    showAnswer: 0,
  },
  reducers: {
    FAQInfo(state, action) {
      state.dataId = action.payload.id;
      state.question = action.payload.question;
      state.answer = action.payload.answer;
      state.dataId1 = action.payload.id1;
      state.question1 = action.payload.question1;
      state.answer1 = action.payload.answer1;
    },
    handleShowAnswer(state, action) {
      state.showAnswer = action.payload;
    },
  },
});

export const FAQActions = FAQSlice.actions;
export default FAQSlice.reducer;
