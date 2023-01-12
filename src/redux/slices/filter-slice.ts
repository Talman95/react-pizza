import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PizzaCategory } from '../../enums/PizzaCategory';
import { SortTypeName } from '../../enums/SortTypeName';
import { SortType } from '../../types/SortType';

const initialState = {
  categoryId: PizzaCategory.All,
  sort: {
    title: 'популярности',
    type: SortTypeName.RAITING,
  } as SortType,
  searchValue: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<{ id: PizzaCategory }>) => {
      state.categoryId = action.payload.id;
    },
    setSortType: (state, action: PayloadAction<{ type: SortType }>) => {
      state.sort = action.payload.type;
    },
    setSearchValue: (state, action: PayloadAction<{ value: string }>) => {
      state.searchValue = action.payload.value;
    },
    setFilters: (state, action: PayloadAction<{ filters: SetFiltersType }>) => {
      state.categoryId = action.payload.filters.category;
      state.searchValue = action.payload.filters.search;
      state.sort = action.payload.filters.sortBy;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { setCategoryId, setSortType, setSearchValue, setFilters } =
  filterSlice.actions;

type SetFiltersType = {
  search: string;
  category: PizzaCategory;
  sortBy: SortType;
};
