import { createAsyncThunk } from '@reduxjs/toolkit';

import { FetchPizzaType, pizzaApi } from '../../api/pizza-api';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzas',
  async (queryParams: FetchPizzaType, { rejectWithValue }) => {
    try {
      const res = await pizzaApi.fetchPizzas({ ...queryParams });

      window.scrollTo(0, 0);

      return { pizzas: res };
    } catch (e: any) {
      console.log('Error', e);

      return rejectWithValue(e);
    }
  },
);
