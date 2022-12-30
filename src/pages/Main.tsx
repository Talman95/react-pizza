import { useContext, useEffect, useState } from 'react';

import { SearchContext, SearchContextType } from '../App';
import { Categories } from '../components/Categories';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import { PizzaSkeleton } from '../components/PizzaBlock/PizzaSkeleton';
import { Sort } from '../components/Sort';
import { PizzaCategory } from '../enums/PizzaCategory';
import { PizzaType } from '../types/PizzaType';
import { SortType } from '../types/SortType';

export default function Main() {
  const [pizzas, setPizzas] = useState<PizzaType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { searchValue } = useContext(SearchContext) as SearchContextType;

  const [selectedCategory, setSelectedCategory] = useState<PizzaCategory>(
    PizzaCategory.All,
  );
  const [selectedType, setSelectedType] = useState<SortType>({
    title: 'популярности',
    type: 'raiting',
  });

  const filteredPizzas = pizzas.filter(pizza =>
    pizza.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  useEffect(() => {
    const category = selectedCategory > 0 ? '&category=' + selectedCategory : '';

    setIsLoading(true);

    fetch(
      `${process.env.REACT_APP_BASE_URL}?sortBy=${selectedType.type}&order=desc${category}`,
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        setPizzas(res.products);
        setIsLoading(false);
      });
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
      <div className="content__items">
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
    </div>
  );
}
