import { FC } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Path } from '../enums/Path';
import { CartPage } from '../pages/CartPage';
import { MainPage } from '../pages/MainPage';
import { NotFound } from '../pages/NotFound';
import { PizzaInfoPage } from '../pages/PizzaInfoPage';

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={Path.MAIN} element={<MainPage />} />
      <Route path={Path.CART} element={<CartPage />} />
      <Route path={`${Path.PIZZA_INFO}/:id`} element={<PizzaInfoPage />} />
      <Route path={Path.NOT_FOUND} element={<NotFound />} />

      <Route path="/*" element={<Navigate to={Path.NOT_FOUND} />} />
    </Routes>
  );
};
