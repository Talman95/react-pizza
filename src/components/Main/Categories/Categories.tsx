import { FC, memo } from 'react';

import { useSelector } from 'react-redux';

import { PizzaCategory } from '../../../enums/PizzaCategory';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { categoryIdSelect } from '../../../redux/selectors/filter-selectors';
import { setCategoryId } from '../../../redux/slices/filter-slice';

import styles from './Categories.module.scss';

export const categories = [
  { title: 'Все', category: PizzaCategory.All },
  { title: 'Мясные', category: PizzaCategory.Meat },
  { title: 'Вегетарианская', category: PizzaCategory.Vegetarian },
  { title: 'Гриль', category: PizzaCategory.Grilled },
  { title: 'Острые', category: PizzaCategory.Spicy },
  { title: 'Закрытые', category: PizzaCategory.Closed },
];

export const Categories: FC = memo(() => {
  const categoryId = useSelector(categoryIdSelect);

  const dispatch = useAppDispatch();

  const onCategoryChange = (id: PizzaCategory): void => {
    dispatch(setCategoryId({ id }));
  };

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map(({ title, category }) => (
          <li key={title}>
            <button
              type="button"
              className={categoryId === category ? `${styles.active}` : ''}
              onClick={() => onCategoryChange(category)}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});
