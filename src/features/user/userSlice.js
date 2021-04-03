import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, FetchConfig } from "../../app/api";

export const fetchLogin = createAsyncThunk(
  'session/fetchLogin',
  async (credentials) => {
    try {
      const userData = await (await fetch(`${ API_URL }/login`, FetchConfig(
        {
          method: 'POST',
          data: {
            user: credentials
          }
        }))).json()
      return userData;
    } catch (e) {
      console.log(e)
      return e
    }
  }
)

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    error: null,
    userData: null
  },
  reducers: {},
  extraReducers: {
    [fetchLogin.fulfilled]: (state, action) => {
      state.userData = action.payload
    }
  }
});

export const { login } = counterSlice.actions;

export const selectUserData = state => state.userData.value;

export default counterSlice.reducer;
