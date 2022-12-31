import { createSlice } from '@reduxjs/toolkit';
import { PizzaType } from '../../types/PizzaType';
import { fetchPizzas } from '../middlewares/fetchPizzas';

const initialState = {
  isLoading: false,
  pizzas: [] as PizzaType[],
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPizzas.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.pizzas = action.payload.pizzas;
        state.isLoading = false;
      });
  },
});

export const pizzasReducer = pizzasSlice.reducer;
