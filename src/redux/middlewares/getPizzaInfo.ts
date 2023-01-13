import { createAsyncThunk } from '@reduxjs/toolkit';

import { pizzaApi } from '../../api/pizza-api';

export const getPizzaInfo = createAsyncThunk(
  'pizzaInfo/getPizzaInfo',
  async (id: string, { rejectWithValue }) => {
    try {
      const pizza = await pizzaApi.getPizzaInfo(id);

      return pizza;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
