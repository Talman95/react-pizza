import { RootState } from '../store';

export const loadingSelect = (state: RootState) => state.pizzas.isLoading;

export const pizzasSelect = (state: RootState) => state.pizzas.pizzas;
