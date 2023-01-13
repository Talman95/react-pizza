import { AppStatus } from '../../enums/AppStatus';
import { PizzaType } from '../../types/PizzaType';
import { RootState } from '../store';

export const pizzaInfoSelect = (state: RootState): PizzaType | null =>
  state.pizzaInfo.pizza;

export const statusSelect = (state: RootState): AppStatus => state.pizzaInfo.status;
