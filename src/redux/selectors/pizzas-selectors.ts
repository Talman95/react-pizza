import { RootState } from '../store';

export const statusSelect = (state: RootState) => state.pizza.status;

export const pizzasSelect = (state: RootState) => state.pizza.pizzas;
