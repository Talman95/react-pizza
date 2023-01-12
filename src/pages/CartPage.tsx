import { FC } from 'react';

import { useSelector } from 'react-redux';

import { CartBottom } from '../components/Cart/CartBottom/CartBottom';
import { CartEmpty } from '../components/Cart/CartEmpty/CartEmpty';
import { CartHeader } from '../components/Cart/CartHeader/CartHeader';
import { CartItemsBlock } from '../components/Cart/CartItemsBlock/CartItemsBlock';
import { cartItemsSelect } from '../redux/selectors/cart-selectors';

export const CartPage: FC = () => {
  const items = useSelector(cartItemsSelect);

  return (
    <div className="container container--cart">
      {items.length > 0 ? (
        <div className="cart">
          <CartHeader />

          <CartItemsBlock />

          <CartBottom />
        </div>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};
