import { FC } from 'react';

import { Header } from './components/Header/Header';
import { AppRouter } from './routes/AppRouter';
import './scss/app.scss';

export const App: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <AppRouter />
      </div>
    </div>
  );
};
