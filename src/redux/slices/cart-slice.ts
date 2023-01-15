import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartItemType } from '../../types/CartItemType';

export type CartItemDomainType = CartItemType & { count: number };

const initialState = {
  totalPrice: 0,
  items: [] as CartItemDomainType[],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItemType>) {
      const findItem = state.items.find(item => item.id === action.payload.id);

      if (findItem) {
        findItem.count += 1;
      } else {
        const newItem = {
          ...action.payload,
          count: 1,
        };

        state.items.push(newItem);
      }

      state.totalPrice = state.items.reduce((sum, item) => {
        return sum + item.price * item.count;
      }, 0);
    },
    removeItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find(item => item.id === action.payload);

      if (findItem) {
        if (findItem.count > 1) {
          findItem.count -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== action.payload);
        }

        state.totalPrice -= findItem.price;
      }
    },
    deletePosition(state, action: PayloadAction<string>) {
      const index = state.items.findIndex(item => item.id === action.payload);

      if (index > -1) {
        state.items.splice(index, 1);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { reducer: cartReducer, actions: cartActions } = cartSlice;
