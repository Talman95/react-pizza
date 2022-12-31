import { useContext } from 'react';
import { useSelector } from 'react-redux';

import { SearchContext, SearchContextType } from '../../../App';
import { loadingSelect } from '../../../redux/selectors/pizzas-selectors';
import { PizzaType } from '../../../types/PizzaType';
import { PizzaBlock } from './PizzaBlock/PizzaBlock';
import { PizzaSkeleton } from './PizzaBlock/PizzaSkeleton';
import styles from './PizzasList.module.scss';

type PropsType = {
  pizzas: PizzaType[];
};

export function PizzasList({ pizzas }: PropsType) {
  const { searchValue } = useContext(SearchContext) as SearchContextType;

  const isLoading = useSelector(loadingSelect);

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
