import { createSlice } from '@reduxjs/toolkit';

import { AppStatus } from '../../enums/AppStatus';
import { PizzaType } from '../../types/PizzaType';
import { getPizzaInfo } from '../middlewares/getPizzaInfo';

const initialState = {
  pizza: null as null | PizzaType,
  status: AppStatus.INIT,
};

const pizzaInfo = createSlice({
  name: 'pizzaInfo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPizzaInfo.pending, state => {
        state.status = AppStatus.LOADING;
      })
      .addCase(getPizzaInfo.fulfilled, (state, action) => {
        state.pizza = action.payload;
        state.status = AppStatus.SUCCESS;
      })
      .addCase(getPizzaInfo.rejected, state => {
        state.status = AppStatus.ERROR;
      });
  },
});

export const pizzaInfoReducer = pizzaInfo.reducer;
