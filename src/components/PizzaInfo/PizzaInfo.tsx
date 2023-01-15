import { FC } from 'react';

import { useSelector } from 'react-redux';

import { AppStatus } from '../../enums/AppStatus';
import {
  pizzaInfoSelect,
  statusSelect,
} from '../../redux/selectors/pizza-info-selectors';

import styles from './PizzaInfo.module.scss';

export const PizzaInfo: FC = () => {
  const pizzaInfo = useSelector(pizzaInfoSelect);

  const status = useSelector(statusSelect);

  return (
    <div className={styles.pizza}>
      {status === AppStatus.INIT || status === AppStatus.LOADING ? (
        <div className="skeleton">Loading...</div>
      ) : (
        <>
          <div className={styles.info}>
            <h2>{pizzaInfo?.title}</h2>
            <h4>Цена: {pizzaInfo?.price} Р</h4>
            <h4>Рейтинг: {pizzaInfo?.rating}</h4>
          </div>
          <div className={styles.image}>
            <img alt="Pizza" src={pizzaInfo?.imageUrl} />
          </div>
        </>
      )}
    </div>
  );
};
