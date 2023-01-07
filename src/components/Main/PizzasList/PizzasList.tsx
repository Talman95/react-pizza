import { useSelector } from 'react-redux';

import { searchValueSelect } from '../../../redux/selectors/filter-selectors';
import { loadingSelect, pizzasSelect } from '../../../redux/selectors/pizzas-selectors';
import { PizzaBlock } from './PizzaBlock/PizzaBlock';
import { PizzaSkeleton } from './PizzaBlock/PizzaSkeleton';
import styles from './PizzasList.module.scss';

export function PizzasList() {
  const pizzas = useSelector(pizzasSelect);

  const isLoading = useSelector(loadingSelect);

  const searchValue = useSelector(searchValueSelect);

  const filteredPizzas = pizzas.filter(pizza =>
    pizza.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className={styles.items}>
      {isLoading
        ? [...new Array(8)].map((_, index) => <PizzaSkeleton key={index} />)
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
}
