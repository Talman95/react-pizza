import { Navigate, Route, Routes } from 'react-router-dom';

import Cart from '../pages/Cart';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/404" element={<NotFound />} />

      <Route path="/*" element={<Navigate to="/404" />} />
    </Routes>
  );
}
