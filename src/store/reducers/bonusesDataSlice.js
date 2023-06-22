import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBonusesData } from '../../api';

const fetchBonusesData = createAsyncThunk(
  'bonusesData/fetchBonusesData',
  async (_, { getState }) => {
    const { accessToken } = getState();

    if (!accessToken) return;

    const data = await getBonusesData(accessToken);

    return data;
  }
);

const intialState = {
  currentValue: 0,
  burningValue: 0,
  burningDate: null,
};

export const bonusesDataSlice = createSlice({
  name: 'bonusesData',
  initialState: intialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBonusesData.fulfilled, (state, action) => {
      if (!action.payload) return;

      state.currentValue = action.payload.currentQuantity;
      state.burningValue = action.payload.forBurningQuantity;
      state.burningDate = action.payload.dateBurning;
    });
  },
});

export { fetchBonusesData };

export default bonusesDataSlice.reducer;
