import { PizzaCategory } from '../../enums/PizzaCategory';
import { SortType } from '../../types/SortType';
import { RootState } from '../store';

export const categoryIdSelect = (state: RootState): PizzaCategory =>
  state.filter.categoryId;
export const sortTypeSelect = (state: RootState): SortType => state.filter.sort;
export const searchValueSelect = (state: RootState): string => state.filter.searchValue;
