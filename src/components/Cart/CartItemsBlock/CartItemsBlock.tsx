import { useSelector } from 'react-redux';

import { cartItemsSelect } from '../../../redux/selectors/cart-selectors';
import { CartItem } from './CartItem/CartItem';

export function CartItemsBlock() {
  const items = useSelector(cartItemsSelect);

  return (
    <div className="content__items">
      {items.map(
        ({ id, category, count, imageUrl, price, size, title, type, rating }) => (
          <CartItem
            key={id}
            category={category}
            count={count}
            id={id}
            imageUrl={imageUrl}
            price={price}
            size={size}
            title={title}
            type={type}
            rating={rating}
          />
        ),
      )}
    </div>
  );
}
