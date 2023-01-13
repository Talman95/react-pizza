import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './slices/cart-slice';
import { filterReducer } from './slices/filter-slice';
import { pizzaInfoReducer } from './slices/pizza-info-slice';
import { pizzasReducer } from './slices/pizzas-slice';

const rootReducer = combineReducers({
  pizza: pizzasReducer,
  filter: filterReducer,
  cart: cartReducer,
  pizzaInfo: pizzaInfoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
