import { RootState } from './../store';

export const totalPriceSelect = (state: RootState) => state.cart.totalPrice;

export const cartItemsSelect = (state: RootState) => state.cart.items;

export const cartItemCountSelect = (state: RootState) =>
  state.cart.items.reduce((count, item) => {
    return count + item.count;
  }, 0);
