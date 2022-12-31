import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { pizzasReducer } from './slices/pizzas-slice';

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
