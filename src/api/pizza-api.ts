import { PizzaCategory } from '../enums/PizzaCategory';
import { PizzaType } from '../types/PizzaType';

import { config } from './config';

export type FetchPizzaType = {
  sortBy: string;
  order: string;
  category?: PizzaCategory;
};

export const pizzaApi = {
  async fetchPizzas(queryParams: FetchPizzaType): Promise<PizzaType[]> {
    const res = await config.get('', { params: { ...queryParams } });

    return res.data.products;
  },
};
