import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';

import { useSelector } from 'react-redux';

import { useActions } from '../../../hooks/useActions';
import { useDebounce } from '../../../hooks/useDebounce';
import { searchValueSelect } from '../../../redux/selectors/filter-selectors';
import { filterActions } from '../../../redux/slices/filter-slice';

import styles from './Search.module.scss';

export const Search: FC = () => {
  const { setSearchValue } = useActions(filterActions);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const firstRender = useRef(true);

  const searchValue = useSelector(searchValueSelect);

  const [currentSearchValue, setCurrentSearchValue] = useState(searchValue);

  const requestSearchValue = useDebounce(currentSearchValue);

  useEffect(() => {
    if (currentSearchValue === searchValue) {
      return;
    }

    setCurrentSearchValue(searchValue);
  }, [searchValue]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;

      return;
    }

    setSearchValue({ value: requestSearchValue });
  }, [requestSearchValue]);

  const onSearchValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCurrentSearchValue(e.currentTarget.value);
  };

  const onRemoveSearchValueClick = (): void => {
    setSearchValue({ value: '' });
    inputRef.current?.focus();
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.searchIcon}
        enableBackground="new 0 0 32 32"
        id="Editable-line"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
      <input
        placeholder="Найти пиццу..."
        className={styles.myInput}
        value={currentSearchValue}
        onChange={onSearchValueChange}
        ref={inputRef}
      />
      {searchValue && (
        <svg
          className={styles.closeIcon}
          onClick={onRemoveSearchValueClick}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};
