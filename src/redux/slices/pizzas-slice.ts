import { createSlice } from '@reduxjs/toolkit';
import { AppStatus } from '../../enums/AppStatus';
import { PizzaType } from '../../types/PizzaType';
import { fetchPizzas } from '../middlewares/fetchPizzas';

const initialState = {
  status: AppStatus.SUCCESS,
  pizzas: [] as PizzaType[],
};

const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPizzas.pending, state => {
        state.status = AppStatus.LOADING;
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.pizzas = action.payload.pizzas;
        state.status = AppStatus.SUCCESS;
      })
      .addCase(fetchPizzas.rejected, state => {
        state.pizzas = [];
        state.status = AppStatus.ERROR;
      });
  },
});

export const pizzasReducer = pizzasSlice.reducer;
