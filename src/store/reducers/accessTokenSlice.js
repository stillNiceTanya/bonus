import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAccessToken } from '../../api';

const fetchAccessToken = createAsyncThunk(
  'accessToken/fetchAccessToken',
  async () => {
    const token = await getAccessToken();

    return token;
  }
);

const initialState = null;

const accessTokenSlice = createSlice({
  name: 'accessToken',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAccessToken.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export { fetchAccessToken };

export default accessTokenSlice.reducer;
