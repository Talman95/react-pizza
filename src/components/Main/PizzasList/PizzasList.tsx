import { FC } from 'react';

import { useSelector } from 'react-redux';

import { AppStatus } from '../../../enums/AppStatus';
import { searchValueSelect } from '../../../redux/selectors/filter-selectors';
import { pizzasSelect, statusSelect } from '../../../redux/selectors/pizzas-selectors';

import { PizzaBlock } from './PizzaBlock/PizzaBlock';
import { PizzaSkeleton } from './PizzaBlock/PizzaSkeleton';
import styles from './PizzasList.module.scss';

const pizzaSkeletonCount = 8;

export const PizzasList: FC = () => {
  const pizzas = useSelector(pizzasSelect);

  const status = useSelector(statusSelect);

  const searchValue = useSelector(searchValueSelect);

  const filteredPizzas = pizzas.filter(pizza =>
    pizza.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className={styles.items}>
      {status === AppStatus.LOADING
        ? [...new Array(pizzaSkeletonCount)].map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <PizzaSkeleton key={index} />
          ))
        : filteredPizzas.map(({ id, imageUrl, title, types, sizes, price, rating }) => (
            <PizzaBlock
              key={id + title}
              id={id}
              imageUrl={imageUrl}
              title={title}
              types={types}
              sizes={sizes}
              price={price}
              rating={rating}
            />
          ))}
    </div>
  );
};
