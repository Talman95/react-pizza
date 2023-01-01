import { RootState } from './../store';

export const categoryIdSelect = (state: RootState) => state.filter.categoryId;
export const sortTypeSelect = (state: RootState) => state.filter.sort;
export const searchValueSelect = (state: RootState) => state.filter.searchValue;
