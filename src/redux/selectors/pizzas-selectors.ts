import { AppStatus } from '../../enums/AppStatus';
import { PizzaType } from '../../types/PizzaType';
import { RootState } from '../store';

export const statusSelect = (state: RootState): AppStatus => state.pizza.status;

export const pizzasSelect = (state: RootState): PizzaType[] => state.pizza.pizzas;
