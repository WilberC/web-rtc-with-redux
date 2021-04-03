import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, FetchConfig } from "../../app/api";

export const fetchLogin = createAsyncThunk(
  'session/fetchLogin',
  async (credentials) => {
    try {
      return await (await fetch(`${ API_URL }/login`, FetchConfig(
        {
          method: 'POST',
          data: {
            user: credentials
          }
        }))).json()
    } catch (e) {
      console.log(e)
      return e
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userError: null,
    userData: null
  },
  reducers: {},
  extraReducers: {
    [fetchLogin.fulfilled]: (state, action) => {

      if (action.payload?.id === null) {
        state.userError = "Invalid user"
        return;
      }
      state.userError = null
      state.userData = action.payload
    }
  }
});

export const selectUserData = state => state.user.userData;
export const selectUserError = state => state.user.userError;

export default userSlice.reducer;
