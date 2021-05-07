import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL, FetchConfig } from "../../app/api";

export const fetchQuestionnaire = createAsyncThunk(
  'questionnaire/fetchQuestionnaire',
  async (data) => {
    try {
      const { userToken, userId } = data
      return await (await fetch(`${ API_URL }/questionnaires/?filter[user_id]=${ userId }`, FetchConfig(
        { method: 'GET', token: userToken }))).json()
    } catch (e) {
      console.log(e)
      return e
    }
  }
)
export const fetchAnswers = createAsyncThunk(
  'questionnaire/fetchAnswers',
  async (data) => {
    try {
      const { userToken, questionnaireId } = data
      return await (await fetch(
        `${ API_URL }/answers/?include=question&filter[questionnaire_id]=${ questionnaireId }`,
        FetchConfig({ method: 'GET', token: userToken }))).json()
    } catch (e) {
      console.log(e)
      return e
    }
  }
)
export const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState: {
    questionnaireError: null,
    questionnaireData: { data: [] },
    answers: { data: [], included: [] }
  },
  reducers: {},
  extraReducers: {
    [fetchQuestionnaire.fulfilled]: (state, action) => {
      state.questionnaireData = action.payload
    },
    [fetchAnswers.fulfilled]: (state, action) => {
      state.answers = action.payload
    }
  }
});

export const selectQuestionnaireError = state => state.questionnaire.questionnaireError;
export const selectQuestionnaireData = state => state.questionnaire.questionnaireData;
export const selectAnswers = state => state.questionnaire.answers;

export default questionnaireSlice.reducer;
