import { PizzaCategory } from '../enums/PizzaCategory';

type PropsType = {
  selectedCategory: PizzaCategory;
  onCategoryChange: (index: PizzaCategory) => void;
};

export function Categories({ selectedCategory, onCategoryChange }: PropsType) {
  const categories = [
    { title: 'Все', category: PizzaCategory.All },
    { title: 'Мясные', category: PizzaCategory.Meat },
    { title: 'Вегетарианская', category: PizzaCategory.Vegetarian },
    { title: 'Гриль', category: PizzaCategory.Grilled },
    { title: 'Острые', category: PizzaCategory.Spicy },
    { title: 'Закрытые', category: PizzaCategory.Closed },
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map(({ title, category }) => (
          <li
            key={title}
            onClick={() => onCategoryChange(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}
