import { createSlice } from '@reduxjs/toolkit';

export const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState: {
    questionnaireError: null,
    questionnaireData: null
  },
  reducers: {},
  extraReducers: {
  }
});

export const selectQuestionnaireError = state => state.questionnaire.questionnaireError;
export const selectQuestionnaireData = state => state.questionnaire.questionnaireData;

export default questionnaireSlice.reducer;
