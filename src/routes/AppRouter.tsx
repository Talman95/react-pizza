import { FC, lazy } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Path } from '../enums/Path';
import { withSuspense } from '../hoc/withSuspense';
import { CartPage } from '../pages/CartPage';
import { MainPage } from '../pages/MainPage';

const PizzaInfoPage = lazy(() => import('../pages/PizzaInfoPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

const PizzaInfoPageWithSuspense = withSuspense(PizzaInfoPage);
const NotFoundWithSuspense = withSuspense(NotFound);

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={Path.MAIN} element={<MainPage />} />
      <Route path={Path.CART} element={<CartPage />} />
      <Route path={`${Path.PIZZA_INFO}/:id`} element={<PizzaInfoPageWithSuspense />} />
      <Route path={Path.NOT_FOUND} element={<NotFoundWithSuspense />} />

      <Route path="/*" element={<Navigate to={Path.NOT_FOUND} />} />
    </Routes>
  );
};
