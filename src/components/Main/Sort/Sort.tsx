import { FC, memo, useEffect, useRef, useState } from 'react';

import { useSelector } from 'react-redux';

import { SortTypeName } from '../../../enums/SortTypeName';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { sortTypeSelect } from '../../../redux/selectors/filter-selectors';
import { setSortType } from '../../../redux/slices/filter-slice';
import { SortType } from '../../../types/SortType';

import styles from './Sort.module.scss';

export const sortList: SortType[] = [
  { title: 'популярности', type: SortTypeName.RAITING },
  { title: 'цене', type: SortTypeName.PRICE },
  { title: 'алфавиту', type: SortTypeName.TITLE },
];

export const Sort: FC = memo(() => {
  const dispatch = useAppDispatch();

  const selectedType = useSelector(sortTypeSelect);

  const [isVisible, setIsVisible] = useState(false);

  const sortRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onOutsideSortClick = (event: any): void => {
      if (!sortRef.current?.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.body.addEventListener('click', onOutsideSortClick);

    return () => {
      document.body.removeEventListener('click', onOutsideSortClick);
    };
  }, []);

  const onOpenSortClick = (): void => {
    setIsVisible(true);
  };

  const onCloseSortClick = (type: SortType): void => {
    dispatch(setSortType({ type }));
    setIsVisible(false);
  };

  return (
    <div ref={sortRef} className={styles.sort}>
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
        <button type="button" onClick={onOpenSortClick}>
          {selectedType.title}
        </button>
      </div>
      {isVisible && (
        <div className={styles.popup}>
          <ul>
            {sortList.map(({ title, type }) => (
              <li key={type}>
                <button
                  type="button"
                  className={type === selectedType.type ? `${styles.active}` : ''}
                  onClick={() => onCloseSortClick({ title, type } as SortType)}
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});
