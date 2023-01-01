import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slices/filter-slice';
import { pizzasReducer } from './slices/pizzas-slice';

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
