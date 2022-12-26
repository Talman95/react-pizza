import { useState } from 'react';
import { PizzaCategory } from '../enums/PizzaCategory';

export function Categories() {
  const categories = [
    { title: 'Все', category: PizzaCategory.All },
    { title: 'Мясные', category: PizzaCategory.Meat },
    { title: 'Вегетарианская', category: PizzaCategory.Vegetarian },
    { title: 'Гриль', category: PizzaCategory.Grilled },
    { title: 'Острые', category: PizzaCategory.Spicy },
    { title: 'Закрытые', category: PizzaCategory.Closed },
  ];

  const [selectedCategory, setSelectedCategory] = useState<PizzaCategory>(
    PizzaCategory.All,
  );

  const onCategoryClick = (index: PizzaCategory) => {
    setSelectedCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map(({ title, category }) => (
          <li
            key={title}
            onClick={() => onCategoryClick(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}
