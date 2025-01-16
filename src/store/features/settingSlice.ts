import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

interface SettingState {
  stockType: 'all' | 'favorite'
}




const initialState: SettingState = {
  stockType: 'all',
};


export const settingSlice = createSlice({
  name: "setting",
  initialState,

  reducers: {
    setStockType: (state, action: PayloadAction<'all' | 'favorite'>) => {
      state.stockType = action.payload;
    }
  }
  ,
});

export const getSettingState = (state: RootState) => state.setting;
export const { setStockType } = settingSlice.actions;

export default settingSlice.reducer;
