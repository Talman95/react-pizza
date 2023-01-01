import { SortTypeName } from '../enums/SortTypeName';

export type SortType =
  | { title: 'популярности'; type: SortTypeName.RAITING }
  | { title: 'цене'; type: SortTypeName.PRICE }
  | { title: 'алфавиту'; type: SortTypeName.TITLE };
