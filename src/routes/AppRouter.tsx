import { Navigate, Route, Routes } from 'react-router-dom';

import CartPage from '../pages/CartPage';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/404" element={<NotFound />} />

      <Route path="/*" element={<Navigate to="/404" />} />
    </Routes>
  );
}
