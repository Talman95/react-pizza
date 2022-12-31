import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchPizzaType, pizzaApi } from '../../api/pizza-api';

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async (queryParams: FetchPizzaType) => {
    const res = await pizzaApi.fetchPizzas({ ...queryParams });
    return { pizzas: res };
  },
);
