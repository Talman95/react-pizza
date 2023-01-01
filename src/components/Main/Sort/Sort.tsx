import { useState } from 'react';
import { useSelector } from 'react-redux';
import { SortTypeName } from '../../../enums/SortTypeName';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { sortTypeSelect } from '../../../redux/selectors/filter-selectors';
import { setSortType } from '../../../redux/slices/filter-slice';
import { SortType } from '../../../types/SortType';
import styles from './Sort.module.scss';

export function Sort() {
  const selectedType = useSelector(sortTypeSelect);

  const dispatch = useAppDispatch();

  const [isVisible, setIsVisible] = useState(false);

  const sortTypes: SortType[] = [
    { title: 'популярности', type: SortTypeName.RAITING },
    { title: 'цене', type: SortTypeName.PRICE },
    { title: 'алфавиту', type: SortTypeName.TITLE },
  ];

  const onOpenSortClick = () => {
    setIsVisible(true);
  };

  const onCloseSortClick = (type: SortType) => {
    dispatch(setSortType({ type }));
    setIsVisible(false);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.label}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={onOpenSortClick}>{selectedType.title}</span>
      </div>
      {isVisible && (
        <div className={styles.popup}>
          <ul>
            {sortTypes.map(({ title, type }) => (
              <li
                key={type}
                onClick={() => onCloseSortClick({ title, type } as SortType)}
                className={type === selectedType.type ? `${styles.active}` : ''}
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
