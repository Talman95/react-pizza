import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Categories } from '../components/Main/Categories/Categories';
import { PizzasList } from '../components/Main/PizzasList/PizzasList';
import { Sort } from '../components/Main/Sort/Sort';
import { PizzaCategory } from '../enums/PizzaCategory';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { fetchPizzas } from '../redux/middlewares/fetchPizzas';
import { pizzasSelect } from '../redux/selectors/pizzas-selectors';
import { SortType } from '../types/SortType';

export default function MainPage() {
  const pizzas = useSelector(pizzasSelect);

  const dispatch = useAppDispatch();

  const [selectedCategory, setSelectedCategory] = useState<PizzaCategory>(
    PizzaCategory.All,
  );
  const [selectedType, setSelectedType] = useState<SortType>({
    title: 'популярности',
    type: 'raiting',
  });

  async function getPizzas() {
    const sortBy = selectedType.type;
    const category = selectedCategory > 0 ? selectedCategory : undefined;

    dispatch(fetchPizzas({ sortBy, order: 'desc', category }));
  }

  useEffect(() => {
    getPizzas();

    window.scrollTo(0, 0);
  }, [selectedCategory, selectedType]);

  const onCategoryChange = (index: PizzaCategory) => {
    setSelectedCategory(index);
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
        <Sort selectedType={selectedType} setSelectedType={setSelectedType} />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <PizzasList pizzas={pizzas} />
    </div>
  );
}
