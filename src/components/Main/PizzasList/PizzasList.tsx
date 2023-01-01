import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { fetchPizzas } from '../../../redux/middlewares/fetchPizzas';
import {
  categoryIdSelect,
  searchValueSelect,
  sortTypeSelect,
} from '../../../redux/selectors/filter-selectors';
import { loadingSelect, pizzasSelect } from '../../../redux/selectors/pizzas-selectors';
import { PizzaBlock } from './PizzaBlock/PizzaBlock';
import { PizzaSkeleton } from './PizzaBlock/PizzaSkeleton';
import styles from './PizzasList.module.scss';

export function PizzasList() {
  const dispatch = useAppDispatch();

  const pizzas = useSelector(pizzasSelect);

  const isLoading = useSelector(loadingSelect);

  const selectedType = useSelector(sortTypeSelect);
  const categoryId = useSelector(categoryIdSelect);
  const searchValue = useSelector(searchValueSelect);

  async function getPizzas() {
    const sortBy = selectedType.type;
    const category = categoryId > 0 ? categoryId : undefined;

    dispatch(fetchPizzas({ sortBy, order: 'desc', category }));
  }

  useEffect(() => {
    getPizzas();

    window.scrollTo(0, 0);
  }, [categoryId, selectedType]);

  const filteredPizzas = pizzas.filter(pizza =>
    pizza.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className={styles.items}>
      {isLoading
        ? [...new Array(8)].map((_, index) => <PizzaSkeleton key={index} />)
        : filteredPizzas.map(({ id, imageUrl, title, types, sizes, price }) => (
            <PizzaBlock
              key={id + title}
              imageUrl={imageUrl}
              title={title}
              types={types}
              sizes={sizes}
              price={price}
            />
          ))}
    </div>
  );
}
