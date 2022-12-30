import { useContext } from 'react';
import { SearchContext, SearchContextType } from '../../../App';
import { PizzaType } from '../../../types/PizzaType';
import { PizzaBlock } from './PizzaBlock/PizzaBlock';
import { PizzaSkeleton } from './PizzaBlock/PizzaSkeleton';
import styles from './PizzasList.module.scss';

type PropsType = {
  isLoading: boolean;
  pizzas: PizzaType[];
};

export function PizzasList({ isLoading, pizzas }: PropsType) {
  const { searchValue } = useContext(SearchContext) as SearchContextType;

  const filteredPizzas = pizzas.filter(pizza =>
    pizza.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className={styles.items}>
      {isLoading
        ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
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
