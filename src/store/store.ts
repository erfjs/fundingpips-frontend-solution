import { configureStore } from '@reduxjs/toolkit';

import settingReducer from "./features/settingSlice";


export const store = configureStore({
  reducer: {
    setting: settingReducer,

  },

  devTools: process.env.NODE_ENV !== 'production'
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch