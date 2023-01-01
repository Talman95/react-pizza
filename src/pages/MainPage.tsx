import { Categories } from '../components/Main/Categories/Categories';
import { PizzasList } from '../components/Main/PizzasList/PizzasList';
import { Sort } from '../components/Main/Sort/Sort';

export default function MainPage() {
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <PizzasList />
    </div>
  );
}
