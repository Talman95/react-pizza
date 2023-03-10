import { FC, useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { Categories } from '../components/Main/Categories/Categories';
import { PizzasError } from '../components/Main/PizzasError/PizzasError';
import { PizzasList } from '../components/Main/PizzasList/PizzasList';
import { Sort, sortList } from '../components/Main/Sort/Sort';
import { AppStatus } from '../enums/AppStatus';
import { useActions } from '../hooks/useActions';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { fetchPizzas } from '../redux/middlewares/fetchPizzas';
import {
  categoryIdSelect,
  searchValueSelect,
  sortTypeSelect,
} from '../redux/selectors/filter-selectors';
import { statusSelect } from '../redux/selectors/pizzas-selectors';
import { filterActions } from '../redux/slices/filter-slice';

export const MainPage: FC = () => {
  const dispatch = useAppDispatch();

  const { setFilters } = useActions(filterActions);

  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = useSelector(searchValueSelect);
  const categoryId = useSelector(categoryIdSelect);
  const selectedSortType = useSelector(sortTypeSelect);
  const status = useSelector(statusSelect);

  useEffect(() => {
    if (window.location.search) {
      const search = searchParams.get('search') || searchValue;
      const category = Number(searchParams.get('categoryId') || categoryId);
      const type = searchParams.get('sortBy') || selectedSortType;

      let sortBy = sortList.find(element => element.type === type);

      if (!sortBy) {
        sortBy = selectedSortType;
      }

      setFilters({ filters: { search, category, sortBy } });

      isSearch.current = true;
    }
  }, []);

  async function getPizzas(): Promise<void> {
    const sortBy = selectedSortType.type;
    const category = categoryId > 0 ? categoryId : undefined;

    dispatch(fetchPizzas({ sortBy, order: 'desc', category }));
  }

  useEffect(() => {
    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;
  }, [categoryId, selectedSortType]);

  useEffect(() => {
    if (isMounted.current) {
      setSearchParams({
        search: searchValue,
        categoryId: String(categoryId),
        sortBy: selectedSortType.type,
      });
    }

    if (!isMounted.current) {
      isMounted.current = true;
    }
  }, [searchValue, categoryId, selectedSortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>

      <h2 className="content__title">?????? ??????????</h2>
      {status !== AppStatus.ERROR ? <PizzasList /> : <PizzasError />}
    </div>
  );
};
