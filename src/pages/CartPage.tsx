import { CartBottom } from '../components/Cart/CartBottom/CartBottom';
import { CartHeader } from '../components/Cart/CartHeader/CartHeader';
import { CartItemsBlock } from '../components/Cart/CartItemsBlock/CartItemsBlock';

export default function CartPage() {
  return (
    <div className="container container--cart">
      <div className="cart">
        <CartHeader />

        <CartItemsBlock />

        <CartBottom />
      </div>
    </div>
  );
}
