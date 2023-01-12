import { CartItemDomainType } from '../slices/cart-slice';
import { RootState } from '../store';

export const totalPriceSelect = (state: RootState): number => state.cart.totalPrice;

export const cartItemsSelect = (state: RootState): CartItemDomainType[] =>
  state.cart.items;

export const cartItemCountSelect = (state: RootState): number =>
  state.cart.items.reduce((count, item) => {
    return count + item.count;
  }, 0);
