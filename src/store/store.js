import { configureStore } from '@reduxjs/toolkit';
import { accessTokenSlice, bonusesDataSlice } from './reducers';

export const store = configureStore({
  reducer: {
    accessToken: accessTokenSlice,
    bonusesData: bonusesDataSlice,
  },
});
