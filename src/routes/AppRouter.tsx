import { FC } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { CartPage } from '../pages/CartPage';
import { MainPage } from '../pages/MainPage';
import { NotFound } from '../pages/NotFound';

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/404" element={<NotFound />} />

      <Route path="/*" element={<Navigate to="/404" />} />
    </Routes>
  );
};
