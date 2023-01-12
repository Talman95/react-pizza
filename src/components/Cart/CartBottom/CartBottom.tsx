import { FC } from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  cartItemCountSelect,
  totalPriceSelect,
} from '../../../redux/selectors/cart-selectors';

import styles from './CartBottom.module.scss';

export const CartBottom: FC = () => {
  const totalPrice = useSelector(totalPriceSelect);
  const cartItemCount = useSelector(cartItemCountSelect);

  return (
    <div className={styles.bottom}>
      <div className={styles.details}>
        <span>
          Всего пицц: <b>{cartItemCount} шт.</b>
        </span>
        <span>
          Сумма заказа: <b>{totalPrice}</b>
        </span>
      </div>
      <div className={styles.buttons}>
        <Link
          to="/"
          className={`button button--outline button--add ${styles.goBackButton}`}
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13L1 6.93015L6.86175 1"
              stroke="#D3D3D3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Вернуться назад</span>
        </Link>
        <div className={`button ${styles.payBtn}`}>
          <span>Оплатить сейчас</span>
        </div>
      </div>
    </div>
  );
};
