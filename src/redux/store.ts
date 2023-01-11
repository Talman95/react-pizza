import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './slices/cart-slice';
import { filterReducer } from './slices/filter-slice';
import { pizzasReducer } from './slices/pizzas-slice';

const rootReducer = combineReducers({
  pizza: pizzasReducer,
  filter: filterReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
