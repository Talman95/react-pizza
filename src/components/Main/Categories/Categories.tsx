import { useSelector } from 'react-redux';
import { PizzaCategory } from '../../../enums/PizzaCategory';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { categoryIdSelect } from '../../../redux/selectors/filter-selectors';
import { setCategoryId } from '../../../redux/slices/filter-slice';
import styles from './Categories.module.scss';

export function Categories() {
  const categoryId = useSelector(categoryIdSelect);

  const dispatch = useAppDispatch();

  const onCategoryChange = (id: PizzaCategory) => {
    dispatch(setCategoryId({ id }));
  };

  const categories = [
    { title: 'Все', category: PizzaCategory.All },
    { title: 'Мясные', category: PizzaCategory.Meat },
    { title: 'Вегетарианская', category: PizzaCategory.Vegetarian },
    { title: 'Гриль', category: PizzaCategory.Grilled },
    { title: 'Острые', category: PizzaCategory.Spicy },
    { title: 'Закрытые', category: PizzaCategory.Closed },
  ];

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map(({ title, category }) => (
          <li
            key={title}
            onClick={() => onCategoryChange(category)}
            className={categoryId === category ? `${styles.active}` : ''}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}
